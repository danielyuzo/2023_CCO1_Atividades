var database = require("../database/config")

function listar() {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT p.idPost, p.titulo, p.textoPost, p.dataCriacao, p.dataEdicao, u.username 
            FROM post AS p JOIN usuario AS u ON p.fkUsuario = u.idUsuario ORDER BY dataCriacao DESC, idPost DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function visualizar(idPost) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    // var instrucao = `
        // SELECT * FROM post JOIN comentario ON fkPost = idPost JOIN usuario ON  WHERE idPost = ${idPost};
    // `;
    var instrucao = `
        SELECT p.idPost, p.titulo, p.textoPost, p.dataCriacao, p.dataEdicao, u.username
        FROM post AS p JOIN usuario AS u ON p.fkUsuario = u.idUsuario 
        WHERE p.idPost = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function entrar(email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
//     var instrucao = `
//         SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function cadastrar(titulo, texto, usuario) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    var now = new Date();
    var dataHora = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

    var instrucao = `
        INSERT INTO post (titulo, texto, dataCriacao, dataEdicao, fkUsuario) VALUES ('${titulo}', '${texto}', '${dataHora}', '${dataHora}', ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // entrar,
    cadastrar,
    listar,
    visualizar,
};