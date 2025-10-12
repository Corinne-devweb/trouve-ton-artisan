import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import ArtisanService from "../../services/artisanService";
import "./ArtisanDetail.scss";

const ArtisanDetail = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [submitting, setSubmitting] = useState(false);

  // Récupère les données de l'artisan

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        setLoading(true);
        const artisanData = await ArtisanService.getArtisanById(id);
        setArtisan(artisanData);
        setError(null);
        document.title = `${artisanData.name} - ${artisanData.specialty} - Auvergne-Rhône-Alpes`;
      } catch (err) {
        console.error("Erreur lors de la récupération de l'artisan:", err);
        setError("Artisan non trouvé ou erreur de chargement");
        document.title = "Artisan non trouvé - Auvergne-Rhône-Alpes";
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtisan();
    }
  }, [id]);

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
          {rating}/5 ({reviewCount} avis)
        </span>
      </div>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envoi du formulaire de contact
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nom ||
      !formData.email ||
      !formData.objet ||
      !formData.message
    ) {
      setAlertType("danger");
      setAlertMessage("Veuillez remplir tous les champs.");
      setShowAlert(true);
      return;
    }

    try {
      setSubmitting(true);

      const contactData = {
        artisanId: id,
        name: formData.nom,
        email: formData.email,
        subject: formData.objet,
        message: formData.message,
      };

      await ArtisanService.sendContactMessage(contactData);

      setAlertType("success");
      setAlertMessage(
        "Votre message a été envoyé avec succès ! L'artisan vous recontactera sous 48h."
      );
      setShowAlert(true);

      setFormData({
        nom: "",
        email: "",
        objet: "",
        message: "",
      });

      setTimeout(() => setShowAlert(false), 5000);
    } catch (err) {
      console.error("Erreur envoi message:", err);
      setAlertType("danger");
      setAlertMessage(err.message || "Erreur lors de l'envoi du message.");
      setShowAlert(true);
    } finally {
      setSubmitting(false);
    }
  };

  // État de chargement
  if (loading) {
    return (
      <div className="artisan-detail-page">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <Spinner animation="border" role="status" />
              <p className="mt-3">
                Chargement des informations de l'artisan...
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  // État d'erreur
  if (error) {
    return (
      <div className="artisan-detail-page">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <Alert variant="danger">
                <h4>Artisan non trouvé</h4>
                <p>{error}</p>
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="artisan-detail-page">
      <Container>
        {/* En-tête */}
        <Row className="page-header">
          <Col className="text-center">
            <h1 className="page-title">PROFIL DE L'ARTISAN</h1>
          </Col>
        </Row>
        {/* Carte de profil */}
        <Row className="mb-5">
          <Col>
            <Card className="artisan-profile-card">
              <Card.Body className="profile-body">
                <Row>
                  <Col md={4} className="text-center">
                    <div className="artisan-image-container">
                      <img
                        src={ArtisanService.getArtisanImage(artisan)}
                        alt={artisan.name}
                        className="artisan-image"
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <div className="artisan-info">
                      <h2 className="artisan-name">{artisan.name}</h2>
                      <p className="artisan-specialty">{artisan.specialty}</p>

                      {renderStars(artisan.rating, artisan.reviewCount)}

                      <div className="artisan-details">
                        <div className="detail-item">
                          <FaMapMarkerAlt className="detail-icon" />
                          <span>{artisan.location}</span>
                        </div>

                        {artisan.email && (
                          <div className="detail-item">
                            <FaEnvelope className="detail-icon" />
                            <span>{artisan.email}</span>
                          </div>
                        )}

                        {artisan.website && (
                          <div className="detail-item">
                            <FaGlobe className="detail-icon" />
                            <a
                              href={artisan.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {artisan.website}
                            </a>
                          </div>
                        )}
                      </div>

                      {artisan.about && (
                        <div className="artisan-about">
                          <h4>À propos</h4>
                          <p>{artisan.about}</p>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Formulaire de contact */}
        <Row>
          <Col>
            <Card className="contact-form-card">
              <Card.Body>
                <h3 className="contact-title">Contactez {artisan.name}</h3>

                {showAlert && (
                  <Alert
                    variant={alertType}
                    onClose={() => setShowAlert(false)}
                    dismissible
                  >
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Objet</Form.Label>
                    <Form.Control
                      type="text"
                      name="objet"
                      value={formData.objet}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-end">
                    <Button
                      type="submit"
                      variant="dark"
                      className="submit-button"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        "VALIDER"
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtisanDetail;
