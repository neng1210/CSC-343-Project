/*
  Authors: Nicholas Eng, Ryu Funakoshiya, Joshua Kantarges
  This contains javascript functions so the page can change dynamically
*/

// just some hard coded thing so i can test checkout
// will probably be changed to different data struture later
order = ["roll", "roll", "nigiri"]
let prices = {}
prices["roll"] = 4;
prices["nigiri"] = 5;

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
  setTimeout(function() {
    window.location.href = "../welcome/welcome.html";
  }, 6000);
}

function goToHTML(page){
  console.log("Pass");
  var element = document.getElementById("changeHTML");
  element.src = page;
}
