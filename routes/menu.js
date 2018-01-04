var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res, next) {
  res.json([
    {
      id: 0, name: 'Appetizer', show: false, food:
      [
        {
          name: "Miso Soup",
          price: "1.90"
        },
        {
          name: "Steamed Rice",
          price: "1.90"
        },
        {
          name: "Edamame",
          price: "4.90",
          about: "Steamed soy beans"
        },
        {
          name: "Agedashi Tofu",
          price: "5.90",
          about: 'Deep fried tofu with hot tempura sauce'
        },
        {
          name: "Gyoza",
          price: "6.90"
        },
        {
          name: "Monkey Brain",
          price: "7.90",
          about: "Deep fried spicy tuna and crab in half size of avocado with sushi sauce, sesame"
        },
        {
          name: "Chicken Yakitori",
          price: "8.90"
        },
        {
          name: "Chicken Karrage",
          price: "8.90",
          about: "Deep fried chicken wings"
        },
        {
          name: "Tuna Tataki",
          price: "12.90",
          about: "Seared albacore with ponzu sauce, spicy sauce, salad sauce, green onion, sesame"
        },
        {
          name: "Okonomiyaki (Pork or Seafood)",
          price: "12.90",
          about: "Cabbage, pork or seafood, egg, flour with sauce"
        },
        {
          name: "Tuna Paradise",
          price: "12.90",
          about: "Seaweed salad, pear, diced tuna, massago"
        },
        {
          name: "Vegetable Sunomono",
          price: "4.90"
        },
        {
          name: "Shrimp Sunomono",
          price: "6.90"
        },
        {
          name: "Tako Sunomono",
          price: "6.90"
        },
        {
          name: "Seafood Sunomono",
          price: "1.90"
        },
        {
          name: "Gomae Salad",
          price: "5.90",
          about: "Spinach salad with sesame sauce"
        },
        {
          name: "Seaweed Salad",
          price: "5.90"
        },
        {
          name: "Green Salad",
          price: "8.90"
        },
        {
          name: "Spicy Tuna Salad",
          price: "11.90"
        },
        {
          name: "Spicy Salmon Salad",
          price: "11.90"
        },
        {
          name: "Smoked Salmon Salad",
          price: "11.90"
        },
        {
          name: "Cucumber Salad Roll",
          price: "11.90",
          about: "Top: Sushi sauce, ponzu sauce, spicy sauce, salad sauce & Inside: Smoked salmon, crab meat, tamago, avocado, carrot, asparagus, oshinko"
        },
      ]
    },
    {
      id: 1, name: 'Baked Roll', show: false, food:
      [
        {
          name: "tuna",
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
        }
      ]
    },
    {
      id: 1, name: 'Baked Roll', show: false, food:
      [
        {
          name: "tuna",
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
        }
      ]
    },
    {
      id: 1, name: 'Baked Roll', show: false, food:
      [
        {
          name: "tuna",
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
        }
      ]
    },
    {
      id: 1, name: 'Baked Roll', show: false, food:
      [
        {
          name: "tuna",
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
        }
      ]
    },
  ]);
});

module.exports = router;
