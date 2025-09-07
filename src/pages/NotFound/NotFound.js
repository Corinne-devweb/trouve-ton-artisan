import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page non trouvée - Auvergne-Rhône-Alpes";
  }, []);

  return (
    <div className="not-found-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <div className="not-found-content">
              {/* Image 404 */}
              <div className="not-found-image">
                <img
                  src="/images/404-illustration.png"
                  alt="Page non trouvée"
                  className="error-image"
                  onError={(e) => {
                    // Image de fallback si l'image 404 n'est pas disponible
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Texte d'erreur */}
              <h1 className="error-title">404</h1>
              <h2 className="error-subtitle">Page non trouvée</h2>
              <p className="error-description">
                La page que vous avez demandée n'existe pas ou a été déplacée.
                Nous vous invitons à retourner sur la page d'accueil pour
                trouver l'artisan qui vous correspond.
              </p>

              {/* Boutons d'action */}
              <div className="error-actions">
                <Button
                  as={Link}
                  to="/"
                  variant="primary"
                  size="lg"
                  className="home-button"
                >
                  Retour à l'accueil
                </Button>

                <Button
                  as={Link}
                  to="/batiment"
                  variant="outline-primary"
                  size="lg"
                  className="browse-button"
                >
                  Parcourir les artisans
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
