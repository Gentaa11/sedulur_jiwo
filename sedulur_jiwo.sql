-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for sedulur_jiwo
CREATE DATABASE IF NOT EXISTS `sedulur_jiwo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sedulur_jiwo`;

-- Dumping structure for table sedulur_jiwo.aturan_pakar
CREATE TABLE IF NOT EXISTS `aturan_pakar` (
  `id_aturan` int NOT NULL AUTO_INCREMENT,
  `id_masalah` int NOT NULL,
  `id_gejala` int NOT NULL,
  PRIMARY KEY (`id_aturan`),
  KEY `id_masalah` (`id_masalah`),
  KEY `id_gejala` (`id_gejala`),
  CONSTRAINT `aturan_pakar_ibfk_1` FOREIGN KEY (`id_masalah`) REFERENCES `masalah_mental` (`id_masalah`) ON DELETE CASCADE,
  CONSTRAINT `aturan_pakar_ibfk_2` FOREIGN KEY (`id_gejala`) REFERENCES `gejala` (`id_gejala`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sedulur_jiwo.aturan_pakar: ~0 rows (approximately)

-- Dumping structure for table sedulur_jiwo.coping_strategy
CREATE TABLE IF NOT EXISTS `coping_strategy` (
  `id_strategi` int NOT NULL AUTO_INCREMENT,
  `id_masalah` int NOT NULL,
  `rekomendasi_teks` text NOT NULL,
  PRIMARY KEY (`id_strategi`),
  KEY `id_masalah` (`id_masalah`),
  CONSTRAINT `coping_strategy_ibfk_1` FOREIGN KEY (`id_masalah`) REFERENCES `masalah_mental` (`id_masalah`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sedulur_jiwo.coping_strategy: ~0 rows (approximately)

-- Dumping structure for table sedulur_jiwo.gejala
CREATE TABLE IF NOT EXISTS `gejala` (
  `id_gejala` int NOT NULL AUTO_INCREMENT,
  `kode_gejala` varchar(10) NOT NULL,
  `nama_gejala` varchar(255) NOT NULL,
  PRIMARY KEY (`id_gejala`),
  UNIQUE KEY `kode_gejala` (`kode_gejala`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sedulur_jiwo.gejala: ~0 rows (approximately)

-- Dumping structure for table sedulur_jiwo.masalah_mental
CREATE TABLE IF NOT EXISTS `masalah_mental` (
  `id_masalah` int NOT NULL AUTO_INCREMENT,
  `kode_masalah` varchar(10) NOT NULL,
  `nama_masalah` varchar(100) NOT NULL,
  `deskripsi` text,
  PRIMARY KEY (`id_masalah`),
  UNIQUE KEY `kode_masalah` (`kode_masalah`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sedulur_jiwo.masalah_mental: ~0 rows (approximately)

-- Dumping structure for table sedulur_jiwo.riwayat_diagnosis
CREATE TABLE IF NOT EXISTS `riwayat_diagnosis` (
  `id_riwayat` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_masalah` int NOT NULL,
  `tanggal` int NOT NULL,
  `bulan` varchar(20) NOT NULL,
  `tahun` int NOT NULL,
  `jam` time NOT NULL,
  PRIMARY KEY (`id_riwayat`),
  KEY `id_user` (`id_user`),
  KEY `id_masalah` (`id_masalah`),
  CONSTRAINT `riwayat_diagnosis_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE,
  CONSTRAINT `riwayat_diagnosis_ibfk_2` FOREIGN KEY (`id_masalah`) REFERENCES `masalah_mental` (`id_masalah`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sedulur_jiwo.riwayat_diagnosis: ~0 rows (approximately)

-- Dumping structure for table sedulur_jiwo.users
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','pengguna','pakar') DEFAULT 'pengguna',
  `jenis_kelamin` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `tanggal_bergabung` date DEFAULT NULL,
  `tentang` text,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sedulur_jiwo.users: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
