var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.json([{
    name: "Mill Bay Sushi",
    paragraph: "We are the restaurant..."
  }]);
});

module.exports = router;
