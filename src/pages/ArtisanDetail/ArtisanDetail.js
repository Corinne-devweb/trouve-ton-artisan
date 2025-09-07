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
} from "react-bootstrap";
import "./ArtisanDetail.scss";

const ArtisanDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  // SEO simple
  useEffect(() => {
    document.title = `Profil artisan - Auvergne-Rhône-Alpes`;
  }, []);

  // Fonction pour afficher les étoiles (commentée pour l'instant)
  // const renderStars = (rating, reviewCount) => { ... }

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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

    // Simulation d'envoi
    console.log("Formulaire envoyé pour artisan ID:", id);
    console.log("Données:", formData);

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
  };

  return (
    <div className="artisan-detail-page">
      <Container>
        {/* Titre de la page */}
        <Row className="page-header">
          <Col className="text-center">
            <h1 className="page-title">PROFIL DE L'ARTISAN</h1>
          </Col>
        </Row>

        {/* Profil de l'artisan */}
        <Row className="mb-5">
          <Col>
            <Card className="artisan-profile-card">
              <Card.Body className="profile-body">
                <Row>
                  <Col className="text-center">
                    <h3>Profil de l'artisan ID: {id}</h3>
                    <p>Les données de l'artisan seront chargées depuis l'API</p>
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
                <h3 className="contact-title">Contactez-moi</h3>

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
                    >
                      VALIDER
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
