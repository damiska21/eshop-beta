import React, { useState, useEffect } from "react";
import Product from "../components/common/Product.jsx";
import Loader from "../components/common/Loader.jsx";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => pullData(json));
  }, []);

  function pullData(json) {
    const batchId = Math.random();
    const mapped = json.map((item, i) => (
      <Product
        key={item.id + batchId}
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
      />
    ));
    let exporting = [];

    //pokud je item ve filteru nebo pokud je filter prázdný zobrazit produkt
    mapped.forEach((element) => {
      if (filter.includes(element.props.id) || filter.length === 0) {
        exporting.push(element);
      }
    });
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
