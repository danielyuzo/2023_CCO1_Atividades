var comentarioModel = require("../models/comentarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA comentarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    comentarioModel.listar()
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

function listarPorPost(req, res) {
    var idPost = req.params.idPost;

    comentarioModel.listarPorPost(idPost)
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

function cadastrar(req, res) {
    var post = req.body.postServer;
    var texto = req.body.textoServer;
    var usuario = req.body.usuarioServer;

    if (post == undefined) {
        res.status(400).send("Seu post está undefined!");
    } else if (texto == undefined) {
        res.status(400).send("Seu texto está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Sua usuario está undefined!");
    } else {
        
        comentarioModel.cadastrar(post, texto, usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir o comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res) {
    var idComentario = req.body.idComentarioServer;
    var textoComentario = req.body.textoComentarioServer;

    if (idComentario == undefined) {
        res.status(400).send("Seu idComentario está undefined!");
    } else if (textoComentario == undefined) {
        res.status(400).send("Seu textoComentario está undefined!");
    } else {
        
        comentarioModel.atualizar(idComentario, textoComentario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar o comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagar(req, res) {
    var idComentario = req.body.idComentarioServer;

    if (idComentario == undefined) {
        res.status(400).send("Seu idComentario está undefined!");
    } else {
        
        comentarioModel.apagar(idComentario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao apagar o comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    // entrar,
    cadastrar,
    listar,
    listarPorPost,
    testar,
    atualizar,
    apagar
}