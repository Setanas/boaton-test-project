-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Hôte : boatonchfqadminb.mysql.db
-- Généré le :  lun. 21 jan. 2019 à 15:30
-- Version du serveur :  5.6.39-log
-- Version de PHP :  7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `boatonchfqadminb`
--

-- --------------------------------------------------------

--
-- Structure de la table `SBInformationUser`
--

CREATE TABLE `SBInformationUser` (
  `SBInformationUserID` int(16) NOT NULL,
  `FirstName` varchar(255) NOT NULL COMMENT 'First name of user',
  `LastName` varchar(255) NOT NULL COMMENT 'last name of user',
  `Email` varchar(255) NOT NULL COMMENT 'email of user',
  `BirthDate` date DEFAULT NULL COMMENT 'birth date of user',
  `BoatImmatriculation` varchar(255) DEFAULT NULL COMMENT 'boat register ',
  `Maker` varchar(255) DEFAULT NULL COMMENT 'boat maker',
  `Model` varchar(255) DEFAULT NULL COMMENT 'boat model',
  `Total` int(16) DEFAULT NULL COMMENT 'Receive'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `SBUser`
--

CREATE TABLE `SBUser` (
  `SBUserID` int(16) NOT NULL,
  `Login` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `SBInformationUser`
--
ALTER TABLE `SBInformationUser`
  ADD PRIMARY KEY (`SBInformationUserID`);

--
-- Index pour la table `SBUser`
--
ALTER TABLE `SBUser`
  ADD PRIMARY KEY (`SBUserID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `SBInformationUser`
--
ALTER TABLE `SBInformationUser`
  MODIFY `SBInformationUserID` int(16) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `SBUser`
--
ALTER TABLE `SBUser`
  MODIFY `SBUserID` int(16) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
