-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Creato il: Apr 02, 2017 alle 13:29
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

-- --------------------------------------------------------

--
-- Struttura della tabella `winery`
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
-- Dump dei dati per la tabella `winery`
--

INSERT INTO `winery` (`id`, `name`, `nation`, `nation_code`, `region`, `district`, `municipality`) VALUES
(1, 'Gianfranco Fino', 'Italia', 'IT', 'Puglia', 'Taranto', 'Taranto');

-- --------------------------------------------------------

--
-- Struttura della tabella `winery_to_wine`
--

CREATE TABLE `winery_to_wine` (
  `id_winery` bigint(20) NOT NULL,
  `id_wine` bigint(20) NOT NULL,
  `winerys_wine_description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `wine`
--
ALTER TABLE `wine`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wine_name` (`name`);

--
-- Indici per le tabelle `winery`
--
ALTER TABLE `winery`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `winery_to_wine`
--
ALTER TABLE `winery_to_wine`
  ADD PRIMARY KEY (`id_winery`,`id_wine`),
  ADD KEY `fk_wine` (`id_wine`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `wine`
--
ALTER TABLE `wine`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `winery`
--
ALTER TABLE `winery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `winery_to_wine`
--
ALTER TABLE `winery_to_wine`
  ADD CONSTRAINT `fk_wine` FOREIGN KEY (`id_wine`) REFERENCES `wine` (`id`),
  ADD CONSTRAINT `fk_winery` FOREIGN KEY (`id_winery`) REFERENCES `winery` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
