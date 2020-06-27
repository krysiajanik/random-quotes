import "../scss/main.scss";

import { quotes } from "./quotes.js";

import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

// Get random number to match index from quotes array

let quotesTotal = quotes.length;

function getRandomQuote(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//  Get the two elements that need to be changed:

const quoteText = document.querySelector(".quote__text--js");
const quoteAuthor = document.querySelector(".quote__author--js");


// Get the first quote when page is loading
let fisrtVar = getRandomQuote(quotesTotal);
quoteText.innerHTML = quotes[fisrtVar].text;
quoteAuthor.innerHTML = quotes[fisrtVar].author;

const button = document.querySelector(".button--js");

button.addEventListener("click", () => {
  let myVar = getRandomQuote(quotesTotal);
  console.log(myVar);
  quoteText.innerHTML = quotes[myVar].text;
  quoteAuthor.innerHTML = quotes[myVar].author;
});
