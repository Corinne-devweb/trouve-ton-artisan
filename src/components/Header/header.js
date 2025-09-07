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
  const [expanded, setExpanded] = useState(false); // contrôle du menu burger
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setExpanded(false); // ferme le menu après recherche
    }
  };

  const navigationItems = [
    { name: "Bâtiment", path: "/batiment" },
    { name: "Services", path: "/services" },
    { name: "Fabrication", path: "/fabrication" },
    { name: "Alimentation", path: "/alimentation" },
  ];

  return (
    <header className="site-header">
      <Navbar expand="lg" bg="light" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <img
              src="/logo.png"
              alt="Région Auvergne-Rhône-Alpes"
              className="logo-image"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "✖" : "☰"} {/* Affiche croix ou hamburger */}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigationItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={item.path}
                  className="nav-link-custom"
                  onClick={() => setExpanded(false)} // ferme le menu au clic
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>

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
