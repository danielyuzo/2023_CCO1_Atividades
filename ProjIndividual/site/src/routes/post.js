var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/", function (req, res) {
    postController.testar(req, res);
});

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    postController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     postController.entrar(req, res);
// });

module.exports = router;