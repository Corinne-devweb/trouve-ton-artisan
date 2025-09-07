import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import ArtisansList from "./pages/ArtisansList/ArtisansList";
import ArtisanDetail from "./pages/ArtisanDetail/ArtisanDetail";
import DonneesPersonnelles from "./pages/DonneesPersonnelles/DonneesPersonnelles";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import Contacts from "./pages/Contacts/Contacts";
import Cookies from "./pages/Cookies/Cookies";
import Presse from "./pages/Presse/Presse";
import Accessibilite from "./pages/Accessibilite/Accessibilite";
import MarchesPublics from "./pages/MarchesPublics/MarchesPublics";
import VeniralaRegion from "./pages/VeniralaRegion/VeniralaRegion";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Pages des catégories d'artisans */}
            <Route
              path="/batiment"
              element={<ArtisansList category="batiment" />}
            />
            <Route
              path="/services"
              element={<ArtisansList category="services" />}
            />
            <Route
              path="/fabrication"
              element={<ArtisansList category="fabrication" />}
            />
            <Route
              path="/alimentation"
              element={<ArtisansList category="alimentation" />}
            />

            {/* Résultats de recherche */}
            <Route path="/search/:query" element={<ArtisansList />} />

            {/* Détail d'un artisan */}
            <Route path="/artisan/:id" element={<ArtisanDetail />} />

            {/* Pages légales et informatives */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="/donnees-personnelles"
              element={<DonneesPersonnelles />}
            />
            <Route path="/accessibilite" element={<Accessibilite />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/presse" element={<Presse />} />
            <Route path="/venir-a-la-region" element={<VeniralaRegion />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/marches-publics" element={<MarchesPublics />} />

            {/* Page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
