import { Link } from "react-router-dom";
import NavbarRoutes from "../../routes/RoutesSettings";
import { FaFireAlt, FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import SearchBar from "./SearchBar";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigationbar.css";
import strings from "../../utils/localization";
import { useState } from "react";

import { useLocalization } from "../../contexts/LocalizationContext";

export default function Navigationbar() {
  const { price } = useCart();
  const { strings, language, setLanguage } = useLocalization();

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
              {/* 🌐 Jazykový přepínač */}
              <div className="lang-switcher">
                <button
                  onClick={() => setLanguage("cz")}
                  className={language === "cz" ? "active-lang" : ""}
                >
                  CZ
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "active-lang" : ""}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("fr")}
                  className={language === "fr" ? "active-lang" : ""}
                >
                  FR
                </button>
              </div>
              <Nav.Link as={Link} to="/" className="custom-nav-link">
                {strings.nav.home}
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="custom-nav-link">
                {strings.nav.products}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="custom-nav-link">
                {strings.nav.contact}
              </Nav.Link>
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
