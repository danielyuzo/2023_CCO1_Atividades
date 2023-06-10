var dashboardModel = require("../models/dashboardModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA dashboardController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    dashboardModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    listar,
    testar
}