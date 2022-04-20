/*
  Authors: Nicholas Eng, Ryu Funakoshiya, Joshua Kantarges
  This contains javascript functions so the page can change dynamically
*/

order = [];

var foodItems={
  "rolls":{
    "tunaRoll":{
      "name": "Tuna Roll",
      "price": 4.99,
      "description": "A simple sushi roll with only raw tuna encased...",
      "image": "../images/rolls/tunaRoll.jpg"
    },
    "pickledDaikonRoll":{
      "name": "Pickled Daikon Roll",
      "price": 3.99,
      "description": "Sweet and sourness of the pickled daikon mixed...",
      "image": "../images/rolls/pickledDaikonRoll.jpg"
    },
    "futomaki":{
      "name": "Futomaki",
      "price": 6.99,
      "description": "Futomaki is like a normal maki roll but bigger.",
      "image": "../images/rolls/futomaki.jpg"
    },
  },
  "handRolls":{
    "temaki":{
      "name": "Temaki",
      "price": 8.99,
      "description": "These are hand rolls include scallions, cucumbers...",
      "image": "../images/handRolls/temaki.jpg"
    },
    "spicyTuna":{
      "name": "Spicy Tuna",
      "price": 7.99,
      "description": "Sushi grade tuna with a spicy chili sauce, a hint of..",
      "image": "../images/handRolls/spicyTuna.jpg"
    },
    "softCrab":{
      "name": "Soft Crab",
      "price": 9.99,
      "description": "A perfectly fried soft shell crab that is crunchy and...",
      "image": "../images/handRolls/softCrab.jpg"
    },
  },
  "nigiri":{
    "regNigiri":{
      "name": "Regular Nigiri",
      "price": 4.99,
      "description": "Regular Nigiri sushi will be prepared the normal way, with...",
      "image": "../images/nigiri/regNigiri.jpg"
    },
    "gunkanMaki":{
      "name": "Gunkan Maki",
      "price": 5.50,
      "description": "Gunkan maki is a nigiri sushi that is surrounded by a sheet...",
      "image": "../images/nigiri/gunkanMaki.jpg"
    },
    "noriRibbon":{
      "name": "Nori Ribbon",
      "price": 3.50,
      "description": "A thin strip of nori wrapped around the nigiri sushi",
      "image": "../images/nigiri/noriRibbon.jpg"
    },
  },
  "drinks":{
    "water":{
      "name": "Water",
      "price": 0.00,
      "description": "A glass of water",
      "image": "../images/drinks/water.jpg"
    },
    "soda":{
      "name": "Soda",
      "price": 2.39,
      "description": "A Refreshing Fountian Drink",
      "image": "../images/drinks/fountian.jpg"
    },
    "tea":{
      "name": "Tea",
      "price": 1.39,
      "description": "Authentic Japanese Tea",
      "image": "../images/drinks/tea.jpg"
    },
  },
  "desserts":{
    "mochi":{
      "name": "Mochi",
      "price": 3.75,
      "description": "Japanese Mochi",
      "image": "../images/desserts/mochi.jpg"
    },
    "greenTea":{
      "name": "Green Tea Ice Cream",
      "price": 4.39,
      "description": "Japanese Green Tea Ice Cream",
      "image": "../images/desserts/greenTea.jpg"
    },
    "taiyaki":{
      "name": "Taiyaki",
      "price": 2.79,
      "description": "Authentic Japanese Taiyaki",
      "image": "../images/desserts/taiyaki.jpg"
    },
  },
  "specials":{
    "sushiBoat1":{
      "name": "Sushi Boat #1",
      "price": 13.79,
      "description": "Chefs Special #1",
      "image": "../images/specials/sushiBoat1.jpg"
    },
    "sushiBoat2":{
      "name": "Sushi Boat #2",
      "price": 13.79,
      "description": "Chefs Special #2",
      "image": "../images/specials/sushiBoat2.jpg"
    },
    "sushiBoat3":{
      "name": "Sushi Boat #3",
      "price": 13.79,
      "description": "Chefs Special #3",
      "image": "../images/specials/sushiBoat3.jpg"
    },
  },
}

function switchMainMenu(){
  window.location.href = "../index/index.html";
}

function displayOrder() {
  string = "Your Order";
  total = 0;
  for(let i = 0; i < order.length; i++) {
    string = string+ "<br>" + order[i] + "\t\t"+ prices[order[i]];
    total = total + prices[order[i]];
  }
  string = string + "<br>"
  totalStr = "Your Total is $" + total;
  document.getElementById("order").innerHTML = string;
  document.getElementById("total").innerHTML = totalStr;
}

function orderNumber() {
  orderNumber = Math.floor(1000 + Math.random() * 9000);
  string = "Your Order Number is :<br>" + orderNumber;
  document.getElementById("tyNum").innerHTML = string;
}

function creditCard() {
  string = 'Insert a Credit Card.';
  document.getElementById("confirm").innerHTML = string;
  document.getElementById("finish").style.visibility = "visible";
}

function thankYou() {
  document.getElementById("finish").style.visibility = "hidden";
  window.location.href = "../checkout/thankYouPage.html";
}

function goToCheckout() {
  document.getElementById("cButton").style.visibility = "hidden";
  window.location.href = "../checkout/checkout.html";
}

function delayAndBack(){
  //Clear out order
  order = [];
  setTimeout(function() {
    window.location.href = "../welcome/welcome.html";
  }, 6000);
}

function goToHTML(page){
  var element = document.getElementById("changeHTML");
  element.src = page;
}

function goBackPage(){
  window.history.back();
}

function populateFoodPage(category){
  var categoryItems;

  switch (category) {
    case "rolls":
      categoryItems = foodItems.rolls;
      break;
    case "handRolls":
      categoryItems = foodItems.handRolls;
      break;
    case "nigiri":
      categoryItems = foodItems.nigiri;
      break;
    case "drinks":
      categoryItems = foodItems.drinks;
      break;
    case "desserts":
      categoryItems = foodItems.desserts;
      break;
    case "specials":
      categoryItems = foodItems.specials;
      break;
  }
  var posCounter = 0;
  var position = ["topLeft","topMiddle","topRight","bottomLeft","bottomMiddle","bottomRight"];
  var items = '';
  for(const food in categoryItems){
    name = categoryItems[food].name;
    items += `
      <div class="foodArea" id=${position[posCounter]}>
        <a href="addItemToOrder(${categoryItems[food].name}, ${categoryItems[food].price})">
          <img src="./${categoryItems[food].image}" id="images">
        </a>
        <p>${categoryItems[food].name}</p>
        <p>$${categoryItems[food].price}</p>
        <div id="orderCenter">
        <input type="button" value="Add To Order" id="button" onclick="addItemToOrder('${name}')">
        </div>
        <hr>
        <div id="description">${categoryItems[food].description}</div>
      </div>
    `;
    posCounter++;
  }
  items += "";
  document.getElementById("purchaseArea").innerHTML = items;
}

function addItemToOrder(foodName){
  order.push(foodName);
  console.log(order);
}
