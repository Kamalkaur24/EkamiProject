import ProductCard from "../components/ProductCard";
import "../components/ProductCard.css";
import "../pages/PageStyles.css";
import { products } from "../data/productData";



export default function Saree() {
  return (
    <div className="category-page">
      <div className="banner" style={{ backgroundImage: `url("/images/saree13.jpeg")` }}>
        <div className="banner-content">
          <h1>Festive Saree</h1>
          <p>“Nazakat, Shauq & Sheher di Shaan”</p>
        </div>
      </div>

      <div className="category-box">
        <h2 className="category-heading">Saree</h2>
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
