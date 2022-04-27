-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-04-2022 a las 23:28:41
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gymnasio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(25) NOT NULL,
  `direccion` varchar(25) NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `fecha_inicio` datetime(6) NOT NULL,
  `fecha_final` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loggin`
--

CREATE TABLE `loggin` (
  `id` int(11) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contraseña` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `loggin`
--

INSERT INTO `loggin` (`id`, `correo`, `contraseña`) VALUES
(1, 'P', 'P');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `Nombres` varchar(50) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contraseña` varchar(10) NOT NULL,
  `estado` varchar(25) NOT NULL,
  `tipo` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `Nombres`, `Apellidos`, `correo`, `contraseña`, `estado`, `tipo`) VALUES
(1, 'Pablo', 'Antonio', 'pajb1997@gmail.com', '123', 'Activo', 'Administrador'),
(2, 'Luis', 'Carlos', 'jarquinluis86@gmail.com', 'luiscar01', 'inactivo', 'Caja'),
(6, 'IVAN', 'ESPINOZA', 'ivanespinoza20@gmail.com', '123455', 'Activo', 'Coach'),
(11, 'Milton', 'Bermudez', 'jarquin50@gmail.es', 'jarquin50@', 'Activo', 'Caja'),
(12, 'Carlos', 'Jarquin', 'Carlosjarquin23@gmail.com', '1234', 'activo', '4'),
(13, 'root', 'roott', 'root@root.com', '12345', 'Activo', '1'),
(15, 'osman', 'nn', '123@123.com', '123@123.co', 'activo', '4'),
(16, 'P', 'P', 'P', 'P', 'Inactivo', '3'),
(22, 'lll', 'll', 'llllll', 'llllll', 'Inactivo', '3'),
(25, 'ooo', 'looo', '', '', 'Inactivo', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `loggin`
--
ALTER TABLE `loggin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `loggin`
--
ALTER TABLE `loggin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
