import { useEffect, useState } from "react";
import "./MyOrders.css";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    alert("Please login to place an order.");
                    navigate("/login");
                    return;
                }

                const res = await api.get("/orders/get_orders");

                console.log(res.data.orders);
                if (res.data.success === true) {

                    setOrders(res.data.orders);
                } else {
                    alert(res.data.message || "Failed to fetch orders");
                }
            } catch (err) {
                console.log("Order fetch error:", err);
                alert("Server error while fetching orders");
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="myorders-page">
            <h2>My Orders</h2>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index} className="order-card">
                        <h3>Order #{index + 1}</h3>

                        <p><strong>Date:</strong> {new Date(order.updatedAt).toLocaleString()}</p>
                        <p><strong>Payment:</strong> {order.paymentMethod}</p>
                        <p><strong>Total:</strong>{` ₹${order.totalAmount}`}</p>

                        <h4>Items:</h4>
                        {order.items.map((item, i) => (
                            <li key={i}>{item.name} - {`₹${item.price}`} x {`${item.quantity} [Size: ${item.size}]`}</li>
                        ))}

                        <h4>Address:</h4>
                        <p>{order.shipping.fullName}, {order.shipping.addressLine}</p>
                        <p>{order.shipping.city} - {order.shipping.pincode}</p>
                        <p>Phone: {order.shipping.phone}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyOrders;
