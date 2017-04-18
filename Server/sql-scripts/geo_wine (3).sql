-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Creato il: Apr 18, 2017 alle 18:12
-- Versione del server: 5.7.17
-- Versione PHP: 7.0.16

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
-- Struttura della tabella `wine`
--

CREATE TABLE `wine` (
  `id` bigint(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `type` varchar(6) NOT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `wine`
--

INSERT INTO `wine` (`id`, `name`, `type`, `description`) VALUES
(1, 'Barolo', 'red', 'descr'),
(2, 'amarone', 'red', 'desc2');

-- --------------------------------------------------------

--
-- Struttura della tabella `winery`
--

CREATE TABLE `winery` (
  `id` bigint(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `nation` varchar(40) NOT NULL,
  `region` varchar(50) NOT NULL,
  `latitude` float(10,6) NOT NULL,
  `longitude` float(10,6) NOT NULL,
  `address` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `winery`
--

INSERT INTO `winery` (`id`, `name`, `nation`, `region`, `latitude`, `longitude`, `address`) VALUES
(1, 'Cantina', 'Italy', 'Rome', 41.727715, 12.359806, 'via Aldeno 19'),
(2, 'cantina1', 'Italy', 'Rome', 41.884979, 12.501945, 'via dell\'Ambaradam');

-- --------------------------------------------------------

--
-- Struttura della tabella `winery_to_wine`
--

CREATE TABLE `winery_to_wine` (
  `winerys_wine_description` varchar(200) DEFAULT NULL,
  `wineId` bigint(20) NOT NULL,
  `wineryId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `winery_to_wine`
--

INSERT INTO `winery_to_wine` (`winerys_wine_description`, `wineId`, `wineryId`) VALUES
('detailed description', 1, 1),
('detail desc 2 ', 2, 1);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `wine`
--
ALTER TABLE `wine`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `wine_name_unique` (`name`);

--
-- Indici per le tabelle `winery`
--
ALTER TABLE `winery`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `winery_to_wine`
--
ALTER TABLE `winery_to_wine`
  ADD PRIMARY KEY (`wineId`,`wineryId`),
  ADD KEY `wineryId` (`wineryId`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `wine`
--
ALTER TABLE `wine`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT per la tabella `winery`
--
ALTER TABLE `winery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `winery_to_wine`
--
ALTER TABLE `winery_to_wine`
  ADD CONSTRAINT `winery_to_wine_ibfk_1` FOREIGN KEY (`wineId`) REFERENCES `wine` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `winery_to_wine_ibfk_2` FOREIGN KEY (`wineryId`) REFERENCES `winery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
