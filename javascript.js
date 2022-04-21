/*
  Authors: Nicholas Eng, Ryu Funakoshiya, Joshua Kantarges
  This contains javascript functions so the page can change dynamically
*/

order = [];
orderHash = new Map();
orderQuantity = new Map();
totalCost = 0.00;

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
      "name": "Green Tea Ice",
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
  document.location.href = "../checkout/thankYouPage.html";
}

function goToCheckout() {
  document.getElementById("cButton").style.visibility = "hidden";
  var element = document.getElementById("changeHTML");
  element.src = "../checkout/checkout.html";
}

function delayAndBack(){
  //Clear out order
  order = [];
  setTimeout(function() {
    parent.window.location.href = "../welcome/welcome.html";
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
    items += `
      <div class="foodArea" id=${position[posCounter]}>

        <img src="./${categoryItems[food].image}" onclick="addItemToOrder('${[categoryItems[food].name,categoryItems[food].price]}')" id="images">
        <div id="foodName">${categoryItems[food].name}</div>
        <p>$${categoryItems[food].price.toFixed(2)}</p>
        <div id="orderCenter">
        <input type="button" value="Add To Order" id="button" onclick="addItemToOrder('${[categoryItems[food].name,categoryItems[food].price]}')">
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

function addItemToOrder(food){
  parent.order.push(food);

  const foodNPrice = food.split(",");
  var cost = Number.parseFloat(foodNPrice[1]);
  if(parent.orderHash.has(foodNPrice[0])){
    oldCost = parent.orderHash.get(foodNPrice[0]);
    parent.orderHash.set(foodNPrice[0], (Number(oldCost) + Number(cost)).toFixed(2)); 
    oldCount = parent.orderQuantity.get(foodNPrice[0]) + 1;
    parent.orderQuantity.set(foodNPrice[0], oldCount);
  } else {
    parent.orderHash.set(foodNPrice[0], (Number(cost)).toFixed(2)); 
    parent.orderQuantity.set(foodNPrice[0],1);
  }

  parent.totalCost = parent.totalCost + Number.parseFloat(foodNPrice[1]);

  var items ="";
  parent.orderHash.forEach((values,keys)=>{
    items += `
    <div id="itemBox">
      <div id="itemNameBold">${keys}</div>
      <div id="itemQuantityBold">Quantity: ${parent.orderQuantity.get(keys)} </div>
      <div id="itemPriceBold">$${values}</div>
    </div>
    `;
  })
  parent.document.getElementById("orderMain").innerHTML = items;
  parent.document.getElementById("orderTotalTitle").innerHTML = "Total: $" + parent.totalCost.toFixed(2);

  var messageBody = document.querySelector('#orderMain');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

function getValue(key, orderHash){
  orderHash.forEach((values,keys)=>{
    if(keys === key){
      return values;
    }
  })
}