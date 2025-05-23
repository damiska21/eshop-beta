import { useCart } from "../contexts/CartContext";
import React, { useState, useEffect } from "react";
import "./Cart.css";

export default function Cart() {
  const { cart, price, updateQuantity, removeFromCart, clearCart } = useCart();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const productMap = new Map();
        cart.forEach((id) => {
          const product = json.find((p) => p.id === id);
          if (product) {
            if (productMap.has(id)) {
              productMap.get(id).quantity += 1;
            } else {
              productMap.set(id, { ...product, quantity: 1 });
            }
          }
        });
        setCartProducts(Array.from(productMap.values()));
      });
  }, [cart]);

  if (cart.length === 0) {
    return <p className="prazdny">Košík je prázdný 😢</p>;
  }

  return (
    <div className="cart-container">
      <h1>Košík</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Obrázek</th>
            <th>Název</th>
            <th>Cena</th>
            <th>Množství</th>
            <th>Celkem</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.title} /></td>
              <td>{product.title}</td>
              <td>{product.price.toFixed(2)} Kč</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value) || 1)
                  }
                  style={{ width: "50px" }}
                />
              </td>
              <td>{(product.price * product.quantity).toFixed(2)} Kč</td>
              <td>
                <button onClick={() => removeFromCart(product.id)}>❌</button>
              </td>
            </tr>
          ))}
          <tr className="cart-total-row">
            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
              Celkem
            </td>
            <td style={{ fontWeight: "bold" }}>{price.toFixed(2)} Kč</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="todo-section">
        <button onClick={clearCart} style={{ padding: "8px 12px", cursor: "pointer" }}>
          🧹 Vymazat celý košík
        </button>
        <p>💳 Checkout?</p>
      </div>
    </div>
  );
}
