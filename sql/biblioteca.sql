DROP TABLE IF EXISTS libro_autor;
DROP TABLE IF EXISTS prestamos;
DROP TABLE IF EXISTS libro_editorial;
DROP TABLE IF EXISTS libro;
DROP TABLE IF EXISTS lector;
DROP TABLE IF EXISTS editorial;
DROP TABLE IF EXISTS autor;

-- ****** TABLAS MAESTRAS ******
CREATE TABLE libro(
    codigo_libro VARCHAR(20) PRIMARY KEY,
    titulo TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=INNODB;
ALTER TABLE libro ADD COLUMN fecha_modificacion TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

CREATE TABLE lector(
    codigo_lector INT(5) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(200) NULL,
    apellido_materno VARCHAR(200) NOT NULL
) ENGINE=INNODB;

CREATE TABLE editorial(
    codigo_editorial VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
) ENGINE=INNODB;

CREATE TABLE autor(
    codigo_autor VARCHAR(30) PRIMARY KEY,
    nombre VARCHAR(100) , 
    apellido VARCHAR(100) 
) ENGINE=INNODB;

-- ****** TABLAS SECUDARIAS******

CREATE TABLE libro_autor(
    id INT(5) PRIMARY KEY AUTO_INCREMENT,
    codigo_autor VARCHAR(30) NOT NULL,
    codigo_libro VARCHAR(20) NOT NULL,
    FOREIGN KEY(codigo_autor) REFERENCES autor(codigo_autor) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY(codigo_libro) REFERENCES libro(codigo_libro) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY uq_libro_autor(codigo_autor,codigo_libro)
) ENGINE=INNODB;

CREATE TABLE prestamos(
    codigo_libro VARCHAR(20),
    codigo_lector INT(5),
    fecha_devolucion DATE
) ENGINE=INNODB;
ALTER TABLE prestamos ADD PRIMARY KEY(codigo_lector,codigo_libro);
ALTER TABLE prestamos ADD FOREIGN KEY(codigo_libro) REFERENCES libro(codigo_libro) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE prestamos ADD FOREIGN KEY(codigo_lector) REFERENCES lector(codigo_lector) ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE libro_editorial(
    codigo_libro VARCHAR(20) NOT NULL,
    codigo_editorial VARCHAR(20) NOT NULL,
    PRIMARY KEY (codigo_libro,codigo_editorial),
    FOREIGN KEY(codigo_libro) REFERENCES libro(codigo_libro) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY(codigo_editorial) REFERENCES editorial(codigo_editorial) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=INNODB;


INSERT INTO libro(codigo_libro,titulo) VALUES('ACV120K', 'Naturaleza en la ciudad');
INSERT INTO libro(codigo_libro,titulo) VALUES('HGF190T', 'La santa biblia');
INSERT INTO libro(codigo_libro,titulo) VALUES('BYT98P', 'Matematicas avanzadas');

INSERT INTO lector(nombre,apellido_paterno,apellido_materno) VALUES('Diego','Jaramillo','Zapata');
INSERT INTO lector(nombre,apellido_materno) VALUES('Marina','Macías ');
INSERT INTO lector(nombre,apellido_materno) VALUES('Oscar','Mesa ');

INSERT INTO autor(codigo_autor,nombre,apellido) VALUES('34287TW3','Arturo','Caceres');
INSERT INTO autor(codigo_autor,nombre,apellido) VALUES('T56P98','Carlos','Del Bosque');

INSERT INTO editorial(codigo_editorial,nombre) VALUES('30WCP','Editorial Norma');
INSERT INTO editorial(codigo_editorial,nombre) VALUES('WCPLP90','El tiempo casa editorial');
INSERT INTO editorial(codigo_editorial,nombre) VALUES('HT39','Los colores');

INSERT INTO libro_editorial VALUES('HGF190T', '30WCP');
INSERT INTO libro_editorial VALUES('ACV120K', '30WCP');
INSERT INTO libro_editorial VALUES('BYT98P', 'WCPLP90');

INSERT INTO libro_autor(codigo_autor,codigo_libro) VALUES('34287TW3', 'BYT98P');
INSERT INTO libro_autor(codigo_autor,codigo_libro) VALUES('T56P98', 'HGF190T');
INSERT INTO libro_autor(codigo_autor,codigo_libro) VALUES('T56P98', 'ACV120K');

INSERT INTO prestamos(codigo_libro,codigo_lector,fecha_devolucion) VALUES('ACV120K', 1, '2020-07-23');
INSERT INTO prestamos(codigo_libro,codigo_lector,fecha_devolucion) VALUES('BYT98P', 2, '2020-08-03');
INSERT INTO prestamos(codigo_libro,codigo_lector,fecha_devolucion) VALUES('HGF190T', 3, '2020-10-13');
