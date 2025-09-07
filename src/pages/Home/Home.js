import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArtisanCard from "../../components/ArtisanCard/ArtisanCard";
import "./Home.scss";

// Import des images depuis src/assets/images
import boulangerieImg from "../../assets/images/boulangerie.jpg";
import plombierImg from "../../assets/images/plombier.jpg";
import toiletteurImg from "../../assets/images/toiletteur.jpg";
import artisanImg from "../../assets/images/artisan.jpg";
import artisansImg from "../../assets/images/artisans.jpg";
import formulaireImg from "../../assets/images/formulaire.jpg";
import img48h from "../../assets/images/48h.jpg";

const Home = () => {
  const featuredArtisans = [
    {
      id: 1,
      name: "Au pain chaud",
      specialty: "Boulanger",
      rating: 4.8,
      reviewCount: 45,
      location: "Montélimar",
      image: boulangerieImg,
    },
    {
      id: 2,
      name: "Vallis Bellemare",
      specialty: "Plomberie",
      rating: 4.9,
      reviewCount: 70,
      location: "Vienne",
      image: plombierImg,
    },
    {
      id: 3,
      name: "Valérie Laredoute",
      specialty: "Toiletteur",
      rating: 4.5,
      reviewCount: 32,
      location: "Valence",
      image: toiletteurImg,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "ÉTAPE 1",
      description: "Choisir la catégorie d'artisanat dans le menu",
      icon: artisanImg,
    },
    {
      number: 2,
      title: "ÉTAPE 2",
      description: "Choisir un artisan",
      icon: artisansImg,
    },
    {
      number: 3,
      title: "ÉTAPE 3",
      description: "Le contacter via le formulaire de contact",
      icon: formulaireImg,
    },
    {
      number: 4,
      title: "ÉTAPE 4",
      description: "Une réponse sera apportée sous 48h",
      icon: img48h,
    },
  ];

  return (
    <div className="home-page">
      {/* Section Hero */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">DÉCOUVREZ LES ARTISANS DE LA RÉGION</h1>
          </div>
        </Container>
      </section>

      {/* Section Comment trouver */}
      <section className="how-it-works">
        <Container>
          <h2 className="section-title">Comment trouver mon artisan</h2>

          <Row className="steps-row">
            {steps.map((step) => (
              <Col
                lg={3}
                md={6}
                sm={6}
                xs={12}
                key={step.number}
                className="mb-4"
              >
                <Card className="step-card">
                  <Card.Body className="text-center">
                    <div className="step-header">
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <div className="step-icon">
                      <img src={step.icon} alt={step.title} />
                    </div>
                    <p className="step-description">{step.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section Artisans du mois */}
      <section className="featured-artisans">
        <Container>
          <h2 className="section-title">Les trois artisans du mois</h2>

          <Row className="artisans-row">
            {featuredArtisans.map((artisan) => (
              <Col lg={4} md={6} sm={12} key={artisan.id} className="mb-4">
                <ArtisanCard artisan={artisan} featured={true} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
