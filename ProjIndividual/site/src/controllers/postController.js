var postModel = require("../models/postModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA postController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    postModel.listar()
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

function listarUltimoPost(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    }
    postModel.listarUltimoPost(idUsuario)
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

function visualizar(req, res) {
    var idPost = req.body.idPostServer;

    if (idPost == undefined) {
        res.status(400).send("Seu idPost está undefined!");
    } else {
        postModel.visualizar(idPost)
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
}

function buscarPosts(req, res) {
    var titulo = req.params.titulo;
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var texto = req.body.textoServer;
    var usuario = req.body.usuarioServer;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (texto == undefined) {
        res.status(400).send("Seu texto está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Sua usuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo postModel.js
        postModel.cadastrar(titulo, texto, usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarCategorias(req, res) {
    var categorias = req.body.categoriasServer;
    var idPost = req.body.idPostServer;
    if (categorias == undefined) {
        res.status(400).send("Suas categorias estão undefined!");
    } else if (idPost == undefined) {
        res.status(400).send("Seu idPost está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo postModel.js
        postModel.cadastrarCategorias(categorias, idPost)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarVisualizacoes(req, res) {
    var idPost = req.body.idPostServer;
    if (idPost == undefined) {
        res.status(400).send("Seu idPost está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo postModel.js
        postModel.cadastrarVisualizacoes(idPost)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function atualizar(req, res) {
    var textoPost = req.body.textoPostServer;
    var idPost = req.body.idPostServer;

    if (textoPost == undefined) {
        res.status(400).send("Seu textoPost está undefined!");
    } else if(idPost == undefined) {
        res.status(400).send("Seu idPost está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo postModel.js
        postModel.atualizar(idPost, textoPost)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar o post! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagar(req, res) {
    var idPost = req.body.idPostServer;

    if (idPost == undefined) {
        res.status(400).send("Seu idPost está undefined!");
    } else {
        
        postModel.apagar(idPost)
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
    cadastrarCategorias,
    cadastrarVisualizacoes,
    listar,
    listarUltimoPost,
    visualizar,
    testar,
    atualizar,
    apagar
}