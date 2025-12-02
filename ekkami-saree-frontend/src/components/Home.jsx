import React from "react";
import ProductCard from "../components/ProductCard"; // ← fixed
import "../components/ProductCard.css";
import "./Home.css";

// ⭐ Featured Products (names same as previous)
const featuredProducts = [
  { _id: "691b51c1a4692182a0cd60a1", image: "/images/saree1.jpeg", name: "Royal Kashmira", price: 1299 },
  { _id: "691b51c1a4692182a0cd60a2", image: "/images/saree2.jpeg", name: "Mehfil Glow", price: 1399 },
  { _id: "691b51c1a4692182a0cd60a3", image: "/images/saree3.jpeg", name: "Zari Nazakat", price: 1499 },
  { _id: "691b51c1a4692182a0cd60a4", image: "/images/saree4.jpeg", name: "Gulmohar Shine", price: 1199 },
  { _id: "691b51c1a4692182a0cd60a5", image: "/images/saree5.jpeg", name: "Suhanaya Silk", price: 1599 },
  { _id: "691b51c1a4692182a0cd60a6", image: "/images/saree6.jpeg", name: "Aarzu Velvet", price: 1699 },
  { _id: "691b51c1a4692182a0cd60a7", image: "/images/saree7.jpeg", name: "Heer Goldline", price: 1499 },
  { _id: "691b51c1a4692182a0cd60a8", image: "/images/saree8.jpeg", name: "Aangan Classic", price: 1399 },
  { _id: "691b51c1a4692182a0cd60a9", image: "/images/saree9.jpeg", name: "Ruhani Red", price: 1299 },
  { _id: "691b51c1a4692182a0cd60b0", image: "/images/saree10.jpeg", name: "Nazma Royal", price: 1399 },
  { _id: "691b51c1a4692182a0cd60b1", image: "/images/saree11.jpeg", name: "Mehsoos Pink", price: 1499 },
  { _id: "691b51c1a4692182a0cd60b2", image: "/images/saree12.jpeg", name: "Noor Velvet", price: 1199 },
  { _id: "691b51c1a4692182a0cd60b3", image: "/images/saree13.jpeg", name: "Zariya Elite", price: 1599 },
  { _id: "691b51c1a4692182a0cd60b4", image: "/images/saree14.jpeg", name: "Gulaabo Pearl", price: 1699 },
  { _id: "691b51c1a4692182a0cd60b5", image: "/images/saree15.jpeg", name: "Mehak Weave", price: 1499 },
  { _id: "691b51c1a4692182a0cd60b6", image: "/images/saree16.jpeg", name: "Zunaira Stone", price: 1599 },
  { _id: "691b51c1a4692182a0cd60b7", image: "/images/saree17.jpeg", name: "Noorin Silk", price: 1999 },
  { _id: "691b51c1a4692182a0cd60b8", image: "/images/saree18.jpeg", name: "Aabroo Shine", price: 1799 },
  { _id: "691b51c1a4692182a0cd60b9", image: "/images/saree19.jpeg", name: "Suroor Gloss", price: 1899 },
  { _id: "691b51c1a4692182a0cd60c0", image: "/images/saree20.jpeg", name: "Noor-e-Safa", price: 1699 },
];

// ⭐ Gallery Images (unchanged)
const galleryImages = [
  "/images/saree1.jpeg",
  "/images/saree2.jpeg",
  "/images/saree3.jpeg",
  "/images/saree4.jpeg",
  "/images/saree5.jpeg",
  "/images/saree6.jpeg",
  "/images/saree7.jpeg",
  "/images/saree8.jpeg",
  "/images/saree9.jpeg",
  "/images/saree10.jpeg",
  "/images/saree11.jpeg",
  "/images/saree12.jpeg",
  "/images/saree13.jpeg",
  "/images/saree14.jpeg",
  "/images/saree15.jpeg",
  "/images/saree16.jpeg",
  "/images/saree17.jpeg",
  "/images/saree18.jpeg",
  "/images/saree19.jpeg",
  "/images/saree20.jpeg",
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Banner Section */}
      <div className="home-banner" style={{ backgroundImage: `url(/images/gemini2.jpeg)` }}>
        <div className="home-banner-content">
          <h1>EKAMMI</h1>
<p>Discover elegance. Embrace style. Define yourself.</p>

          
        </div>
      </div>

      {/* Featured Products */}
      <h2 className="home-heading">💖 Bestseller Sarees 💖</h2>
      <div className="home-product-grid">
        {featuredProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      {/* Image Gallery */}
      <h2 className="home-heading">OUR PRODUCTS</h2>
      <div className="home-image-gallery">
        {galleryImages.map((src, i) => (
          <img key={i} src={src} alt="gallery" />
        ))}
      </div>
    </div>
  );
}
