var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.json([{
    title: "Welcome to Mill Bay Sushi",
    paragraph: "This is a website of Mill Bay Sushi"
  }]);
});

module.exports = router;
