/*
  Authors: Nicholas Eng, Ryu Funakoshiya, Joshua Kantarges
  This contains javascript functions so the page can change dynamically
*/
// global data structure to hold order

function goToHTML(page){
  var element = document.getElementById("changeHTML");
  element.src = page;
}