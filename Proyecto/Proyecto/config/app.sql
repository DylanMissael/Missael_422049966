SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS proyecto;
CREATE DATABASE IF NOT EXISTS proyecto;
USE proyecto;

CREATE TABLE usuarios(
    id INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    correo VARCHAR(150),
    contraseña VARCHAR(255),
    telefono VARCHAR(10),
    edad INTEGER,
    direccion VARCHAR(200),
    PRIMARY KEY(id)
)DEFAULT CHARACTER SET UTF8MB4;