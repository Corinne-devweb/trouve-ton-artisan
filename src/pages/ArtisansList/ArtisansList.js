import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import ArtisanCard from "../../components/ArtisanCard/ArtisanCard";
import ArtisanService from "../../services/artisanService";
import "./ArtisansList.scss";

const ArtisansList = ({ category }) => {
  const { query: rawQuery } = useParams();
  const query = rawQuery ? decodeURIComponent(rawQuery) : "";
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryMap = {
    batiment: { id: 1, name: "Bâtiment" },
    services: { id: 2, name: "Services" },
    fabrication: { id: 3, name: "Fabrication" },
    alimentation: { id: 4, name: "Alimentation" },
  };

  useEffect(() => {
    loadArtisans();
  }, [category, query]);

  // Charge les artisans selon catégorie ou recherche
  const loadArtisans = async () => {
    try {
      setLoading(true);
      setError(null);
      let data = [];

      if (query) {
        data = await ArtisanService.searchArtisans(query);
      } else if (category) {
        const categoryInfo = categoryMap[category];
        if (categoryInfo) {
          data = await ArtisanService.getArtisansByCategory(categoryInfo.id);
        } else {
          throw new Error("Catégorie non trouvée");
        }
      } else {
        data = await ArtisanService.getAllArtisans();
      }

      setArtisans(data || []);
    } catch (err) {
      console.error("Erreur lors du chargement des artisans:", err);
      setError("Impossible de charger les artisans. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const getPageTitle = () => {
    if (query) {
      return `RÉSULTATS POUR "${query.toUpperCase()}"`;
    }
    if (category) {
      const categoryInfo = categoryMap[category];
      return `ARTISANS ${
        categoryInfo ? categoryInfo.name.toUpperCase() : category.toUpperCase()
      }`;
    }
    return "TROUVE TON ARTISAN DANS LA RÉGION";
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
        <p className="mt-3">Chargement des artisans...</p>
      </Container>
    );
  }

  return (
    <div className="artisans-list-page">
      <Container>
        {/* En-tête avec recherche */}
        <Row className="page-header">
          <Col className="text-center">
            <h1 className="page-title">{getPageTitle()}</h1>
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

        {/* Message d'erreur */}
        {error && (
          <Row className="mb-4">
            <Col>
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            </Col>
          </Row>
        )}

        {/* Liste des artisans */}
        <Row className="artisans-grid">
          {artisans.length > 0 ? (
            artisans.map((artisan) => (
              <Col key={artisan.id} xs={12} md={6} lg={4} className="mb-4">
                <ArtisanCard artisan={artisan} />
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <div className="no-results">
                <h3>Aucun artisan trouvé</h3>
                <p>
                  {query
                    ? `Aucun résultat pour "${query}"`
                    : category
                    ? `Aucun artisan dans la catégorie ${
                        categoryMap[category]?.name || category
                      }`
                    : "Aucun artisan disponible"}
                </p>
                <p>
                  Essayez avec d'autres mots-clés ou explorez d'autres
                  catégories.
                </p>
              </div>
            </Col>
          )}
        </Row>

        {/* Nombre de résultats */}
        {artisans.length > 0 && (
          <Row className="results-info">
            <Col className="text-center">
              <p className="text-muted">
                {artisans.length} artisan{artisans.length > 1 ? "s" : ""} trouvé
                {artisans.length > 1 ? "s" : ""}
                {category &&
                  ` dans la catégorie ${
                    categoryMap[category]?.name || category
                  }`}
                {query && ` pour "${query}"`}
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ArtisansList;
