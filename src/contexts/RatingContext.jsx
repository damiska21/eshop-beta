import React, { createContext, useState, useEffect } from "react";

export const RatingContext = createContext();

export function RatingProvider({ children }) {
  const [ratings, setRatings] = useState(() => {
    // Načteme uložená hodnocení z localStorage
    const saved = localStorage.getItem("ratings");
    return saved ? JSON.parse(saved) : {};
  });

  // Uložíme do localStorage při změně
  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  // Funkce pro update hodnocení produktu
  const updateRating = (productId, newRating) => {
    setRatings((prev) => {
      const old = prev[productId] || { rate: 0, count: 0 };
      const totalRating = old.rate * old.count + newRating;
      const newCount = old.count + 1;
      const newRate = totalRating / newCount;

      return {
        ...prev,
        [productId]: { rate: newRate, count: newCount }
      };
    });
  };

  return (
    <RatingContext.Provider value={{ ratings, updateRating }}>
      {children}
    </RatingContext.Provider>
  );
}
