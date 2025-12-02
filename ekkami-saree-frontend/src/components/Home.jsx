import React from "react";
import ProductCard from "../components/ProductCard";
import "../components/ProductCard.css";
import "./Home.css";

// ⭐ Featured Products (previous saree images)
const featuredProducts = [
  { _id: "691b51c1a4692182a0cd60a1", image: "/images/saree1.jpeg", name: "Royal Kashmira", price: 1299 },
  { _id: "691b51c1a4692182a0cd60a2", image: "/images/saree2.jpeg", name: "Mehfil Glow", price: 1399 },
  { _id: "691b51c1a4692182a0cd60a3", image: "/images/saree3.jpeg", name: "Zari Nazakat", price: 1499 },
  { _id: "691b51c1a4692182a0cd60a4", image: "/images/saree4.jpeg", name: "Gulmohar Shine", price: 1199 },
  { _id: "691b51c1a4692182a0cd60a5", image: "/images/saree5.jpeg", name: "Suhanaya Silk", price: 1599 },
  { _id: "691b51c1a4692182a0cd60a6", image: "/images/saree6.jpeg", name: "Aarzu Velvet", price: 1699 },
  { _id: "691b51c1a4692182a0cd60a7", image: "/images/saree7.jpeg", name: "Heer Goldline", price: 1499 },
  { _id: "691b51c1a4692182a0cd60a8", image: "/images/saree8.jpeg", name: "Aangan Classic", price: 1399 },
];

// ⭐ Image Gallery (previous saree gallery)
const galleryImages = [
  "/images/saree9.jpeg",
  "/images/saree10.jpeg",
  "/images/saree11.jpeg",
  "/images/saree12.jpeg",
  "/images/saree13.jpeg",
  "/images/saree14.jpeg",
  
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Banner Section */}
      <div className="home-banner" style={{ backgroundImage: `url(/images/gemini.jpeg)` }}>
        <div className="home-banner-content">
          <h1>EKAMMI</h1>
          <p>Discover elegance. Embrace style. Define yourself.</p>
          
        </div>
      </div>

      {/* Featured Products */}
      <h2 className="home-heading"> Our Products </h2>
      <div className="home-product-grid">
        {featuredProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      {/* Image Gallery */}
      <h2 className="home-heading">SAREE</h2>
      <div className="home-image-gallery">
        {galleryImages.map((src, i) => (
          <img key={i} src={src} alt="gallery" />
        ))}
      </div>
    </div>
  );
}
