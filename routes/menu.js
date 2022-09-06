var express = require('express');
var router = express.Router();

router.get('/menu', function (req, res, next) {
  res.json([
    {
      id: 0, name: 'Appetizer', show: false, food:
        [
          {
            name: "Miso Soup",
            price: "$2.95"
          },
          {
            name: "Steamed Rice",
            price: "$2.50"
          },
          {
            name: "Edamame",
            price: "$6.25",
            about: "Steamed soybeans"
          },
          {
            name: "Agedashi Tofu",
            price: "$7.50",
            about: 'Deep fried tofu with hot tempura sauce, and fish flakes'
          },
          {
            name: "Gyoza",
            price: "$8.50"
          },
          {
            name: "Monkey Brain",
            price: "$9.25",
            about: "sliced avocado, crab meat, and spicy tuna fried in tempura batter"
          },
          {
            name: "Chicken Karrage",
            price: "$13.25",
            about: "Deep fried chicken thighs"
          },
          {
            name: "Tuna Tataki",
            price: "$16.95",
            about: "Seared albacore with ponzu sauce, spicy sauce, salad sauce, green onion, sesame seeds, masago"
          },
          {
            name: "Vegetable Sunomono",
            price: "$6.25"
          },
          {
            name: "Shrimp Sunomono",
            price: "$9.25"
          },
          {
            name: "Tako Sunomono",
            price: "$9.25"
          },
          {
            name: "Seafood Sunomono",
            price: "$13.90"
          },
          {
            name: "Gomae Salad",
            price: "$7.50",
            about: "Spinach salad with sesame sauce"
          },
          {
            name: "Seaweed Salad",
            price: "$7.25"
          },
          {
            name: "Green Salad",
            price: "$12.50"
          },
          {
            name: "Spicy Tuna Salad",
            price: "$15.50"
          },
          {
            name: "Spicy Salmon Salad",
            price: "$15.50"
          },
          {
            name: "Smoked Salmon Salad",
            price: "$15.50"
          },
          {
            name: "Takoyaki (6pcs)",
            price: "$9.25",
            about: "(6pcs)Batter filled ball-shaped of fried octopus with green onions, and bonito flakes"
          },
          {
            name: "Sushi Rice",
            price: "$2.50"
          }
        ]
    },
    {
      id: 1, name: 'Sashimi', show: false, food:
        [
          {
            name: "Tuna Sashimi (8pcs)",
            price: "$17.95",
            about: "Albacore tuna"
          },
          {
            name: "Spicy Tuna Sashimi (8pcs)",
            price: "$18.95"
          },
          {
            name: "Salmon Sashimi (8pcs)",
            price: "$17.95",
            about: "Wild sockeye salmon"
          },
          {
            name: "Spicy Salmon Sashimi (8pcs)",
            price: "$18.95",
          },
          {
            name: "Tuna and Salmon Sashimi (8pcs)",
            price: "$17.95"
          },
          {
            name: "Toro Sashimi (8pcs)",
            price: "$25.95"
          },
          {
            name: "Assorted Sashimi (15pcs)",
            price: "$36.95",
            about: "4 salmon, 4 tuna, 2tako, 2 tai, 1 hokigai, 1 ika, 1 toro"
          },
          {
            name: "Deluxe Sashimi (25pcs)",
            price: "$59.95",
            about: "6 salmon, 6 tuna, 3 tako, 3 tai, 2 hokigai, 2 ika, 2 toro, 1 amaebi"
          },
          {
            name: "House Sashimi (46pcs)",
            price: "$109.95",
            about: "8 salmon, 8 tuna, 4 tako, 4 tai, 4 hokigai, 4 ika, 4 toro, 4 amaebi, 4 saba, 2 hotate"
          },
          {
            name: "Saba Sashimi",
            price: "$25.95"
          }
        ]
    },
    {
      id: 2, name: 'Sushi Nigiri', show: false, food:
        [
          {
            name: "Avocado",
            price: "$1.99"
          },
          {
            name: "Inari (Bean curd)",
            price: "$1.99"
          },
          {
            name: "Tamago (Sweet egg)",
            price: "$1.99"
          },
          {
            name: "Sake (Wild sockey salmon)",
            price: "$2.99"
          },
          {
            name: "Maguro (Tuna)",
            price: "$2.99"
          },
          {
            name: "Tai (Red snapper)",
            price: "$2.99"
          },
          {
            name: "Ebi (Steamed Prawn)",
            price: "$2.99"
          },
          {
            name: "Ika (Squid)",
            price: "$2.99"
          },
          {
            name: "Seared Ika (Squid)",
            price: "$2.99"
          },
          {
            name: "Saba (Mackerel)",
            price: "$2.99"
          },
          {
            name: "Hokigai (Surf calm)",
            price: "$2.99"
          },
          {
            name: "Masago (Capelin roe)",
            price: "$2.99"
          },
          {
            name: "Tobiko (Flying fish egg)",
            price: "$2.99"
          },
          {
            name: "Tako (Octous)",
            price: "$2.99"
          },
          {
            name: "Unagi (Fresh water eel)",
            price: "$3.99"
          },
          {
            name: "Toro (Tuna belly)",
            price: "$3.99"
          },
          {
            name: "Ikura (Salmon roe)",
            price: "$3.99"
          },
          {
            name: "Hotate (Scallop)",
            price: "$3.99"
          },
          {
            name: "Amaebi (Sweet prawn)",
            price: "$3.99"
          },
          {
            name: "Chopped Scallop with Masago",
            price: "$3.99"
          }
        ]
    },
    {
      id: 3, name: 'Hoso Maki', show: false, food:
        [
          {
            name: "Cucumber Roll",
            price: "$4.95"
          },
          {
            name: "Avocado Roll",
            price: "$4.95"
          },
          {
            name: "Oshinko Roll",
            price: "$4.95",
            about: "Japanese pickled radish"
          },
          {
            name: "Asparagus Roll",
            price: "$4.95"
          },
          {
            name: "Salmon Roll",
            price: "$5.95",
            about: "Wild sockey salmon"
          },
          {
            name: "Tuna Roll",
            price: "$5.95"
          },
          {
            name: "Spicy Ebi Roll",
            price: "$5.95",
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
            price: "$8.25",
            about: "Tuna belly and green onion"
          },
          {
            name: "Gomae Roll",
            price: "$6.25",
            about: "Spinach salad with side sesame sauce"
          },
        ]
    },
    {
      id: 4, name: 'Korean Food', show: false, food:
        [
          {
            name: "Spicy Chirashi Don (회덮밥)",
            price: "$25.90"
          },
          {
            name: "Miso Ramen (Chicken or Beef)(미소라면)",
            price: "$17.95",
            about: "A broth seasoned noodle soup with miso and mixed vegetables"
          },
          {
            name: "Miso Ramen (Plain)",
            price: "$17.95"
          },
          {
            name: "Miso Ramen (Tofu)",
            price: "$17.95"
          },
          {
            name: "Miso Ramen (Vegetable)",
            price: "$17.95"
          }
        ]
    },
    {
      id: 5, name: 'Sushi Pizza', show: false, food:
        [
          {
            name: "Vegetable Sushi Pizza",
            price: "$17.95",
            about: "Sliced avocado, salad, deep fried sushi rice, spicy mayo, sushi sauce, ponzu sauce, spicy sauce, salad sauce, wasabi sauce"
          },
          {
            name: "Sushi Pizza",
            price: "$18.95",
            about: "Spicy salmon, salad, deep fried sushi rice, spicy mayo, sushi sauce, ponzu sauce, spicy sauce, salad sauce, wasabi sauce"
          }
        ]
    },
    {
      id: 6, name: 'Lunch / Dinner', show: false, food:
        [
          {
            category: "Lunch Special"
          },
          {
            name: "Vegetable Roll Combo (Vegetarian)",
            price: "$15.95"
          },
          {
            name: "B.B.Q Tofu Teriyaki & Rice Combo",
            price: "$16.95"
          },
          {
            name: "Beef Teriyaki & Rice Combo",
            price: "$16.95"
          },
          {
            name: "Chicken Teriyaki & Rice Combo",
            price: "$16.95"
          },
          {
            name: "Tuna & Salmon Roll Combo",
            price: "$17.95"
          },
          {
            name: "Salmon Teriyaki & Rice Combo",
            price: "$17.95"
          },
          {
            name: "Sushi Combo (5pcs)",
            price: "$18.95"
          },
          {
            name: "Sashimi & Rice Combo (7pcs)",
            price: "$19.95"
          },
          {
            name: "Unagi & Rice Combo (4pcs)",
            price: "$19.95"
          },
          {
            about: "• Lunch Hour 11:30am - 2:30pm / All served with miso soup, appy tempura, green salad, fresh fruit & California roll. No substitution on combo menu • "
          },
          {
            category: "Dinner"
          },
          {
            name: "Chicken Teriyaki Dinner",
            price: "$25.95",
            about: "Served with rice, miso soup, salad, tempura, dynamite roll"
          },
          {
            name: "Beef Teriyaki Dinner",
            price: "$25.95",
            about: "Served with rice, miso soup, salad, tempura, dynamite roll"
          },
          {
            name: "Salmon Teriyaki Dinner",
            price: "$27.95",
            about: "Served with rice, miso soup, salad, tempura, dynamite roll"
          },
          {
            name: "Dinner Special (Chicken or Beef)",
            price: "$35.95",
            about: "Served with miso soup, sunomono, tempura, salad, dynamite roll, 2 pcs sushi, 4 pcs sashimi and customer choice of chicken or beef teriyaki"
          }
        ]
    },
    {
      id: 7, name: 'Fresh Fish Roll', show: false, food:
        [
          {
            name: "California Roll",
            price: "$5.75",
            about: "Avocado, cucumber & crab meat"
          },
          {
            name: "Salmon Avocado Roll",
            price: "$9.50"
          },
          {
            name: "Tuna Avocado Roll",
            price: "$9.50"
          },
          {
            name: "Spicy Tuan Roll",
            price: "$9.50",
            about: "Cucumber, spicy tuna"
          },
          {
            name: "Spicy Salmon Roll",
            price: "$9.50",
            about: "Cucumber, spicy salmon"
          },
          {
            name: "Scallop Crunch Roll",
            price: "$15.95"
          },
          {
            name: "Futo Maki",
            price: "$14.50",
            about: "Carrot, crab meat, spinach, oshinko, avocado, cucumber, tamago, inari"
          },
          {
            name: "Kamikaze Salmon Roll",
            price: "$14.90",
            about: "TOP: salmon, tempura bits, sushi sauce, spicy mayo sauce, spicy hot sauce, wasabi sauce, INSIDE: cucumber and spicy salmon"
          },
          {
            name: "Kamikaze Tuna Roll",
            price: "$14.90",
            about: "TOP: tuna, tempura bits, sushi sauce, spicy mayo sauce, spicy hot sauce, wasabi sauce, INSIDE: cucumber and spicy tuna"
          },
          {
            name: "Tornado Roll",
            price: "$14.90",
            about: "TOP: steamed prawn, sushi sauce, wasabi sauce, INSIDE: california roll"
          },
          {
            name: "Sashimi Salad Roll",
            price: "$15.50",
            about: "TOP: salmon, tuna, red snapper, salad sauce, sushi sauce, INSIDE: assorted vegetable roll"
          },
          {
            name: "Hawaii Roll",
            price: "$14.90",
            about: "TOP: salmon, tuna, avocado, sushi sauce, wasabi sauce, INSIDE: california roll"
          },
          {
            name: "Philadelphia Roll",
            price: "$14.90",
            about: "TOP: smoked salmon, sushi sauce, wasabi sauce, INSIDE: avocado, asparagus, cheese"
          },
          {
            name: "Boston Roll",
            price: "$16.50",
            about: "TOP: seared tuna, sushi sauce, wasabi sauce, INSIDE: real crab, mayo, masago, avocado"
          },
          {
            name: "Island Roll",
            price: "$17.50",
            about: "TOP: salmon, avocado, sushi sauce, wasabi sauce, INSIDE: scallop, eel, cucumber, cheese"
          },
          {
            name: "Real Crab Califoria Roll",
            price: "$13.90"
          }
        ]
    },
    {
      id: 8, name: 'Baked Roll', show: false, food:
        [
          {
            name: "B.C Roll",
            price: "$8.50",
            about: "Barbecued salmon and cucumber"
          },
          {
            name: "Chicken Teriyaki Roll",
            price: "$8.50"
          },
          {
            name: "Beef Teriyaki Roll",
            price: "$8.50"
          },
          {
            name: "Alaska Roll",
            price: "$13.95",
            about: "TOP: smoked salmon, sushi sauce, wasabi sauce, INSIDE: crab meat, asparagus, avocado"
          },
          {
            name: "Aladdin Roll",
            price: "$14.50",
            about: "TOP: sushi sauce, wasabi sauce INSIDE: eel, steamed prawn, avocado, cucumber, crab meat"
          },
          {
            name: "Dragon Roll",
            price: "$15.50",
            about: "TOP: eel, sushi sauce, wasabi sauce, sesame, INSIDE: california roll"
          },
          {
            name: "Smoked Salmon Roll",
            price: "$13.90",
            about: "Smoked salmon on top of vegetable roll"
          }
        ]
    },
    {
      id: 9, name: 'Tempura Roll', show: false, food:
        [
          {
            name: "Yam Roll",
            price: "$8.50"
          },
          {
            name: "Deep Fried California Roll",
            price: "$9.95"
          },
          {
            name: "Dynamite Roll",
            price: "$9.95"
          },
          {
            name: "Deep Fried Spicy Tuna Roll",
            price: "$12.95"
          },
          {
            name: "T.N.T Roll",
            price: "$14.95",
            about: "TOP: spicy tuna, tempura bits, sushi sauce, wasabi sauce, spicy mayo, INSIDE: prawn tempura, cucumber"
          },
          {
            name: "Caterpillar Roll",
            price: "$14.95",
            about: "TOP: sliced avocado, tempura bits, sushi sauce, wasabi sauce, INSIDE: prawn tempura, cucumber"
          },
          {
            name: "Spider Roll",
            price: "$14.95",
            about: "TOP: tempura bits, sushi sauce, INSIDE: deep fried soft shell crab, avocado, cucumber, crab meat"
          },
          {
            name: "Grand Canyon Roll (Deep Fried)",
            price: "$18.95",
            about: "TOP: masago, sushi sauce, INSIDE: salmon, tuna, snapper, prawn, cream cheese, avocado, crab meat"
          }
        ]
    },
    {
      id: 10, name: 'Special Roll', show: false, food:
        [
          {
            name: "Butterfly Roll",
            price: "21.95",
            about: "TOP: salmon, tuna, red snapper, steamed prawn, avocado, tempura bits, masago, wasabi sauce, spicy mayo sauce, sushi sauce / INISDE: dynamite roll"
          },
          {
            name: "Special Spider Roll",
            price: "$21.95",
            about: "TOP: soft shell crab, masago, tempura bits, sushi sauce / INSIDE: tamago, avocado, cucumber, crab meat"
          },
          {
            name: "Crazy Roll (Baked)",
            price: "$23.95",
            about: "TOP: baked scallop, tempura bits, masago, soy mayo sauce, sushi sauce, spicy mayo sauce / INSIDE: deep fried spicy tuna roll"
          },
          {
            name: "Firecraker Roll",
            price: "$20.95",
            about: "TOP: seared tuna, tempura bits, masago, spicy sauce, spicy mayo sauce, soy mayo sauce, sushi sauce / INSIDE: dynamite roll"
          },
          {
            name: "Volcano Roll (Scallop)",
            price: "$23.95",
            about: "TOP: green salad, scallop, masago, spicy sauce, tomato, sushi sauce, spicy mayo / INSIDE: deep fried spicy tuna roll"
          },
          {
            name: "Volcano Roll (Tuna)",
            price: "$23.95",
            about: "TOP: green salad, tuna, masago, spicy sauce, tomato, sushi sauce, spicy mayo / INSIDE: deep fried spicy tuna roll"
          },
          {
            name: "Cheese Lava Roll",
            price: "$23.95",
            about: "TOP: baked scallop, mushroom, shrimp, onion, cheese, tempura, bits, soy mayo sauce, sushi sauce / INSIDE california roll"
          },
          {
            name: "Kiss of Fire Roll",
            price: "$21.95",
            about: "TOP: tuna, tomato, tempura bits, masago, ginger, green onion, spicy sauce, hot chilli sauce, ponzu sauce"
          },
          {
            name: "Dragonfly Roll",
            price: "$22.95",
            about: "TOP: eel, sushi sauce, wasabi sauce / INSIDE: crab meat, avocado, cucumber, tamago"
          },
          {
            name: "Rainbow Roll",
            price: "$19.95",
            about: "TOP: salmon, tuna, steamed prawn, red snapper, wasabi sauce, sushi sauce / INSIDE: california roll"
          },
          {
            name: "M80 Roll",
            price: "$23.95",
            about: "TOP: baked scallop, crab meat, tempura bits, masago, soy mayo sauce, sushi sauce, spicy mayo sauce / INSIDE: tuna, red snapper, salmon"
          },
          {
            name: "House Roll (12pcs)",
            price: "$26.00",
            about: "TOP: smoked salmon, unagi sauce, spicy sauce, spicy mayo, masago, green onions, sesame seeds / INSIDE: crab meat, prawn tempur, avocado, cucumber, tamago, eel, oshinko, carrot"
          },
        ]
    },
    {
      id: 11, name: 'Vegetable Roll', show: false, food:
        [
          {
            name: "Avo Cucumber Roll",
            price: "$7.95"
          },
          {
            name: "Yam Roll",
            price: "$8.50"
          },
          {
            name: "Vegetable Roll",
            price: "$8.50"
          },
          {
            name: "Vege Caterpillar Roll",
            price: "$12.50"
          },
          {
            name: "Yam Caterpillar Roll",
            price: "$13.50"
          },
          {
            name: "Yam Avocado Roll",
            price: "$9.00"
          },
        ]
    },
    {
      id: 12, name: 'Noodle', show: false, food:
        [
          {
            name: "Vegetable Udon",
            price: "$16.95"
          },
          {
            name: "Tempura Udon",
            price: "$17.95"
          },
          {
            name: "Beef Udon",
            price: "$17.95"
          },
          {
            name: "Chicken Udon",
            price: "$17.95"
          },
          {
            name: "Seafood Udon",
            price: "$19.25"
          },
          {
            name: "Spicy Seafood Udon",
            price: "$20.25"
          },
          {
            name: "Curry Udon (chicken or beef)",
            price: "$17.95"
          },
          {
            name: "Vegetable Yakisoba",
            price: "$16.95"
          },
          {
            name: "Chicken Yakisoba",
            price: "$17.95"
          },
          {
            name: "Beef Yakisoba",
            price: "$17.95"
          },
          {
            name: "Seafood Yakisoba",
            price: "$19.95"
          },
          {
            name: "Curry Udon (Plain)",
            price: "$17.95"
          },
          {
            name: "Curry Udon (Tofu)",
            price: "$17.95"
          },
          {
            name: "Curry Udon (Vegetable)",
            price: "$17.95"
          }
        ]
    },
    {
      id: 13, name: 'Tempura', show: false, food:
        [
          {
            name: "Appy Tempura (4pcs)",
            price: "$8.90"
          },
          {
            name: "Vegetable Tempura (6pcs)",
            price: "$12.90"
          },
          {
            name: "Yam and Prawn Tempura (6pcs)",
            price: "$13.90"
          },
          {
            name: "Prawn Tempura (6pcs)",
            price: "$14.90"
          },
          {
            name: "Assorted Fish Tempura (7pcs)",
            price: "$18.25",
            about: "Prawn, red snapper, salmon and tuna"
          },
          {
            name: "Assorted Tempura (12pcs)",
            price: "$19.25",
            about: "Yam, squash, prawn, onion, asparagus, broccoli"
          },
          {
            name: "Yam Tempura (5pcs)",
            price: "$10.95"
          }
        ]
    },
    {
      id: 14, name: 'DON / KATSU / TERIYAKI', show: false, food:
        [
          {
            name: "Tofu Teriyaki",
            price: "$15.95"
          },
          {
            name: "Chicken Teriyaki",
            price: "$17.95"
          },
          {
            name: "Beef Teriyaki",
            price: "$17.95"
          },
          {
            name: "Salmon Teriyaki",
            price: "$19.95"
          },
          {
            name: "Tempura Don",
            price: "$17.95"
          },
          {
            name: "Chicken Don",
            price: "$17.95"
          },
          {
            name: "Beef Don",
            price: "$17.95"
          },
          {
            name: "Unagi Don (6pcs)",
            price: "$24.95",
            about: "Eel on rice"
          },
          {
            name: "Chirashi Don",
            price: "$26.95",
            about: "Assorted sashimi on sushi rice"
          },
          {
            name: "Salmon Don (10pcs)",
            price: "$24.95"
          },
          {
            name: "Tuna Don (10pcs)",
            price: "$24.95"
          },
          {
            name: "Pork Katsu",
            price: "$19.95",
            about: "Deep fried breaded pork"
          },
          {
            name: "Chicken Katsu",
            price: "$19.95",
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
            price: "$16.95",
            about: "salmon, tuna, red snapper, steamed prawn"
          },
          {
            name: "4 pcs Sushi & Spicy Tuna Roll",
            price: "$18.25",
            about: "salmon, tuna, red snapper, steamed prawn"
          },
          {
            name: "4 pcs Sushi & Dynamite Roll",
            price: "$18.25",
            about: "salmon, tuna, red snapper, steamed prawn"
          },
          {
            name: "Vegetable Roll Special (4 rolls)",
            price: "$22.95",
            about: "Cucumber roll, avocado roll, vegetable roll, yam roll"
          },
          {
            name: "Roll Combo Special (4 rolls)",
            price: "$29.95",
            about: "California roll, dynamite roll, yam roll, spicy tuna roll"
          },
          {
            name: "Mill Bay Roll Special (6 rolls)",
            price: "$39.95",
            about: "California roll, calamari tempura roll, yam roll, cucumber roll, BC roll, Spicy tuna roll"
          },
          {
            name: "Nigiri Combo (8pcs)",
            price: "$22.95",
            about: "3pcs salmon, 3pcs tuna, 2pcs ebi"
          },
          {
            category: "Platter"
          },
          {
            name: "Love Platter",
            price: "$56.00",
            about: "Monkey brain, california roll, dynamite roll, tuna roll, cucumber roll and 8pcs sushi"
          },
          {
            name: "Harmony Platter",
            price: "$65.00",
            about: "Monkey brain, California roll, dynamite roll, tuna roll, salmon roll, cucumber roll and 10pcs sushi"
          },
          {
            name: "Peace Platter A",
            price: "$75.00",
            about: "Monkey brain, california roll, dynamite roll, calamari tempura roll, tuna roll, salmon roll, cucumber roll and 12pcs sushi"
          },
          {
            name: "Peace Platter B",
            price: "$89.00",
            about: "Monkkey brain, california roll, dynamite roll, calamari tempura roll, tuna roll, salmon roll, cucumber roll and 8pcs sashimi, 12pcs sushi"
          },
          {
            name: "House Platter",
            price: "$136.00",
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
            name: "Water",
            price: "$2.25"
          },
          {
            name: "Soft Drinks",
            price: "$3.00",
            about: "Coke, diet coke, ginger ale, iced tea, root beer, sprite, soda water"
          },
          {
            name: "Iced Tea",
            price: "$3.25"
          },
          {
            name: "Juice",
            price: "$3.75",
            about: "Orange and apple"
          },
          {
            name: "Japanese Juice",
            price: "$4.50",
            about: "Melon and strawberry"
          },
          {
            category: "Beers"
          },
          {
            name: "Domestic",
            price: "$6.50",
            about: "Kokanee, Canadian, Budweiser, Coors Light, Piper's Pale Ale"
          },
          {
            name: "Imported (small)",
            price: "$6.90",
            about: "Sapporo, Asahi, Kirin"
          },
          {
            name: "Imported (large)",
            price: "$11.75",
            about: "Sapporo, Asahi, Kirin"
          },
          {
            name: "Draught Beer",
            price: "$7.50",
            about: "Sapporo (Pint/500ml)"
          },
          {
            name: "Draught Beer",
            price: "$20.50",
            about: "Sapporo (Pitcher/1600ml)"
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
            price: "$7.25"
          },
          {
            name: "Hot sake (large)",
            price: "$11.95"
          },
          {
            name: "Soju (소주)",
            price: "$17.50"
          },
          {
            category: "Wine"
          },
          {
            name: "White / Red (glass)",
            price: "$6.50"
          },
          {
            name: "White / Red (1/2L)",
            price: "$16.50"
          },
          {
            name: "White / Red (1L)",
            price: "$25.95"
          }
        ]
    }
  ]);
});

module.exports = router;
