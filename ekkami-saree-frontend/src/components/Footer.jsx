import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__overlay"></div>

      {/* 🔥 LEFT SIDE IMAGE CARD */}
      <div className="footer-left-card">
        <img src="/images/saree17.jpeg" alt="Ekammi" className="footer-card-img" />
        <div className="footer-card-text">
          <h3>Exclusive Collection</h3>
          <p>Handpicked Sarees • Premium Look</p>
        </div>
      </div>

      {/* ⭐ RIGHT SIDE CONTENT */}
      <div className="footer__content">
        <h3 className="footer__brand">💖 ekammi 💖</h3>

        <p className="footer__tagline">by  Kamaljeet </p>

        <nav className="footer__links" aria-label="Footer links">
          <Link to="/about">About Us</Link>
          <span className="sep">•</span>
          <Link to="/size-chart">Size Chart</Link>
        </nav>
      </div>
    </footer>
  );
}
