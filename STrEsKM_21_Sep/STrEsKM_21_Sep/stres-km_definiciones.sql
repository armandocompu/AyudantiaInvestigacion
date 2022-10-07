CREATE DATABASE  IF NOT EXISTS `stres-km` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `stres-km`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: stres-km
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `definiciones`
--

DROP TABLE IF EXISTS `definiciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `definiciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_fuente` int NOT NULL COMMENT 'La definición debe tener una fuente. Bajo este modelo, un concepto puede tener múltiples definiciones a partir de diferentes fuentes.',
  `id_concepto` int NOT NULL COMMENT 'La definición debe asociarse a un concepto. Bajo este modelo, un concepto puede tener múltiples definiciones a partir de diferentes fuentes.',
  `definicion` varchar(2000) DEFAULT NULL,
  `fecha` date NOT NULL COMMENT 'Fecha en la que se consultó o estableció esta definición.',
  PRIMARY KEY (`id`),
  KEY `fk_fuente_idx` (`id_fuente`),
  KEY `fk_concepto_idx` (`id_concepto`),
  CONSTRAINT `fk_concepto` FOREIGN KEY (`id_concepto`) REFERENCES `conceptos` (`id`),
  CONSTRAINT `fk_fuente` FOREIGN KEY (`id_fuente`) REFERENCES `fuentes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Descripción o definición de cada uno de los conceptos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `definiciones`
--

LOCK TABLES `definiciones` WRITE;
/*!40000 ALTER TABLE `definiciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `definiciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-21 13:18:29
