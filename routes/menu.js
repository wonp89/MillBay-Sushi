var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res, next) {
  res.json([
    {
      id: 0, name: 'Appetizer', show: false, food:
      [
        {
          name: "California roll",
          price: "9.95"
        }
      ]
    },
    {
      id: 1, name: 'Baked Roll', show: false, food:
      [
        {
          name: "tuna",
          price: "9.95"
        },
        {
          name: "salmon",
          price: "5.45"
        }
      ]
    }
  ]);
});

module.exports = router;
