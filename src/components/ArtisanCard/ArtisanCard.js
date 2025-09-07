import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./ArtisanCard.scss";

const ArtisanCard = ({ artisan, featured = false, disableLink = false }) => {
  const [imgError, setImgError] = useState(false);

  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating, reviewCount) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star star-full" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star star-half" />);
    }
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

  // Contenu principal de la carte
  const cardContent = (
    <>
      <div className="card-image-container">
        {imgError ? (
          <div className="image-fallback">{artisan.name}</div>
        ) : (
          <Card.Img
            variant="top"
            src={artisan.image}
            alt={artisan.name}
            className="card-image"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <Card.Body className="card-body-custom">
        <Card.Title className="artisan-name">{artisan.name}</Card.Title>
        {renderStars(artisan.rating, artisan.reviewCount)}
        <Card.Text className="artisan-specialty">{artisan.specialty}</Card.Text>
        <div className="artisan-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>Localisation : {artisan.location}</span>
        </div>
        {artisan.description && (
          <Card.Text className="artisan-description">
            {artisan.description}
          </Card.Text>
        )}
      </Card.Body>
    </>
  );

  return (
    <Card className={`artisan-card ${featured ? "featured-card" : ""}`}>
      {disableLink ? (
        <div className="card-link">{cardContent}</div>
      ) : (
        <Link to={`/artisan/${artisan.id}`} className="card-link">
          {cardContent}
        </Link>
      )}
    </Card>
  );
};

export default ArtisanCard;
