CREATE DATABASE teste;
USE teste;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    email VARCHAR(100) UNIQUE,
    dataEntrada DATETIME,
    administrador TINYINT
);

CREATE TABLE post(
	idPost INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    textoPost VARCHAR(500),
    dataCriacao DATETIME,
    dataEdicao DATETIME,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

CREATE TABLE comentario(
    idComentario INT PRIMARY KEY AUTO_INCREMENT,
    textoComentario VARCHAR(500),
    dataCriacao DATETIME,
    dataEdicao DATETIME,
	fkPost INT NOT NULL,
    FOREIGN KEY (fkPost) REFERENCES post(idPost) ON DELETE CASCADE,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

INSERT INTO usuario VALUES (null, 'dyuzo', 'senha123', 'danielyuzo@gmail.com', '2023-05-07 10:02:00', 1), 
	(null, 'Daniel', '12345', 'daniel@hotmail.com', '2023-05-11 08:49:00', 0),
	(null, 'batata', '12345', 'batata@hotmail.com', '2023-05-22 09:52:00', 0);

INSERT INTO post VALUES (null, 'post 1', 'Testando sistema de postagens asndkjakjcashwqindoncxzjnaskuqwckjacnkjasn', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 1),
(null, 'post 2', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit at soluta quis officia fugiat labore doloribus atque reprehenderit laboriosam, earum ipsum voluptatibus sint ipsa assumenda neque sed beatae et! Sint.', '2023-05-11 08:31:00', '2023-05-11 08:32:00', 1);

INSERT INTO comentario VALUES (NULL, 'Comentário teste 1', '2023-05-11 08:49:00', '2023-05-11 08:49:00', 1, 2),
	(NULL, 'Comentário teste 2', '2023-05-11 08:52:00', '2023-05-11 08:52:00', 1, 1),
    (NULL, 'Comentário teste 3', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 2, 2);
    
INSERT INTO comentario VALUES(2,2, 'Bla Bla Bla', '2023-05-14 10:49:00',  '2023-05-14 10:49:00', 2);   

SELECT * FROM usuario;

SELECT * FROM post AS p JOIN usuario AS uP ON p.fkUsuario = uP.idUsuario JOIN comentario AS c ON p.idPost = c.fkPost JOIN usuario AS uC ON c.fkUsuario = uC.idUsuario WHERE p.idPost = 1;