var database = require("../database/config")

function listar() {
    console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM comentario;
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

function cadastrar(post, texto, usuario) {
    console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    var now = new Date();
    var dataHora = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

    var idComentario;
    database.executar(`SELECT MAX(idComentario) FROM comentario WHERE fkPost = ${post};`).then(function(resultado) {
        idComentario = json(resultado);
    });

    console.log(idComentario);

    var instrucao = `
        INSERT INTO comentario (fkPost, idComentario, textoComentario, dataCriacao, dataEdicao, fkUsuario) VALUES (${post}, ${idComentario}, '${texto}', '${dataHora}', '${dataHora}', ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // entrar,
    cadastrar,
    listar,
};