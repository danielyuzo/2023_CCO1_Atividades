CREATE DATABASE violista;
USE violista;

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

GRANT SELECT, INSERT, UPDATE, DELETE ON violista.* TO blog;

INSERT INTO usuario VALUES (null, 'dyuzo', 'senha123', 'danielyuzo@gmail.com', '2022-07-10 10:02:00', 1), 
	(null, 'Daniel', '12345', 'daniel@hotmail.com', '2022-10-11 08:49:00', 0),
	(null, 'Juliana', '12345', 'juliana@hotmail.com', '2023-05-22 09:52:00', 0),
    (null, 'Tomaz', 'senha', 'tomaz@outlook.com', '2023-06-10 10:50:23', 0);

INSERT INTO post VALUES 
(null, 'A História da Viola', 'A história da viola é dividida com os outros instrumentos de corda das orquestras atuais, e é um conto pouco documentado. O pouco que se sabe é que estes instrumentos evoluíram de outros instrumentos de corda e arco, ao redor dos anos 1500. Assim como o violino, a viola origina das chamadas viola da braccio, termo italiano traduzido como “viola de braço”.<br><br><span class="imgRight"><img src="./img/posts/sonata_pian_forte.png">Primeira página da Sonata Pian’e Forte</span>Os primeiros registros destes instrumentos são do século XVI e, devido à características similares, como a presença de quatro cordas, e espelhos e costas curvados, é teorizado que eventualmente estes instrumentos evoluíram para a viola, violino e violoncelo que temos hoje. Em contrapartida, a viola da gamba, ou “viola de perna”, possuía cinco a sete cordas, e espelho e costas mais planos, e aparenta ter eventualmente originado o contrabaixo moderno.<br><br><span class="imgLeft"><img src="./img/posts/viola_da_braccio.png">Viola da braccio, em detalhe de pintura de Gaudenzio Ferrari, na Igreja Nossa Senhora dos Milagres, em Roma (c. 1534-6)</span>Uma das primeiras peças a possuir uma parte especificamente para a viola é a Sonata pian’e forte, escrita por Giovanni Gabrieli, de 1597. Nos séculos seguintes, a viola teria um papel mais limitado, sendo parte principalmente de orquestras e óperas, tendo trehos majoritariamente harmônicos, ou de acompanhamento. Este quadro passaria a mudar somente mais tarde, nos séculos 18 e 19.', '2023-06-10 10:00:00', '2023-06-10 10:00:00', 1),
(null, 'O Concerto em Ré Maior de Hoffmeister', '<iframe src="https://www.youtube.com/embed/_Qm6mCeDrhM" allowfullscreen="" width="560" height="315" frameborder="0"></iframe><br><br><span class="imgRight"><img src="./img/posts/hoffmeister.png">Primeira página da parte para viola solo, do manuscrito do concerto de Hoffmeister</span>Hoje, o Concerto para Viola em Ré Maior de Franz Anton Hoffmeister é uma peça padrão no repertório de qualquer violista profissional, sendo muito comum sua presença em audições para orquestras e em competições.<br><br>A popularidade da peça provém de suas fortes características Clássicas, trazendo os tons mais agradáveis do registro central da viola, e as passagens mais virtuosas servem para demonstrar a proficiência técnica do músico.', '2023-03-12 19:30:20', '2023-03-12 19:30:20', 1),
(null, 'O Violino e A Viola', 'Praticamente todos os violistas, quando falam sobre seu instrumento, recebem a mesma pergunta; O que é uma viola? Ou, no caso do Brasil, há a necessidade de explicar que estamos falando de uma viola de arco, e não a caipira. Não é incomum que as pessoas não saibam nem que o instrumento exista, ou, quando sabem da sua existência, só a conheçam como um “violino grande”.<br><br>Apesar das muitas similaridades, existem diferenças importantes entre o violino e a viola, que destacamos a seguir<br><br><span class="imgRight"><img src="./img/posts/violino_viola.jpg">Comparação do tamanho de um violino e uma viola</span><b>Tamanho</b>: a viola é, sim, um “violino grande”. O violino tem, em média, 35,5 cm, enquanto que a viola costuma ter ao redor de 42 cm.<br><br><b>Som</b>: Devido ao tamanho, a viola produz um som mais grave, e mais “macio”, em comparação com o violino, que tende a ser mais vibrante. <br><br><b>Postura</b>: Os dois instrumentos são tocados de modo semelhante, segurados pelo ombro e queixo. A única diferença é a posição dos dedos da mão esquerda, que são mais espaçados na viola.<br><br><span class="imgLeft"><img src="./img/posts/arcos.png">De cima para baixo: arco de violino, arco de viola e arco de violoncelo</span><b>Arco</b>: Como mencionado no ponto anterior, o arco da viola é mais pesado que o do violino; O arco de violino pesa cerca de 60 g, enquanto que o de viola pesa ao redor de 74 g. O formato do talão também é diferente, sendo quadrado no violino e arredondado na viola.<br><br><b>Afinação</b>: A viola produz tons mais graves que o violino, e sua afinação reflete isso. As três cordas mais agudas da viola são iguais às três cordas mais graves do violino, porém a corda mi aguda é substituída por uma dó grave. Assim, a viola possui a mesma afinação Dó-Sol-Ré-Lá de um violoncelo, porém uma oitava acima deste. As cordas da viola também são mais grossas que as do violino, necessitando de mais peso no arco para serem tocadas.<br><br><span class="imgRight"><img src="./img/posts/claves.png">Na esquerda, uma clave de sol, e na direita uma clave de dó</span><b>Partituras</b>: Partituras de violino são escritas quase que exclusivamente em clave de sol, enquanto que a viola é um dos poucos instrumentos que faz uso da clave de dó. Em trechos com muitas notas agudas, é comum a notação utilizar clave de sol para melhorar a leitura.<span class="fonte">Fontes:<br><a href="https://commons.wikimedia.org/wiki/File:Violin-Viola.jpg">Violin-Viola</a> por <a href="https://commons.wikimedia.org/wiki/User:Frinck51~commonswiki">Frinck51</a>. Licensiado sob <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a></span>', '2023-02-14 15:00:00', '2023-02-14 15:00:00', 1),
(null, 'O Protagonismo da Viola no Século XVIII e depois', 'Em composições orquestrais mais antigas, a viola geralmente apresentava um papel limitado, tendo trechos majoritariamente harmônicos, ou de acompanhamento. Nos casos incomuns de a viola apresentar um trecho melódico, este geralmente era apenas repetindo o que era tocado por outro instrumento.<br><br><span class="imgLeft"><img src="./img/posts/Brandenburg_Concertos.png">Capa dos Concertos de Brandenburg, de Sebastian Bach</span>Este quadro começou a mudar com composições de Johann Sebastian Bach, iniciando-se com os Concertos de Brandemburgo, que apresentam trechos com protagonismo da viola, e requerem destreza pouco observada em composições anteriores de viola. Muitas peças focadas em violas foram então produzidas nos períodos Barroco e Clássico, como aqueles compostos por Telemann, Hoffmeister, Stamitz, que ainda fazem parte do repertório esperado de violistas profissionais até os dias de hoje.<br><br><span class="imgRight"><img src="./img/posts/tertis_primrose.jpg">Na esquerda, William Primrose, e na direita, Lionel Tertis</span>Este maior destaque para o instrumento continuou através dos séculos XX e XXI, com a presença de muitos violistas especializados e composições centradas no instrumento. Dois dos principais nomes em tempos modernos são Lionel Tertis e William Primrose.<br><span class="fonte">Fontes:<br><a href="https://commons.wikimedia.org/wiki/File:Title_page_of_Brandenburg_Concertos.png">Title page of Brandenburg Concertos</a>. Licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0 1.0</a>.<br><a href="https://commons.wikimedia.org/wiki/File:William_primrose.jpg">William primrose</a>. Licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>.</span>', '2022-12-20 10:00:00', '2023-12-20 10:00:00', 1),
(null, 'O Concerto em Ré Maior de Stamitz', '<iframe width="560" height="315" src="https://www.youtube.com/embed/q3K4tx6oKek" title="YouTube video player" frameborder="0" allowfullscreen></iframe><br><br><br>O Concerto para Viola de Carl Stamitz é uma peça infame entre violistas, sendo muito comumente associada à testes e audições. De um ponto de vista mais neutro, porém, é uma peça vivaz, que demonstra toda a capacidade sonora de uma viola, desde os tons mais graves até os mais agudos<br><br>Uma das poucas composições de Stamitz que ainda são performadas hoje, o Concerto é parte integral do repertório de violistas, e é capaz de demonstrar toda a virtuosidade dos mesmos, devido aos diversos trechos extremamente técnicos presentes em toda a obra.', '2023-06-05 08:10:20', '2023-06-05 08:10:20', 1),
(null, 'O Concerto em Sol Maior de Telemann', '<iframe width="560" height="315" src="https://www.youtube.com/embed/yMpzPMkrALM" title="YouTube video player" frameborder="0" allowfullscreen></iframe><br><br><br>Entre as 900 e poucas composições de Georg Philipp Telemann, o Concerto para Viola em Sol é um de seus mais conhecidos. É o concerto mais antigo para viola que conhecemos hoje, tendo sido escrito circa 1716-1721, sendo um dos principais trabalhos a estabelecer a viola como instrumento de solo e promover o desenvolvimento de violistas dedicados ao instrumento.<br><br>Diferentemente do mais usual no período e em épocas posteriores, a peça é escrita seguindo o padrão das sonata de chiesa, com quatro movimentos alternando entre lentos e rápidos. Também é comum a presença de padrões ritornello, com a orquestra tocando trechos que são respondidos pelo solista em seguida.', '2023-02-03 19:00:00', '2023-02-03 19:00:00', 1),
(null, 'Cuidando de sua Viola', 'Assim como qualquer outro instrumento, a manutenção da viola é um aspecto importante para manter uma boa qualidade de som. Alguns cuidados pequenos podem fazer uma grande diferença na longevidade e qualidade de seu instrumento.<br><br><b>Temperatura:</b> Procure sempre deixar sua viola em locais com temperatura amena. Tanto calor quanto frio intensos podem danificar a madeira.<br><br><span class="imgRight"><img src="./img/posts/cavalete.jpeg">Angulação ideal do cavalete</span><b>Cavalete:</b> Tenha o hábito de verificar seu cavalete de vez em quando após tocar. Esta peça é frágil e é essencial que ela esteja apoiada firmemente no corpo da viola, em posição vertical.<br><br><b>Arco: </b> Sempre lembre-se de desafrouxar o arco após tocar. Deixar o mesmo apertado por longos períodos pode torcer a madeira e diminuir consideravelmente a longevidade do arco. <br><br><b>Cordas: </b> Procure trocar as cordas, no mínimo, uma vez por ano. Além dos problemas no tom, cordas velhas podem eventualmente arrebentar, sendo potencialmente perigosas.<br><br><b>Limpeza: </b> Lave as mãos antes de tocar, e procure sempre passar um pano em sua viola e nas cordas, para remover o excesso de breu que pode se acumular.<br><br>', '2023-05-23 10:00:00',  '2023-05-23 10:00:00', 1);
INSERT INTO visualizacoes VALUES (1, 72), (2, 123), (3, 43), (4, 65), (5, 110), (6, 60), (7, 23);

INSERT INTO comentario VALUES (1, NULL, 'Muito interessante', '2023-05-11 08:49:00', '2023-05-11 08:49:00', 2),
	(5, NULL, 'Tem a partitura?', '2023-05-11 08:52:00', '2023-05-11 08:52:00', 3),
    (5, NULL, 'Não podemos disponibilizar a partitura por aqui', '2023-05-12 10:03:00', '2023-05-12 10:03:00', 1),
    (2, NULL, 'Perfomance excelente essa', '2023-05-11 08:31:00', '2023-05-11 08:31:00', 4),
    (7, NULL, 'Também é importante cuidar do breu, não ficar colocando o dedo nele', '2023-06-10 14:00:02', '2023-06-10 14:00:02', 4);

INSERT INTO categoria (nome) VALUES ('História'), ('Vídeos'), ('Aprendizado'), ('Música'), ('Partituras');

INSERT INTO categoriaPost VALUES (1, 1), (1, 5), (2, 2), (2, 4), (2, 5), (3, 3), (4, 1), (5, 2), (5, 4), (6, 2), (6, 4), (7, 3);

SELECT * FROM usuario;
select * from post;
select * from categoriaPost;
SELECT * FROM post AS p JOIN usuario AS uP ON p.fkUsuario = uP.idUsuario LEFT JOIN comentario AS c ON p.idPost = c.fkPost JOIN usuario AS uC ON c.fkUsuario = uC.idUsuario;
select * from post;
select * from categoria;
select * from comentario;


SELECT * FROM post AS p JOIN categoriaPost AS cp ON p.idPost = cp.fkPost JOIN categoria c ON c.idCategoria = cp.fkCategoria;
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
