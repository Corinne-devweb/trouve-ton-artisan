import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./ArtisansListCard.scss";

const ArtisanListCard = ({ artisan }) => {
  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating, reviewCount) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star star-full" />);
    }

    // Étoile à moitié
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star star-half" />);
    }

    // Étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star star-empty" />);
    }

    return (
      <div className="rating-container">
        <div className="stars">{stars}</div>
        <span className="rating-text">
          {rating} ({reviewCount} avis)
        </span>
      </div>
    );
  };

  return (
    <Card className="artisan-list-card">
      <Card.Body className="card-body-custom">
        <Row className="align-items-center">
          {/* Image de l'artisan */}
          <Col xs={4} className="image-col">
            <div className="artisan-image-container">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="artisan-image"
                onError={(e) => {
                  e.target.src = "/images/placeholder-artisan.jpg";
                }}
              />
            </div>
          </Col>

          {/* Informations de l'artisan */}
          <Col xs={8} className="info-col">
            <div className="artisan-info">
              <h3 className="artisan-name">{artisan.name}</h3>

              <div className="artisan-specialty">{artisan.specialty}</div>

              {/* Rating avec étoiles */}
              {renderStars(artisan.rating, artisan.reviewCount)}

              <div className="artisan-location">{artisan.location}</div>

              {/* Bouton Voir profil */}
              <Button
                as={Link}
                to={`/artisan/${artisan.id}`}
                variant="dark"
                className="profile-button"
              >
                Voir profil
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ArtisanListCard;
