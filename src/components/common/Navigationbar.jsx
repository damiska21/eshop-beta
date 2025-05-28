import { Link, useLocation } from "react-router-dom";
import NavbarRoutes from "../../routes/RoutesSettings";
import { FaFireAlt, FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import SearchBar from "./SearchBar";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "./Navigationbar.css";
import { useRef, useState, useEffect } from "react";
import { useLocalization } from "../../contexts/LocalizationContext";

export default function Navigationbar() {
  const { price } = useCart();
  const { strings, language, setLanguage } = useLocalization();
  const location = useLocation();

  const navRef = useRef();

  const close = () => {
    navRef.current?.click();
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1065 && window.innerWidth >= 992);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: strings.nav.home },
    { to: "/products", label: strings.nav.products },
    { to: "/contact-us", label: strings.nav.contact },
  ];

  const activeLink = navLinks.find(link => link.to === location.pathname) || navLinks[0];
  const otherLinks = navLinks.filter(link => link.to !== activeLink.to);

  return (
    <>
      <Navbar className="custom-navbar" expand="lg" fixed="top">
        <Container fluid className="navbar-inner">
          <div className="navbar-header">
            <Navbar.Brand as={Link} to="/" className="brand-link">
              <FaFireAlt className="logo-icon" />
              Beta
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
              ref={navRef}
              aria-controls="basic-navbar-nav"
              className="bg-primary"
            />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-right">
              <SearchBar />

              {/* Jazykový přepínač */}
              <div className="lang-switcher">
                <Dropdown>
                  <Dropdown.Toggle className="lang-toggle" variant="outline-light">
                    {language.toUpperCase()}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setLanguage("cz");
                        close();
                      }}
                      active={language === "cz"}
                    >
                      Čeština
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setLanguage("en");
                        close();
                      }}
                      active={language === "en"}
                    >
                      English
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setLanguage("fr");
                        close();
                      }}
                      active={language === "fr"}
                    >
                      Français
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* Navigační odkazy (plná verze) */}
              {!isSmallScreen &&
                navLinks.map(({ to, label }) => (
                  <Nav.Link
                    key={to}
                    as={Link}
                    to={to}
                    className="custom-nav-link"
                    onClick={close}
                  >
                    {label}
                  </Nav.Link>
                ))}

              {/* Dropdown "Více" pro úzké obrazovky */}
              {isSmallScreen && (
                <Dropdown className="more-switcher">
                  <Dropdown.Toggle className="more-toggle" variant="outline-light">
                    {activeLink.label}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to={activeLink.to}
                      className="dropdown-active-item"
                      onClick={close}
                      active
                    >
                      {activeLink.label}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    {otherLinks.map(({ to, label }) => (
                      <Dropdown.Item key={to} as={Link} to={to} onClick={close}>
                        {label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}

              {/* Košík */}
              <Nav.Link
                as={Link}
                to="/cart"
                className="custom-nav-link"
                onClick={close}
                style={{ flexShrink: 0 }}
              >
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
