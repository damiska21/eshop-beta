import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import { RatingProvider } from "./contexts/RatingContext.jsx";
import { LocalizationProvider } from "./contexts/LocalizationContext";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import "../scss/custom.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocalizationProvider>
      <CartProvider>
        <RatingProvider>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </RatingProvider>
      </CartProvider>
    </LocalizationProvider>
  </StrictMode>
);
