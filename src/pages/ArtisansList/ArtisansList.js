import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./ArtisansList.scss";

const ArtisansList = ({ category }) => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Gestion de la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="artisans-list-page">
      <Container>
        {/* En-tête avec titre et recherche */}
        <Row className="page-header">
          <Col className="text-center">
            <h1 className="page-title">TROUVE TON ARTISAN DANS LA RÉGION</h1>

            {/* Barre de recherche centrale */}
            <Form className="search-form-center" onSubmit={handleSearch}>
              <div className="search-container">
                <FormControl
                  type="search"
                  placeholder="Rechercher"
                  className="search-input-center"
                  aria-label="Rechercher un artisan"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="search-button-center"
                  aria-label="Lancer la recherche"
                >
                  <FaSearch />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        {/* Affichage placeholder */}
        <Row>
          <Col className="text-center">
            <div className="api-placeholder">
              <h3>Liste des artisans</h3>
              <p>
                Les artisans seront chargés depuis l'API selon la catégorie :{" "}
                <strong>{category || "toutes"}</strong>
              </p>
              {query && (
                <p>
                  Recherche pour : <strong>"{query}"</strong>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtisansList;
