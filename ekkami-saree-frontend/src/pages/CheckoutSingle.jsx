// src/pages/CheckoutSingle.jsx
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";
import { products } from "../data/productData";

export default function CheckoutSingle() {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("loggedInUser");

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [placing, setPlacing] = useState(false);

    const [form, setForm] = useState({
        fullName: userName,
        phone: "",
        addressLine: "",
        city: "",
        pincode: "",
        note: "",
    });

    // ✅ Build "cartItems" from location.state.item
    useEffect(() => {
        const item = location.state?.item;

        if (!item) {
            setCartItems([]);
            setLoading(false);
            return;
        }

        const product =
            products.find((p) => p._id === item.productId) || {
                _id: item.productId,
                name: item.title,
                price: item.price,
                image: item.image,
            };

        const mapped = {
            productId: item.productId,
            quantity: item.quantity,
            size: item.size,
            product,
        };

        setCartItems([mapped]);
        setLoading(false);
    }, [location.state]);

    const total = useMemo(
        () =>
            cartItems.reduce((sum, it) => {
                const price = Number(it.product?.price ?? 0);
                const qty = Number(it.quantity ?? 0);
                return sum + price * qty;
            }, 0),
        [cartItems]
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        if (!token) {
            alert("Please login first!");
            return;
        }

        if (
            !form.fullName ||
            !form.phone ||
            !form.addressLine ||
            !form.city ||
            !form.pincode
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (cartItems.length === 0) {
            alert("No product to checkout.");
            return;
        }

        const orderPayload = {
            items: cartItems.map((it) => ({
                productId: it.productId,
                quantity: it.quantity,
                price: it.product.price,
                size: it.size,
            })),
            total,
            paymentMethod: "COD",
            shipping: form,
            // optional flag if you want to differentiate in backend:
            from: "buy-now",
        };

        try {
            setPlacing(true);

            const res = await axios.post(
                "http://localhost:8080/orders",
                orderPayload,
                {
                    headers: { Authorization: token },
                }
            );

            console.log("Single checkout order payload (COD):", orderPayload);

            alert("Order placed successfully with Cash on Delivery!");
            navigate("/myorders");
        } catch (err) {
            console.error("Failed to place order:", err);
            alert(
                err?.response?.data?.message ||
                "Could not place order. Please try again."
            );
        } finally {
            setPlacing(false);
        }
    };

    if (loading) {
        return (
            <div className="checkout-container">
                <h2>Checkout</h2>
                <p>Preparing your order...</p>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container">
                <h2>Checkout</h2>
                <p>No product found for Buy Now. Please try again.</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            <div className="checkout-layout">
                {/* LEFT: Address / details */}
                <form className="checkout-form" onSubmit={handlePlaceOrder}>
                    <h3>Shipping Details</h3>

                    <label>
                        Full Name*
                        <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Phone*
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Address Line*
                        <textarea
                            name="addressLine"
                            value={form.addressLine}
                            onChange={handleChange}
                            rows={3}
                            required
                        />
                    </label>

                    <div className="checkout-row">
                        <label>
                            City*
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Pincode*
                            <input
                                type="text"
                                name="pincode"
                                value={form.pincode}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <label>
                        Order Note (optional)
                        <textarea
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            rows={2}
                        />
                    </label>

                    <h3>Payment Method</h3>
                    <div className="payment-box">
                        <input type="radio" id="cod" checked readOnly />
                        <label htmlFor="cod">Cash on Delivery (COD)</label>
                    </div>

                    <button
                        type="submit"
                        className="place-order-btn"
                        disabled={placing}
                    >
                        {placing
                            ? "Placing Order..."
                            : `Place Order (Pay ₹${total} on delivery)`}
                    </button>
                </form>

                {/* RIGHT: Order summary */}
                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    <ul className="summary-list">
                        {cartItems.map((item) => (
                            <li key={item.product._id} className="summary-item">
                                <div>
                                    <strong>{item.product.name}</strong>
                                    <div className="summary-meta">
                                        Qty: {item.quantity} × ₹{item.product.price}
                                        {item.size ? ` | Size: ${item.size}` : ""}
                                    </div>
                                </div>
                                <span>₹ {item.product.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="summary-total">
                        <span>Total</span>
                        <strong>₹ {total}</strong>
                    </div>

                    <p className="cod-note">
                        You will pay <strong>₹ {total}</strong> in cash to the delivery
                        person.
                    </p>
                </div>
            </div>
        </div>
    );
}
