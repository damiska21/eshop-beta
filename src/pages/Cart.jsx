import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import "./Cart.css";
import { useLocalization } from "../contexts/LocalizationContext";
import PageWrapper from "../components/common/ui-effects/PageWrapper";

export default function Cart() {
  const { strings } = useLocalization();
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
    return (
      <PageWrapper>
        <p className="prazdny">{strings.cart.empty}</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="cart-container">
        <h1>{strings.cart.title}</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>{strings.cart.image}</th>
              <th>{strings.cart.name}</th>
              <th>{strings.cart.price}</th>
              <th>{strings.cart.amount}</th>
              <th>{strings.cart.total}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td className="cell-image" data-label={strings.cart.image}>
                  <img src={product.image} alt={product.title} />
                </td>
                <td className="cell-name" data-label={strings.cart.name}>
                  {product.title}
                </td>
                <td className="cell-price" data-label={strings.cart.price}>
                  {product.price.toFixed(2)} Kč
                </td>
                <td className="cell-quantity" data-label={strings.cart.amount}>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(product.id, parseInt(e.target.value) || 1)
                    }
                  />
                </td>
                <td className="cell-total" data-label={strings.cart.total}>
                  {(product.price * product.quantity).toFixed(2)}&nbsp;Kč
                </td>
                <td className="cell-remove">
                  <button onClick={() => removeFromCart(product.id)}>
                    <span className="remove-icon">×</span>
                    <span className="remove-text"> × Smazat</span>
                  </button>
                </td>
              </tr>
            ))}
            <tr className="cart-total-row">
              <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
                {strings.cart.total}
              </td>
              <td style={{ fontWeight: "bold" }}>{price.toFixed(2)}&nbsp;Kč</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="todo-section">
          <button onClick={clearCart}>
            {strings.cart.delete}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
