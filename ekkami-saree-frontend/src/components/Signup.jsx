import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/auth/signup", formData);
      alert(res.data.msg || "✅ Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.error?.details) {
        const errorDetailsObj = err.response.data.error.details[0];
        const alertMsg = Object.values(errorDetailsObj)[0];
        alert(alertMsg || "❌ Signup failed — try again.");
      } else {
        alert("❌ Signup failed — try again.");
      }
    }
  };

  return (
    <div className="signup-container">

      {/* Center Signup Form */}
      <div className="signup-right">
        <div className="signup-card">
          <h2>Create Your Ekammi Account</h2>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="create-btn">Sign Up</button>
          </form>

          <button className="google-btn">Continue With Google</button>

          <p className="login-text">
            Already have an account? <Link to="/login">Log In</Link>
          </p>

          <p className="back-home">
            <Link to="/">← Go Back to Home</Link>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Signup;
