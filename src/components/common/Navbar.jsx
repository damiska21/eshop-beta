import { Link } from "react-router-dom";
import NavbarRoutes from "../../routes/RoutesSettings";
import { FaFireAlt, FaCartArrowDown } from "react-icons/fa";
import "./Navbar.css";
import { useCart } from "../../contexts/CartContext";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { price } = useCart();
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-link">
            <FaFireAlt className="logo-icon" />
          </Link>
        </div>

        <SearchBar />

        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Produkty
          </Link>
          <Link to="/contact-us" className="nav-link">
            Kontakt
          </Link>
          <Link to="/cart" className="nav-link">
            <FaCartArrowDown /> {price} Kč
          </Link>
        </div>
      </nav>
      <NavbarRoutes />
    </>
  );
}
