var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idEmpresa", function (req, res) {
  console.log("Passando na rota");
  medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idEmpresa", function (req, res) {
  console.log("Passando na rota");
  medidaController.buscarMedidasEmTempoReal(req, res);
});

// Medida diaria
router.get("/medida-diaria/:idEmpresa", function (req, res) {
  medidaController.calcularMedidas(req, res);
});

router.get("/tempo-real/:idEmpresa", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-real/:idEmpresa", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

module.exports = router;
