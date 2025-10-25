# Trouve-ton-Artisan - Plateforme Régionale Auvergne-Rhône-Alpes

Site internet pour aider les habitants de la région Auvergne-Rhône-Alpes à trouver facilement un artisan et à le contacter.

## Description

Ce site a été créé pour la région Auvergne-Rhône-Alpes. Il permet de :

- Chercher des artisans par catégorie (Bâtiment, Services, Fabrication, Alimentation)
- Voir où se trouvent les artisans
- Consulter les notes de chaque artisan
- Contacter un artisan avec un formulaire
- Utiliser le site sur téléphone, tablette ou ordinateur

## Technologies utilisées

### Ce qui fait la partie visible du site (Frontend)

- **React** - Pour créer l'interface
- **React Router** - Pour naviguer entre les pages
- **Bootstrap** - Pour le design responsive
- **Sass** - Pour écrire le CSS plus facilement
- **React Icons** - Pour les icônes

### Ce qui fait fonctionner le serveur (Backend)

- **Node.js** - Pour exécuter du JavaScript côté serveur
- **Express** - Pour créer le serveur web
- **mysql2** - Pour se connecter à la base de données
- **cors** - Pour autoriser le frontend à communiquer avec le backend
- **dotenv** - Pour cacher les mots de passe
- **body-parser** - Pour lire les données des formulaires

### La base de données

- **MySQL** - Pour stocker toutes les informations des artisans

### Autres outils

- **Git** & **GitHub** - Pour sauvegarder mon code
- **Figma** - Pour créer les maquettes
- **Railway** - Pour mettre le site en ligne

## Ce qu'il faut installer avant de commencer

Vous devez avoir installé sur votre ordinateur :

- [Node.js](https://nodejs.org/) (version 16 ou plus récente)
- [MySQL](https://www.mysql.com/) (version 8 ou plus récente)
- [Git](https://git-scm.com/)

Pour vérifier si c'est installé, tapez dans le terminal :

```bash
node --version
npm --version
mysql --version
git --version
```

## Comment installer le projet

### Étape 1 : Télécharger le code

```bash
git clone https://github.com/Corinne-devweb/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### Étape 2 : Créer la base de données

#### Ouvrir MySQL

```bash
mysql -u root -p
```

(Tapez votre mot de passe MySQL)

#### Créer la base avec mes fichiers SQL

```sql
source database/create_database.sql;
source database/insert_data.sql;
```

**OU** avec MySQL Workbench :

1. Ouvrir MySQL Workbench
2. Se connecter au serveur
3. File > Run SQL Script
4. Sélectionner `database/create_database.sql`
5. Refaire la même chose avec `database/insert_data.sql`

### Étape 3 : Configurer le serveur (Backend)

#### Aller dans le dossier backend

```bash
cd backend
```

#### Installer les bibliothèques nécessaires

```bash
npm install
```

#### Créer le fichier .env

Créez un fichier appelé `.env` dans le dossier `backend` et mettez-y ceci :

```env
# Informations pour se connecter à MySQL
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe_mysql
DB_NAME=railway
DB_PORT=3306

# Port du serveur
PORT=5000
```

**Remplacez** `votre_mot_de_passe_mysql` par votre vrai mot de passe MySQL.

### Étape 4 : Configurer le site (Frontend)

#### Revenir à la racine du projet

```bash
cd ..
```

#### Installer les bibliothèques

```bash
npm install
```

#### Créer le fichier .env pour le frontend

Créez un fichier `.env` à la racine (pas dans backend) :

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Comment lancer le site

Vous devez ouvrir **deux terminaux** : un pour le serveur, un pour le site.

### Terminal 1 : Lancer le serveur

```bash
cd backend
npm start
```

Vous verrez : `Serveur API démarré sur http://localhost:5000`

### Terminal 2 : Lancer le site

```bash
# À la racine du projet
npm start
```

Le site s'ouvre automatiquement dans votre navigateur à l'adresse `http://localhost:3000`

## Organisation des fichiers

```
trouve-ton-artisan/
├── backend/              # Le serveur Node.js
│   ├── server.js         # Le fichier principal du serveur (toutes les routes)
│   ├── db.js            # Configuration de la connexion MySQL
│   ├── uploads/         # Dossier pour les images uploadées
│   ├── .env             # Vos mots de passe (à créer, ne pas envoyer sur GitHub)
│   └── package.json     # Liste des bibliothèques backend
├── database/            # Fichiers SQL
│   ├── create_database.sql   # Crée les tables
│   └── insert_data.sql       # Remplit les tables
├── public/              # Fichiers accessibles publiquement
│   ├── index.html       # La page HTML de base
│   ├── favicon.ico      # L'icône du site
│   ├── logo.png         # Le logo
│   └── logo192.png      # Logo pour le manifest
├── src/                 # Le code React
│   ├── components/      # Les morceaux réutilisables (Header, Footer)
│   ├── pages/          # Les différentes pages du site
│   ├── styles/         # Les fichiers SCSS
│   ├── App.js          # Le composant principal
│   └── index.js        # Le point de départ
├── .env                 # Variables pour le frontend (à créer)
├── .gitignore          # Fichiers à ne pas envoyer sur GitHub
├── package.json        # Liste des bibliothèques frontend
└── README.md           # Ce fichier !
```

## Le site en ligne

Le site est accessible sur internet grâce à Railway :

**Adresse du site** : https://front-end-production-903d.up.railway.app

Railway héberge :

- Le site (frontend)
- Le serveur (backend)
- La base de données MySQL

À chaque fois que je pousse du code sur GitHub, Railway met automatiquement le site à jour !

## Sécurité

J'ai mis en place plusieurs protections :

- ✅ **Requêtes préparées** avec `?` pour éviter les injections SQL
- ✅ **Fichier .env** pour cacher les mots de passe
- ✅ **Validation complète** du formulaire de contact (email, longueur des champs)
- ✅ **CORS** configuré pour autoriser uniquement mon frontend
- ✅ **HTTPS** activé automatiquement sur Railway
- ✅ **Messages d'erreur sécurisés** (génériques pour les utilisateurs, détaillés dans les logs)

## Problèmes fréquents et solutions

### Le serveur ne se connecte pas à MySQL

**Vérifiez :**

- MySQL est bien démarré sur votre ordinateur
- Le mot de passe dans le fichier `.env` du backend est correct
- Le nom de la base de données est bien `railway` (ou changez-le dans le .env si vous avez utilisé un autre nom)

### Erreur "Port 3000 already in use"

Le port 3000 est déjà utilisé par un autre programme.

**Sur Windows :**

```bash
netstat -ano | findstr :3000
taskkill /PID [le_numero_trouve] /F
```

**Sur Mac/Linux :**

```bash
lsof -ti:3000 | xargs kill -9
```

### Erreur "Port 5000 already in use"

Même chose pour le port 5000 du backend.

**Sur Windows :**

```bash
netstat -ano | findstr :5000
taskkill /PID [le_numero_trouve] /F
```

**Sur Mac/Linux :**

```bash
lsof -ti:5000 | xargs kill -9
```

### Message "npm : commande introuvable"

Node.js n'est pas installé correctement. Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/)

### Le frontend ne communique pas avec le backend

**Vérifiez que :**

1. Le backend est bien démarré (vous devez voir le message dans le terminal)
2. L'URL dans le `.env` du frontend est correcte : `REACT_APP_API_URL=http://localhost:5000/api`
3. CORS est bien configuré dans `backend/server.js`

## Pour en savoir plus

- [Apprendre React](https://fr.react.dev/)
- [Documentation Express](https://expressjs.com/fr/)
- [Tutoriels MySQL](https://dev.mysql.com/doc/)
- [Guide Bootstrap](https://getbootstrap.com/)

## Auteure

**Corinne** - [Voir mon GitHub](https://github.com/Corinne-devweb)

## Questions ou problèmes ?

Si vous avez un problème avec le projet, vous pouvez ouvrir une "issue" sur GitHub
