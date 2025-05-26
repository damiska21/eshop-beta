import { Link } from "react-router-dom";
import NavbarRoutes from "../../routes/RoutesSettings";
import { FaFireAlt, FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import SearchBar from "./SearchBar";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigationbar.css";

export default function Navigationbar() {
  const { price } = useCart();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand style={{ color: "bs-heading-color" }}>
          <FaFireAlt className="logo-icon" />
          Beta
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <SearchBar />
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Produkty
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us">
              Kontakt
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaCartArrowDown /> {price} Kč
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavbarRoutes />
    </>
  );
}
