import { Link } from "react-router-dom";
import NavbarRoutes from "../../routes/RoutesSettings";
import { FaFireAlt, FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import SearchBar from "./SearchBar";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigationbar.css";

export default function Navigationbar() {
  const { price } = useCart();

  return (
    <>
      <Navbar className="custom-navbar" expand="lg" fixed="top">
        <Container fluid className="navbar-inner">
          <div className="navbar-header">
            <Navbar.Brand as={Link} to="/" className="brand-link">
              <FaFireAlt className="logo-icon" />
              Beta
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-right">
              <SearchBar />
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/products" className="custom-nav-link">Produkty</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="custom-nav-link">Kontakt</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="custom-nav-link">
                <FaCartArrowDown /> {price} Kč
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <NavbarRoutes />
    </>
  );
}
