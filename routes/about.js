var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.json([
              {
              id: 1,
              name: "Mill Bay Sushi",
              paragraph: "We are the restaurant..."
              },
              {
              id: 2,
              name: "JoJo",
              paragraph: "sfsd"
              }
          ]);
});

module.exports = router;
