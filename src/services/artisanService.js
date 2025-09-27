// services/artisanService.js
// Ce service sera utilisé quand l'API sera prête

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/api";

class ArtisanService {
  // Récupérer tous les artisans
  static async getAllArtisans() {
    try {
      const response = await fetch(`${API_BASE_URL}/artisans`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des artisans");
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      // Fallback sur les données mockées en cas d'erreur
      return this.getMockArtisans();
    }
  }

  // Récupérer les artisans par catégorie
  static async getArtisansByCategory(category) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/artisans?category=${category}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des artisans");
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      // Fallback sur les données mockées filtrées
      const mockData = this.getMockArtisans();
      return mockData.filter((artisan) => artisan.category === category);
    }
  }

  // Rechercher des artisans
  static async searchArtisans(query) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/artisans/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche");
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      // Fallback sur la recherche locale
      const mockData = this.getMockArtisans();
      const searchTerm = query.toLowerCase();
      return mockData.filter((artisan) =>
        artisan.name.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Récupérer un artisan par ID
  static async getArtisanById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/artisans/${id}`);
      if (!response.ok) {
        throw new Error("Artisan non trouvé");
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      // Fallback sur les données mockées
      const mockData = this.getMockArtisans();
      return mockData.find((artisan) => artisan.id === parseInt(id));
    }
  }

  // Récupérer les catégories depuis la BDD
  static async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des catégories");
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      // Fallback sur les catégories par défaut
      return [
        { id: 1, name: "Bâtiment", slug: "batiment" },
        { id: 2, name: "Services", slug: "services" },
        { id: 3, name: "Fabrication", slug: "fabrication" },
        { id: 4, name: "Alimentation", slug: "alimentation" },
      ];
    }
  }

  // Upload d'image d'artisan
  static async uploadArtisanImage(artisanId, imageFile) {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch(
        `${API_BASE_URL}/artisans/${artisanId}/image`,
        {
          method: "POST",
          body: formData,
          headers: {
            // Note: Ne pas définir Content-Type pour FormData
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Si auth requise
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'upload de l'image");
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur upload image:", error);
      throw error;
    }
  }

  // Données mockées (à supprimer quand l'API sera prête)
  static getMockArtisans() {
    return [
      {
        id: 1,
        name: "Boucherie Dumont",
        specialty: "Boucherie",
        category: "alimentation",
        location: "Lyon",
        rating: 4.5,
        reviewCount: 340,
        image: null, // Pas d'image personnalisée
        hasCustomImage: false,
      },
      {
        id: 2,
        name: "Au pain chaud",
        specialty: "Boulangerie",
        category: "alimentation",
        location: "Montpellier",
        rating: 4.5,
        reviewCount: 125,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 3,
        name: "Claude Dunn",
        specialty: "Bijouterie",
        category: "fabrication",
        location: "Aix-les-bains",
        rating: 4.2,
        reviewCount: 85,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 4,
        name: "Orville Salmon",
        specialty: "Chauffagiste",
        category: "services",
        location: "Evian",
        rating: 5.0,
        reviewCount: 78,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 5,
        name: "Martin Construction",
        specialty: "Maçonnerie",
        category: "batiment",
        location: "Lyon",
        rating: 4.7,
        reviewCount: 156,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 6,
        name: "Électro Services",
        specialty: "Électricien",
        category: "batiment",
        location: "Grenoble",
        rating: 4.3,
        reviewCount: 92,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 7,
        name: "Plomberie Express",
        specialty: "Plomberie",
        category: "services",
        location: "Annecy",
        rating: 4.6,
        reviewCount: 203,
        image: null,
        hasCustomImage: false,
      },
      {
        id: 8,
        name: "Atelier Menuiserie",
        specialty: "Menuiserie",
        category: "fabrication",
        location: "Chambéry",
        rating: 4.8,
        reviewCount: 67,
        image: null,
        hasCustomImage: false,
      },
    ];
  }

  // Fonction utilitaire pour obtenir l'image appropriée
  static getArtisanImage(artisan) {
    // Si l'artisan a sa propre image, l'utiliser
    if (artisan.image && artisan.hasCustomImage) {
      return `${API_BASE_URL}/uploads/artisans/${artisan.image}`;
    }

    // Sinon, utiliser une image par défaut selon la spécialité
    const defaultImages = {
      Boucherie:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=150&h=150&fit=crop&crop=center",
      Boulangerie:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop&crop=center",
      Bijouterie:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop&crop=center",
      Chauffagiste:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=150&h=150&fit=crop&crop=center",
      Maçonnerie:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=150&fit=crop&crop=center",
      Électricien:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=150&h=150&fit=crop&crop=center",
      Plomberie:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&crop=center",
      Menuiserie:
        "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=150&h=150&fit=crop&crop=center",
      // Image générique pour les nouvelles spécialités
      default:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=center",
    };

    return defaultImages[artisan.specialty] || defaultImages["default"];
  }
}

export default ArtisanService;
