import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Composants
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import ArtisansList from "./pages/ArtisansList/ArtisansList";
import ArtisanDetail from "./pages/ArtisanDetail/ArtisanDetail";
import Category from "./pages/Category/Category";
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

            {/* Catégories - Route dynamique */}
            <Route path="/category/:categoryName" element={<Category />} />

            {/* Recherche */}
            <Route path="/search" element={<ArtisansList />} />
            <Route path="/search/:query" element={<ArtisansList />} />

            {/* Détail artisan */}
            <Route path="/artisan/:id" element={<ArtisanDetail />} />

            {/* Pages légales */}
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
