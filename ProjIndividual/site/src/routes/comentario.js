var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/", function (req, res) {
    comentarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    comentarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    comentarioController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     comentarioController.entrar(req, res);
// });

module.exports = router;