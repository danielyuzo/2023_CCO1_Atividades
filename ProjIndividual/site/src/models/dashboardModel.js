var database = require("../database/config")

function obterDados(instrucao) {

    return database.executar(instrucao);
    }


module.exports = {
    obterDados,
};  