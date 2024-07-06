const drinks = {
  beer: {
    name: [
      "Karlovačko točeno  0,2 l",
      "Karlovačko točeno 0,3 l",
      "Karlovačko točeno 0,5 l",
      "Karlovačko 0,33 l",
      "Karlovačko 0,5 l",
      "Karlovačko Crno",
      "Karlovačko Radler",
      "Heineken",
      "Ožujsko 0,5 l",
      "Ožujsko 0,33 l",
      "Staropramen",
      "Bezalkoholno pivo",
      "Paulaner",
      "Corona",
    ],
    price: [
      "2,70 Є",
      "4,20 Є",
      "5,20 Є",
      "4,20 Є",
      "5,20 Є",
      "5,20 Є",
      "5,20 Є",
      "5,50 Є",
      "5,20 Є",
      "4,20 Є",
      "4,60 Є",
      "4,50 Є",
      "6,50 Є",
      "7,00 Є",
    ],
  },
  wine: {
    name: [
      "Malvazija 0,187 l",
      "Malvazija 1,00 l",
      "Graševina 0,187 l",
      "Graševina 1,00 l",
      "Babić 0,187 l",
      "Babić kvalitetno 0,75 l",
      "Pelješac 1,00 l",
      "Zlatan Plavac 0,75 l",
      "Zlatna Žlahtina 0,75 l",
      "Rose 0,187 l",
      "Bottega 0,2 l",
      "Bottega Gold 0,75 l",
      "Bottega Rose Gold 0,75 l",
      "Bottega White Gold 0,75 l",
      "Bottega Gold 1,5 l",
      "Martini Bianco",
      "Martini Rosso",
      "Martini Extra Dry",
    ],
    price: [
      "7,00 Є",
      "23,00 Є",
      "7,00 Є",
      "23,00 Є",
      "7,00 Є",
      "23,00 Є",
      "23,00 Є",
      "45,00 Є",
      "40,00 Є",
      "7,00 Є",
      "10,00 Є",
      "65,00 Є",
      "65,00 Є",
      "65,00 Є",
      "150,00 Є",
      "6,00 Є",
      "6,00 Є",
      "6,00 Є",
    ],
  },
  domesticAlcohol: {
    name: [
      "Amaro",
      "Cherry Brandy",
      "Gin",
      "Lavov",
      "Lozovača",
      "Konjak domaći",
      "Kruškovac",
      "Maraschino",
      "Medica",
      "Orahovac",
      "Pelinkovac",
      "Rum",
      "Stock",
      "Šljivovica",
      "Travarica",
      "Viljamovka",
      "Vodka",
      "Žutuja",
      "Teranino",
      "Pelinkovac Antique",
    ],
    price: [
      "2,50 Є",
      "2,50 Є",
      "3,00 Є",
      "2,50 Є",
      "2,20 Є",
      "2,50 Є",
      "2,50 Є",
      "2,50 Є",
      "2,50 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "2,20 Є",
      "3,70 Є",
      "2,50 Є",
    ],
  },
  importedAlcohol: {
    name: [
      "Bacardi tamni",
      "Bacardi bijeli",
      "Bailey's",
      "Ballantines",
      "Campari",
      "Carolans",
      "Chivas Regal 12 Y.O.",
      "Gordons Gin",
      "Hennessy V.S.",
      "Jack Daniel's",
      "Jagermeister",
      "Jameson",
      "Johnny Walker Red Label",
      "Johnny Walker Black Label",
      "Martel V.S",
      "Tequila Silver",
      "Tequila Gold",
      "Vodka Smirnoff",
      "Rémy Martin",
      "Vodka Grey Goose",
    ],
    price: [
      "6,00 Є",
      "6,00 Є",
      "6,00 Є",
      "5,00 Є",
      "5,60 Є",
      "5,60 Є",
      "7,50 Є",
      "6,00 Є",
      "7,50 Є",
      "7,50 Є",
      "6,00 Є",
      "6,00 Є",
      "5,60 Є",
      "6,80 Є",
      "7,50 Є",
      "5,60 Є",
      "5,60 Є",
      "6,00 Є",
      "9,00 Є",
      "9,00 Є",
    ],
  },
  mixedDrinks: {
    name: [
      "Smirnoff Tonic",
      "Smirnoff Juice",
      "Vodka Tonic",
      "Gordons Tonic",
      "Gin Tonic",
      "Rum Cola",
      "Bacardi tamni Cola",
      "Vodka Juice",
      "Jack Daniel's Cola",
      "Jagermeister Cola",
      "Johnny Walker Red Label Cola",
      "Johnny Walker Black Label Cola",
      "Ballantines Cola",
      "Chivas Cola",
      "Jameson Cola",
      "Stock Cola",
      "Domaći konjak Cola",
      "Bacardi bijeli Cola",
      "Campari Juice",
      "Campari Mineral water",
    ],
    price: [
      "6,50 Є",
      "6,50 Є",
      "5,60 Є",
      "6,50 Є",
      "5,60 Є",
      "5,60 Є",
      "6,60 Є",
      "5,60 Є",
      "6,80 Є",
      "6,80 Є",
      "5,60 Є",
      "7,50 Є",
      "5,60 Є",
      "6,80 Є",
      "6,60 Є",
      "5,30 Є",
      "5,30 Є",
      "6,60 Є",
      "6,60 Є",
      "6,60 Є",
    ],
  },
  beverages: {
    name: [
      "Rose Lemonade Fetimans",
      "Orangina",
      "Spezi",
      "Pipi",
      "Coca Cola",
      "Fanta",
      "Sprite",
      "Cockta",
      "Tonic Water",
      "Bitter lemon",
      "Ledeni čaj",
      "Cedevita",
      "Prirodni sok",
      "Mineralna voda bočica 0,33 l",
      "Mineralna voda bočica 0,75 l", 
      "Mineralna voda aroma",
      "Voda negazirana 0,33 l",
      "Voda negazirana 0,75 l", 
      "Limunada",
      "Narančada",
      "Svježe cjeđeni sok",
      "Voda negazirana P 0,5 l",
      "Voda negazirana P 1,5 l",
      "Mineralna voda P 0,5 l",
      "Mineralna voda P 1,5 l",
      "Cola P",
      "Fanta P",
    ],
    price: [
      "6,50 Є",
      "4,80 Є",
      "4,30 Є",
      "4,30 Є",
      "4,30 Є",
      "4,30 Є",
      "4,30 Є",
      "4,30 Є",
      "4,30 Є",
      "4,30 Є",
      "3,80 Є",
      "2,80 Є",
      "4,10 Є",
      "2,80 Є",
      "5,60 Є",
      "2,90 Є",
      "2,70 Є",
      "5,40 Є",
      "5,50 Є",
      "7,00 Є",
      "8,00 Є",
      "4,00 Є",
      "6,50 Є",
      "4,00 Є",
      "6,50 Є",
      "4,50 Є",
      "4,50 Є",
    ],
  },
  cider: {
    name: ["Somersby"],
    price: ["6,50 Є"],
  },
  energyDrinks: {
    name: ["Red Bull"],
    price: ["6,40 Є"],
  },
  warmDrinks: {
    name: [
      "Kava",
      "Kava s mlijekom",
      "Kava s mlijekom velika",
      "Kava sa šlagom",
      "Kava sa Ledo šlagom",
      "Kava sa šlagom velika",
      "Kava sa Ledo šlagom velika",
      "Kava bez kofeina",
      "Kava bez kofeina s mlijekom",
      "Kava bez kofeina s mlijekom velika",
      "Kava bez kofeina sa šlagom",
      "Kava bez kofeina sa Ledo šlagom",
      "Kava bez kofeina sa šlagom velika",
      "Kava bez kofeina sa Ledo šlagom velika",
      "Cappucino",
      "Cappucino bez kofeina",
      "Kakao",
      "Vruća čokolada",
      "Bijela kava",
      "Bijela kava bez kofeina",
      "Latte Macchiato",
      "Nescaffee",
      "Nescaffee + šlag",
      "Irska kava",
      "Americano",
      "Čaj",
      "Ledena kava sa sladoledom",
      "Punč",
      "Mlijeko",
      "Šlag",
    ],

    price: [
      "1,70 Є",
      "1,80 Є",
      "2,10 Є",
      "1,80 Є",
      "2,00 Є",
      "2,10 Є",
      "2,20 Є",
      "2,00 Є",
      "2,10 Є",
      "2,50 Є",
      "2,20 Є",
      "2,50 Є",
      "2,40 Є",
      "2,70 Є",
      "5,00 Є",
      "5,50 Є",
      "3,30 Є",
      "4,00 Є",
      "2,50 Є",
      "2,70 Є",
      "6,00 Є",
      "3,00 Є",
      "3,10 Є",
      "7,00 Є",
      "3,00 Є",
      "2,00 Є",
      "7,00 Є",
      "2,00 Є",
      "1,20 Є",
      "0,80 Є",
    ],
  },
  coldDrinks: {
    name: [
      "Bubble Tea",
      "Frappe Milkshake",
      "Ledeni sok 0,3 l",
      "Ledeni sok 0,5 l",
      "Ledeni sok + čaša 0,3 l",
      "Ledeni sok + čaša 0,5 l",
    ],
    price: ["6,00 Є","5,00 Є", "5,00 Є", "6,50 Є", "8,50 Є", "10,00 Є"],
  },
  sweets: {
    name: ["Sladoled", "Sladoled Premium", "Slatki kornet", "Čokoladni kornet"],
    price: ["2,60 Є", "3,00 Є", "1,00 Є", "1,70 Є"],
  },
  cocktails: {
    name: [
      "Pina Colada",
      "Cosmopolitan",
      "Cuba Libre",
      "Mojito",
      "Mojito 1L",
      "Mojito Strawberry",
      "Mojito Blueberry",
      "Long Beach Ice Tea",
      "Margarita",
      "Long Island Ice Tea",
      "Tequila Sunrise",
      "Sex On The Beach",
      "Sex On The Beach 1L",
      "Blue Lagoon",
      "Blue Hawaiian",
      "Caipirinha",
      "White Russian",
      "Aperol Spritz",
      "Caribbean Cruise",
      "Caribbean Cruise 1L",
      "Mai Tai",
      "Zombie",
      "Bahama Mama",
      "Bahama Mama 1L", 
      "Negroni",
      "Hugo",
      "Espresso Martini",
      "Little Engineer",
      "Simply Red",
    ],

    price: [
      "11,50 Є",
      "10,00 Є",
      "11,50 Є",
      "11,50 Є",
      "30,00 Є",
      "11,50 Є",
      "11,50 Є",
      "12,50 Є",
      "10,00 Є",
      "12,50 Є",
      "11,50 Є",
      "11,50 Є",
      "30,00 Є",
      "11,50 Є",
      "11,50 Є",
      "11,50 Є",
      "11,50 Є",
      "11,00 Є",
      "12,50 Є",
      "35,00 Є",
      "12,50 Є",
      "12,50 Є",
      "12,50 Є",
      "35,00 Є",
      "11,00 Є",
      "11,50 Є",
      "11,50 Є",
      "10,00 Є",
      "10,00 Є",
    ],
  },

  gins: {
    name: [
      "Monkey 47",
      "Tanqueray",
      "Hendrick's",
      "Gin Mare",
      "Tanqueray No. 10",
      "Bombay Sapphire",
      "1724 Tonic water",
      "Thomas Henry tonic water",
      "Thomas Henry Cherry Blossom tonic",
    ],
    price: [
      "8,00 Є",
      "5,50 Є",
      "7,00 Є",
      "8,00 Є",
      "7,50 Є",
      "5,50 Є",
      "6,00 Є",
      "5,50 Є",
      "5,50 Є",
    ],
  },
};

let inventura = [
  "Karlovačko točeno  0,2 l",
  0,
  "Karlovačko točeno 0,3 l",
  0,
  "Karlovačko točeno 0,5 l",
  0,
  "Karlovačko 0,33 l",
  0,
  "Karlovačko 0,5 l",
  0,
  "Karlovačko Crno",
  0,
  "Karlovačko Radler",
  0,
  "Heineken",
  0,
  "Ožujsko 0,5 l",
  0,
  "Ožujsko 0,33 l",
  0,
  "Staropramen",
  0,
  "Bezalkoholno pivo",
  0,
  "Paulaner",
  0,
  "Corona",
  0,
  "Malvazija 0,187 l",
  0,
  "Malvazija 1,00 l",
  0,
  "Graševina 0,187 l",
  0,
  "Graševina 1,00 l",
  0,
  "Babić 0,187 l",
  0,
  "Babić kvalitetno 0,75 l",
  0,
  "Pelješac 1,00 l",
  0,
  "Zlatan Plavac 0,75 l",
  0,
  "Zlatna Žlahtina 0,75 l",
  0,
  "Rose 0,187 l",
  0,
  "Bottega 0,2 l",
  0,
  "Bottega Gold 0,75 l",
  0,
  "Bottega Rose Gold 0,75 l",
  0,
  "Bottega White Gold 0,75 l",
  0,
  "Bottega Gold 1,5 l",
  0,
  "Martini Bianco",
  0,
  "Martini Rosso",
  0,
  "Martini Extra Dry",
  0,
  "Amaro",
  0,
  "Cherry Brandy",
  0,
  "Gin",
  0,
  "Lavov",
  0,
  "Lozovača",
  0,
  "Konjak domaći",
  0,
  "Kruškovac",
  0,
  "Maraschino",
  0,
  "Medica",
  0,
  "Orahovac",
  0,
  "Pelinkovac",
  0,
  "Rum",
  0,
  "Stock",
  0,
  "Šljivovica",
  0,
  "Travarica",
  0,
  "Viljamovka",
  0,
  "Vodka",
  0,
  "Žutuja",
  0,
  "Teranino",
  0,
  "Pelinkovac Antique",
  0,
  "Bacardi tamni",
  0,
  "Bacardi bijeli",
  0,
  "Bailey's",
  0,
  "Ballantines",
  0,
  "Campari",
  0,
  "Carolans",
  0,
  "Chivas Regal 12 Y.O.",
  0,
  "Gordons Gin",
  0,
  "Hennessy V.S.",
  0,
  "Jack Daniel's",
  0,
  "Jagermeister",
  0,
  "Jameson",
  0,
  "Johnny Walker Red Label",
  0,
  "Johnny Walker Black Label",
  0,
  "Martel V.S",
  0,
  "Tequila Silver",
  0,
  "Tequila Gold",
  0,
  "Vodka Smirnoff",
  0,
  "Rémy Martin",
  0,
  "Vodka Grey Goose",
  0,
  "Smirnoff Tonic",
  0,
  "Smirnoff Juice",
  0,
  "Vodka Tonic",
  0,
  "Gordons Tonic",
  0,
  "Gin Tonic",
  0,
  "Rum Cola",
  0,
  "Bacardi tamni Cola",
  0,
  "Vodka Juice",
  0,
  "Jack Daniel's Cola",
  0,
  "Jagermeister Cola",
  0,
  "Johnny Walker Red Label Cola",
  0,
  "Johnny Walker Black Label Cola",
  0,
  "Ballantines Cola",
  0,
  "Chivas Cola",
  0,
  "Jameson Cola",
  0,
  "Stock Cola",
  0,
  "Domaći konjak Cola",
  0,
  "Bacardi bijeli Cola",
  0,
  "Campari Juice",
  0,
  "Campari Mineral water",
  0,
  "Rose Lemonade Fetimans",
  0,
  "Orangina",
  0,
  "Spezi",
  0,
  "Pipi",
  0,
  "Coca Cola",
  0,
  "Fanta",
  0,
  "Sprite",
  0,
  "Cockta",
  0,
  "Tonic Water",
  0,
  "Bitter lemon",
  0,
  "Ledeni čaj",
  0,
  "Cedevita",
  0,
  "Prirodni sok",
  0,
  "Mineralna voda bočica 0,33 l",
  0,
  "Mineralna voda bočica 0,75 l",
  0,
  "Mineralna voda aroma",
  0,
  "Voda negazirana 0,33 l",
  0,
  "Voda negazirana 0,75 l",
  0,
  "Limunada",
  0,
  "Narančada",
  0,
  "Svježe cjeđeni sok",
  0,
  "Voda negazirana P 0,5 l",
  0,
  "Voda negazirana P 1,5 l",
  0,
  "Mineralna voda P 0,5 l",
  0,
  "Mineralna voda P 1,5 l",
  0,
  "Cola P",
  0,
  "Fanta P",
  0,
  "Somersby",
  0,
  "Red Bull",
  0,
  "Kava",
  0,
  "Kava s mlijekom",
  0,
  "Kava s mlijekom velika",
  0,
  "Kava sa šlagom",
  0,
  "Kava sa Ledo šlagom",
  0,
  "Kava sa šlagom velika",
  0,
  "Kava sa Ledo šlagom velika",
  0,
  "Kava bez kofeina",
  0,
  "Kava bez kofeina s mlijekom",
  0,
  "Kava bez kofeina s mlijekom velika",
  0,
  "Kava bez kofeina sa šlagom",
  0,
  "Kava bez kofeina sa Ledo šlagom",
  0,
  "Kava bez kofeina sa šlagom velika",
  0,
  "Kava bez kofeina sa Ledo šlagom velika",
  0,
  "Cappucino",
  0,
  "Cappucino bez kofeina",
  0,
  "Kakao",
  0,
  "Vruća čokolada",
  0,
  "Bijela kava",
  0,
  "Bijela kava bez kofeina",
  0,
  "Latte Macchiato",
  0,
  "Nescaffee",
  0,
  "Nescaffee + šlag",
  0,
  "Irska kava",
  0,
  "Americano",
  0,
  "Čaj",
  0,
  "Ledena kava sa sladoledom",
  0,
  "Punč",
  0,
  "Mlijeko",
  0,
  "Šlag",
  0,
  "Bubble Tea",
  0,
  "Frappe Milkshake",
  0,
  "Ledeni sok 0,3 l",
  0,
  "Ledeni sok 0,5 l",
  0,
  "Ledeni sok + čaša 0,3 l",
  0,
  "Ledeni sok + čaša 0,5 l",
  0,
  "Sladoled",
  0,
  "Sladoled Premium",
  0,
  "Slatki kornet",
  0,
  "Čokoladni kornet",
  0,
  "Pina Colada",
  0,
  "Cosmopolitan",
  0,
  "Cuba Libre",
  0,
  "Mojito",
  0,
  "Mojito 1L",
  0,
  "Mojito Strawberry",
  0,
  "Mojito Blueberry",
  0,
  "Long Beach Ice Tea",
  0,
  "Margarita",
  0,
  "Long Island Ice Tea",
  0,
  "Tequila Sunrise",
  0,
  "Sex On The Beach",
  0,
  "Sex On The Beach 1L",
  0,
  "Blue Lagoon",
  0,
  "Blue Hawaiian",
  0,
  "Caipirinha",
  0,
  "White Russian",
  0,
  "Aperol Spritz",
  0,
  "Caribbean Cruise",
  0,
  "Caribbean Cruise 1L",
  0,
  "Mai Tai",
  0,
  "Zombie",
  0,
  "Bahama Mama",
  0,
  "Bahama Mama 1L",
  0,
  "Negroni",
  0,
  "Hugo",
  0,
  "Espresso Martini",
  0,
  "Little Engineer",
  0,
  "Simply Red",
  0,
  "Monkey 47",
  0,
  "Tanqueray",
  0,
  "Hendrick's",
  0,
  "Gin Mare",
  0,
  "Tanqueray No. 10",
  0,
  "Bombay Sapphire",
  0,
  "1724 Tonic water",
  0,
  "Thomas Henry tonic water",
  0,
  "Thomas Henry Cherry Blossom tonic",
  0,
];

let dnevna = [
  "Karlovačko točeno  0,2 l",
  0,
  "Karlovačko točeno 0,3 l",
  0,
  "Karlovačko točeno 0,5 l",
  0,
  "Karlovačko 0,33 l",
  0,
  "Karlovačko 0,5 l",
  0,
  "Karlovačko Crno",
  0,
  "Karlovačko Radler",
  0,
  "Heineken",
  0,
  "Ožujsko 0,5 l",
  0,
  "Ožujsko 0,33 l",
  0,
  "Staropramen",
  0,
  "Bezalkoholno pivo",
  0,
  "Paulaner",
  0,
  "Corona",
  0,
  "Malvazija 0,187 l",
  0,
  "Malvazija 1,00 l",
  0,
  "Graševina 0,187 l",
  0,
  "Graševina 1,00 l",
  0,
  "Babić 0,187 l",
  0,
  "Babić kvalitetno 0,75 l",
  0,
  "Pelješac 1,00 l",
  0,
  "Zlatan Plavac 0,75 l",
  0,
  "Zlatna Žlahtina 0,75 l",
  0,
  "Rose 0,187 l",
  0,
  "Bottega 0,2 l",
  0,
  "Bottega Gold 0,75 l",
  0,
  "Bottega Rose Gold 0,75 l",
  0,
  "Bottega White Gold 0,75 l",
  0,
  "Bottega Gold 1,5 l",
  0,
  "Martini Bianco",
  0,
  "Martini Rosso",
  0,
  "Martini Extra Dry",
  0,
  "Amaro",
  0,
  "Cherry Brandy",
  0,
  "Gin",
  0,
  "Lavov",
  0,
  "Lozovača",
  0,
  "Konjak domaći",
  0,
  "Kruškovac",
  0,
  "Maraschino",
  0,
  "Medica",
  0,
  "Orahovac",
  0,
  "Pelinkovac",
  0,
  "Rum",
  0,
  "Stock",
  0,
  "Šljivovica",
  0,
  "Travarica",
  0,
  "Viljamovka",
  0,
  "Vodka",
  0,
  "Žutuja",
  0,
  "Teranino",
  0,
  "Pelinkovac Antique",
  0,
  "Bacardi tamni",
  0,
  "Bacardi bijeli",
  0,
  "Bailey's",
  0,
  "Ballantines",
  0,
  "Campari",
  0,
  "Carolans",
  0,
  "Chivas Regal 12 Y.O.",
  0,
  "Gordons Gin",
  0,
  "Hennessy V.S.",
  0,
  "Jack Daniel's",
  0,
  "Jagermeister",
  0,
  "Jameson",
  0,
  "Johnny Walker Red Label",
  0,
  "Johnny Walker Black Label",
  0,
  "Martel V.S",
  0,
  "Tequila Silver",
  0,
  "Tequila Gold",
  0,
  "Vodka Smirnoff",
  0,
  "Rémy Martin",
  0,
  "Vodka Grey Goose",
  0,
  "Smirnoff Tonic",
  0,
  "Smirnoff Juice",
  0,
  "Vodka Tonic",
  0,
  "Gordons Tonic",
  0,
  "Gin Tonic",
  0,
  "Rum Cola",
  0,
  "Bacardi tamni Cola",
  0,
  "Vodka Juice",
  0,
  "Jack Daniel's Cola",
  0,
  "Jagermeister Cola",
  0,
  "Johnny Walker Red Label Cola",
  0,
  "Johnny Walker Black Label Cola",
  0,
  "Ballantines Cola",
  0,
  "Chivas Cola",
  0,
  "Jameson Cola",
  0,
  "Stock Cola",
  0,
  "Domaći konjak Cola",
  0,
  "Bacardi bijeli Cola",
  0,
  "Campari Juice",
  0,
  "Campari Mineral water",
  0,
  "Rose Lemonade Fetimans",
  0,
  "Orangina",
  0,
  "Spezi",
  0,
  "Pipi",
  0,
  "Coca Cola",
  0,
  "Fanta",
  0,
  "Sprite",
  0,
  "Cockta",
  0,
  "Tonic Water",
  0,
  "Bitter lemon",
  0,
  "Ledeni čaj",
  0,
  "Cedevita",
  0,
  "Prirodni sok",
  0,
  "Mineralna voda bočica 0,33 l",
  0,
  "Mineralna voda bočica 0,75 l",
  0,
  "Mineralna voda aroma",
  0,
  "Voda negazirana 0,33 l",
  0,
  "Voda negazirana 0,75 l",
  0,
  "Limunada",
  0,
  "Narančada",
  0,
  "Svježe cjeđeni sok",
  0,
  "Voda negazirana P 0,5 l",
  0,
  "Voda negazirana P 1,5 l",
  0,
  "Mineralna voda P 0,5 l",
  0,
  "Mineralna voda P 1,5 l",
  0,
  "Cola P",
  0,
  "Fanta P",
  0,
  "Somersby",
  0,
  "Red Bull",
  0,
  "Kava",
  0,
  "Kava s mlijekom",
  0,
  "Kava s mlijekom velika",
  0,
  "Kava sa šlagom",
  0,
  "Kava sa Ledo šlagom",
  0,
  "Kava sa šlagom velika",
  0,
  "Kava sa Ledo šlagom velika",
  0,
  "Kava bez kofeina",
  0,
  "Kava bez kofeina s mlijekom",
  0,
  "Kava bez kofeina s mlijekom velika",
  0,
  "Kava bez kofeina sa šlagom",
  0,
  "Kava bez kofeina sa Ledo šlagom",
  0,
  "Kava bez kofeina sa šlagom velika",
  0,
  "Kava bez kofeina sa Ledo šlagom velika",
  0,
  "Cappucino",
  0,
  "Cappucino bez kofeina",
  0,
  "Kakao",
  0,
  "Vruća čokolada",
  0,
  "Bijela kava",
  0,
  "Bijela kava bez kofeina",
  0,
  "Latte Macchiato",
  0,
  "Nescaffee",
  0,
  "Nescaffee + šlag",
  0,
  "Irska kava",
  0,
  "Americano",
  0,
  "Čaj",
  0,
  "Ledena kava sa sladoledom",
  0,
  "Punč",
  0,
  "Mlijeko",
  0,
  "Šlag",
  0,
  "Bubble Tea",
  0,
  "Frappe Milkshake",
  0,
  "Ledeni sok 0,3 l",
  0,
  "Ledeni sok 0,5 l",
  0,
  "Ledeni sok + čaša 0,3 l",
  0,
  "Ledeni sok + čaša 0,5 l",
  0,
  "Sladoled",
  0,
  "Sladoled Premium",
  0,
  "Slatki kornet",
  0,
  "Čokoladni kornet",
  0,
  "Pina Colada",
  0,
  "Cosmopolitan",
  0,
  "Cuba Libre",
  0,
  "Mojito",
  0,
  "Mojito 1L",
  0,
  "Mojito Strawberry",
  0,
  "Mojito Blueberry",
  0,
  "Long Beach Ice Tea",
  0,
  "Margarita",
  0,
  "Long Island Ice Tea",
  0,
  "Tequila Sunrise",
  0,
  "Sex On The Beach",
  0,
  "Sex On The Beach 1L",
  0,
  "Blue Lagoon",
  0,
  "Blue Hawaiian",
  0,
  "Caipirinha",
  0,
  "White Russian",
  0,
  "Aperol Spritz",
  0,
  "Caribbean Cruise",
  0,
  "Caribbean Cruise 1L",
  0,
  "Mai Tai",
  0,
  "Zombie",
  0,
  "Bahama Mama",
  0,
  "Bahama Mama 1L",
  0,
  "Negroni",
  0,
  "Hugo",
  0,
  "Espresso Martini",
  0,
  "Little Engineer",
  0,
  "Simply Red",
  0,
  "Monkey 47",
  0,
  "Tanqueray",
  0,
  "Hendrick's",
  0,
  "Gin Mare",
  0,
  "Tanqueray No. 10",
  0,
  "Bombay Sapphire",
  0,
  "1724 Tonic water",
  0,
  "Thomas Henry tonic water",
  0,
  "Thomas Henry Cherry Blossom tonic",
  0,
];

////////////////////////////////////////////////////////////////////////////////////////

let dailySum = 0;
let tips = 0;

let tablesObj = {
  Sank: {
    article: [],
  },
  V1: {
    article: [],
  },
  V2: {
    article: [],
  },
  V3: {
    article: [],
  },
  V4: {
    article: [],
  },
  V5: {
    article: [],
  },
  V6: {
    article: [],
  },
  U1: {
    article: [],
  },
  U2: {
    article: [],
  },
  T1_1: {
    article: [],
  },
  T1_2: {
    article: [],
  },
  T1_3: {
    article: [],
  },
  T1_4: {
    article: [],
  },
  T2_1: {
    article: [],
  },
  T2_2: {
    article: [],
  },
  T2_3: {
    article: [],
  },
  T2_4: {
    article: [],
  },
  T2_5: {
    article: [],
  },
  T3_1: {
    article: [],
  },
  T3_2: {
    article: [],
  },
  T3_3: {
    article: [],
  },
  T3_4: {
    article: [],
  },
};

///////////////////////////////////////////////////////////////////////////////////////
function clear() {
  document.body.innerHTML = "";
}

function renderPin(type) {
  const password = "8487";
  let input = "";
  clear();
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="numbers">
      <button class="num">1</button>
      <button class="num">2</button>
      <button class="num">3</button>
      <button class="num">4</button>
      <button class="num">5</button>
      <button class="num">6</button>
      <button class="num">7</button>
      <button class="num">8</button>
      <button class="num">9</button>
    </div>
    <div class="options">
    <button class="enter optionsbtn">Enter</button>
    <button class="close optionsbtn">Close</button>
    </div>
  `
  );

  document.querySelector(".numbers").addEventListener("click", function (e) {
    if(e.target.className === "numbers") return;

    const click = e.target.textContent;
    input += click;
  });

  document.querySelector(".enter").addEventListener("click", function () {
    if (input !== password) {
      clear();
      renderTables();
      return;
    }
    clear();
    if (type === "izvjesce") renderIzvjesce();
    if (type === "artikli") renderArtikle();
    if (type === "dnevna") renderDnevna();
    else return;
  });

  document.querySelector(".close").addEventListener("click", function () {
    clear();
    renderTables();
  });
}

function renderIzvjesce() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <div class="navigation">
    <button class="home info">Back</button>
    <button class="reset info">Reset</button>
    </div>
    <div class="sum">Total: ${dailySum.toFixed(2)} Є</div>
    `
  );

  document.querySelector(".home").addEventListener("click", function () {
    clear();
    renderTables();
  });

  document.querySelector(".reset").addEventListener("click", function () {
    dailySum = 0;
    localStorage.setItem("dailySum", JSON.stringify(dailySum));

    for (let i = 1; i < dnevna.length; i += 2) {
      dnevna[i] = 0;
    }
    localStorage.setItem("dnevna", JSON.stringify(dnevna));

    clear();
    renderTables();
  });
}

function renderArtikle() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <div class="navigation">
    <button class="home info">Back</button>
    <button class="reset info">Reset</button>
    </div>
    <div class="box"></div>
    `
  );

  for (let i = 0; i < inventura.length; i += 2) {
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `
    <div>${inventura[i]} - ${inventura[i + 1]}</div>
    `
    );
  }  

  document.querySelector(".reset").addEventListener("click", function () {
    for (let i = 1; i < inventura.length; i += 2) {
      inventura[i] = 0;
    }
    localStorage.setItem("inventura", JSON.stringify(inventura));
    clear();
    renderTables();
  });

  document.querySelector(".home").addEventListener("click", function () {
    clear();
    renderTables();
  });
}

function renderTips()
{
  let sum = "";
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="tip">${tips} Є + </div>
    <div class="numbers">
    <button class="num">1</button>
    <button class="num">2</button>
    <button class="num">3</button>
    <button class="num">4</button>
    <button class="num">5</button>
    <button class="num">6</button>
    <button class="num">7</button>
    <button class="num">8</button>
    <button class="num">9</button>
    <button class="num">Clear</button>
    <button class="num">0</button>
    <button class="num">.</button>
  </div>
  <div class="options">
  <button class="close optionsbtn">Close</button>
  <button class="reset optionsbtn">Reset</button>
  <button class="enter optionsbtn">Enter</button>
  </div>
    `
  );

  document.querySelector(".numbers").addEventListener("click",function(e){
    if(e.target.className === "numbers") return;

    if(e.target.textContent === "Clear")
      {
        sum = "";
        document.querySelector(".tip").innerHTML = tips + "Є + ";
        return;
      }

    let input =  e.target.textContent;
    sum += input;
    document.querySelector(".tip").innerHTML += input;
  })

  document.querySelector(".enter").addEventListener("click",function(){

    if(isNaN(Number(sum))) return;

    tips *= 10;
    sum = Number(sum) * 10;
    tips += sum;
    tips /= 10;
    sum = "";
    
    document.querySelector(".tip").innerHTML = tips + "Є + ";
    localStorage.setItem("tips", JSON.stringify(tips));
  })

  document.querySelector(".reset").addEventListener("click", function () {
    clear();
    document.body.insertAdjacentHTML("beforeend",
      `
      <h1>Jeste li sigurni da želite uzeti manču bez da platite porez i da tako oštetite državu i Plenkovića</h1>
      <div class="options">
      <button class="lopovluk optionsbtn">Lopovluk Lopovština</button>
      <button class="nisam optionsbtn">Ja Nisam</button>
      </div>
      `
    )
    document.querySelector(".options").addEventListener("click",function(e){
      if(e.target.textContent === "Lopovluk Lopovština")
      {
        tips = 0;
        sum = "";
        localStorage.setItem("tips", JSON.stringify(tips));
        clear();
        renderTips();
      }

      if(e.target.textContent === "Ja Nisam")
      {
        clear();
        renderTips();
      }
    })
  });

  document.querySelector(".close").addEventListener("click", function () {
    clear();
    renderTables();
  });
}

function renderDnevna() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <div class="navigation">
    <button class="home info">Back</button>
    </div>
    <div class="box"></div>
    `
  );
  for (let i = 0; i < dnevna.length; i += 2) {
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `
    <div>${dnevna[i]} - ${dnevna[i + 1]}</div>
    `
    );
  }  

  document.querySelector(".home").addEventListener("click", function () {
    clear();
    renderTables();
  });
}

function checkActive(table) {
  tablesObj[table].article.length > 0 ? "active" : "";
}

function renderTables() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="navigation">
    <button class="izvjesce info">i</button>
    <button class="artikli info">a</button>
    </div>
    <div class="tables">
      <button class="table ${
        tablesObj.Sank.article.length > 0 ? "active" : ""
      }">Sank</button>
      <button class="table  ${
        tablesObj.V1.article.length > 0 ? "active" : ""
      }">V1</button>
      <button class="table  ${
        tablesObj.V2.article.length > 0 ? "active" : ""
      }">V2</button>
      <button class="table ${
        tablesObj.V3.article.length > 0 ? "active" : ""
      }">V3</button>
      <button class="table ${
        tablesObj.V4.article.length > 0 ? "active" : ""
      }">V4</button>
      <button class="table ${
        tablesObj.V5.article.length > 0 ? "active" : ""
      }">V5</button>
      <button class="table ${
        tablesObj.V6.article.length > 0 ? "active" : ""
      }">V6</button>
      <button class="table ${
        tablesObj.U1.article.length > 0 ? "active" : ""
      }">U1</button>
      <button class="table ${
        tablesObj.U2.article.length > 0 ? "active" : ""
      }">U2</button>
      <button class="table ${
        tablesObj.T1_1.article.length > 0 ? "active" : ""
      }">T1_1</button>
      <button class="table ${
        tablesObj.T1_2.article.length > 0 ? "active" : ""
      }">T1_2</button>
      <button class="table ${
        tablesObj.T1_3.article.length > 0 ? "active" : ""
      }">T1_3</button>
      <button class="table ${
        tablesObj.T1_4.article.length > 0 ? "active" : ""
      }">T1_4</button>
      <button class="table ${
        tablesObj.T2_1.article.length > 0 ? "active" : ""
      }">T2_1</button>
      <button class="table ${
        tablesObj.T2_2.article.length > 0 ? "active" : ""
      }">T2_2</button>
      <button class="table ${
        tablesObj.T2_3.article.length > 0 ? "active" : ""
      }">T2_3</button>
      <button class="table ${
        tablesObj.T2_4.article.length > 0 ? "active" : ""
      }">T2_4</button>
      <button class="table ${
        tablesObj.T2_5.article.length > 0 ? "active" : ""
      }">T2_5</button>
      <button class="table ${
        tablesObj.T3_1.article.length > 0 ? "active" : ""
      }">T3_1</button>
      <button class="table ${
        tablesObj.T3_2.article.length > 0 ? "active" : ""
      }">T3_2</button>
      <button class="table ${
        tablesObj.T3_3.article.length > 0 ? "active" : ""
      }">T3_3</button>
      <button class="table ${
        tablesObj.T3_4.article.length > 0 ? "active" : ""
      }">T3_4</button>
    </div>
    <div class="navigation">
    <button class="dnevna info">d</button>
    <button class="tips info">t</button>
    </div>
  `
  );

  document.querySelector(".tips").addEventListener("click", function () {
    clear();
    renderTips();
  });

  document.querySelector(".dnevna").addEventListener("click", function () {
    clear();
    renderPin("dnevna");
  });

  document.querySelector(".izvjesce").addEventListener("click", function () {
    clear();
    renderPin("izvjesce");
  });

  document.querySelector(".artikli").addEventListener("click", function () {
    clear();
    renderPin("artikli");
  });

  document.querySelector(".tables").addEventListener("click", function (e) {
    if(e.target.className === "tables") return;

    const click = e.target.textContent;
    activeTable = click;

    clear();
    renderCategories();
  });
}

function renderActiveTable() {
  let sum = 0;
  tablesObj[activeTable].article.forEach((el) => {
    sum += +el.split(" - ")[1].split(" ")[0].replace(",", ".");
  });

  document.body.innerHTML = `<div class="table-articles">
</div>
<div class="navigation">
  <button class="back">Back</button>
  <button class="clear">Clear</button>
  <button class="pay">Pay</button>
</div>

<div class="sum">Total : ${sum.toFixed(2)} Є</div>

</div>`;

  document.querySelector(".back").addEventListener("click", function () {
    clear();
    renderCategories();
  });

  document.querySelector(".clear").addEventListener("click", function () {
    clear();
    renderCategories();
    tablesObj[activeTable].article = [];
    localStorage.setItem("articles", JSON.stringify(tablesObj));
  });

  document.querySelector(".pay").addEventListener("click", function () {
    dailySum += sum;
    tablesObj[activeTable].article.forEach((e) => {
      inventura[inventura.indexOf(e.split(" - ")[0]) + 1] += 1;
      dnevna[dnevna.indexOf(e.split(" - ")[0]) + 1] += 1;
    });
    tablesObj[activeTable].article = [];
    localStorage.setItem("inventura", JSON.stringify(inventura));
    localStorage.setItem("dnevna", JSON.stringify(dnevna));
    localStorage.setItem("dailySum", JSON.stringify(dailySum));
    localStorage.setItem("articles", JSON.stringify(tablesObj));
    clear();
    renderTables();
  });

  tablesObj[activeTable].article.forEach((el) => {
    document.querySelector(".table-articles").insertAdjacentHTML(
      "beforeend",
      `
      <div>${el}</div>
 `
    );
  });
}

function renderCategories() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="navigation">
    <button class="back">Back</button>
    <div class="table-info">${activeTable}</div>
    <button class="activeTable">Table</button>
  </div>
    <div class="categories">
    <button class="categorie">beer</button>
    <button class="categorie">wine</button>
    <button class="categorie">domesticAlcohol</button>
    <button class="categorie">importedAlcohol</button>
    <button class="categorie">mixedDrinks</button>
    <button class="categorie">beverages</button>
    <button class="categorie">cider</button>
    <button class="categorie">energyDrinks</button>
    <button class="categorie">warmDrinks</button>
    <button class="categorie">coldDrinks</button>
    <button class="categorie">sweets</button>
    <button class="categorie">cocktails</button>
    <button class="categorie">gins</button>
  </div>
  `
  );

  document.querySelector(".back").addEventListener("click", function () {
    clear();
    renderTables();
  });

  document.querySelector(".activeTable").addEventListener("click", function () {
    clear();
    renderActiveTable();
  });

  document.querySelector(".categories").addEventListener("click", function (e) {
    if(e.target.className === "categories") return;

    const click = e.target.textContent;
    categorie = click;

    clear();
    document.body.innerHTML = `<div class="articles">
    </div>
    <div class="navigation">
    <button class="back">Back</button>
    <button class="activeTable">Table</button>
    </div>
  </div>`;
    drinks[click].name.forEach((el) => {
      document.querySelector(".articles").insertAdjacentHTML(
        "beforeend",
        `
        <button class="article blink">${el}</button>
     `
      );
    });

    document.querySelector(".back").addEventListener("click", function () {
      clear();
      renderCategories();
    });

    document
      .querySelector(".activeTable")
      .addEventListener("click", function () {
        clear();
        renderActiveTable();
      });

    document.querySelector(".articles").addEventListener("click", function (e) {
      if(e.target.className === "articles") return;

      const click = e.target.textContent;
      const article = click;
      audio.pause();
      audio.currentTime = 0;
      audio.play();

      const str = `${article} - ${
        drinks[categorie].price[drinks[categorie].name.indexOf(article)]
      }`;
      tablesObj[activeTable].article.push(str);
      localStorage.setItem("articles", JSON.stringify(tablesObj));
    });
  });
}

///////////////////////////////////////////////////////////////////////////////////////

let activeTable;
let categorie;
const audio = new Audio("ping-82822.mp3");

getData();
getDailySum();
getInventura();
getDnevna();
renderTables();
getTips();

function getData() {
  const storage = localStorage.getItem("articles");
  if (storage) tablesObj = JSON.parse(storage);
}
function getDailySum() {
  const sum = localStorage.getItem("dailySum");
  if (sum) dailySum = JSON.parse(sum);
}
function getInventura() {
  const list = localStorage.getItem("inventura");
  if (list) inventura = JSON.parse(list);
}
function getDnevna() {
  const list = localStorage.getItem("dnevna");
  if (list) dnevna = JSON.parse(list);
}
function getTips() {
  const list = localStorage.getItem("tips");
  if (list) tips = JSON.parse(list);
}

function putNewArticle()
{
  inventura.push("Bubble Tea");
  inventura.push(0);
  dnevna.push("Bubble Tea");
  dnevna.push(0);
}

if(!inventura.includes("Bubble Tea") && !dnevna.includes("Bubble Tea"))
{
  putNewArticle();
}

