import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // <-- Import Link
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        {/* Section principale : Logo + Adresse + Réseaux sociaux */}
        <Row className="footer-content align-items-center">
          <Col xs={12}>
            <div className="footer-main">
              <div className="top-section">
                <div className="footer-brand">
                  <img
                    src="/logo.png"
                    alt="Trouvez-moi un artisan !"
                    className="footer-logo"
                  />
                </div>

                <div className="contact-info">
                  <p className="contact-text">
                    LYON, 101 cours Charlemagne, CS 20033, 69242 LYON CEDEX 03,
                    FRANCE
                    <br />
                    +33 (0)4 26 73 40 00
                  </p>
                </div>

                <div className="social-links">
                  <a
                    href="https://facebook.com"
                    className="social-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="social-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="social-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Liens légaux sur toute la largeur */}
        <Row className="footer-bottom">
          <Col>
            <div className="legal-links">
              <Link to="/mentions-legales" className="legal-link">
                Mentions légales
              </Link>
              <Link to="/donnees-personnelles" className="legal-link">
                Données personnelles
              </Link>
              <Link to="/accessibilite" className="legal-link">
                Accessibilité
              </Link>
              <Link to="/presse" className="legal-link">
                Presse
              </Link>
              <Link to="/marches-publics" className="legal-link">
                Marchés publics
              </Link>
              <Link to="/venir-a-la-region" className="legal-link">
                Venir à la région
              </Link>
              <Link to="/contacts" className="legal-link">
                Contacts
              </Link>
              <Link to="/cookies" className="legal-link">
                Cookies
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
