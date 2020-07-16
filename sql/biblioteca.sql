SHOW DATABASES;
CREATE DATABASE biblioteca;
CREATE USER "capacitacion_bd"@"localhost" IDENTIFIED BY 'politecnico';
mysql -h 127.0.0.1 -u capacitacion_bd -p;
GRANT USAGE ON *.* TO "capacitacion_bd"@"localhost" IDENTIFIED BY 'politecnico';
GRANT ALL PRIVILEGES ON biblioteca.* TO 'capacitacion_bd'@'localhost' WITH GRANT OPTION;
USE biblioteca;
SELECT DATE_FORMAT(NOW(),"%Y-%m");

DROP TABLE IF EXISTS estudiante;
CREATE TABLE estudiante(
    id_estuidante INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    documento VARCHAR(20) UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(50) NULL,
    grado CHAR
);
desrcibe estudiante;
ALTER TABLE estudiante ADD PRIMARY KEY(id_estuidante);

INSERT INTO estudiante(documento, nombre, apellido, grado) VALUES('9384674665', 'juan', 'mesa','B');
SELECT * FROM estudiante;
SELECT documento, nombre FROM estudiante;
SELECT documento, nombre FROM estudiante WHERE nombre = 'JuAn';
UPDATE estudiante SET grado = 'c', apellido = 'Perez' WHERE nombre = 'JuAn';