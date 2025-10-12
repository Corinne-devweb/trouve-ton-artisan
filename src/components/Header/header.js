import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setExpanded(false);
    }
  };

  const navigationItems = [
    { name: "Bâtiment", path: "/category/batiment" },
    { name: "Services", path: "/category/services" },
    { name: "Fabrication", path: "/category/fabrication" },
    { name: "Alimentation", path: "/category/alimentation" },
  ];

  return (
    <header className="site-header">
      <Navbar expand="lg" bg="light" expanded={expanded}>
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <img
              src="/logo.png"
              alt="Région Auvergne-Rhône-Alpes"
              className="logo-image"
            />
          </Navbar.Brand>

          {/* Menu burger */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "✖" : "☰"}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation */}
            <Nav className="me-auto">
              {navigationItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={item.path}
                  className="nav-link-custom"
                  onClick={() => setExpanded(false)}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>

            {/* Recherche */}
            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Rechercher"
                aria-label="Rechercher un artisan"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <Button type="submit" className="search-button">
                <FaSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
