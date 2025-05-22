import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "../components/common/Loader.jsx";
import "./ProductDetail.css"; // Import CSS

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    console.log("Přidáno do košíku:", product);
  };

  if (!product) return <Loader />;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <p>{product.description}</p>

      <div className="price-cart-row">
        <p className="product-price">{product.price} Kč</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Přidat do košíku
        </button>
      </div>
    </div>
  );
}
