import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Alert,
} from "react-bootstrap";
import ArtisanCard from "../../components/ArtisanCard/ArtisanCard";
import ArtisanService from "../../services/artisanService";
import "./Category.scss";

const categoryMap = {
  batiment: { name: "Bâtiment" },
  services: { name: "Services" },
  fabrication: { name: "Fabrication" },
  alimentation: { name: "Alimentation" },
};

const Category = () => {
  const { categoryName } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Charge les artisans de la catégorie
  const loadArtisans = useCallback(async () => {
    if (!categoryName) return;

    try {
      setLoading(true);
      setError(null);

      const category = categoryMap[categoryName.toLowerCase()];
      if (!category) {
        setError(`Catégorie "${categoryName}" non trouvée`);
        setLoading(false);
        return;
      }

      const response = await ArtisanService.getArtisansByCategory(
        category.name
      );

      if (Array.isArray(response)) {
        setArtisans(response);
        setFilteredArtisans(response);
      } else {
        setError("Erreur: données invalides reçues de l'API");
      }
    } catch (err) {
      console.error("Erreur lors du chargement des artisans:", err);
      setError(`Erreur de connexion: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [categoryName]);

  useEffect(() => {
    loadArtisans();
  }, [loadArtisans]);

  // Recherche en temps réel
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredArtisans(artisans);
      return;
    }

    const filtered = artisans.filter(
      (artisan) =>
        artisan.name?.toLowerCase().includes(term) ||
        artisan.specialty?.toLowerCase().includes(term) ||
        artisan.location?.toLowerCase().includes(term)
    );

    setFilteredArtisans(filtered);
  };

  const currentCategory = categoryMap[categoryName?.toLowerCase()];

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
        <p className="mt-2">Chargement des artisans...</p>
      </Container>
    );
  }

  if (!currentCategory) {
    return (
      <Container className="my-5 text-center">
        <Alert variant="warning">
          <h4>Catégorie non trouvée</h4>
          <p>La catégorie "{categoryName}" n'existe pas.</p>
          <p>
            Catégories disponibles:{" "}
            <strong>{Object.keys(categoryMap).join(", ")}</strong>
          </p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="category-page my-5">
      {/* Titre */}
      <h1 className="text-center mb-4">{currentCategory.name.toUpperCase()}</h1>

      {/* Recherche */}
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder={`Rechercher dans ${currentCategory.name.toLowerCase()}...`}
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <Button variant="outline-secondary" className="search-button">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Erreur */}
      {error && (
        <Alert variant="danger" className="text-center">
          <h5>Erreur de chargement</h5>
          <p>{error}</p>
          <Button variant="outline-danger" onClick={loadArtisans}>
            Réessayer
          </Button>
        </Alert>
      )}

      {/* Liste artisans */}
      {!error && (
        <>
          {filteredArtisans.length > 0 ? (
            <>
              <Row>
                {filteredArtisans.map((artisan) => (
                  <Col lg={4} md={6} sm={12} key={artisan.id} className="mb-4">
                    <ArtisanCard artisan={artisan} />
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-4">
                <p className="artisans-count">
                  {filteredArtisans.length} artisan
                  {filteredArtisans.length > 1 ? "s" : ""}
                  {searchTerm
                    ? ` trouvé${
                        filteredArtisans.length > 1 ? "s" : ""
                      } pour "${searchTerm}"`
                    : ""}{" "}
                  dans la catégorie {currentCategory.name.toLowerCase()}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-5">
              <h3>Aucun artisan trouvé</h3>
              {searchTerm ? (
                <div>
                  <p>Aucun résultat pour "{searchTerm}"</p>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredArtisans(artisans);
                    }}
                  >
                    Effacer la recherche
                  </Button>
                </div>
              ) : (
                <div>
                  <p>
                    Aucun artisan dans la catégorie{" "}
                    {currentCategory.name.toLowerCase()}
                  </p>
                  <p className="text-muted">
                    Cette catégorie sera bientôt enrichie avec de nouveaux
                    artisans.
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Category;
