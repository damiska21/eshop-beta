import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Při načtení zkusíme obnovit košík a cenu z localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [price, setPrice] = useState(() => {
    const storedPrice = localStorage.getItem("price");
    return storedPrice ? JSON.parse(storedPrice) : 0;
  });

  // Pomocná funkce pro výpočet celkové ceny podle aktuálního košíku
  const calculatePrice = async (cartArray) => {
    if (cartArray.length === 0) return 0;
    // Načteme produkty z API
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // Mapujeme produkty na id -> cena
    const priceMap = new Map(products.map((p) => [p.id, p.price]));

    // Spočítáme celkovou cenu podle všech položek v cart
    let total = 0;
    cartArray.forEach((id) => {
      const p = priceMap.get(id);
      if (p) total += p;
    });
    return Math.round(total * 100) / 100; // zaokrouhlení
  };

  // Ukládáme cart a price do localStorage pokaždé, když se změní
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("price", JSON.stringify(price));
  }, [cart, price]);

  // Přidat produkt (id) do košíku
  const addToCart = async (productId) => {
    const newCart = [...cart, productId];
    setCart(newCart);
    const newPrice = await calculatePrice(newCart);
    setPrice(newPrice);
    console.log("Produkt id:" + productId + " byl přidán do košíku");
  };

  // Odebrat všechny výskyty produktu (id) z košíku
  const removeFromCart = async (productId) => {
    const newCart = cart.filter((id) => id !== productId);
    setCart(newCart);
    const newPrice = await calculatePrice(newCart);
    setPrice(newPrice);
  };

  // Změnit množství daného produktu (id) v košíku na zadanou hodnotu
  const updateQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    // Vytvoříme nový cart podle původního, ale změníme počet výskytů productId
    let count = 0;
    const newCart = [];

    // Projdeme původní cart
    for (const id of cart) {
      if (id === productId) {
        count++;
        if (count <= quantity) {
          newCart.push(id); // zachováváme pořadí a až do požadované množství
        }
        // Pokud už máme dost, další výskyty přeskočíme (tzn. ubíráme)
      } else {
        newCart.push(id); // ostatní položky necháme jak jsou
      }
    }

    // Pokud chceme více než je aktuálně v cart, doplníme je na konci
    while (count < quantity) {
      newCart.push(productId);
      count++;
    }

    setCart(newCart);
    const newPrice = await calculatePrice(newCart);
    setPrice(newPrice);
  };

  // Vymazat celý košík
  const clearCart = () => {
    setCart([]);
    setPrice(0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    price,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart musí být použit uvnitř <CartProvider>");
  return context;
}
