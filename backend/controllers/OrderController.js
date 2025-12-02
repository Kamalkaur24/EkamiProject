// controllers/OrderController.js

const OrderModel = require("../models/OrderModel");
const CartModel = require("../models/CartModel");
const { products } = require("../data/productData");

// Product map for quick lookup
const productMap = new Map(products.map(p => [p._id, p]));

/**
 * POST /orders
 * Body: { items?, paymentMethod, shipping }
 * - If items not provided, uses current cart of the user
 * - Recomputes total on backend using productData
 */
const createOrder = async (req, res) => {
    try {
        const userId = req.user._id;

        let { items, paymentMethod = "COD", shipping } = req.body;

        // Basic shipping validation
        if (
            !shipping ||
            !shipping.fullName ||
            !shipping.phone ||
            !shipping.addressLine ||
            !shipping.city ||
            !shipping.pincode
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing required shipping fields",
            });
        }



        // If items not sent from frontend, fallback to cart
        if (!Array.isArray(items) || items.length === 0) {
            const cart = await CartModel.findOne({ user: userId }).lean();

            if (!cart || !cart.items || cart.items.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Cart is empty",
                });
            }

            items = cart.items.map(it => ({
                productId: it.productId,
                quantity: it.quantity,
            }));
        }

        // Build order items + compute total
        const orderItems = [];
        let computedTotal = 0;

        for (const it of items) {
            const prod = productMap.get(it.productId);
            if (!prod) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid productId in order items: ${it.productId}`,
                });
            }

            const quantity = Number(it.quantity) || 0;
            if (quantity <= 0) continue;

            const price = Number(it.price ?? prod.price) || 0;
            const subtotal = price * quantity;

            orderItems.push({
                productId: it.productId,
                name: prod.name,
                price,
                quantity,
                subtotal,
            });

            computedTotal += subtotal;
        }

        if (orderItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No valid items to order",
            });
        }

        const order = new OrderModel({
            user: userId,
            items: orderItems,
            totalAmount: computedTotal,
            paymentMethod,
            paymentStatus: paymentMethod === "COD" ? "pending" : "pending",
            orderStatus: "pending",
            shipping,
        });

        await order.save();

        // Clear cart after successful order
        await CartModel.updateOne(
            { user: userId },
            { $set: { items: [], totalQuantity: 0, totalPrice: 0 } }
        );

        return res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        console.log("Create order error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

/**
 * GET /orders/my
 * Return logged-in user's orders
 */
const getMyOrders = async (req, res) => {
    try {
        const userId = req.user._id;

        const orders = await OrderModel.find({ user: userId })
            .sort({ createdAt: -1 })
            .lean();

        return res.json({
            success: true,
            orders,
        });
    } catch (error) {
        console.log("Get my orders error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

/**
 * GET /orders/:id
 * Get single order (must belong to this user)
 */
const getOrderById = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderId = req.params.id;

        const order = await OrderModel.findOne({ _id: orderId, user: userId }).lean();

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        return res.json({
            success: true,
            order,
        });
    } catch (error) {
        console.log("Get order by id error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getOrderById,
};
