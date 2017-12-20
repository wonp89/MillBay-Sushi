var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
  res.json([{
    phone: "007-007-007",
    address: "Mill Bay Victoria"
  }]);
});

module.exports = router;
