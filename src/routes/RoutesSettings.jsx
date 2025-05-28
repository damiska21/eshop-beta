import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

//routy, který jsou posílaný společně s Navbarem, aby fungoval
export default function NavbarRoutes() {
  return (
    <div className="flex-grow-1 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products filterImport={[]} />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
