import { useCart } from "../contexts/CartContext";
import React, { useState, useEffect } from "react";
import Product from "../components/common/Product";

export default function Cart() {
  const { cart } = useCart();
  const [products, setProducts] = useState(() => ""); //produkty v košíku
  useEffect(() => {
    //pullneme všechny itemy a pak zobrazíme ty, které má uživatel v košíku
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => displayCartData(cart, json));
  }, []);
  function displayCartData(ids, json) {
    let exporting = [];
    let batchId = Math.random(); //aby si react nestěžoval
    for (let i = 0; i < ids.length; i++) {
      let productId = ids[i] - 1; //v tom jsonu začínají idčka na 1
      exporting.push(
        React.createElement(Product, {
          key: i + batchId,
          id: json[productId].id,
          title: json[productId].title,
          description: json[productId].description,
          image: json[productId].image,
          price: json[productId].price,
        })
      );
    }
    setProducts(exporting);
  }
  return (
    <>
      <h1>Košík</h1>
      <div>{products}</div>
      {cart.length === 0 ? <p>Košík prázdný</p> : <p></p>}
      <h2>Todo</h2>
      <p>clear košíku</p>
      <p>checkout?</p>
    </>
  );
}
