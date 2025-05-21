import { Link } from "react-router-dom";
import NavbarRoutes from "../../routes/RoutesSettings";
import { FaFireAlt } from "react-icons/fa"; // ikonka jako logo
import "./Navbar.css"; // vlastní CSS

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <FaFireAlt className="logo-icon" />
        </div>
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
        </div>
      </nav>
      <NavbarRoutes />
    </>
  );
}
