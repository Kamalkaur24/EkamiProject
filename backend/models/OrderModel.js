// models/OrderModel.js
const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema(
    {
        productId: {
            type: String, // same as CartItemSchema
            required: true,
        },
        name: {
            type: String, // product name snapshot
            required: true,
        },
        price: {
            type: Number, // price per unit
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        subtotal: {
            type: Number, // price * quantity
            required: true,
        },
        size: {
            type: String,
            default: "M",
        }
    },
    { _id: false }
);

const ShippingSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        addressLine: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        note: { type: String },
    },
    { _id: false }
);

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        items: {
            type: [OrderItemSchema],
            required: true,
        },

        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },

        paymentMethod: {
            type: String,
            enum: ["COD", "ONLINE"],
            default: "COD",
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed", "refunded"],
            default: "pending",
        },

        orderStatus: {
            type: String,
            enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
            default: "pending",
        },

        shipping: {
            type: ShippingSchema,
            required: true,
        },
    },
    { timestamps: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
