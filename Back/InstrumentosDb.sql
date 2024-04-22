CREATE DATABASE IF NOT EXISTS `instrumentosdb`;

CREATE TABLE IF NOT EXISTS `instrumento`(
	`id` VARCHAR(255) NOT NULL,
    `instrumento` VARCHAR(255),
    `marca` VARCHAR(255),
    `modelo` VARCHAR(255),
    `imagen` VARCHAR(255),
    `precio` VARCHAR(255),
    `costo_envio`VARCHAR(255),
    `cantidad_vendida` VARCHAR(255),
    `descripcion` VARCHAR(600),
    PRIMARY KEY (`id`)
);
