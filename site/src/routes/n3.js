var express = require("express");
var router = express.Router();

var n3Controller = require("../controllers/n3Controller");

router.post("/pergunta", function(req, res){
  n3Controller.pergunta(req, res);
});

module.exports = router;