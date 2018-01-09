var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
  res.json([{
    phone: "Tel. 250. 929. 7117",
    address: "2720 Mill bay RD, Mill bay, BC, V0R 2P1",
    hours: "Open 7 days a week 11:30AM ~ 9:00PM",
    email: "millbaysushi@gmail.com"
  }]);
});

module.exports = router;
