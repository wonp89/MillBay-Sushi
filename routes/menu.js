var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res, next) {
  res.json([
    {
      id: 0, name: 'Appetizer', show: false, food:
      [
        {
          name: "Miso Soup",
          price: "CA$1.90"
        },
        {
          name: "Steamed Rice",
          price: "CA$1.90"
        },
        {
          name: "Edamame",
          price: "CA$4.90",
          about: "Steamed soy beans"
        },
        {
          name: "Agedashi Tofu",
          price: "CA$5.90",
          about: 'Deep fried tofu with hot tempura sauce'
        },
        {
          name: "Gyoza",
          price: "CA$6.90"
        },
        {
          name: "Monkey Brain",
          price: "CA$7.90",
          about: "Deep fried spicy tuna and crab in half size of avocado with sushi sauce, sesame"
        },
        {
          name: "Chicken Yakitori",
          price: "CA$8.90"
        },
        {
          name: "Chicken Karrage",
          price: "CA$8.90",
          about: "Deep fried chicken wings"
        },
        {
          name: "Tuna Tataki",
          price: "CA$12.90",
          about: "Seared albacore with ponzu sauce, spicy sauce, salad sauce, green onion, sesame"
        },
        {
          name: "Okonomiyaki (Pork or Seafood)",
          price: "CA$12.90",
          about: "Cabbage, pork or seafood, egg, flour with sauce"
        },
        {
          name: "Tuna Paradise",
          price: "CA$12.90",
          about: "Seaweed salad, pear, diced tuna, massago"
        },
        {
          name: "Vegetable Sunomono",
          price: "CA$4.90"
        },
        {
          name: "Shrimp Sunomono",
          price: "CA$6.90"
        },
        {
          name: "Tako Sunomono",
          price: "CA$6.90"
        },
        {
          name: "Seafood Sunomono",
          price: "CA$1.90"
        },
        {
          name: "Gomae Salad",
          price: "CA$5.90",
          about: "Spinach salad with sesame sauce"
        },
        {
          name: "Seaweed Salad",
          price: "CA$5.90"
        },
        {
          name: "Green Salad",
          price: "CA$8.90"
        },
        {
          name: "Spicy Tuna Salad",
          price: "CA$11.90"
        },
        {
          name: "Spicy Salmon Salad",
          price: "CA$11.90"
        },
        {
          name: "Smoked Salmon Salad",
          price: "CA$11.90"
        },
        {
          name: "Cucumber Salad Roll",
          price: "CA$11.90",
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
