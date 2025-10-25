-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: shuttle.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `artisans`
--

LOCK TABLES `artisans` WRITE;
/*!40000 ALTER TABLE `artisans` DISABLE KEYS */;
INSERT INTO `artisans` VALUES (18,'Boucherie Dumont',31,4.5,'Lyon','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','boucherie.dumond@gmail.com','',9,'FAUX','boucher.jpg'),(19,'Au pain chaud',32,4.8,'Montélimar','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','aupainchaud@hotmail.com','',9,'VRAI','boulanger.jpg'),(20,'Chocolaterie Labbé',33,4.9,'Lyon','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','chocolaterie-labbe@gmail.com','https://chocolaterie-labbe.fr',9,'VRAI','chocolatier.jpg'),(21,'Traiteur Truchon',34,4.1,'Lyon','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@truchon-traiteur.fr','https://truchon-traiteur.fr',9,'FAUX','traiteur.jpg'),(22,'Orville Salmons',35,5,'Evian','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','o-salmons@live.com','',10,'VRAI','chauffagiste.jpg'),(23,'Mont Blanc Eléctricité',36,4.5,'Chamonix','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@mont-blanc-electricite.com','https://mont-blanc-electricite.com',10,'FAUX','electricien.jpg'),(24,'Boutot & fils',37,4.7,'Bourg-en-bresse','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','boutot-menuiserie@gmail.com','https://boutot-menuiserie.com',10,'FAUX','menuisier.jpg'),(25,'Vallis Bellemare',38,4,'Vienne','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','v.bellemare@gmail.com','https://plomberie-bellemare.com',10,'FAUX','plombier.jpg'),(26,'Claude Quinn',39,4.2,'Aix-les-bains','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','claude.quinn@gmail.com','',11,'FAUX','bijoutier.jpg'),(27,'Amitee Lécuyer',40,4.5,'Annecy','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','a.amitee@hotmail.com','https://lecuyer-couture.com',11,'FAUX','couturier.jpg'),(28,'Ernest Carignan',41,5,'Le Puy-en-Velay','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','e-carigan@hotmail.com','',11,'FAUX','ferronier.jpg'),(29,'Royden Charbonneau',42,3.8,'Saint-Priest','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','r.charbonneau@gmail.com','',12,'FAUX','coiffeur-3.jpg'),(30,'Leala Dennis',42,3.8,'Chambéry','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','l.dennos@hotmail.fr','https://coiffure-leala-chambery.fr',12,'FAUX','coiffeur-2.jpg'),(31,'C\'est sup\'hair',42,4.1,'Romans-sur-Isère','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','sup-hair@gmail.com','https://sup-hair.fr',12,'FAUX','coiffeur-1.jpg'),(32,'Le monde des fleurs',43,4.6,'Annonay','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@le-monde-des-fleurs-annonay.fr','https://le-monde-des-fleurs-annonay.fr',12,'FAUX','fleuriste.jpg'),(33,'Valérie Laderoute',44,4.5,'Valence','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','v-laredoute@gmail.com','',12,'FAUX','toiletteur.jpg'),(34,'CM Graphisme',45,4.4,'Valence','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@cm-graphisme.com','https://cm-graphisme.com',12,'FAUX','webdesign.jpg');
/*!40000 ALTER TABLE `artisans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (9,'Alimentation'),(10,'Bâtiment'),(11,'Fabrication'),(12,'Services');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `specialties`
--

LOCK TABLES `specialties` WRITE;
/*!40000 ALTER TABLE `specialties` DISABLE KEYS */;
INSERT INTO `specialties` VALUES (31,'Boucher',1),(32,'Boulanger',1),(33,'Chocolatier',1),(34,'Traiteur',1),(35,'Chauffagiste',2),(36,'Electricien',2),(37,'Menuisier',2),(38,'Plombier',2),(39,'Bijoutier',3),(40,'Couturier',3),(41,'Ferronier',3),(42,'Coiffeur',4),(43,'Fleuriste',4),(44,'Toiletteur',4),(45,'Webdesign',4);
/*!40000 ALTER TABLE `specialties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'railway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-23 17:59:40
