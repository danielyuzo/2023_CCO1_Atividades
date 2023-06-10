var database = require("../database/config")

function obterDados(instrucao) {
    console.log(instrucao);
    return database.executar(instrucao);
    }


module.exports = {
    obterDados,
};  