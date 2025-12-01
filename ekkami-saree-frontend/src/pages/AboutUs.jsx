import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <img src={"/images/pehrin9.jpg"} alt="Ekammi Saree Story" className="banner-image" />
        <div className="banner-text">
          <h1>Our Story</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <h2>EKAMMI SAREE</h2>

        <p>
          <strong>Ekammi Saree</strong> was created with a simple dream —  
          to bring modern elegance and traditional beauty together in one place.  
          We craft sarees that are stylish, graceful, and designed for every  
          woman who loves to express her personality through fashion.
        </p>

        <p>
          Our mission is to make premium sarees affordable and accessible.  
          From festive collections to daily-wear classics, every Ekammi Saree  
          reflects comfort, confidence, and craftsmanship.  
        </p>

        <h2>Our Vision</h2>
        <p>
          In the coming years, <strong>Ekammi Saree</strong> aims to become  
          one of India’s most loved saree brands — known for quality,  
          creativity, and elegance.  
        </p>

        <h2>What We Stand For</h2>
        <ul>
          <li>❤️ Offering trendy, comfortable, and premium-quality sarees.</li>
          <li>❤️ Bringing traditional designs with a modern twist.</li>
          <li>❤️ Creating a collection for every moment — casual, office, festive & wedding.</li>
          <li>❤️ Launching our exclusive mobile app for a seamless shopping experience.</li>
          <li>❤️ Expanding globally to share Indian fashion with the world.</li>
        </ul>

        <p>
          From elegant chiffon drapes to rich traditional silks,  
          our sarees are designed to make every woman feel beautiful in her own way.
        </p>

        <p className="closing">
          This is just the beginning. With your love and support,  
          <strong> Ekammi Saree </strong> will continue to grow,  
          weaving stories of tradition, confidence, and timeless beauty. 💜
        </p>
      </div>
    </div>
  );
}
