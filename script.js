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
      "2,50 Є",
      "3,50 Є",
      "4,50 Є",
      "3,50 Є",
      "4,50 Є",
      "4,50 Є",
      "4,50 Є",
      "4,40 Є",
      "3,50 Є",
      "4,50 Є",
      "3,60 Є",
      "3,70 Є",
      "5,50 Є",
      "6,50 Є",
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
      "6,00 Є",
      "19,00 Є",
      "6,00 Є",
      "19,00 Є",
      "6,00 Є",
      "20,00 Є",
      "19,00 Є",
      "40,00 Є",
      "35,00 Є",
      "6,00 Є",
      "8,00 Є",
      "60,00 Є",
      "60,00 Є",
      "60,00 Є",
      "100,00 Є",
      "4,00 Є",
      "4,00 Є",
      "4,00 Є",
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
      "2,00 Є",
      "2,00 Є",
      "2,00 Є",
      "1,90 Є",
      "1,90 Є",
      "2,00 Є",
      "2,00 Є",
      "2,00 Є",
      "2,00 Є",
      "1,90 Є",
      "1,90 Є",
      "2,00 Є",
      "2,00 Є",
      "2,00 Є",
      "1,90 Є",
      "2,00 Є",
      "2,00 Є",
      "2,00 Є",
      "3,00 Є",
      "2,00 Є",
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
      "5,00 Є",
      "5,00 Є",
      "5,00 Є",
      "4,00 Є",
      "4,60 Є",
      "4,60 Є",
      "6,50 Є",
      "5,00 Є",
      "6,50 Є",
      "6,50 Є",
      "5,00 Є",
      "5,00 Є",
      "4,60 Є",
      "6,50 Є",
      "6,50 Є",
      "4,60 Є",
      "4,60 Є",
      "5,00 Є",
      "8,00 Є",
      "8,00 Є",
    ],
  },
  mixedDrinks: {
    name: [
      "Smirnoff - Tonic",
      "Smirnoff - Juice",
      "Vodka - Tonic",
      "Gordons - Tonic",
      "Gin - Tonic",
      "Rum - Cola",
      "Bacardi tamni - Cola",
      "Vodka - Juice",
      "Jack Daniel's - Cola",
      "Jagermeister Cola",
      "Johnny Walker Red Label - Cola",
      "Johnny Walker Black Label - Cola",
      "Ballantines - Cola",
      "Chivas - Cola",
      "Jameson - Cola",
      "Stock - Cola",
      "Domaći konjak - Cola",
      "Bacardi bijeli - Cola",
      "Campari - Juice",
      "Campari - Mineral water",
    ],
    price: [
      "5,60 Є",
      "5,60 Є",
      "4,60 Є",
      "5,60 Є",
      "4,60 Є",
      "4,60 Є",
      "5,60 Є",
      "4,60 Є",
      "5,80 Є",
      "5,60 Є",
      "4,60 Є",
      "5,80 Є",
      "4,60 Є",
      "5,80 Є",
      "5,60 Є",
      "4,30 Є",
      "4,30 Є",
      "5,60 Є",
      "5,60 Є",
      "5,60 Є",
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
      "5,50 Є",
      "4,00 Є",
      "3,80 Є",
      "3,80 Є",
      "3,80 Є",
      "3,80 Є",
      "3,80 Є",
      "3,80 Є",
      "3,80 Є",
      "3,80 Є",
      "3,50 Є",
      "2,50 Є",
      "3,60 Є",
      "2,30 Є",
      "4,60 Є",
      "2,50 Є",
      "2,20 Є",
      "4,40 Є",
      "4,80 Є",
      "6,00 Є",
      "6,50 Є",
      "3,00 Є",
      "5,50 Є",
      "3,00 Є",
      "5,50 Є",
      "3,80 Є",
      "3,80 Є",
    ],
  },
  cider: {
    name: ["Somersby"],
    price: ["5,50 Є"],
  },
  energyDrinks: {
    name: ["Red Bull"],
    price: ["5,60 Є"],
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
      "1,50 Є",
      "1,60 Є",
      "1,90 Є",
      "1,60 Є",
      "1,80 Є",
      "1,90 Є",
      "2,00 Є",
      "1,80 Є",
      "1,90 Є",
      "2,20 Є",
      "1,90 Є",
      "2,30 Є",
      "2,20 Є",
      "2,50 Є",
      "4,00 Є",
      "4,50 Є",
      "2,30 Є",
      "3,00 Є",
      "2,30 Є",
      "2,50 Є",
      "5,00 Є",
      "2,40 Є",
      "2,50 Є",
      "6,00 Є",
      "2,40 Є",
      "1,80 Є",
      "6,00 Є",
      "1,90 Є",
      "1,10 Є",
      "0,70 Є",
    ],
  },
  coldDrinks: {
    name: [
      "Frappe Milkshake",
      "Ledeni sok 0,3 l",
      "Ledeni sok 0,5 l",
      "Ledeni sok + čaša 0,3 l",
      "Ledeni sok + čaša 0,5 l",
    ],
    price: ["4,50 Є", "4,00 Є", "5,50 Є", "7,00 Є", "8,50 Є"],
  },
  sweets: {
    name: ["Sladoled", "Sladoled Premium", "Slatki kornet", "Čokoladni kornet"],
    price: ["2,20 Є", "2,60 Є", "0,80 Є", "0,80 Є"],
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
      "10,00 Є",
      "8,50 Є",
      "10,00 Є",
      "10,00 Є",
      "25,00 Є",
      "10,00 Є",
      "10,00 Є",
      "11,50 Є",
      "8,50 Є",
      "11,50 Є",
      "10,00 Є",
      "10,00 Є",
      "25,00 Є",
      "10,00 Є",
      "10,00 Є",
      "10,00 Є",
      "10,00 Є",
      "9,50 Є",
      "11,50 Є",
      "27,00 Є",
      "11,50 Є",
      "11,50 Є",
      "11,50 Є",
      "27,00 Є",
      "10,00 Є",
      "10,00 Є",
      "10,00 Є",
      "9,00 Є",
      "9,00 Є",
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
      "7,00 Є",
      "4,50 Є",
      "6,00 Є",
      "7,00 Є",
      "6,50 Є",
      "4,50 Є",
      "5,00 Є",
      "4,50 Є",
      "4,50 Є",
    ],
  },
};

////////////////////////////////////////////////////////////////////////////////////////

const tablesObj = {
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

function renderTables() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <button class="info">i</button>
    <div class="tables">
      <button class="table">V1</button>
      <button class="table">V2</button>
      <button class="table">V3</button>
      <button class="table">V4</button>
      <button class="table">V5</button>
      <button class="table">V6</button>
      <button class="table">U1</button>
      <button class="table">U2</button>
      <button class="table">T1_1</button>
      <button class="table">T1_2</button>
      <button class="table">T1_3</button>
      <button class="table">T2_1</button>
      <button class="table">T2_2</button>
      <button class="table">T2_3</button>
      <button class="table">T2_4</button>
      <button class="table">T2_5</button>
      <button class="table">T3_1</button>
      <button class="table">T3_2</button>
      <button class="table">T3_3</button>
      <button class="table">T3_4</button>
    </div>
  `
  );

  document.querySelector(".tables").addEventListener("click", function (e) {
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

<div class="sum">Total : ${sum.toFixed(2)} Є</div>

<div class="navigation">
  <button class="back">Back</button>
  <button class="clear">Clear</button>
</div>`;

  document.querySelector(".back").addEventListener("click", function () {
    clear();
    renderTables();
  });

  document.querySelector(".clear").addEventListener("click", function () {
    clear();
    renderTables();
    tablesObj[activeTable].article = [];
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
  <div class="navigation">
    <button class="back">Back</button>
    <button class="activeTable">Table</button>
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
    const click = e.target.textContent;
    categorie = click;

    clear();
    document.body.innerHTML = `<div class="articles">
    </div>
    <div class="navigation">
    <button class="back">Back</button>
    <button class="activeTable">Table</button>
  </div>`;
    drinks[click].name.forEach((el) => {
      document.querySelector(".articles").insertAdjacentHTML(
        "beforeend",
        `
        <button class="article">${el}</button>
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
      const click = e.target.textContent;
      const article = click;

      const str = `${article} - ${
        drinks[categorie].price[drinks[categorie].name.indexOf(article)]
      }`;
      tablesObj[activeTable].article.push(str);
    });
  });
}

///////////////////////////////////////////////////////////////////////////////////////

let activeTable;
let categorie;

renderTables();