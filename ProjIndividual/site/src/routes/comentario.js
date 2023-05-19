var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/", function (req, res) {
    comentarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    comentarioController.listar(req, res);
});

router.get("/listar/:idPost", function (req, res) {
    comentarioController.listarPorPost(req, res);
});

router.post("/cadastrar", function (req, res) {
    comentarioController.cadastrar(req, res);
});

router.put("/atualizar", function (req, res) {
    comentarioController.atualizar(req, res);
});

router.delete("/apagar", function (req, res) {
    comentarioController.apagar(req, res);
});

module.exports = router;