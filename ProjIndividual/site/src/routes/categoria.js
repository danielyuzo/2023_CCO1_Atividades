var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.get("/", function (req, res) {
    categoriaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    categoriaController.listar(req, res);
});

router.get("/listar/:idPost", function (req, res) {
    categoriaController.listarPorPost(req, res);
});

module.exports = router;