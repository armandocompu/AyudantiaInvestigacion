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
-- Table structure for table `indicadores`
--

DROP TABLE IF EXISTS `indicadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `indicadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_programa` int NOT NULL COMMENT 'Los indicadores se registran por programa educativo',
  `id_definicion` int NOT NULL COMMENT 'El indicador está asociado a un concepto a través de su definición. De esta manera, un mismo concepto puede medirse de N formas, a partir de las definiciones proporcionadas por N fuentes.',
  `tipo` enum('Semestral','Anual','Cohorte','Plan de estudios','Permanente') NOT NULL DEFAULT 'Cohorte' COMMENT 'Especifica la frecuencia de actualización esperada para el indicador',
  `unidad` enum('Cantidad','Porcentaje','Texto') NOT NULL DEFAULT 'Cantidad',
  PRIMARY KEY (`id`),
  KEY `fk_programa_idx` (`id_programa`),
  KEY `fk_definicion_idx` (`id_definicion`),
  CONSTRAINT `fk_definicion` FOREIGN KEY (`id_definicion`) REFERENCES `definiciones` (`id`),
  CONSTRAINT `fk_programa` FOREIGN KEY (`id_programa`) REFERENCES `programas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Concentra los datos correspondientes a un indicador';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `indicadores`
--

LOCK TABLES `indicadores` WRITE;
/*!40000 ALTER TABLE `indicadores` DISABLE KEYS */;
/*!40000 ALTER TABLE `indicadores` ENABLE KEYS */;
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
