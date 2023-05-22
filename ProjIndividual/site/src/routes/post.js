var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/", function (req, res) {
    postController.testar(req, res);
});

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

router.get("/visualizar/:idPost", function (req, res) {
    postController.visualizar(req, res);
});


router.post("/cadastrar", function (req, res) {
    postController.cadastrar(req, res);
});

router.put("/atualizar", function(req, res) {
    postController.atualizar(req, res);
});

router.delete("/apagar", function(req, res) {
    postController.apagar(req, res);
});

// router.post("/autenticar", function (req, res) {
//     postController.entrar(req, res);
// });

module.exports = router;