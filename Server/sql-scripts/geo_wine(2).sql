-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Apr 04, 2017 at 03:53 PM
-- Server version: 5.7.17
-- PHP Version: 7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geo_wine`
--

-- --------------------------------------------------------

--
-- Table structure for table `wine`
--

CREATE TABLE `wine` (
  `id` bigint(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `type` varchar(6) NOT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wine`
--

INSERT INTO `wine` (`id`, `name`, `type`, `description`) VALUES
(1, 'Barolo', 'red', 'descr'),
(2, 'Valpolicella', 'red', 'desc val');

-- --------------------------------------------------------

--
-- Table structure for table `winery`
--

CREATE TABLE `winery` (
  `id` bigint(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `nation` varchar(40) NOT NULL,
  `nation_code` varchar(3) DEFAULT NULL,
  `region` varchar(50) NOT NULL,
  `district` varchar(40) DEFAULT NULL,
  `municipality` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `winery`
--

INSERT INTO `winery` (`id`, `name`, `nation`, `nation_code`, `region`, `district`, `municipality`) VALUES
(1, 'Cantina1', 'Italy', 'IT', 'Piedmond', 'Turin', 'Turin');

-- --------------------------------------------------------

--
-- Table structure for table `winery_to_wine`
--

CREATE TABLE `winery_to_wine` (
  `winerys_wine_description` varchar(200) DEFAULT NULL,
  `wineId` bigint(20) NOT NULL,
  `wineryId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `winery_to_wine`
--

INSERT INTO `winery_to_wine` (`winerys_wine_description`, `wineId`, `wineryId`) VALUES
(NULL, 1, 1),
(NULL, 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wine`
--
ALTER TABLE `wine`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `wine_name_unique` (`name`);

--
-- Indexes for table `winery`
--
ALTER TABLE `winery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `winery_to_wine`
--
ALTER TABLE `winery_to_wine`
  ADD PRIMARY KEY (`wineId`,`wineryId`),
  ADD KEY `wineryId` (`wineryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wine`
--
ALTER TABLE `wine`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `winery`
--
ALTER TABLE `winery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `winery_to_wine`
--
ALTER TABLE `winery_to_wine`
  ADD CONSTRAINT `winery_to_wine_ibfk_1` FOREIGN KEY (`wineId`) REFERENCES `wine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `winery_to_wine_ibfk_2` FOREIGN KEY (`wineryId`) REFERENCES `winery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
