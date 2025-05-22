import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    fetch("https://fakestoreapi.com/products/" + product)
      .then((response) => response.json())
      .then((json) =>
        setPrice(
          (prevPrice) => Math.round((prevPrice + json.price) * 100) / 100 //zaokrouhlení protože js neumí inteligentně sčítat čísla
        )
      );
    console.log("produkt id:" + product + " byl přidán do košíku");
  };

  const value = { cart, addToCart, price };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart musí být použit uvnitř <CartProvider>");
  return context;
}
