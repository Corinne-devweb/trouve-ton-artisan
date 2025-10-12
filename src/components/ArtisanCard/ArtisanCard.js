import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ArtisanService from "../../services/artisanService";
import "./ArtisanCard.scss";

const ArtisanCard = ({ artisan, featured = false, disableLink = false }) => {
  const [imgError, setImgError] = useState(false);

  // Génère une image avatar si l'image de l'artisan n'existe pas
  const generateAvatarImage = () => {
    const name = encodeURIComponent(artisan.name);
    const backgroundColor = getColorFromSpecialty(artisan.specialty);
    return `https://ui-avatars.com/api/?name=${name}&size=150&background=${backgroundColor}&color=fff&font-size=0.6`;
  };

  // Couleur basée sur la spécialité
  const getColorFromSpecialty = (specialty) => {
    const colors = {
      Boucher: "dc3545",
      Boulanger: "fd7e14",
      Chocolatier: "8b4513",
      Bijoutier: "ffc107",
      Chauffagiste: "dc3545",
      Menuisier: "8b4513",
      Electricien: "ffc107",
      Plombier: "0dcaf0",
      Coiffeur: "e83e8c",
      Maçon: "6c757d",
      Peintre: "20c997",
    };
    return colors[specialty] || "6c757d";
  };

  // Affiche les étoiles de notation
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

  const cardContent = (
    <>
      <div className="card-image-container">
        {imgError ? (
          <div className="image-fallback">
            <img
              src={generateAvatarImage()}
              alt={artisan.name}
              className="fallback-avatar"
            />
          </div>
        ) : (
          <Card.Img
            variant="top"
            src={ArtisanService.getArtisanImage(artisan)}
            alt={`${artisan.specialty} - ${artisan.name}`}
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
          <span>{artisan.location}</span>
        </div>
      </Card.Body>
    </>
  );

  return (
    <Card className={`artisan-card ${featured ? "featured-card" : ""}`}>
      {disableLink ? (
        <div className="card-content">{cardContent}</div>
      ) : (
        <Link to={`/artisan/${artisan.id}`} className="card-link">
          {cardContent}
        </Link>
      )}
    </Card>
  );
};

export default ArtisanCard;
