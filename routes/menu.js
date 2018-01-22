var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res, next) {
  res.json([
    {
      id: 0, name: 'Appetizer', show: false, food:
      [
        {
          name: "Miso Soup",
          price: "$1.90"
        },
        {
          name: "Steamed Rice",
          price: "$1.90"
        },
        {
          name: "Edamame",
          price: "$4.90",
          about: "Steamed soy beans"
        },
        {
          name: "Agedashi Tofu",
          price: "$5.90",
          about: 'Deep fried tofu with hot tempura sauce'
        },
        {
          name: "Gyoza",
          price: "$6.90"
        },
        {
          name: "Monkey Brain",
          price: "$7.90",
          about: "Deep fried spicy tuna and crab in half size of avocado with sushi sauce, sesame"
        },
        {
          name: "Chicken Yakitori",
          price: "$8.90"
        },
        {
          name: "Chicken Karrage",
          price: "$8.90",
          about: "Deep fried chicken wings"
        },
        {
          name: "Tuna Tataki",
          price: "$12.90",
          about: "Seared albacore with ponzu sauce, spicy sauce, salad sauce, green onion, sesame"
        },
        {
          name: "Okonomiyaki (Pork or Seafood)",
          price: "$12.90",
          about: "Cabbage, pork or seafood, egg, flour with sauce"
        },
        {
          name: "Tuna Paradise",
          price: "$12.90",
          about: "Seaweed salad, pear, diced tuna, massago"
        },
        {
          name: "Vegetable Sunomono",
          price: "$4.90"
        },
        {
          name: "Shrimp Sunomono",
          price: "$6.90"
        },
        {
          name: "Tako Sunomono",
          price: "$6.90"
        },
        {
          name: "Seafood Sunomono",
          price: "$1.90"
        },
        {
          name: "Gomae Salad",
          price: "$5.90",
          about: "Spinach salad with sesame sauce"
        },
        {
          name: "Seaweed Salad",
          price: "$5.90"
        },
        {
          name: "Green Salad",
          price: "$8.90"
        },
        {
          name: "Spicy Tuna Salad",
          price: "$11.90"
        },
        {
          name: "Spicy Salmon Salad",
          price: "$11.90"
        },
        {
          name: "Smoked Salmon Salad",
          price: "$11.90"
        },
        {
          name: "Cucumber Salad Roll",
          price: "$11.90",
          about: "Top: Sushi sauce, ponzu sauce, spicy sauce, salad sauce & Inside: Smoked salmon, crab meat, tamago, avocado, carrot, asparagus, oshinko"
        },
        {
          name: "Motoyaki (2pcs)",
          price: "$8.95",
          about: "Baked oysters topped with mayonnaise"
        },
        {
          name: "Takoyaki (5pcs)",
          price: "$6.95",
          about: "Batter filled ball-shaped of fried octopus with green onions"
        },
        {
          name: "Korokke",
          price: "$6.95"
        },
        {
          name: "Seafood Yakitori",
          price: "$12.90",
          about: "Grilled skewered seafood dipped in a Teriyaki sauce"
        },
        {
          name: "Banana Ice-cream",
          price: "$9.95",
          about: "Vanilla or Green Tea ice-cream"
        },
      ]
    },
    {
      id: 1, name: 'Sashimi', show: false, food:
      [
        {
          name: "Tuna Sashimi (8pcs)",
          price: "$14.90",
          about: "Albacore tuna"
        },
        {
          name: "Spicy Tuna Sashimi (8pcs)",
          price: "$14.90"
        },
        {
          name: "Salmon Sashimi (8pcs)",
          price: "$14.90",
          about: "Wild sockeye salmon"
        },
        {
          name: "Spicy Salmon Sashimi (8pcs)",
          price: "$14.90",
        },
        {
          name: "Tuna and Salmon Sashimi (8pcs)",
          price: "$14.90"
        },
        {
          name: "Toro Sashimi (8pcs)",
          price: "$19.90"
        },
        {
          name: "Yellow Tail Sashimi (8pcs)",
          price: "$22.90",
          about: "Hamachi"
        },
        {
          name: "Assorted Sashimi (15pcs)",
          price: "$27.50",
          about: "4 salmon, 4 tuna, 2tako, 2 tai, 1 hokigai, 1 ika, 1 toro"
        },
        {
          name: "Deluxe Sashimi (25pcs)",
          price: "$47.50",
          about: "6 salmon, 6 tuna, 3 tako, 3 tai, 2 hokigai, 2 ika, 2 toro, 1 amaebi"
        },
        {
          name: "House Sashimi (46pcs)",
          price: "$85.50",
          about: " salmon, 8 tuna, 4 tako, 4 tai, 4 hokigai, 4 ika, 4 toro, 2 amaebi, 4 hamachi, 4 saba"
        },
      ]
    },
    {
      id: 2, name: 'Sushi Nigiri', show: false, food:
      [
        {
          name: "Avocado",
          price: "$1.75"
        },
        {
          name: "Inari (Bean curd)",
          price: "$1.75"
        },
        {
          name: "Tamago (Sweet egg)",
          price: "$1.75"
        },
        {
          name: "Sake (Wild sockey salmon)",
          price: "$2.50"
        },
        {
          name: "Maguro (Tuna)",
          price: "$2.50"
        },
        {
          name: "Tai (Red snapper)",
          price: "$2.50"
        },
        {
          name: "Ebi (Steamed Prawn)",
          price: "$2.50"
        },
        {
          name: "Ika (Squid)",
          price: "$2.50"
        },
        {
          name: "Seared Ika (Squid)",
          price: "$2.50"
        },
        {
          name: "Saba (Mackerel)",
          price: "$2.50"
        },
        {
          name: "Hokigai (Surf calm)",
          price: "$2.50"
        },
        {
          name: "Masago (Smelt egg)",
          price: "$2.50"
        },
        {
          name: "Tobiko (Flying fish egg)",
          price: "$2.75"
        },
        {
          name: "Tako (Octous)",
          price: "$2.75"
        },
        {
          name: "Unagi (Fresh water eel)",
          price: "$2.75"
        },
        {
          name: "Toro (Tuna belly)",
          price: "$2.75"
        },
        {
          name: "Ikura (Salmon roe)",
          price: "$3.25"
        },
        {
          name: "Hotate (Scallop)",
          price: "$3.25"
        },
        {
          name: "Amaebi (Sweet prawn)",
          price: "$3.25"
        },
        {
          name: "Chopped Scallop with Masago",
          price: "$3.25"
        },
        {
          name: "Hamachi",
          price: "$3.25"
        }
      ]
    },
    {
      id: 3, name: 'Hoso Maki', show: false, food:
      [
        {
          name: "Cucumer Roll",
          price: "$3.50"
        },
        {
          name: "Avocado Roll",
          price: "$3.50"
        },
        {
          name: "Oshinko Roll",
          price: "$3.50",
          about: "Japanese pickled radish"
        },
        {
          name: "Asparagus Roll",
          price: "$3.25"
        },
        {
          name: "Salmon Roll",
          price: "$4.75",
          about: "Wild sockey"
        },
        {
          name: "Tuna Roll",
          price: "$4.75"
        },
        {
          name: "Spicy Ebi Roll",
          price: "$4.50",
          about: "Steamed prawn and spicy sauce"
        },
        {
          name: "Cheese Roll",
          price: "$3.25"
        },
        {
          name: "Tamago Roll",
          price: "$4.25",
          about: "Sweet egg"
        },
        {
          name: "Negitoro Roll",
          price: "$6.50",
          about: "Tuna belly and green onion"
        },
        {
          name: "Gomae Roll",
          price: "$4.50",
          about: "Spinach salad with side sesame sauce"
        },
      ]
    },
    {
      id: 4, name: 'Korean Food', show: false, food:
      [
        {
          name: "Hot Stone Rice Bowl (돌솥비빔밥)",
          price: "$18.90",
          about: "Steamed rice, beef, spinach, carrot, beans sprout, zucchini, egg, sesame oil"
        },
        {
          name: "Haemul Pajeon (해물파전)",
          price: "$18.95",
          about: "Seafood pancake"
        },
        {
          name: "Jeyug-bokkeum (제육볶음)",
          price: "$15.95",
          about: "Spicy stir-fried pork with vegetables"
        },
        {
          name: "BBQ Pork Ribs (등갈비)",
          price: "$18.95"
        },
        {
          name: "Japchae (잡채)",
          price: "$15.95",
          about: "Potato starch noodles stir fried with vegetables"
        },
        {
          name: "Spicy Chirashi Don (회덮밥)",
          price: "$20.90"
        },
        {
          name: "Spicy Chirahshi Noodle (회국수)",
          price: "$20.90"
        },
        {
          name: "Kimbap (김밥)",
          price: "$14.95",
          about: "Korean style roll with imitation crab, spinach, root vegetable, tamago, carrot, oshinko, and inari"
        },
        {
          name: "B.C Fried Rice (샐몬볶음밥)",
          price: "$14.95",
          about: "Fried rice with barbecued salmon"
        },
        {
          name: "Spicy Ramen (매운라면)",
          price: "$11.95"
        },
        {
          name: "Miso Ramen (미소라면)",
          price: "$11.95"
        }
      ]
    },
    {
      id: 5, name: 'Sushi Pizza & Temaki', show: false, food:
      [
        {
          category: "Sushi Pizza"
        },
        {
          name: "Vegetable Sushi Pizza",
          price: "$11.50",
          about: "Sliced avocado, salad, deep fried sushi rice, spicy mayo, sushi sauce, ponzu sauce, salad sauce, wasabi sauce"
        },
        {
          name: "Sushi Pizza",
          price: "$12.50",
          about: "Spicy salmon, salad, deep fried sushi rice, spicy mayo, sushi sauce, ponzu sauce, spicy sauce, salad sauce, wasabi sauce"
        },
        {
          category: "Temaki (Cone)"
        },
        {
          name: "California Cone",
          price: "$3.90"
        },
        {
          name: "BC Cone",
          price: "$4.90"
        },
        {
          name: "Yam Cone",
          price: "$4.90"
        },
        {
          name: "Spicy Tuna Cone",
          price: "$5.90"
        },
        {
          name: "Dynamite Cone",
          price: "$5.90"
        },
        {
          name: "Chopped Scallop Cone",
          price: "$7.90"
        }
      ]
    },
    {
      id: 6, name: 'Lunch / Dinner', show: false, food:
      [
        {
          category: "Lunch"
        },
        {
          name: "Vegetable Roll Combo (Vegetarian)",
          price: "$10.95"
        },
        {
          name: "B.B.Q Tofu Teriyaki & Rice Combo",
          price: "$11.95"
        },
        {
          name: "Teriyaki & Rice Combo",
          price: "$11.95"
        },
        {
          name: "Chicken Teriyaki & Rice Combo",
          price: "$11.95"
        },
        {
          name: "Tuna & Salmon Roll Combo",
          price: "$12.95"
        },
        {
          name: "Salmon Teriyaki & Rice Combo",
          price: "$13.95"
        },
        {
          name: "Sushi Combo (5pcs)",
          price: "$14.95"
        },
        {
          name: "Sashimi & Rice Combo (6pcs)",
          price: "$14.95"
        },
        {
          name: "Unagi & Rice Combo (5pcs)",
          price: "$15.95"
        },
        {
          about: "• Lunch Hour 11:30am - 2:30pm / All served with miso soup, appy tempura, green salad, fresh fruit & California roll • "
        },
        {
          category: "Dinner"
        },
        {
          name: "Chicken Teriyaki Dinner",
          price: "$19.90",
          about: "Served with rice, miso soup, salad, tempura, dynamite roll"
        },
        {
          name: "Beef Teriyaki Dinner",
          price: "$19.90",
          about: "Served with rice, miso soup, salad, tempura, dynamite roll"
        },
        {
          name: "Salmon Teriyaki Dinner",
          price: "$21.90",
          about: "Served with rice, miso soup, salad, tempura, dynamite roll"
        },
        {
          name: "Dinner Special (Chicken or Beef)",
          price: "$27.90",
          about: "Served with miso soup, sunomono, tempura, salad, dynamite roll, 2 pcs sushi, 4 pcs sashimi and customer choice of chicken or beef teriyaki"
        }
      ]
    },
    {
      id: 7, name: 'Fresh Fish Roll', show: false, food:
      [
        {
          name: "California Roll",
          price: "$4.50",
          about: "Avocado, cucumber & crab meat"
        },
        {
          name: "Salmon Avocado Roll",
          price: "$7.25"
        },
        {
          name: "Tuna Avocado Roll",
          price: "$7.25"
        },
        {
          name: "Spicy Tuan Roll",
          price: "$7.25",
          about: "Cucumber, spicy tuna"
        },
        {
          name: "Spicy Salmon Roll",
          price: "$7.25",
          about: "Cucumber, spicy salmon"
        },
        {
          name: "Chopped Scallop Roll",
          price: "$11.90"
        },
        {
          name: "Futo Maki",
          price: "$10.90",
          about: "Carrot, crab meat, spinach, oshinko, avocado, cucumber, tamago"
        },
        {
          name: "Kamikaze Salmon Roll",
          price: "$11.90",
          about: "TOP: salmon, tempura bits, sushi sauce, spicy mayo sauce, wasabi sauce, INSIDE: cucumber and spicy salmon"
        },
        {
          name: "Kamikaze Tuna Roll",
          price: "$11.90",
          about: "TOP: tuna, tempura bits, sushi sauce, spicy mayo sauce, wasabi sauce, INSIDE: cucumber and spicy tuna"
        },
        {
          name: "Tornado Roll",
          price: "$11.90",
          about: "TOP: steamed prawn, sushi sauce, wasabi sauce, INSIDE: california roll"
        },
        {
          name: "Sashimi Salad Roll",
          price: "$12.90",
          about: "TOP: salmon, tuna, red snapper, salad sauce, sushi sauce, INSIDE: assorted vegetable roll"
        },
        {
          name: "Hawaii Roll",
          price: "$11.90",
          about: "TOP: salmon, tuna, avocado, sushi sauce, wasabi sauce, INSIDE: california roll"
        },
        {
          name: "Philadelphia Roll",
          price: "$11.90",
          about: "TOP: smoked salmon, sushi sauce, wasabi sauce, INSIDE: avocado, asparagus, cheese"
        },
        {
          name: "Boston Roll",
          price: "$12.90",
          about: "TOP: seared tuna, sushi sauce, wasabi sauce, INSIDE: real crab, mayo, masago, avocado"
        },
        {
          name: "Island Roll",
          price: "$15.90",
          about: "TOP: salmon, avocado, sushi sauce, wasabi sauce, INSIDE: scallop, eel, cucumber, cheese"
        }
      ]
    },
    {
      id: 8, name: 'Baked Roll', show: false, food:
      [
        {
          name: "B.C Roll",
          price: "$6.90"
        },
        {
          name: "Chicken Teriyaki Roll",
          price: "$6.90"
        },
        {
          name: "Beef Teriyaki Roll",
          price: "$6.90"
        },
        {
          name: "Alaska Roll",
          price: "$10.90",
          about: "TOP: smoked salmon, sushi sauce, wasabi sauce, INSIDE: crab meat, asparagus, avocado"
        },
        {
          name: "Aladdin Roll",
          price: "$11.90",
          about: "TOP: sushi sauce, INSIDE: eel, steamed prawn, avocado, cucumber, crab meat"
        },
        {
          name: "Baked Salmon Roll",
          price: "$11.90",
          about: "TOP: salmon, sushi sauce, wasabi sauce, sesame, INSIDE: avocado, carrot, cheese"
        },
        {
          name: "Dragon Roll",
          price: "$11.90",
          about: "TOP: eel, sushi sauce, sesame, INSIDE: california roll"
        },
        {
          name: "B.C BBQ Roll",
          price: "$12.90",
          about: "TOP: spicy salmon, unagi sauce, spicy sauce"
        },
        {
          name: "Smoked Salmon Roll",
          price: "$9.90",
          about: "Smoked salmon on top of vegetable roll"
        }
      ]
    },
    {
      id: 9, name: 'Tempura Roll', show: false, food:
      [
        {
          name: "Yam Roll",
          price: "$5.75"
        },
        {
          name: "Deep Fried California Roll",
          price: "$6.75"
        },
        {
          name: "Dynamite Roll",
          price: "$7.50"
        },
        {
          name: "Calamari Tempura Roll",
          price: "$7.50"
        },
        {
          name: "Hamachi Tempura Roll",
          price: "$9.50"
        },
        {
          name: "Deep Fried Spicy Tuna Roll",
          price: "$9.50"
        },
        {
          name: "T.N.T Roll",
          price: "$11.90",
          about: "TOP: spicy tuna, tempura bits, sushi sauce, wasabi sauce, INSIDE: prawn tempura, cucumber"
        },
        {
          name: "Caterpillar Roll",
          price: "$11.90",
          about: "TOP: sliced avocado, tempura bits, sushi sauce, wasabi sauce, INSIDE: prawn tempura, cucumber"
        },
        {
          name: "Spider Roll",
          price: "$11.90",
          about: "TOP: tempura bits, sushi sauce, INSIDE: soft shell, crab tempura, avocado, cucumber, crab meat"
        },
        {
          name: "Grand Canyon Roll (Deep Fried)",
          price: "$14.90",
          about: "TOP: masago, sushi sauce, INSIDE: salmon, tuna, snapper, prawn, cream cheese, avocado, crab meat"
        },
        {
          name: "Red Dragon Roll",
          price: "$14.90",
          about: "TOP: eel, sushi sauce, spicy sauce, INSIDE: prawn tempura, spicy tuna"
        }
      ]
    },
    {
      id: 10, name: 'Special Roll', show: false, food:
      [
        {
          name: "Butterfly Roll",
          price: "$18.90",
          about: "TOP: salmon, tuna, red snapper, steamed prawn, avocado, tempura bits, masago, wasabi sauce, spicy mayo sauce, sushi sauce / INISDE: dynamite roll"
        },
        {
          name: "Special Spider Roll",
          price: "$18,90",
          about: "TOP: soft shell crab, masago, tempura bits, sushi sauce / INSIDE: tamago, avocado, cucumber, crab meat"
        },
        {
          name: "Crazy Roll (Baked)",
          price: "$20.90",
          about: "TOP: baked scallop, tempura bits, masago, soy mayo sauce, sushi sauce, spicy mayo sauce / INSIDE: deep fried spicy tuna roll"
        },
        {
          name: "Firecraker Roll",
          price: "$16.90",
          about: "TOP: seared tuna, tempura bits, masago, spicy sauce, spicy mayo sauce, soy mayo sauce, sushi sauce / INSIDE dynamite roll"
        },
        {
          name: "Volcano Roll (Scallop)",
          price: "$20.90",
          about: "TOP: green salad, scallop, masago, spicy sauce, tomato, sushi sauce, spicy mayo / INSIDE: deep fried spicy tuna roll"
        },
        {
          name: "Volcano Roll (Tuna)",
          price: "$20.90",
          about: "TOP: green salad, tuna, masago, spicy sauce, tomato, sushi sauce, spicy mayo / INSIDE: deep fried spicy tuna roll"
        },
        {
          name: "Cheese Lava Roll",
          price: "$20.90",
          about: "TOP: baked scallop, mushroom, shrimp, onion, cheese, tempura, bits, soy mayo sauce, sushi sauce / INSIDE california roll"
        },
        {
          name: "Kiss of Fire Roll",
          price: "$18.90",
          about: "TOP: tuna, tomato, tempura bits, masago, ginger, green onion, spicy sauce, hot chilli sauce, ponzu sauce"
        },
        {
          name: "Dragonfly Roll",
          price: "$19.90",
          about: "TOP: eel, sushi sauce, wasabi sauce / INSIDE: crab meat, avocado, cucumber, tamago"
        },
        {
          name: "Rainbow Roll",
          price: "$16.90",
          about: "TOP: salmon, tuna, steamed prawn, red snapper, wasabi sauce, sushi sauce / INSIDE california roll"
        },
        {
          name: "M80 Roll",
          price: "$20.90",
          about: "TOP: baked scallop, crab meat, tempura bits, masago, soy mayo sauce, sushi sauce, spicy mayo sauce / INSIDE hamachi, tuna, red snapper"
        },
        {
          name: "House Roll",
          price: "$20.90",
          about: "TOP: smoked salmon, unagi sauce, spicy sauce, spicy mayo, masago, green onions, sesame seeds / INSIDE crab meat, prawn tempur, avocado, cucumber, tamago, eel, oshinko, carrot"
        },
      ]
    },
    {
      id: 11, name: 'Vegetable Roll', show: false, food:
      [
        {
          name: "Avo Cucumber Roll",
          price: "$5.75"
        },
        {
          name: "Yam Roll",
          price: "$5.75"
        },
        {
          name: "Vegetable Roll",
          price: "$6.25"
        },
        {
          name: "Vege Caterpillar Roll",
          price: "$9.90"
        },
        {
          name: "Yam Caterpillar Roll",
          price: "$10.90"
        }
      ]
    },
    {
      id: 12, name: 'Noodle', show: false, food:
      [
        {
          name: "Vegetable Udon",
          price: "$10.90"
        },
        {
          name: "Tempura Udon",
          price: "$11.90"
        },
        {
          name: "Beef Udon",
          price: "$11.90"
        },
        {
          name: "Nabeyaki Udon",
          price: "$13.90",
          about: "Chicken, prawn tempura"
        },
        {
          name: "Seafood Udon",
          price: "$13.90"
        },
        {
          name: "Spicy Seafood Udon",
          price: "$13.90"
        },
        {
          name: "Curry Udon",
          price: "$11.90"
        },
        {
          name: "Vegetable Yakisoba",
          price: "$10.90"
        },
        {
          name: "Chicken Yakisoba",
          price: "$11.90"
        },
        {
          name: "Beef Yakisoba",
          price: "$11.90"
        },
        {
          name: "Seafood Yakisoba",
          price: "$13.90"
        }
      ]
    },
    {
      id: 13, name: 'Tempura', show: false, food:
      [
        {
          name: "Appy Tempura (4pcs)",
          price: "$6.90"
        },
        {
          name: "Vegetable Tempura (6pcs)",
          price: "$9.90"
        },
        {
          name: "Yam and Prawn Tempura (6pcs)",
          price: "$10.90"
        },
        {
          name: "Prawn Tempura (6pcs)",
          price: "$11.90"
        },
        {
          name: "Calamari Tempura (6pcs)",
          price: "$11.90"
        },
        {
          name: "Asparagus Tempura (6pcs)",
          price: "$11.90"
        },
        {
          name: "Assorted Fish Tempura (6pcs)",
          price: "$13.90",
          about: "Prawn, red snapper, salmon and tuna"
        },
        {
          name: "Assorted Tempura (12pcs)",
          price: "$14.90"
        }
      ]
    },
    {
      id: 14, name: 'DON / KATSU / TERIYAKI', show: false, food:
      [
        {
          name: "Tofu Teriyaki",
          price: "$11.90"
        },
        {
          name: "Chicken Teriyaki",
          price: "$12.90"
        },
        {
          name: "Beef Teriyaki",
          price: "$12.90"
        },
        {
          name: "Salmon Teriyaki",
          price: "$14.90"
        },
        {
          name: "Tempura Don",
          price: "$12.90"
        },
        {
          name: "Chicken Don",
          price: "$12.90"
        },
        {
          name: "Beef Don",
          price: "$12.90"
        },
        {
          name: "Unagi Don (6pcs)",
          price: "$20.90",
          about: "Eel on rice"
        },
        {
          name: "Chirashi Don",
          price: "$20.90",
          about: "Assorted sashimi on sushi rice"
        },
        {
          name: "Salmon / Tuna Don (10pcs)",
          price: "$17.90"
        },
        {
          name: "Pork Katsu",
          price: "$13.90",
          about: "Deep fried breaded pork"
        },
        {
          name: "Chicken Katsu",
          price: "$13.90",
          about: "Deep fried breaded chicken"
        }
      ]
    },
    {
      id: 15, name: 'Roll Combo & Platter', show: false, food:
      [
        {
          category: "Roll Combo"
        },
        {
          name: "4 pcs Sushi & California Roll",
          price: "$12.90",
          about: "salmon, tuna, red snapper, steamed prawn"
        },
        {
          name: "4 pcs Sushi & Spicy Tuna Roll",
          price: "$14.90",
          about: "salmon, tuna, red snapper, steamed prawn"
        },
        {
          name: "4 pcs Sushi & Dynamite Roll",
          price: "$14.90",
          about: "salmon, tuna, red snapper, steamed prawn"
        },
        {
          name: "Vegetable Roll Special (4 rolls)",
          price: "$16.25",
          about: "Cucumber roll, avocado roll, vegetable roll, yam roll"
        },
        {
          name: "Roll Combo Special (4 rolls)",
          price: "$22.50",
          about: "California roll, dynamite roll, yam roll, spicy tuna roll"
        },
        {
          name: "Mill Bay Roll Special (6 rolls)",
          price: "$32.50",
          about: "California roll, calamari tempura roll, yam roll, cucumber roll, BC roll, Spicy tuna roll"
        },
        {
          name: "Nigiri Combo (8pcs)",
          price: "$18",
          about: "3pcs salmon, 3pcs tuna, 2pcs ebi"
        },
        {
          category: "Platter"
        },
        {
          name: "Love Platter",
          price: "$41.50",
          about: "Monkey brain, california roll, dynamite roll, tuna roll, cucumber roll and 8pcs sushi"
        },
        {
          name: "Harmony Platter",
          price: "$49.50",
          about: "Monkey brain, California roll, dynamite roll, tuna roll, salmon roll, cucumber roll and 10pcs sushi"
        },
        {
          name: "Peace Platter A",
          price: "$55.90",
          about: "Monkey brain, california roll, dynamite roll, tuna roll, salmon roll, cucumber roll and 12pcs sushi"
        },
        {
          name: "Peace Platter B",
          price: "$72.50",
          about: "Monkkey brain, california roll, dynamite roll, calamari tempura roll, tuna roll, salmon roll, cucumber roll and 8pcs sashimi, 12pcs sushi"
        },
        {
          name: "House Platter",
          price: "$115",
          about: "Monkey brain, 20pcs sashimi, 12pcs sushi, alaska roll, hawaii roll, kamikaze tuna roll, dragon roll, caterpillar roll"
        },
      ]
    },
    {
      id: 16, name: 'Drink', show: false, food:
      [
        {
          category: 'Beverages'
        },
        {
          name: "Soft Drinks",
          price: "$1.95",
          about: "Coke, diet coke, ginger ale, iced tea, root beer, sprite, soda water"
        },
        {
          name: "Juice",
          price: "$2.25",
          about: "Orange and apple"
        },
        {
          name: "Japanese Juice",
          price: "$3.50",
          about: "Melon and strawberry"
        },
        {
          category: "Beers"
        },
        {
          name: "Domestic",
          price: "$4.50",
          about: "Kokanee, Canadian, Budweiser, Coors Light, Piper's Pale Ale"
        },
        {
          name: "Imported (small)",
          price: "$4.50",
          about: "Sapporo, Asahi, Kirin"
        },
        {
          name: "Imported (large)",
          price: "$9.95",
          about: "Sapporo, Asahi, Kirin"
        },
        {
          name: "Draught Beer",
          price: "$5.95",
          about: "Sapporo (Pint)"
        },
        {
          name: "Draught Beer",
          price: "$15.95",
          about: "Sapporo (Pitcher)"
        },
        {
          category: "Sake"
        },
        {
          name: "Cold sake",
          price: "$18.95"
        },
        {
          name: "Hot sake (small)",
          price: "$4.95"
        },
        {
          name: "Hot sake (large)",
          price: "$8.95"
        },
        {
          name: "Soju (소주)",
          price: "$14.95"
        },
        {
          name: "Bokbunja (복분자)",
          price: "$18.95"
        },
        {
          name: "Seoljungmae (설중매)",
          price: "$18.95"
        },
        {
          category: "Wine"
        },
        {
          name: "White / Red (glass)",
          price: "$4.90"
        },
        {
          name: "White / Red (1/2L)",
          price: "$12.90"
        },
        {
          name: "White / Red (1L)",
          price: "$19.90"
        }
      ]
    }
  ]);
});

module.exports = router;
