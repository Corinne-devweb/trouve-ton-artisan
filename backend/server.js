const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const db = require("./db");

dotenv.config();
const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://front-end-production-903d.up.railway.app",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "10mb" }));

// Fichiers statiques
const uploadsPath = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsPath));

// Route racine
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Artisanat Auvergne-Rhône-Alpes");
});

// Test de connexion DB
app.get("/api/test", (req, res) => {
  db.query("SELECT COUNT(*) as total FROM artisans", (err, results) => {
    if (err) {
      console.error("Erreur DB:", err);
      return res.status(500).json({ error: "Erreur de base de données" });
    }
    res.json({
      message: "Connexion à la base OK",
      total_artisans: results[0].total,
    });
  });
});

// Catégories
app.get("/api/categories", (req, res) => {
  db.query("SELECT * FROM categories ORDER BY name", (err, results) => {
    if (err) {
      console.error("Erreur récupération catégories:", err);
      return res
        .status(500)
        .json({ error: "Erreur de récupération des catégories" });
    }
    res.json(results);
  });
});

// Spécialités
app.get("/api/specialties", (req, res) => {
  const query = `
    SELECT s.*, c.name as category_name 
    FROM specialties s
    JOIN categories c ON s.category_id = c.id
    ORDER BY s.name
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur récupération spécialités:", err);
      return res
        .status(500)
        .json({ error: "Erreur de récupération des spécialités" });
    }
    res.json(results);
  });
});

// Artisans du mois (top 3)
app.get("/api/artisans/top", (req, res) => {
  const query = `
    SELECT a.*, s.name as specialty_name, c.name as category_name 
    FROM artisans a
    JOIN specialties s ON a.specialty_id = s.id
    JOIN categories c ON a.category_id = c.id
    WHERE a.is_top = 'VRAI'
    ORDER BY a.rating DESC
    LIMIT 3
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur récupération artisans top:", err);
      return res
        .status(500)
        .json({ error: "Erreur de récupération des artisans du mois" });
    }
    res.json(results);
  });
});

// Recherche d'artisans
app.get("/api/artisans/search", (req, res) => {
  const { q } = req.query;

  if (!q || q.trim() === "") {
    return res
      .status(400)
      .json({ error: "Paramètre de recherche manquant ou vide" });
  }

  if (q.trim().length > 100) {
    return res.status(400).json({ error: "Terme de recherche trop long" });
  }

  const query = `
    SELECT a.*, s.name as specialty_name, c.name as category_name 
    FROM artisans a
    JOIN specialties s ON a.specialty_id = s.id
    JOIN categories c ON a.category_id = c.id
    WHERE LOWER(a.name) LIKE LOWER(?) OR LOWER(s.name) LIKE LOWER(?)
    ORDER BY a.name
  `;

  const searchTerm = `%${q.trim()}%`;
  db.query(query, [searchTerm, searchTerm], (err, results) => {
    if (err) {
      console.error("Erreur recherche artisans:", err);
      return res.status(500).json({ error: "Erreur lors de la recherche" });
    }
    res.json(results);
  });
});

// Artisans par catégorie
app.get("/api/artisans/category/:categoryName", (req, res) => {
  const { categoryName } = req.params;

  if (!categoryName || categoryName.trim() === "") {
    return res.status(400).json({ error: "Nom de catégorie invalide" });
  }

  const query = `
    SELECT a.*, s.name as specialty_name, c.name as category_name 
    FROM artisans a
    JOIN specialties s ON a.specialty_id = s.id
    JOIN categories c ON a.category_id = c.id
    WHERE LOWER(c.name) = LOWER(?)
    ORDER BY a.name
  `;

  db.query(query, [categoryName.trim()], (err, results) => {
    if (err) {
      console.error("Erreur récupération artisans par catégorie:", err);
      return res
        .status(500)
        .json({ error: "Erreur de récupération des artisans" });
    }
    res.json(results);
  });
});

// Tous les artisans
app.get("/api/artisans", (req, res) => {
  const query = `
    SELECT a.*, s.name as specialty_name, c.name as category_name 
    FROM artisans a
    JOIN specialties s ON a.specialty_id = s.id
    JOIN categories c ON a.category_id = c.id
    ORDER BY a.name
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erreur récupération artisans:", err);
      return res
        .status(500)
        .json({ error: "Erreur de récupération des artisans" });
    }
    res.json(results);
  });
});

// Artisan par ID
app.get("/api/artisans/:id", (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "ID artisan invalide" });
  }

  const query = `
    SELECT a.*, s.name as specialty_name, c.name as category_name 
    FROM artisans a
    JOIN specialties s ON a.specialty_id = s.id
    JOIN categories c ON a.category_id = c.id
    WHERE a.id = ?
  `;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Erreur récupération artisan:", err);
      return res
        .status(500)
        .json({ error: "Erreur de récupération de l'artisan" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Artisan non trouvé" });
    }
    res.json(results[0]);
  });
});

// Formulaire de contact
app.post("/api/contact", (req, res) => {
  const { artisanId, name, email, subject, message } = req.body;

  // Validation
  if (!artisanId || !name || !email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Format d'email invalide" });
  }

  if (name.trim().length < 2 || name.trim().length > 100) {
    return res
      .status(400)
      .json({ error: "Le nom doit contenir entre 2 et 100 caractères" });
  }

  if (subject.trim().length < 5 || subject.trim().length > 200) {
    return res
      .status(400)
      .json({ error: "L'objet doit contenir entre 5 et 200 caractères" });
  }

  if (message.trim().length < 10 || message.trim().length > 1000) {
    return res
      .status(400)
      .json({ error: "Le message doit contenir entre 10 et 1000 caractères" });
  }

  if (isNaN(artisanId)) {
    return res.status(400).json({ error: "ID artisan invalide" });
  }

  console.log("Email de contact reçu:", {
    artisanId,
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    timestamp: new Date().toISOString(),
  });

  res.json({
    success: true,
    message:
      "Votre message a été envoyé avec succès. Une réponse vous sera apportée sous 48h.",
  });
});

// Route 404 API
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Route API non trouvée" });
});

// Gestion des erreurs
app.use((error, req, res, next) => {
  console.error("Erreur serveur:", error);
  res.status(500).json({ error: "Erreur interne du serveur" });
});

// Démarrage du serveur
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`🚀 Serveur API démarré sur http://localhost:${port}`);
  console.log(
    `📊 Test de connexion disponible sur http://localhost:${port}/api/test`
  );
});

module.exports = app;
