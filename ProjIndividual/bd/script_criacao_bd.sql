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
    textoPost VARCHAR(4000),
    dataCriacao DATETIME,
    dataEdicao DATETIME,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) ON DELETE CASCADE
);

CREATE TABLE visualizacoes(
	fkPost INT PRIMARY KEY,
    quantidade INT DEFAULT 0,
    FOREIGN KEY (fkPost) REFERENCES post(idPost) ON DELETE CASCADE
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

INSERT INTO post VALUES (null, 'post 1', 'Testando sistema de postagens asndkjakjcashwqindoncxzjnaskuqwckjacnkjasn', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 1),
(null, 'post 2', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit at soluta quis officia fugiat labore doloribus atque reprehenderit laboriosam, earum ipsum voluptatibus sint ipsa assumenda neque sed beatae et! Sint.', '2023-05-11 08:31:00', '2023-05-11 08:32:00', 1),
(null, 'A História da Viola', 'A história da viola é dividida com os outros instrumentos de corda das orquestras atuais, e é um conto pouco documentado. O pouco que se sabe é que estes instrumentos evoluíram de outros instrumentos de corda e arco, ao redor dos anos 1500. Assim como o violino, a viola origina das chamadas viola da braccio, termo italiano traduzido como “viola de braço”.<br><br><img class="imgRight" src="./img/posts/sonata_pian_forte.png">Os primeiros registros destes instrumentos são do século XVI e, devido à características similares, como a presença de quatro cordas, e espelhos e costas curvados, é teorizado que eventualmente estes instrumentos evoluíram para a viola, violino e violoncelo que temos hoje. Em contrapartida, a viola da gamba, ou “viola de perna”, possuía cinco a sete cordas, e espelho e costas mais planos, e aparenta ter eventualmente originado o contrabaixo moderno.<br><br><img class="imgLeft" src="./img/posts/viola_da_braccio.png">Uma das primeiras peças a possuir uma parte especificamente para a viola é a Sonata pian’e forte, escrita por Giovanni Gabrieli, de 1597. Nos séculos seguintes, a viola teria um papel mais limitado, sendo parte principalmente de orquestras e óperas, tendo trehos majoritariamente harmônicos, ou de acompanhamento. Este quadro passaria a mudar somente mais tarde, nos séculos 18 e 19.', '2022-10-24 10:00:00', '2022-10-24 10:00:00', 1),
(null, 'O Concerto em Ré Maior de Hoffmeister', '<iframe src="https://www.youtube.com/embed/_Qm6mCeDrhM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br><br><img class="imgRight" src="./img/posts/hoffmeister.png">Hoje, o Concerto para Viola em Ré Maior de Franz Anton Hoffmeister é uma peça padrão no repertório de qualquer violista profissional, sendo muito comum sua presença em audições para orquestras e em competições.<br><br>A popularidade da peça provém de suas fortes características Clássicas, trazendo os tons mais agradáveis do registro central da viola, e as passagens mais virtuosas servem para demonstrar a proficiência técnica do músico.', '2023-01-12 19:30:20', '2023-01-12 19:30:20', 1),
(null, 'O Violino e A Viola', 'Praticamente todos os violistas, quando falam sobre seu instrumento, recebem a mesma pergunta; O que é uma viola? Ou, no caso do Brasil, há a necessidade de explicar que estamos falando de uma viola de arco, e não a caipira. Não é incomum que as pessoas não saibam nem que o instrumento exista, ou, quando sabem da sua existência, só a conheçam como um “violino grande”.<br><br><img class="imgRight" src="./img/posts/violino_viola.jpg">Apesar das muitas similaridades, existem diferenças importantes entre o violino e a viola, que destacamos a seguir<br><br><b>Tamanho</b>: a viola é, sim, um “violino grande”. O violino tem, em média, 35,5 cm, enquanto que a viola costuma ter ao redor de 42 cm.<br><br><b>Som</b>: Devido ao tamanho, a viola produz um som mais grave, e mais “macio”, em comparação com o violino, que tende a ser mais vibrante. <br><br><b>Postura</b>: Os dois instrumentos são tocados de modo semelhante, segurados pelo ombro e queixo. A única diferença é a posição dos dedos da mão esquerda, que são mais espaçados na viola.<br><br><img class="imgLeft" src="./img/posts/arcos.png"><b>Arco</b>: Como mencionado no ponto anterior, o arco da viola é mais pesado que o do violino; O arco de violino pesa cerca de 60 g, enquanto que o de viola pesa ao redor de 74 g. O formato do talão também é diferente, sendo quadrado no violino e arredondado na viola.<br><br><br><b>Afinação</b>: A viola produz tons mais graves que o violino, e sua afinação reflete isso. As três cordas mais agudas da viola são iguais às três cordas mais graves do violino, porém a corda mi aguda é substituída por uma dó grave. Assim, a viola possui a mesma afinação Dó-Sol-Ré-Lá de um violoncelo, porém uma oitava acima deste. As cordas da viola também são mais grossas que as do violino, necessitando de mais peso no arco para serem tocadas.<br><br><img class="imgRight" src="./img/posts/claves.png"><b>Partituras</b>: Partituras de violino são escritas quase que exclusivamente em clave de sol, enquanto que a viola é um dos poucos instrumentos que faz uso da clave de dó. Em trechos com muitas notas agudas, é comum a notação utilizar clave de sol para melhorar a leitura.', '2023-01-30 15:00:00', '2023-01-30 15:00:00', 1);

INSERT INTO visualizacoes VALUES (1, 0), (2, 0), (3, 72), (4, 123), (5, 43);

INSERT INTO comentario VALUES (NULL, 'Comentário teste 1', '2023-05-11 08:49:00', '2023-05-11 08:49:00', 1, 2),
	(NULL, 'Comentário teste 2', '2023-05-11 08:52:00', '2023-05-11 08:52:00', 1, 1),
    (NULL, 'Comentário teste 3', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 2, 2);

INSERT INTO categoria (nome) VALUES ('História'), ('Vídeos'), ('Aprendizado'), ('Música'), ('Partituras');

INSERT INTO categoriaPost VALUES (1, 1), (2, 2), (2, 4);

select idPost FROM post;
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
SELECT c.nome, SUM(v.quantidade) AS vis FROM post AS p
	JOIN visualizacoes AS v ON v.fkPost = p.idPost
	JOIN categoriaPost AS cp ON p.idPost = cp.fkPost 
	JOIN categoria c ON c.idCategoria = cp.fkCategoria 
    GROUP BY c.nome ORDER BY vis DESC;
    
-- posts mais visualizados
SELECT p.titulo, v.quantidade FROM post p JOIN visualizacoes v ON v.fkPost = p.idPost ORDER BY v.quantidade DESC;

-- posts mais comentados
SELECT p.titulo, COUNT(c.idComentario) AS coms FROM post p LEFT JOIN comentario c ON p.idPost = c.fkPost GROUP BY p.titulo ORDER BY coms DESC;

-- comentários por categoria
SELECT cat.nome, COUNT(com.idComentario) AS coms FROM post AS p 
	JOIN categoriaPost AS cp ON p.idPost = cp.fkPost 
	JOIN categoria cat ON cat.idCategoria = cp.fkCategoria
    LEFT JOIN comentario com ON com.fkPost = p.idPost
    GROUP BY cat.nome ORDER BY coms DESC;
    
-- quantidade de posts e visualizações por mês
SELECT MONTH(dataCriacao) AS mes, COUNT(idPost) AS posts, SUM(v.quantidade) AS vis FROM post p JOIN visualizacoes v ON p.idPost = v.fkPost GROUP BY mes; 
    
    select * from comentario;