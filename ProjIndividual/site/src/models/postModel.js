var database = require("../database/config")

function listar() {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT p.idPost, p.titulo, p.textoPost, p.dataCriacao, p.dataEdicao, p.visualizacoes, u.username 
            FROM post AS p JOIN usuario AS u ON p.fkUsuario = u.idUsuario ORDER BY dataCriacao DESC, idPost DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUltimoPost(idUsuario) {
    var instrucao = `
        SELECT idPost FROM post WHERE fkUsuario = ${idUsuario} ORDER BY idPost DESC LIMIT 1;
        `;
    return database.executar(instrucao);
}

function visualizar(idPost) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    // var instrucao = `
        // SELECT * FROM post JOIN comentario ON fkPost = idPost JOIN usuario ON  WHERE idPost = ${idPost};
    // `;
    var instrucao = `UPDATE post SET visualizacoes = visualizacoes + 1 WHERE idPost = ${idPost}`;
    // database.executar(instrucao).catch((erro) => {
    //     console.error("Erro ao atualizar visualizações: " + erro);
    // });

    // var instrucao = `
    //     SELECT p.idPost, p.titulo, p.textoPost, p.dataCriacao, p.dataEdicao, p.visualizacoes, u.username
    //     FROM post AS p JOIN usuario AS u ON p.fkUsuario = u.idUsuario 
    //     WHERE p.idPost = ${idPost};
    // `;
    // console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(titulo, texto, usuario) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, texto, usuario);

    var instrucao = `
        INSERT INTO post (titulo, textoPost, dataCriacao, dataEdicao, fkUsuario) VALUES ('${titulo}', '${texto}', now(), now(), ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarCategorias(categorias, idPost) {
    var instrucao = 'INSERT INTO categoriaPost VALUES ';
    for (let i = 0; i < categorias.length; i++) {
        instrucao += `(${idPost}, ${categorias[i]})`;
        if (i == categorias.length - 1) {
            instrucao += ';';
        } else {
            instrucao += ',';
        }
    }
    return database.executar(instrucao);
}

function atualizar(idPost, textoPost) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", idPost, textoPost);

    var instrucao = `
        UPDATE post SET textoPost = '${textoPost}', dataEdicao = now() WHERE idPost = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function apagar(idPost) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagar():", idPost);

    var instrucao = `
        DELETE FROM post WHERE idPost = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // entrar,
    cadastrar,
    cadastrarCategorias,
    listar,
    listarUltimoPost,
    visualizar,
    atualizar,
    apagar,
};