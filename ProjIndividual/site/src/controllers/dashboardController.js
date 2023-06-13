var dashboardModel = require("../models/dashboardModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA dashboardController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function obterDados(req, res) {
    var metrica = req.params.metrica;
    var agrupamento = req.params.agrupamento;
    var periodo = req.params.periodo;
    
    /* 
        Array que irá conter a query em construcao:
        0: SELECT
        1: FROM
        2: WHERE
        3: GROUP BY
        4: ORDER BY
    */
    var instrucao = ['', '', '', '', ''];
    var erro = false;

    switch (agrupamento) {
        case 'categoria':
            instrucao[0] = 'SELECT cat.nome AS label, ';
            instrucao[1] = 'FROM post AS p JOIN visualizacoes AS v ON v.fkPost = p.idPost JOIN categoriaPost AS cp ON p.idPost = cp.fkPost JOIN categoria AS cat ON cat.idCategoria = cp.fkCategoria ';
            instrucao[3] = 'GROUP BY label ';
            break;

        case 'post':
            instrucao[0] = 'SELECT p.titulo AS label, ';
            instrucao[1] = 'FROM post AS p JOIN visualizacoes AS v ON v.fkPost = p.idPost JOIN categoriaPost AS cp ON p.idPost = cp.fkPost JOIN categoria AS cat ON cat.idCategoria = cp.fkCategoria ';
            instrucao[3] = 'GROUP BY label ';
            break;

        case 'mes':
            instrucao[0] = 'SELECT MONTH(p.dataCriacao) AS label, ';
            instrucao[1] = 'FROM post AS p JOIN visualizacoes AS v ON v.fkPost = p.idPost JOIN categoriaPost AS cp ON p.idPost = cp.fkPost JOIN categoria AS cat ON cat.idCategoria = cp.fkCategoria ';
            instrucao[3] = 'GROUP BY label ';
            instrucao[4] = 'ORDER BY label ASC';
            break;

        case 'semana':
            instrucao[0] = 'SELECT DAYOFWEEK(p.dataCriacao) AS label, ';
            instrucao[1] = 'FROM post AS p JOIN visualizacoes AS v ON v.fkPost = p.idPost JOIN categoriaPost AS cp ON p.idPost = cp.fkPost JOIN categoria AS cat ON cat.idCategoria = cp.fkCategoria ';
            instrucao[3] = 'GROUP BY label ';
            instrucao[4] = 'ORDER BY label ASC';
            break;

        default:
            erro = true;
            break;
    }

    switch (metrica) {
        case 'visualizacao':
            instrucao[0] += 'SUM(v.quantidade) AS dado ';
            instrucao[4] ||= 'ORDER BY dado DESC';
            break;
            
        case 'comentario':
            instrucao[0] += 'COUNT(com.idComentario) AS dado ';
            instrucao[1] += 'LEFT JOIN comentario AS com ON com.fkPost = p.idPost ';
            instrucao[4] ||= 'ORDER BY dado DESC';
            break;
        
        default:
            erro = true;
            break;
    }

    switch (periodo) {
        case 'total': 

            break;

        case 'ano': 
            instrucao[2] = 'WHERE p.dataCriacao >= DATE_SUB(now(), INTERVAL 1 YEAR) ';
            break;

        case 'mes': 
            instrucao[2] = 'WHERE p.dataCriacao >= DATE_SUB(now(), INTERVAL 1 MONTH) ';
            break;

        case 'semana': 
            instrucao[2] = 'WHERE p.dataCriacao >= DATE_SUB(now(), INTERVAL 1 WEEK) ';
            break;

        default:
            erro = true;
            break;
    }

    if (!erro) {
    dashboardModel.obterDados(instrucao.join(''))
        .then(function (resultado) {
            if (resultado.length > 0) {
                if (agrupamento == 'mes') {
                    for (var i = 1; i <= 12; i++) {
                        if (resultado[i-1] == undefined || resultado[i-1].label > i) {
                            resultado.splice(i-1, 0, {label: i, dado: 0});
                        }
                    }
                } else if (agrupamento == 'semana') {
                    for (var i = 1; i <= 7; i++) {
                        if (resultado[i-1] == undefined || resultado[i-1].label > i) {
                            resultado.splice(i-1, 0, {label: i, dado: 0});
                        }
                    }
                }
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
    } else {
        res.status(204).send("Parâmetros errados!")
    }
}
module.exports = {
    obterDados,
    testar
}