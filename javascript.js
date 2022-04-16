/*
  Authors: Nicholas Eng, Ryu Funakoshiya, Joshua Kantarges
  This contains javascript functions so the page can change dynamically
*/
// global data structure to hold order

// just some hard coded thing so i can test checkout
// will probably be changed to different data struture later
order = ["roll", "roll", "nigiri"]
let prices = {}
prices["roll"] = 4;
prices["nigiri"] = 5;

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

function creditCard() {
  string = "Insert a Credit Card."
  document.getElementById("confirm").innerHTML = string;
}

function goToHTML(page){
  var element = document.getElementById("changeHTML");
  element.src = page;
}
