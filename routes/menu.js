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
        {
          name: "Motoyaki (2pcs)",
          price: "CA$8.95",
          about: "Baked oysters topped with mayonnaise"
        },
        {
          name: "Takoyaki (5pcs)",
          price: "CA$6.95",
          about: "Batter filled ball-shaped of fried octopus with green onions"
        },
        {
          name: "Korokke",
          price: "CA$6.95"
        },
        {
          name: "Seafood Yakitori",
          price: "CA$12.90",
          about: "Grilled skewered seafood dipped in a Teriyaki sauce"
        },
        {
          name: "Banana Ice-cream",
          price: "CA$9.95",
          about: "Vanilla or Green Tea ice-cream"
        },
      ]
    },
    {
      id: 1, name: 'Sashimi', show: false, food:
      [
        {
          name: "Tuna Sashimi (8pcs)",
          price: "CA$14.90",
          about: "Albacore tuna"
        },
        {
          name: "Spicy Tuna Sashimi (8pcs)",
          price: "CA$14.90"
        },
        {
          name: "Salmon Sashimi (8pcs)",
          price: "CA$14.90",
          about: "Wild sockeye salmon"
        },
        {
          name: "Spicy Salmon Sashimi (8pcs)",
          price: "CA$14.90",
        },
        {
          name: "Tuna and Salmon Sashimi (8pcs)",
          price: "CA$14.90"
        },
        {
          name: "Toro Sashimi (8pcs)",
          price: "CA$19.90"
        },
        {
          name: "Yellow Tail Sashimi (8pcs)",
          price: "CA$22.90",
          about: "Hamachi"
        },
        {
          name: "Assorted Sashimi (15pcs)",
          price: "CA$27.50",
          about: "4 salmon, 4 tuna, 2tako, 2 tai, 1 hokigai, 1 ika, 1 toro"
        },
        {
          name: "Deluxe Sashimi (25pcs)",
          price: "CA$47.50",
          about: "6 salmon, 6 tuna, 3 tako, 3 tai, 2 hokigai, 2 ika, 2 toro, 1 amaebi"
        },
        {
          name: "House Sashimi (46pcs)",
          price: "CA$85.50",
          about: " salmon, 8 tuna, 4 tako, 4 tai, 4 hokigai, 4 ika, 4 toro, 2 amaebi, 4 hamachi, 4 saba"
        },
      ]
    },
    {
      id: 2, name: 'Sushi Nigiri', show: false, food:
      [
        {
          name: "Avocado",
          price: "CA$1.75"
        },
        {
          name: "Inari (Bean curd)",
          price: "CA$1.75"
        },
        {
          name: "Tamago (Sweet egg)",
          price: "CA$1.75"
        },
        {
          name: "Sake (Wild sockey salmon)",
          price: "CA$2.50"
        },
        {
          name: "Maguro (Tuna)",
          price: "CA$2.50"
        },
        {
          name: "Tai (Red snapper)",
          price: "CA$2.50"
        },
        {
          name: "Ebi (Steamed Prawn)",
          price: "CA$2.50"
        },
        {
          name: "Ika (Squid)",
          price: "CA$2.50"
        },
        {
          name: "Seared Ika (Squid)",
          price: "CA$2.50"
        },
        {
          name: "Saba (Mackerel)",
          price: "CA$2.50"
        },
        {
          name: "Hokigai (Surf calm)",
          price: "CA$2.50"
        },
        {
          name: "Masago (Smelt egg)",
          price: "CA$2.50"
        },
        {
          name: "Tobiko (Flying fish egg)",
          price: "CA$2.75"
        },
        {
          name: "Tako (Octous)",
          price: "CA$2.75"
        },
        {
          name: "Unagi (Fresh water eel)",
          price: "CA$2.75"
        },
        {
          name: "Toro (Tuna belly)",
          price: "CA$2.75"
        },
        {
          name: "Ikura (Salmon roe)",
          price: "CA$3.25"
        },
        {
          name: "Hotate (Scallop)",
          price: "CA$3.25"
        },
        {
          name: "Amaebi (Sweet prawn)",
          price: "CA$3.25"
        },
        {
          name: "Chopped Scallop with Masago",
          price: "CA$3.25"
        },
        {
          name: "Hamachi",
          price: "CA$3.25"
        }
      ]
    },
    {
      id: 3, name: 'Hoso Maki', show: false, food:
      [
        {
          name: "Cucumer Roll",
          price: "3.50"
        },
        {
          name: "Avocado Roll",
          price: "3.50"
        },
        {
          name: "Oshinko Roll",
          price: "3.50",
          about: "Japanese pickled radish"
        },
        {
          name: "Asparagus Roll",
          price: "3.25"
        },
        {
          name: "Salmon Roll",
          price: "4.75",
          about: "Wild sockey"
        },
        {
          name: "Tuna Roll",
          price: "4.75"
        },
        {
          name: "Spicy Ebi Roll",
          price: "4.50",
          about: "Steamed prawn and spicy sauce"
        },
        {
          name: "Cheese Roll",
          price: "3.25"
        },
        {
          name: "Tamago Roll",
          price: "4.25",
          about: "Sweet egg"
        },
        {
          name: "Negitoro Roll",
          price: "6.50",
          about: "Tuna belly and green onion"
        },
        {
          name: "Gomae Roll",
          price: "4.50",
          about: "Spinach salad with side sesame sauce"
        },
      ]
    },
    {
      id: 4, name: 'Korean Food', show: false, food:
      [
        {
          name: "tuna",
          price: "9.95"
        }
      ]
    },
    {
      id: 5, name: 'Sushi Pizza', show: false, food:
      [
        {
          name: "tuna",
          price: "9.95"
        }
      ]
    },
    {
      id: 6, name: 'Dinner', show: false, food:
      [
        {
          name: "tuna",
          price: "9.95"
        }
      ]
    },
    {
      id: 7, name: 'Lunch Special', show: false, food:
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
    }
  ]);
});

module.exports = router;
