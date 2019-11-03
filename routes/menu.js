var express = require('express');
var router = express.Router();

router.get('/menu', function (req, res, next) {
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
            price: "$5.25",
            about: "Steamed soybeans"
          },
          {
            name: "Agedashi Tofu",
            price: "$6.90",
            about: 'Deep fried tofu with hot tempura sauce, and bonito flake'
          },
          {
            name: "Gyoza",
            price: "$7.90"
          },
          {
            name: "Monkey Brain",
            price: "$8.90",
            about: "sliced avocado, crab meat, and spicy tuna fried in tempura batter"
          },
          {
            name: "Chicken Yakitori",
            price: "$9.90",
            about: "Skewered chicken, mushroom, red bell pepper"
          },
          {
            name: "Chicken Karrage",
            price: "$9.90",
            about: "Deep fried chicken thighs"
          },
          {
            name: "Tuna Tataki",
            price: "$14.90",
            about: "Seared albacore with ponzu sauce, spicy sauce, salad sauce, green onion, sesame seeds, masago"
          },
          {
            name: "Okonomiyaki (Pork and Seafood)",
            price: "$13.90",
            about: "Cabbage, pork and seafood, egg, flour with sauce"
          },
          {
            name: "Vegetable Sunomono",
            price: "$5.25"
          },
          {
            name: "Shrimp Sunomono",
            price: "$7.25"
          },
          {
            name: "Tako Sunomono",
            price: "$7.25"
          },
          {
            name: "Seafood Sunomono",
            price: "$11.90"
          },
          {
            name: "Gomae Salad",
            price: "$6.90",
            about: "Spinach salad with sesame sauce"
          },
          {
            name: "Seaweed Salad",
            price: "$6.90"
          },
          {
            name: "Green Salad",
            price: "$10.90"
          },
          {
            name: "Seafood Salad",
            price: "21.90",
            about: "Salad with salmon, tuna, ika, tako, tobiko, tai, and wakame"
          },
          {
            name: "Spicy Tuna Salad",
            price: "$13.90"
          },
          {
            name: "Spicy Salmon Salad",
            price: "$13.90"
          },
          {
            name: "Smoked Salmon Salad",
            price: "$13.90"
          },
          {
            name: "Cucumber Salad Roll",
            price: "$13.90",
            about: "Top: Sushi sauce, ponzu sauce, spicy sauce, salad sauce & Inside: Smoked salmon, crab meat, tamago, avocado, carrot, asparagus, oshinko, inari"
          },
          {
            name: "Takoyaki (5pcs)",
            price: "$7.95",
            about: "Batter filled ball-shaped of fried octopus with green onions, and bonito flakes"
          },
          {
            name: "Seafood Yakitori",
            price: "$14.25",
            about: "Grilled skewered seafood dipped in a Teriyaki sauce"
          },
          {
            name: "Banana Ice-cream",
            price: "$10.95",
            about: "Green Tea or mango ice-cream"
          },
        ]
    },
    {
      id: 1, name: 'Sashimi', show: false, food:
        [
          {
            name: "Tuna Sashimi (8pcs)",
            price: "$15.90",
            about: "Albacore tuna"
          },
          {
            name: "Spicy Tuna Sashimi (8pcs)",
            price: "$16.90"
          },
          {
            name: "Salmon Sashimi (8pcs)",
            price: "$15.90",
            about: "Wild sockeye salmon"
          },
          {
            name: "Spicy Salmon Sashimi (8pcs)",
            price: "$16.90",
          },
          {
            name: "Tuna and Salmon Sashimi (8pcs)",
            price: "$15.90"
          },
          {
            name: "Toro Sashimi (8pcs)",
            price: "$21.90"
          },
          {
            name: "Assorted Sashimi (15pcs)",
            price: "$31.50",
            about: "4 salmon, 4 tuna, 2tako, 2 tai, 1 hokigai, 1 ika, 1 toro"
          },
          {
            name: "Deluxe Sashimi (25pcs)",
            price: "$52.50",
            about: "6 salmon, 6 tuna, 3 tako, 3 tai, 2 hokigai, 2 ika, 2 toro, 1 amaebi"
          },
          {
            name: "House Sashimi (46pcs)",
            price: "$95.50",
            about: "8 salmon, 8 tuna, 4 tako, 4 tai, 4 hokigai, 4 ika, 4 toro, 4 amaebi, 4 saba, 2 hotate"
          }
        ]
    },
    {
      id: 2, name: 'Sushi Nigiri', show: false, food:
        [
          {
            name: "Avocado",
            price: "$1.95"
          },
          {
            name: "Inari (Bean curd)",
            price: "$1.95"
          },
          {
            name: "Tamago (Sweet egg)",
            price: "$1.95"
          },
          {
            name: "Sake (Wild sockey salmon)",
            price: "$2.75"
          },
          {
            name: "Maguro (Tuna)",
            price: "$2.75"
          },
          {
            name: "Tai (Red snapper)",
            price: "$2.75"
          },
          {
            name: "Ebi (Steamed Prawn)",
            price: "$2.75"
          },
          {
            name: "Ika (Squid)",
            price: "$2.75"
          },
          {
            name: "Seared Ika (Squid)",
            price: "$2.75"
          },
          {
            name: "Saba (Mackerel)",
            price: "$2.75"
          },
          {
            name: "Hokigai (Surf calm)",
            price: "$2.75"
          },
          {
            name: "Masago (Capelin roe)",
            price: "$2.75"
          },
          {
            name: "Tobiko (Flying fish egg)",
            price: "$2.95"
          },
          {
            name: "Tako (Octous)",
            price: "$2.95"
          },
          {
            name: "Unagi (Fresh water eel)",
            price: "$3.75"
          },
          {
            name: "Toro (Tuna belly)",
            price: "$3.75"
          },
          {
            name: "Ikura (Salmon roe)",
            price: "$3.75"
          },
          {
            name: "Hotate (Scallop)",
            price: "$3.75"
          },
          {
            name: "Amaebi (Sweet prawn)",
            price: "$3.75"
          },
          {
            name: "Chopped Scallop with Masago",
            price: "$3.75"
          }
        ]
    },
    {
      id: 3, name: 'Hoso Maki', show: false, food:
        [
          {
            name: "Cucumber Roll",
            price: "$3.95"
          },
          {
            name: "Avocado Roll",
            price: "$3.95"
          },
          {
            name: "Oshinko Roll",
            price: "$3.95",
            about: "Japanese pickled radish"
          },
          {
            name: "Asparagus Roll",
            price: "$3.95"
          },
          {
            name: "Salmon Roll",
            price: "$5.25",
            about: "Wild sockey"
          },
          {
            name: "Tuna Roll",
            price: "$5.25"
          },
          {
            name: "Spicy Ebi Roll",
            price: "$5.25",
            about: "Steamed prawn and spicy sauce"
          },
          {
            name: "Cheese Roll",
            price: "$3.95"
          },
          {
            name: "Tamago Roll",
            price: "$4.95",
            about: "Sweet egg"
          },
          {
            name: "Negitoro Roll",
            price: "$7.50",
            about: "Tuna belly and green onion"
          },
          {
            name: "Gomae Roll",
            price: "$5.25",
            about: "Spinach salad with side sesame sauce"
          },
        ]
    },
    {
      id: 4, name: 'Korean Food', show: false, food:
        [
          {
            name: "Hot Stone Rice Bowl (돌솥비빔밥)",
            price: "$20.90",
            about: "Steamed rice, beef, spinach, carrot, beans sprout, zucchini, egg, sesame oil, mushroom"
          },
          {
            name: "Haemul Pajeon (해물파전)",
            price: "$20.95",
            about: "Seafood pancake"
          },
          {
            name: "Jeyug-bokkeum (제육볶음)",
            price: "$17.95",
            about: "Spicy stir-fried pork with vegetables"
          },
          {
            name: "Japchae (잡채)",
            price: "$17.95",
            about: "Potato starch noodles stir fried with vegetables"
          },
          {
            name: "Spicy Chirashi Don (회덮밥)",
            price: "$22.90"
          },
          {
            name: "Spicy Chirahshi Noodle (회국수)",
            price: "$22.90"
          },
          {
            name: "Kimbap (김밥)",
            price: "$16.95",
            about: "Korean style roll with imitation crab, spinach, root vegetable, tamago, carrot, oshinko, and inari"
          },
          {
            name: "B.C Fried Rice (샐몬볶음밥)",
            price: "$16.95",
            about: "Fried rice with barbecued salmon"
          },
          {
            name: "Spicy Ramen (매운라면)",
            price: "$12.90"
          },
          {
            name: "Miso Ramen (미소라면)",
            price: "$12.90"
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
            price: "$12.50",
            about: "Sliced avocado, salad, deep fried sushi rice, spicy mayo, sushi sauce, ponzu sauce, spicy sauce, salad sauce, wasabi sauce"
          },
          {
            name: "Sushi Pizza",
            price: "$14.50",
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
            price: "$12.95"
          },
          {
            name: "B.B.Q Tofu Teriyaki & Rice Combo",
            price: "$13.95"
          },
          {
            name: "Beef Teriyaki & Rice Combo",
            price: "$13.95"
          },
          {
            name: "Chicken Teriyaki & Rice Combo",
            price: "$13.95"
          },
          {
            name: "Tuna & Salmon Roll Combo",
            price: "$14.95"
          },
          {
            name: "Salmon Teriyaki & Rice Combo",
            price: "$15.95"
          },
          {
            name: "Sushi Combo (5pcs)",
            price: "$16.95"
          },
          {
            name: "Sashimi & Rice Combo (7pcs)",
            price: "$16.95"
          },
          {
            name: "Unagi & Rice Combo (4pcs)",
            price: "$17.95"
          },
          {
            about: "• Lunch Hour 11:30am - 2:30pm / All served with miso soup, appy tempura, green salad, fresh fruit & California roll • "
          },
          {
            category: "Dinner"
          },
          {
            name: "Chicken Teriyaki Dinner",
            price: "$21.90",
            about: "Served with rice, miso soup, salad, tempura, dynamite roll"
          },
          {
            name: "Beef Teriyaki Dinner",
            price: "$21.90",
            about: "Served with rice, miso soup, salad, tempura, dynamite roll"
          },
          {
            name: "Salmon Teriyaki Dinner",
            price: "$23.90",
            about: "Served with rice, miso soup, salad, tempura, dynamite roll"
          },
          {
            name: "Dinner Special (Chicken or Beef)",
            price: "$29.90",
            about: "Served with miso soup, sunomono, tempura, salad, dynamite roll, 2 pcs sushi, 4 pcs sashimi and customer choice of chicken or beef teriyaki"
          }
        ]
    },
    {
      id: 7, name: 'Fresh Fish Roll', show: false, food:
        [
          {
            name: "California Roll",
            price: "$4.95",
            about: "Avocado, cucumber & crab meat"
          },
          {
            name: "Salmon Avocado Roll",
            price: "$8.25"
          },
          {
            name: "Tuna Avocado Roll",
            price: "$8.25"
          },
          {
            name: "Spicy Tuan Roll",
            price: "$8.25",
            about: "Cucumber, spicy tuna"
          },
          {
            name: "Spicy Salmon Roll",
            price: "$8.25",
            about: "Cucumber, spicy salmon"
          },
          {
            name: "Chopped Scallop Roll",
            price: "$12.90"
          },
          {
            name: "Futo Maki",
            price: "$11.90",
            about: "Carrot, crab meat, spinach, oshinko, avocado, cucumber, tamago, inari"
          },
          {
            name: "Kamikaze Salmon Roll",
            price: "$12.90",
            about: "TOP: salmon, tempura bits, sushi sauce, spicy mayo sauce, spicy hot sauce, wasabi sauce, INSIDE: cucumber and spicy salmon"
          },
          {
            name: "Kamikaze Tuna Roll",
            price: "$12.90",
            about: "TOP: tuna, tempura bits, sushi sauce, spicy mayo sauce, spicy hot sauce, wasabi sauce, INSIDE: cucumber and spicy tuna"
          },
          {
            name: "Tornado Roll",
            price: "$12.90",
            about: "TOP: steamed prawn, sushi sauce, wasabi sauce, INSIDE: california roll"
          },
          {
            name: "Sashimi Salad Roll",
            price: "$13.90",
            about: "TOP: salmon, tuna, red snapper, salad sauce, sushi sauce, INSIDE: assorted vegetable roll"
          },
          {
            name: "Hawaii Roll",
            price: "$12.90",
            about: "TOP: salmon, tuna, avocado, sushi sauce, wasabi sauce, INSIDE: california roll"
          },
          {
            name: "Philadelphia Roll",
            price: "$12.90",
            about: "TOP: smoked salmon, sushi sauce, wasabi sauce, INSIDE: avocado, asparagus, cheese"
          },
          {
            name: "Boston Roll",
            price: "$14.25",
            about: "TOP: seared tuna, sushi sauce, wasabi sauce, INSIDE: real crab, mayo, masago, avocado"
          },
          {
            name: "Island Roll",
            price: "$17.90",
            about: "TOP: salmon, avocado, sushi sauce, wasabi sauce, INSIDE: scallop, eel, cucumber, cheese"
          }
        ]
    },
    {
      id: 8, name: 'Baked Roll', show: false, food:
        [
          {
            name: "B.C Roll",
            price: "$7.95"
          },
          {
            name: "Chicken Teriyaki Roll",
            price: "$7.95"
          },
          {
            name: "Beef Teriyaki Roll",
            price: "$7.95"
          },
          {
            name: "Alaska Roll",
            price: "$11.90",
            about: "TOP: smoked salmon, sushi sauce, wasabi sauce, INSIDE: crab meat, asparagus, avocado"
          },
          {
            name: "Aladdin Roll",
            price: "$12.90",
            about: "TOP: sushi sauce, wasabi sauce INSIDE: eel, steamed prawn, avocado, cucumber, crab meat"
          },
          {
            name: "Baked Salmon Roll",
            price: "$12.90",
            about: "TOP: salmon, sushi sauce, wasabi sauce, sesame, INSIDE: avocado, carrot, cheese"
          },
          {
            name: "Dragon Roll",
            price: "$13.50",
            about: "TOP: eel, sushi sauce, wasabi sauce, sesame, INSIDE: california roll"
          },
          {
            name: "B.C BBQ Roll",
            price: "$13.50",
            about: "TOP: spicy salmon, unagi sauce, spicy sauce"
          },
          {
            name: "Smoked Salmon Roll",
            price: "$10.90",
            about: "Smoked salmon on top of vegetable roll"
          }
        ]
    },
    {
      id: 9, name: 'Tempura Roll', show: false, food:
        [
          {
            name: "Yam Roll",
            price: "$6.75"
          },
          {
            name: "Deep Fried California Roll",
            price: "$7.95"
          },
          {
            name: "Dynamite Roll",
            price: "$7.95"
          },
          {
            name: "Calamari Tempura Roll",
            price: "$7.95"
          },
          {
            name: "Deep Fried Spicy Tuna Roll",
            price: "$10.50"
          },
          {
            name: "T.N.T Roll",
            price: "$12.50",
            about: "TOP: spicy tuna, tempura bits, sushi sauce, wasabi sauce, spicy mayo, INSIDE: prawn tempura, cucumber"
          },
          {
            name: "Caterpillar Roll",
            price: "$12.50",
            about: "TOP: sliced avocado, tempura bits, sushi sauce, wasabi sauce, INSIDE: prawn tempura, cucumber"
          },
          {
            name: "Spider Roll",
            price: "$12.50",
            about: "TOP: tempura bits, sushi sauce, INSIDE: deep fried soft shell crab, avocado, cucumber, crab meat"
          },
          {
            name: "Grand Canyon Roll (Deep Fried)",
            price: "$16.25",
            about: "TOP: masago, sushi sauce, INSIDE: salmon, tuna, snapper, prawn, cream cheese, avocado, crab meat"
          }
        ]
    },
    {
      id: 10, name: 'Special Roll', show: false, food:
        [
          {
            name: "Butterfly Roll",
            price: "20.90",
            about: "TOP: salmon, tuna, red snapper, steamed prawn, avocado, tempura bits, masago, wasabi sauce, spicy mayo sauce, sushi sauce / INISDE: dynamite roll"
          },
          {
            name: "Special Spider Roll",
            price: "$20,90",
            about: "TOP: soft shell crab, masago, tempura bits, sushi sauce / INSIDE: tamago, avocado, cucumber, crab meat"
          },
          {
            name: "Crazy Roll (Baked)",
            price: "$22.90",
            about: "TOP: baked scallop, tempura bits, masago, soy mayo sauce, sushi sauce, spicy mayo sauce / INSIDE: deep fried spicy tuna roll"
          },
          {
            name: "Firecraker Roll",
            price: "$19.90",
            about: "TOP: seared tuna, tempura bits, masago, spicy sauce, spicy mayo sauce, soy mayo sauce, sushi sauce / INSIDE: dynamite roll"
          },
          {
            name: "Volcano Roll (Scallop)",
            price: "$22.90",
            about: "TOP: green salad, scallop, masago, spicy sauce, tomato, sushi sauce, spicy mayo / INSIDE: deep fried spicy tuna roll"
          },
          {
            name: "Volcano Roll (Tuna)",
            price: "$22.90",
            about: "TOP: green salad, tuna, masago, spicy sauce, tomato, sushi sauce, spicy mayo / INSIDE: deep fried spicy tuna roll"
          },
          {
            name: "Cheese Lava Roll",
            price: "$22.90",
            about: "TOP: baked scallop, mushroom, shrimp, onion, cheese, tempura, bits, soy mayo sauce, sushi sauce / INSIDE california roll"
          },
          {
            name: "Kiss of Fire Roll",
            price: "$20.90",
            about: "TOP: tuna, tomato, tempura bits, masago, ginger, green onion, spicy sauce, hot chilli sauce, ponzu sauce"
          },
          {
            name: "Dragonfly Roll",
            price: "$21.90",
            about: "TOP: eel, sushi sauce, wasabi sauce / INSIDE: crab meat, avocado, cucumber, tamago"
          },
          {
            name: "Rainbow Roll",
            price: "$18.90",
            about: "TOP: salmon, tuna, steamed prawn, red snapper, wasabi sauce, sushi sauce / INSIDE: california roll"
          },
          {
            name: "M80 Roll",
            price: "$22.90",
            about: "TOP: baked scallop, crab meat, tempura bits, masago, soy mayo sauce, sushi sauce, spicy mayo sauce / INSIDE: tuna, red snapper, salmon"
          },
          {
            name: "House Roll",
            price: "$24.00",
            about: "TOP: smoked salmon, unagi sauce, spicy sauce, spicy mayo, masago, green onions, sesame seeds / INSIDE: crab meat, prawn tempur, avocado, cucumber, tamago, eel, oshinko, carrot"
          },
        ]
    },
    {
      id: 11, name: 'Vegetable Roll', show: false, food:
        [
          {
            name: "Avo Cucumber Roll",
            price: "$6.75"
          },
          {
            name: "Yam Roll",
            price: "$6.95"
          },
          {
            name: "Vegetable Roll",
            price: "$6.95"
          },
          {
            name: "Vege Caterpillar Roll",
            price: "$10.90"
          },
          {
            name: "Yam Caterpillar Roll",
            price: "$11.90"
          }
        ]
    },
    {
      id: 12, name: 'Noodle', show: false, food:
        [
          {
            name: "Vegetable Udon",
            price: "$12.90"
          },
          {
            name: "Tempura Udon",
            price: "$13.90"
          },
          {
            name: "Beef Udon",
            price: "$13.90"
          },
          {
            name: "Nabeyaki Udon",
            price: "$15.25",
            about: "Chicken, prawn tempura"
          },
          {
            name: "Seafood Udon",
            price: "$15.25"
          },
          {
            name: "Spicy Seafood Udon",
            price: "$15.90"
          },
          {
            name: "Curry Udon (chicken or beef)",
            price: "$13.90"
          },
          {
            name: "Vegetable Yakisoba",
            price: "$12.90"
          },
          {
            name: "Chicken Yakisoba",
            price: "$13.90"
          },
          {
            name: "Beef Yakisoba",
            price: "$13.90"
          },
          {
            name: "Seafood Yakisoba",
            price: "$15.90"
          }
        ]
    },
    {
      id: 13, name: 'Tempura', show: false, food:
        [
          {
            name: "Appy Tempura (4pcs)",
            price: "$7.90"
          },
          {
            name: "Vegetable Tempura (6pcs)",
            price: "$10.90"
          },
          {
            name: "Yam and Prawn Tempura (6pcs)",
            price: "$11.90"
          },
          {
            name: "Prawn Tempura (6pcs)",
            price: "$12.90"
          },
          {
            name: "Calamari Tempura (6pcs)",
            price: "$12.90"
          },
          {
            name: "Asparagus Tempura (6pcs)",
            price: "$12.90"
          },
          {
            name: "Assorted Fish Tempura (7pcs)",
            price: "$15.90",
            about: "Prawn, red snapper, salmon and tuna"
          },
          {
            name: "Assorted Tempura (12pcs)",
            price: "$16.90",
            about: "Yam, squash, prawn, onion, asparagus, broccoli"
          }
        ]
    },
    {
      id: 14, name: 'DON / KATSU / TERIYAKI', show: false, food:
        [
          {
            name: "Tofu Teriyaki",
            price: "$12.90"
          },
          {
            name: "Chicken Teriyaki",
            price: "$13.90"
          },
          {
            name: "Beef Teriyaki",
            price: "$13.90"
          },
          {
            name: "Salmon Teriyaki",
            price: "$15.90"
          },
          {
            name: "Tempura Don",
            price: "$13.90"
          },
          {
            name: "Chicken Don",
            price: "$13.90"
          },
          {
            name: "Beef Don",
            price: "$13.90"
          },
          {
            name: "Unagi Don (6pcs)",
            price: "$22.90",
            about: "Eel on rice"
          },
          {
            name: "Chirashi Don",
            price: "$22.90",
            about: "Assorted sashimi on sushi rice"
          },
          {
            name: "Salmon / Tuna Don (10pcs)",
            price: "$19.90"
          },
          {
            name: "Pork Katsu",
            price: "$15.90",
            about: "Deep fried breaded pork"
          },
          {
            name: "Chicken Katsu",
            price: "$15.90",
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
            price: "$14.90",
            about: "salmon, tuna, red snapper, steamed prawn"
          },
          {
            name: "4 pcs Sushi & Spicy Tuna Roll",
            price: "$16.90",
            about: "salmon, tuna, red snapper, steamed prawn"
          },
          {
            name: "4 pcs Sushi & Dynamite Roll",
            price: "$16.90",
            about: "salmon, tuna, red snapper, steamed prawn"
          },
          {
            name: "Vegetable Roll Special (4 rolls)",
            price: "$18.90",
            about: "Cucumber roll, avocado roll, vegetable roll, yam roll"
          },
          {
            name: "Roll Combo Special (4 rolls)",
            price: "$24.90",
            about: "California roll, dynamite roll, yam roll, spicy tuna roll"
          },
          {
            name: "Mill Bay Roll Special (6 rolls)",
            price: "$35.90",
            about: "California roll, calamari tempura roll, yam roll, cucumber roll, BC roll, Spicy tuna roll"
          },
          {
            name: "Nigiri Combo (8pcs)",
            price: "$20.90",
            about: "3pcs salmon, 3pcs tuna, 2pcs ebi"
          },
          {
            category: "Platter"
          },
          {
            name: "Love Platter",
            price: "$48.00",
            about: "Monkey brain, california roll, dynamite roll, tuna roll, cucumber roll and 8pcs sushi"
          },
          {
            name: "Harmony Platter",
            price: "$57.00",
            about: "Monkey brain, California roll, dynamite roll, tuna roll, salmon roll, cucumber roll and 10pcs sushi"
          },
          {
            name: "Peace Platter A",
            price: "$68.50",
            about: "Monkey brain, california roll, dynamite roll, calamari tempura roll, tuna roll, salmon roll, cucumber roll and 12pcs sushi"
          },
          {
            name: "Peace Platter B",
            price: "$81.50",
            about: "Monkkey brain, california roll, dynamite roll, calamari tempura roll, tuna roll, salmon roll, cucumber roll and 8pcs sashimi, 12pcs sushi"
          },
          {
            name: "House Platter",
            price: "$126.90",
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
            price: "$5.25",
            about: "Kokanee, Canadian, Budweiser, Coors Light, Piper's Pale Ale"
          },
          {
            name: "Imported (small)",
            price: "$5.50",
            about: "Sapporo, Asahi, Kirin"
          },
          {
            name: "Imported (large)",
            price: "$10.95",
            about: "Sapporo, Asahi, Kirin"
          },
          {
            name: "Draught Beer",
            price: "$6.50",
            about: "Sapporo (Pint)"
          },
          {
            name: "Draught Beer",
            price: "$17.50",
            about: "Sapporo (Pitcher)"
          },
          {
            name: "Draught Beer",
            price: "$6.50",
            about: "Hoyne Helios or Dark Matter (Pint)"
          },
          {
            name: "Draught Beer",
            price: "$17.50",
            about: "Hoyne Helios or Dark Matter (Pitcher)"
          },
          {
            category: "Sake"
          },
          {
            name: "Cold sake",
            price: "$20.95"
          },
          {
            name: "Hot sake (small)",
            price: "$5.50"
          },
          {
            name: "Hot sake (large)",
            price: "$9.95"
          },
          {
            name: "Soju (소주)",
            price: "$16.95"
          },
          {
            category: "Wine"
          },
          {
            name: "White / Red (glass)",
            price: "$5.50"
          },
          {
            name: "White / Red (1/2L)",
            price: "$14.50"
          },
          {
            name: "White / Red (1L)",
            price: "$21.95"
          }
        ]
    }
  ]);
});

module.exports = router;
