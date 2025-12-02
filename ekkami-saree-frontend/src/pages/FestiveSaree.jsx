import React from "react";
import ProductCard from "../components/ProductCard";
import "../components/ProductCard.css";
import "../pages/PageStyles.css";
import { products } from "../data/productData";

export default function FestiveSaree() {
  return (
    <div className="category-page">
      <div className="banner" style={{ backgroundImage: `url("/images/saree12.jpeg")` }}>
        <div className="banner-content">
          <h1>Festive Saree</h1>
          <p>“Festive magic woven into every thread — elegance crafted for celebration.”</p>

        </div>
      </div>

      <div className="category-box">
        <h2 className="category-heading">Festive Saree</h2>
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
