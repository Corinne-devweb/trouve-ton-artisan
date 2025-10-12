const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/api";

class ArtisanService {
  // Récupère tous les artisans
  static async getAllArtisans() {
    try {
      const response = await fetch(`${API_BASE_URL}/artisans`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return this.formatArtisansData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des artisans:", error);
      throw error;
    }
  }

  // Récupère les artisans "top" pour la page d'accueil
  static async getTopArtisans() {
    try {
      const response = await fetch(`${API_BASE_URL}/artisans/top`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return this.formatArtisansData(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des artisans du mois:",
        error
      );
      throw error;
    }
  }

  // Récupère les artisans par catégorie
  static async getArtisansByCategory(categoryId) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/artisans/category/${categoryId}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.formatArtisansData(data);
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  }

  // Recherche d'artisans
  static async searchArtisans(query) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/artisans/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return this.formatArtisansData(data);
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      throw error;
    }
  }

  // Récupère un artisan par ID
  static async getArtisanById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/artisans/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return this.formatSingleArtisanData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'artisan:", error);
      throw error;
    }
  }

  // Récupère les catégories
  static async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const categories = await response.json();
      return categories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.name
          .toLowerCase()
          .replace(/[éèê]/g, "e")
          .replace(/[àâ]/g, "a")
          .replace(/[ùû]/g, "u")
          .replace(/[ïî]/g, "i")
          .replace(/[ôö]/g, "o")
          .replace(/ç/g, "c")
          .replace(/\s+/g, "-"),
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
      throw error;
    }
  }

  // Envoie un message de contact
  static async sendContactMessage(contactData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur lors de l'envoi du message");
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur envoi contact:", error);
      throw error;
    }
  }

  // Formate les données des artisans
  static formatArtisansData(artisans) {
    if (!Array.isArray(artisans)) {
      console.error("formatArtisansData: données non valides", artisans);
      return [];
    }

    return artisans.map((artisan) => ({
      id: artisan.id,
      name: artisan.name,
      specialty: artisan.specialty_name || artisan.specialty,
      category: artisan.category_name?.toLowerCase() || artisan.category,
      location: artisan.city || "Non spécifié",
      rating: parseFloat(artisan.rating || artisan.note) || 0,
      reviewCount: artisan.review_count || Math.floor(Math.random() * 300) + 50,
      image: artisan.image || null,
      hasCustomImage: !!artisan.image,
      about: artisan.about || "",
      email: artisan.email || "",
      website: artisan.website || "",
      top: artisan.top === "VRAI" || artisan.top === true || artisan.top === 1,
    }));
  }

  // Formate un artisan unique
  static formatSingleArtisanData(artisan) {
    if (!artisan) {
      console.error("formatSingleArtisanData: artisan non défini");
      return null;
    }

    return {
      id: artisan.id,
      name: artisan.name,
      specialty: artisan.specialty_name || artisan.specialty,
      category: artisan.category_name?.toLowerCase() || artisan.category,
      location: artisan.city || "Non spécifié",
      rating: parseFloat(artisan.rating || artisan.note) || 0,
      reviewCount: artisan.review_count || Math.floor(Math.random() * 300) + 50,
      image: artisan.image || null,
      hasCustomImage: !!artisan.image,
      about: artisan.about || "",
      email: artisan.email || "",
      website: artisan.website || "",
      top: artisan.top === "VRAI" || artisan.top === true || artisan.top === 1,
    };
  }

  // Upload d'image
  static async uploadArtisanImage(artisanId, imageFile) {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch(
        `${API_BASE_URL}/artisans/${artisanId}/image`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur upload image:", error);
      throw error;
    }
  }

  // Retourne l'URL de l'image de l'artisan
  static getArtisanImage(artisan) {
    if (artisan.image) {
      return `http://localhost:3001/uploads/artisans/${artisan.image}`;
    }
    return `http://localhost:3001/uploads/artisans/default.jpg`;
  }
}

export default ArtisanService;
