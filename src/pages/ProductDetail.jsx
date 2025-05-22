import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Product from "../components/common/Product.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(() => "");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((json) => pullData(json));
  }, []);
  function pullData(json) {
    setProduct(
      React.createElement(Product, {
        id: json.id,
        title: json.title,
        description: json.description,
        image: json.image,
        price: json.price,
      })
    );
  }

  // Tady bys normálně fetchnul nebo našel produkt podle ID
  // Např. z lokálního pole nebo API
  return (
    <>
      <h1>detail produktu</h1>
      {product}
    </>
  );
}
