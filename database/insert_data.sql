-- Données pour la base de données

-- Insertion des catégories
INSERT INTO `categories` VALUES 
(9,'Alimentation'),
(10,'Bâtiment'),
(11,'Fabrication'),
(12,'Services');

-- Insertion des spécialités
INSERT INTO `specialties` VALUES 
(31,'Boucher',9),
(32,'Boulanger',9),
(33,'Chocolatier',9),
(34,'Traiteur',9),
(35,'Chauffagiste',10),
(36,'Electricien',10),
(37,'Menuisier',10),
(38,'Plombier',10),
(39,'Bijoutier',11),
(40,'Couturier',11),
(41,'Ferronier',11),
(42,'Coiffeur',12),
(43,'Fleuriste',12),
(44,'Toiletteur',12),
(45,'Webdesign',12);

-- Insertion des artisans
INSERT INTO `artisans` VALUES 
(18,'Boucherie Dumont',31,4.5,'Lyon','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','boucherie.dumond@gmail.com','',9,'FAUX','boucher.jpg'),
(19,'Au pain chaud',32,4.8,'Montélimar','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','aupainchaud@hotmail.com','',9,'VRAI','boulanger.jpg'),
(20,'Chocolaterie Labbé',33,4.9,'Lyon','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','chocolaterie-labbe@gmail.com','https://chocolaterie-labbe.fr',9,'VRAI','chocolatier.jpg'),
(21,'Traiteur Truchon',34,4.1,'Lyon','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@truchon-traiteur.fr','https://truchon-traiteur.fr',9,'FAUX','traiteur.jpg'),
(22,'Orville Salmons',35,5,'Evian','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','o-salmons@live.com','',10,'VRAI','chauffagiste.jpg'),
(23,'Mont Blanc Eléctricité',36,4.5,'Chamonix','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@mont-blanc-electricite.com','https://mont-blanc-electricite.com',10,'FAUX','electricien.jpg'),
(24,'Boutot & fils',37,4.7,'Bourg-en-bresse','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','boutot-menuiserie@gmail.com','https://boutot-menuiserie.com',10,'FAUX','menuisier.jpg'),
(25,'Vallis Bellemare',38,4,'Vienne','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','v.bellemare@gmail.com','https://plomberie-bellemare.com',10,'FAUX','plombier.jpg'),
(26,'Claude Quinn',39,4.2,'Aix-les-bains','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','claude.quinn@gmail.com','',11,'FAUX','bijoutier.jpg'),
(27,'Amitee Lécuyer',40,4.5,'Annecy','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','a.amitee@hotmail.com','https://lecuyer-couture.com',11,'FAUX','couturier.jpg'),
(28,'Ernest Carignan',41,5,'Le Puy-en-Velay','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','e-carigan@hotmail.com','',11,'FAUX','ferronier.jpg'),
(29,'Royden Charbonneau',42,3.8,'Saint-Priest','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','r.charbonneau@gmail.com','',12,'FAUX','coiffeur-3.jpg'),
(30,'Leala Dennis',42,3.8,'Chambéry','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','l.dennos@hotmail.fr','https://coiffure-leala-chambery.fr',12,'FAUX','coiffeur-2.jpg'),
(31,'C\'est sup\'hair',42,4.1,'Romans-sur-Isère','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','sup-hair@gmail.com','https://sup-hair.fr',12,'FAUX','coiffeur-1.jpg'),
(32,'Le monde des fleurs',43,4.6,'Annonay','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@le-monde-des-fleurs-annonay.fr','https://le-monde-des-fleurs-annonay.fr',12,'FAUX','fleuriste.jpg'),
(33,'Valérie Laderoute',44,4.5,'Valence','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','v-laredoute@gmail.com','',12,'FAUX','toiletteur.jpg'),
(34,'CM Graphisme',45,4.4,'Valence','« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. »','contact@cm-graphisme.com','https://cm-graphisme.com',12,'FAUX','webdesign.jpg');