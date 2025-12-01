import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // send request to backend
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      const { message, success, jwtToken, email: serverEmail, name } = res.data;

      if (success) {
        // store token & user data in localStorage
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("email", serverEmail);
        localStorage.setItem("loggedInUser", name);
        alert(message || "✅ Login successful!");

        // redirect to homepage or dashboard
        navigate("/");


      }
    } catch (err) {
      console.log(err);


      // let alertMsg;
      // if (err.response.status === 403) {
      //   alertMsg = err.response.data.message;
      // }
      // else {
      //   const errorDetailsObj = err.response.data.error.details[0];
      //   alertMsg = Object.values(errorDetailsObj)[0];
      // }

      // alert(alertMsg || "❌ Login failed — try again.");
      alert("❌ Login failed — try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img
          src="saree14.jpeg"
          alt="EKAAMI Fashion"
        />
      </div>

      <div className="signup-right">
        <div className="signup-card">
          <h2>Login to Your Ekammi Account</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="create-btn">
              Login
            </button>
          </form>

          <button className="google-btn">Continue With Google</button>

          <p className="login-text">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>

          <p className="back-home">
            <Link to="/">← Go Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
