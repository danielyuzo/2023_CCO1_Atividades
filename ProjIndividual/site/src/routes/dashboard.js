var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/", function (req, res) {
    dashboardController.testar(req, res);
});

router.get("/obterDados/:metrica-:agrupamento-:periodo", function (req, res) {
    dashboardController.obterDados(req, res);
});

module.exports = router;