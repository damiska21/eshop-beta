import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import "bootstrap/dist/css/bootstrap.css";
import ScrollToTop from "./utils/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
