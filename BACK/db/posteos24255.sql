/*
 Navicat Premium Data Transfer

 Source Server         : WAMP
 Source Server Type    : MySQL
 Source Server Version : 50617 (5.6.17)
 Source Host           : localhost:3306
 Source Schema         : posteos24255

 Target Server Type    : MySQL
 Target Server Version : 50617 (5.6.17)
 File Encoding         : 65001

 Date: 13/07/2024 18:07:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for posteos
-- ----------------------------
DROP TABLE IF EXISTS `posteos`;
CREATE TABLE `posteos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NULL DEFAULT NULL,
  `titulo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `contenido` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `createdAt` datetime NULL DEFAULT NULL,
  `updatedAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of posteos
-- ----------------------------
INSERT INTO `posteos` VALUES (1, '2024-07-04 00:00:00', 'Ofertas 22', 'En nuestras tiendas estamos con ofertas de invierno', NULL, '2024-07-10 21:13:53');
INSERT INTO `posteos` VALUES (2, '2024-07-09 00:00:00', 'soy un titulo 2', 'soy un contenido 2', '2024-07-10 20:13:25', '2024-07-10 20:13:25');
INSERT INTO `posteos` VALUES (4, NULL, 'rr', 'qqrr', '2024-07-10 22:41:09', '2024-07-10 22:41:15');

-- ----------------------------
-- Table structure for sucursales
-- ----------------------------
DROP TABLE IF EXISTS `sucursales`;
CREATE TABLE `sucursales`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sucursales
-- ----------------------------
INSERT INTO `sucursales` VALUES (1, 'San Juan', 'Tucuma 66 O', '0000-00-00 00:00:00', '2024-07-13 12:53:36');
INSERT INTO `sucursales` VALUES (2, 'San Luis', 'Laprida 34 N', '0000-00-00 00:00:00', '2024-07-12 22:34:55');
INSERT INTO `sucursales` VALUES (3, 'Tucumán', 'Frente a plaza', '2024-07-12 22:23:03', '2024-07-12 22:23:03');

-- ----------------------------
-- Table structure for vendedores
-- ----------------------------
DROP TABLE IF EXISTS `vendedores`;
CREATE TABLE `vendedores`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` int(11) NOT NULL,
  `nombre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fk_sucursales` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_sucursales`(`fk_sucursales`) USING BTREE,
  CONSTRAINT `fk_sucursales` FOREIGN KEY (`fk_sucursales`) REFERENCES `sucursales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of vendedores
-- ----------------------------
INSERT INTO `vendedores` VALUES (1, 33999888, 'Perez Seba', 1, '2024-07-10 23:43:31', '2024-07-13 12:46:21');
INSERT INTO `vendedores` VALUES (2, 22333444, 'Martin Jose', 2, '2024-07-10 23:43:31', '2024-07-13 12:46:21');

-- ----------------------------
-- Table structure for ventas
-- ----------------------------
DROP TABLE IF EXISTS `ventas`;
CREATE TABLE `ventas`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `fk_zapatillas` int(11) NOT NULL,
  `fk_sucursales` int(11) NOT NULL,
  `cant` int(11) NULL DEFAULT NULL,
  `createdAt` datetime NULL DEFAULT NULL,
  `updatedAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_zapatillas`(`fk_zapatillas`) USING BTREE,
  CONSTRAINT `fk_zapatillas` FOREIGN KEY (`fk_zapatillas`) REFERENCES `zapatillas` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ventas
-- ----------------------------
INSERT INTO `ventas` VALUES (1, '2024-07-10', 1, 1, 10, '2024-07-10 00:00:00', '2024-07-10 00:00:00');
INSERT INTO `ventas` VALUES (2, '2024-07-10', 2, 2, 5, '2024-07-10 00:00:00', '2024-07-10 00:00:00');

-- ----------------------------
-- Table structure for zapatillas
-- ----------------------------
DROP TABLE IF EXISTS `zapatillas`;
CREATE TABLE `zapatillas`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modelo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `marca` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `precio` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of zapatillas
-- ----------------------------
INSERT INTO `zapatillas` VALUES (1, 'Momo', 'Salomon', '124000', '2024-07-10 23:43:31', '2024-07-13 12:46:21');
INSERT INTO `zapatillas` VALUES (2, 'king', 'Nike', '65000', '0000-00-00 00:00:00', '2024-07-10 23:43:19');
INSERT INTO `zapatillas` VALUES (3, 'buble 2', 'Topper', '65000', '0000-00-00 00:00:00', '2024-07-12 21:56:01');
INSERT INTO `zapatillas` VALUES (4, 'Trackserve de piel', 'Lacoste', '135000', '2024-07-12 21:59:04', '2024-07-12 21:59:23');

SET FOREIGN_KEY_CHECKS = 1;
