import React, { useState, useEffect } from "react";
import Product from "../components/common/Product.jsx";

export default function Products() {
  const [products, setProducts] = useState(() => ""); //v tomhle jsou saved produkty
  useEffect(() => {
    //tohle se spustí při otevření stránky
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => pullData(json));
  }, []);

  function pullData(json) {
    let exporting = [];
    let batchId = Math.random(); //aby si react nestěžoval
    for (let i = 0; i < json.length; i++) {
      exporting.push(
        React.createElement(Product, {
          key: i + batchId,
          id: json[i].id,
          title: json[i].title,
          description: json[i].description,
          image: json[i].image,
          price: json[i].price,
        })
      );
    }
    setProducts(exporting);
  }
  if (!products) return <p>Načítání seznamu...</p>;
  return (
    <>
      <div className="products">{products}</div>
    </>
  );
}
