import React, { useState, useEffect } from "react";
import Product from "../components/common/Product.jsx";
import Loader from "../components/common/Loader.jsx";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => pullData(json));
  }, []);

  function pullData(json) {
    const batchId = Math.random();
    const exporting = json.map((item, i) =>
      <Product
        key={item.id + batchId}
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
      />
    );
    setProducts(exporting);
  }

  if (!products) return <Loader />;
  return (
    <>
      <h1>Produkty</h1>
      <div className="products">{products}</div>
    </>
  );
}
