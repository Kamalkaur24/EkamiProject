// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; // ← React icons
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser"); // check login state

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="images/sareehouse.jpg" alt="EKAMMI Logo" className="logo-img" />
        </Link>
      </div>

      {/* Center Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Saree">Saree</Link></li>
        <li><Link to="/FormalSaree">FormalSaree</Link></li>
        <li><Link to="/FestiveSaree">FestiveSaree</Link></li>
      </ul>

      {/* Right Side Icons */}
      <div className="navbar-icons">
        <button className="btn logout-btn" onClick={() => navigate("/myorders")}>
          My Orders
        </button>
        <Link to="/wishlist" className="icon">
          <FaHeart color="#ff4d6d" size={22} /> {/* red heart */}
        </Link>
        <Link to="/cart" className="icon">
          <FaShoppingCart color="#ffd700" size={22} /> {/* gold cart */}
        </Link>

        {/* Conditional rendering */}
        {loggedInUser ? (
          <div className="user-info">
            <span className="username">
              Hi, <b>{loggedInUser}</b>
            </span>
            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn login-btn">Login</Link>
            <Link to="/signup" className="btn signup-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
