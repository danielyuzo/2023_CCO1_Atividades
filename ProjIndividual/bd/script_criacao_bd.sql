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
    visualizacoes INT DEFAULT 0,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

CREATE TABLE comentario(
    fkPost INT NOT NULL,
    FOREIGN KEY (fkPost) REFERENCES post(idPost) ON DELETE CASCADE,
    idComentario INT PRIMARY KEY AUTO_INCREMENT,
    textoComentario VARCHAR(500),
    dataCriacao DATETIME,
    dataEdicao DATETIME,
	fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

CREATE TABLE categoria(
	idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE categoriaPost(
	fkPost INT,
    FOREIGN KEY (fkPost) REFERENCES post(idPost) ON DELETE CASCADE,
    fkCategoria INT,
    FOREIGN KEY (fkCategoria) REFERENCES categoria(idCategoria) ON DELETE CASCADE,
    PRIMARY KEY (fkPost, fkCategoria)
);

INSERT INTO usuario VALUES (null, 'dyuzo', 'senha123', 'danielyuzo@gmail.com', '2023-05-07 10:02:00', 1), 
	(null, 'Daniel', '12345', 'daniel@hotmail.com', '2023-05-11 08:49:00', 0),
	(null, 'batata', '12345', 'batata@hotmail.com', '2023-05-22 09:52:00', 0);

INSERT INTO post VALUES (null, 'post 1', 'Testando sistema de postagens asndkjakjcashwqindoncxzjnaskuqwckjacnkjasn', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 0, 1),
(null, 'post 2', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit at soluta quis officia fugiat labore doloribus atque reprehenderit laboriosam, earum ipsum voluptatibus sint ipsa assumenda neque sed beatae et! Sint.', '2023-05-11 08:31:00', '2023-05-11 08:32:00', 0, 1);

INSERT INTO comentario VALUES (NULL, 'Comentário teste 1', '2023-05-11 08:49:00', '2023-05-11 08:49:00', 1, 2),
	(NULL, 'Comentário teste 2', '2023-05-11 08:52:00', '2023-05-11 08:52:00', 1, 1),
    (NULL, 'Comentário teste 3', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 2, 2);

INSERT INTO categoria (nome) VALUES ('História'), ('Vídeos'), ('Aprendizado'), ('Música'), ('Partituras');

INSERT INTO categoriaPost VALUES (1, 1), (2, 2), (2, 4);

DELIMITER //
CREATE PROCEDURE cadastrarPost(IN 
	fi_cnpj CHAR(18), fi_cep CHAR(8), fi_num INT, fi_comp VARCHAR(45),
    ff_cpf CHAR(14)
)
BEGIN
	UPDATE filial SET fkEmpresa = (SELECT idEmpresa FROM empresa WHERE cnpj = fi_cnpj) WHERE cep = fi_cep AND numero = fi_num AND complemento = fi_comp;
	INSERT INTO filialFuncionario (fkFilial, fkFuncionario)
		VALUES ((SELECT idFilial FROM filial WHERE fkEmpresa = (SELECT idEmpresa FROM empresa WHERE cnpj = fi_cnpj) ),(SELECT idFuncionario FROM funcionario WHERE cpf = ff_cpf));
END//
DELIMITER ;

SELECT * FROM usuario;
select * from post;
select * from categoriaPost;
SELECT * FROM post AS p JOIN usuario AS uP ON p.fkUsuario = uP.idUsuario LEFT JOIN comentario AS c ON p.idPost = c.fkPost JOIN usuario AS uC ON c.fkUsuario = uC.idUsuario;
select * from post;
select * from categoria;
select * from comentario;


SELECT * FROM post AS p JOIN categoriaPost AS cp ON p.idPost = cp.fkPost JOIN categoria c ON c.idCategoria = cp.fkCategoria;
INSERT INTO usuario VALUES (null, 'batata2', sha2('senha123', 256), 'batata@gmail.com', '2023-05-25 10:02:00', 1);
select * from usuario;


-- Visualizações por categoria
SELECT c.nome, SUM(p.visualizacoes) AS vis FROM post AS p 
	JOIN categoriaPost AS cp ON p.idPost = cp.fkPost 
	JOIN categoria c ON c.idCategoria = cp.fkCategoria 
    GROUP BY c.nome ORDER BY vis DESC;
    
-- posts mais visualizados
SELECT titulo, visualizacoes FROM post ORDER BY visualizacoes DESC;

-- posts mais comentados
SELECT p.titulo, COUNT(c.idComentario) AS coms FROM post p LEFT JOIN comentario c ON p.idPost = c.fkPost GROUP BY p.titulo ORDER BY coms DESC;

-- comentários por categoria
SELECT cat.nome, COUNT(com.idComentario) AS coms FROM post AS p 
	JOIN categoriaPost AS cp ON p.idPost = cp.fkPost 
	JOIN categoria cat ON cat.idCategoria = cp.fkCategoria
    LEFT JOIN comentario com ON com.fkPost = p.idPost
    GROUP BY cat.nome ORDER BY coms DESC;
    
-- quantidade de posts e visualizações por mês
SELECT MONTH(dataCriacao) AS mes, COUNT(idPost) AS posts, SUM(visualizacoes) AS vis FROM post GROUP BY mes; 
    
    select * from comentario;