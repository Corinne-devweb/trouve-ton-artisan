const mysql = require("mysql2");
require("dotenv").config();

// Configuration du pool de connexions
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "artisanat",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  idleTimeout: 300000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Test de connexion au démarrage
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Erreur de connexion à la base de données:", err.message);
    return;
  }
  console.log(
    "✅ Connecté à la base de données avec l'ID",
    connection.threadId
  );
  connection.release();
});

// Gestion des erreurs
pool.on("connection", function (connection) {
  console.log("🔗 Nouvelle connexion établie avec l'ID " + connection.threadId);
});

pool.on("error", function (err) {
  console.error("❌ Erreur de pool MySQL:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("🔄 Reconnexion automatique...");
  } else {
    throw err;
  }
});

module.exports = pool;
