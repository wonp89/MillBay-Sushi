var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res, next) {
  res.json([{
    food: "California roll",
    price: "9.95"
  }]);
});

module.exports = router;
