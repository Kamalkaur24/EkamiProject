import React from "react";
import ProductCard from "../components/ProductCard";
import "../components/ProductCard.css";
import "../pages/PageStyles.css";
import { products } from "../data/productData";

export default function FormalSaree() {
  return (
    <div className="category-page">
      <div className="banner" style={{ backgroundImage: `url("/images/saree10.jpeg")` }}>
        <div className="banner-content">
          <h1>Formal Saree </h1>
          <p>"Screen Se Real Life Tak"</p>
        </div>
      </div>

      <div className="category-box">
        <h2 className="category-heading">Formal Saree</h2>
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
