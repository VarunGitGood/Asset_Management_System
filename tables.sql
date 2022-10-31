-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 01, 2022 at 12:54 AM
-- Server version: 8.0.30-0ubuntu0.22.04.1
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assetmanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

CREATE TABLE `activity_log` (
  `log_id` int NOT NULL,
  `staff_id` varchar(11) NOT NULL,
  `asset_id` varchar(11) NOT NULL,
  `log_date` date NOT NULL,
  `log_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `activity_log`
--

INSERT INTO `activity_log` (`log_id`, `staff_id`, `asset_id`, `log_date`, `log_description`) VALUES
(4, '1', '12', '2022-11-01', 'Asset with id 12 created'),
(5, '1', '13', '2022-11-01', 'Asset with id 13 created'),
(6, '1', '14', '2022-11-01', 'Asset with id 14 created'),
(7, '1', '15', '2022-11-01', 'Asset with id 15 created'),
(8, '1', '16', '2022-11-01', 'Asset with id 16 created'),
(9, '1', '16', '2022-11-01', 'Asset with id 16 deleted');

-- --------------------------------------------------------

--
-- Table structure for table `assets_master`
--

CREATE TABLE `assets_master` (
  `asset_id` int NOT NULL,
  `model` varchar(30) NOT NULL,
  `comp_name` varchar(50) NOT NULL,
  `room_id` int DEFAULT NULL,
  `asset_status` int NOT NULL,
  `purchase_cost` int NOT NULL,
  `purchase_date` date NOT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_updated_staff_id` int DEFAULT NULL,
  `is_computer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `computer_master`
--

CREATE TABLE `computer_master` (
  `asset_id` int NOT NULL,
  `cpu` varchar(50) NOT NULL,
  `ram` varchar(50) NOT NULL,
  `hdd` varchar(50) NOT NULL,
  `os` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_staff`
--

CREATE TABLE `master_staff` (
  `staff_id` int NOT NULL,
  `staff_name` varchar(50) NOT NULL,
  `staff_email` varchar(50) NOT NULL,
  `staff_password` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `staff_phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `master_staff`
--

INSERT INTO `master_staff` (`staff_id`, `staff_name`, `staff_email`, `staff_password`, `staff_phone`) VALUES
(1, 'VarunSingh', 'sam@gmail.com', '$2a$10$DexXTNasNsLCIQAYqcVQquWQTwWdyMQU94AlS.BNInVGCKw.N9STC', '8779608702');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `assets_master`
--
ALTER TABLE `assets_master`
  ADD PRIMARY KEY (`asset_id`),
  ADD KEY `last_updated_staff_id` (`last_updated_staff_id`);

--
-- Indexes for table `computer_master`
--
ALTER TABLE `computer_master`
  ADD PRIMARY KEY (`asset_id`);

--
-- Indexes for table `master_staff`
--
ALTER TABLE `master_staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `log_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `assets_master`
--
ALTER TABLE `assets_master`
  MODIFY `asset_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `master_staff`
--
ALTER TABLE `master_staff`
  MODIFY `staff_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assets_master`
--
ALTER TABLE `assets_master`
  ADD CONSTRAINT `assets_master_ibfk_1` FOREIGN KEY (`last_updated_staff_id`) REFERENCES `master_staff` (`staff_id`);

--
-- Constraints for table `computer_master`
--
ALTER TABLE `computer_master`
  ADD CONSTRAINT `computer_master_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `assets_master` (`asset_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;