import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

//routy, který jsou posílaný společně s Navbarem, aby fungoval
export default function NavbarRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
