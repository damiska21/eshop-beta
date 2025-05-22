import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "../components/common/Loader.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ maxWidth: "300px" }} />
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{product.price} Kč</p>
    </div>
  );
}
