import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page small-about">

      {/* Banner Section */}
      <div className="about-banner">
        <img src={"/images/saree10.jpeg"} alt="Ekammi Saree Story" className="banner-image" />
        <div className="banner-text">
          <h1>Our Story</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content small-content">
        <h2>EKAMMI SAREE</h2>

        <p>
          <strong>Ekammi Saree</strong> was created with a simple dream —  
          to bring modern elegance and traditional beauty together in one place.  
          We craft sarees that are stylish, graceful, and perfect for every woman.
        </p>

        <p>
          Our mission is to make premium sarees affordable and accessible.  
          From festive collections to daily-wear classics, every Ekammi Saree  
          reflects comfort, confidence, and craftsmanship.  
        </p>

        <h2>Our Vision</h2>
        <p>
          In the coming years, <strong>Ekammi Saree</strong> aims to become  
          one of India’s most loved saree brands — known for quality, creativity,  
          and elegance.  
        </p>

        <h2>What We Stand For</h2>
        <ul>
          <li>❤️ Trendy, comfortable, premium-quality sarees.</li>
          <li>❤️ Traditional designs with a modern twist.</li>
          <li>❤️ Collections for every occasion — casual, office, festive, wedding.</li>
          <li>❤️ Seamless shopping with our upcoming mobile app.</li>
          <li>❤️ Expanding globally to share Indian fashion with the world.</li>
        </ul>

        <p>
          From chiffon drapes to rich traditional silks,  
          our sarees are designed to make every woman feel beautiful.
        </p>

        <p className="closing">
          This is just the beginning. With your love,  
          <strong> Ekammi Saree </strong> will grow stronger —  
          weaving stories of elegance and confidence. 
        </p>
      </div>
    </div>
  );
}
