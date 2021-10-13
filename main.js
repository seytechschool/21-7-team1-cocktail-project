import { cocktails } from "./data.js"; // this is your data

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const coctailWrapper = document.querySelector(".cocktail-wrapper");
const oopsWrapper = document.querySelector(".oops-wrapper");
let cocktailsData; // before it was cocktails

export function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cocktailsData = data.drinks === null ? [] : data.drinks;
      renderData(cocktailsData);
    });
}
getData(URL);

function renderData(cocktails) {
  coctailWrapper.innerHTML = "";
  for (let element of cocktails) {
    const el = `<div id="${element.idDrink}" class="cocktail-item"><div class="imgWrapper"><img src="${element.strDrinkThumb}"><p class="categoryType">${element.strCategory}</p></div><p class="nameCoctail">${element.strDrink}<span class="alcoholicType">${element.strAlcoholic}</span></p></div>`;
    coctailWrapper.innerHTML += el;
  }
  addEvent();
}

// 2. Working with event listeners, higher order functions
let inputField = document.querySelector(".cocktail-search-name");
inputField.addEventListener("input", () => {
  cocktailsData = [];
  getData(URL + inputField.value);
  onChange();
});

function func(arg) {
  let i = 0;
}

// option
function onChange() {
  setTimeout(() => {
    // const newArr = cocktailsData.filter((item) => {
    //   const searchedCocktailName = inputField.value.toLowerCase();
    //   const str = item.strDrink.toLowerCase();
    //   const char = searchedCocktailName.toLowerCase();
    //   return str.includes(char);
    // });
    if (cocktailsData.length === 0) {
      oopsWrapper.innerHTML = `<div class="nothingFound"><img src="images/not-found.png"><h2>Nothing found</h2><p><strong>Sorry, we couldn't find any results matching "${inputField.value}"</strong></p><p>Keep calm and search again. We have so many other product that you will like!</p></div>`;
      coctailWrapper.innerHTML = "";
    } else {
      renderData(cocktailsData);
    }
  }, 500);
  oopsWrapper.innerHTML = "";
}

function addEvent() {
  document.querySelectorAll(".cocktail-item").forEach((item) => {
    item.addEventListener("click", () => openCoctail(item));
  });
}

function openCoctail(element) {
  localStorage.setItem("id", element.id);
  window.open("drink.html", "_self");
}
