import React, { useState, useMemo } from "react";
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
import ArtisansListCard from "../../components/ArtisansListCard/ArtisansListCard";
import ArtisanService from "../../services/artisanService";
import "./ArtisansList.scss";

const ArtisansList = ({ category }) => {
  const { query: rawQuery } = useParams();
  const query = rawQuery ? decodeURIComponent(rawQuery) : "";
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Données mockées
  const mockArtisans = useMemo(
    () => [
      {
        id: 1,
        name: "Boucherie Dumont",
        specialty: "Boucherie",
        category: "alimentation",
        location: "Lyon",
        rating: 4.5,
        reviewCount: 340,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 2,
        name: "Au pain chaud",
        specialty: "Boulangerie",
        category: "alimentation",
        location: "Montpellier",
        rating: 4.5,
        reviewCount: 125,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 3,
        name: "Claude Dunn",
        specialty: "Bijouterie",
        category: "fabrication",
        location: "Aix-les-bains",
        rating: 4.2,
        reviewCount: 85,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 4,
        name: "Orville Salmon",
        specialty: "Chauffagiste",
        category: "services",
        location: "Evian",
        rating: 5.0,
        reviewCount: 78,
        image: null,
        hasCustomImage: false,
      },
      // Ajoute les autres artisans ici...
    ],
    []
  );

  // Filtrage des artisans
  const filteredArtisans = useMemo(() => {
    let filtered = [...mockArtisans];

    if (query) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter(
        (artisan) =>
          artisan.name.toLowerCase().includes(searchTerm) ||
          artisan.specialty.toLowerCase().includes(searchTerm) ||
          artisan.location.toLowerCase().includes(searchTerm)
      );
    } else if (category) {
      filtered = filtered.filter((artisan) => artisan.category === category);
    }

    return filtered;
  }, [category, query, mockArtisans]);

  // Gestion de la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Titre dynamique
  const getPageTitle = () => {
    if (query) {
      return `RÉSULTATS POUR "${query.toUpperCase()}"`;
    }
    if (category) {
      const categoryNames = {
        batiment: "BÂTIMENT",
        services: "SERVICES",
        fabrication: "FABRICATION",
        alimentation: "ALIMENTATION",
      };
      return `ARTISANS ${categoryNames[category] || category.toUpperCase()}`;
    }
    return "TROUVE TON ARTISAN DANS LA RÉGION";
  };

  return (
    <div className="artisans-list-page">
      <Container>
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

        <Row className="artisans-grid">
          {filteredArtisans.length > 0 ? (
            filteredArtisans.map((artisan) => (
              <Col key={artisan.id} xs={12} md={6} lg={4} className="mb-4">
                <ArtisansListCard
                  artisan={{
                    ...artisan,
                    image: ArtisanService.getArtisanImage(artisan),
                  }}
                />
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <div className="no-results">
                <h3>Aucun artisan trouvé</h3>
                <p>
                  {query
                    ? `Aucun résultat pour "${query}"`
                    : `Aucun artisan dans la catégorie ${
                        category || "sélectionnée"
                      }`}
                </p>
                <p>
                  Essayez avec d'autres mots-clés ou explorez d'autres
                  catégories.
                </p>
              </div>
            </Col>
          )}
        </Row>

        {filteredArtisans.length > 0 && (
          <Row className="results-info">
            <Col className="text-center">
              <p className="text-muted">
                {filteredArtisans.length} artisan
                {filteredArtisans.length > 1 ? "s" : ""} trouvé
                {category && ` dans la catégorie ${category}`}
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
