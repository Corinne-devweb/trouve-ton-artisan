import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Import des composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Import des pages
import Home from "./pages/Home/Home";
import ArtisansList from "./pages/ArtisansList/ArtisansList";
import ArtisanDetail from "./pages/ArtisanDetail/ArtisanDetail";
import LegalPage from "./pages/LegalPages/LegalPage";
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

            {/* Pages légales */}
            <Route
              path="/mentions-legales"
              element={<LegalPage type="mentions" />}
            />
            <Route
              path="/donnees-personnelles"
              element={<LegalPage type="privacy" />}
            />
            <Route
              path="/accessibilite"
              element={<LegalPage type="accessibility" />}
            />
            <Route path="/cookies" element={<LegalPage type="cookies" />} />

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
