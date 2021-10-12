import { cocktails } from "./data.js"; // this is your data
// import { setCoctailName } from "./drink.js";

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const coctailWrapper = document.querySelector(".cocktail-wrapper");
const oopsWrapper = document.querySelector(".oops-wrapper");
let cocktailsData;

function getData(url) {
  console.log(cocktails);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      cocktailsData = data.drinks === null ? [] : data.drinks;
      renderData(cocktailsData);
    });
}
getData(URL);

function renderData(cocktails) {
  console.log(cocktails);
  coctailWrapper.innerHTML = "";
  for (let element of cocktails) {
    console.log(element + "*****");
    const el = `<div class="cocktail-item"><img src="${element.strDrinkThumb}" style="width: 100%;"><p class="nameCoctail">${element.strDrink}<span class="categoryText">${element.strCategory}</span></p></div>`;
    coctailWrapper.innerHTML += el;
  }
  addEvent();
}

// 2. Working with event listeners, higher order functions
let inputField = document.querySelector(".cocktail-search-name");
inputField.addEventListener("input", () => {
  cocktailsData = [];
  getData(URL + inputField.value);
  setTimeout(() => {
    onChange();
  }, 300);
});

// option
function onChange() {
  const newArr = cocktailsData.filter((item) => {
    const searchedCocktailName = inputField.value.toLowerCase();
    const str = item.strDrink.toLowerCase();
    const char = searchedCocktailName.toLowerCase();
    return str.includes(char);
  });
  if (newArr.length === 0) {
    oopsWrapper.innerHTML = `<div class="nothingFound"><img src="images/not-found.png"><h2>Nothing found</h2><p><strong>Sorry, we couldn't find any results matching "${inputField.value}"</strong></p><p>Keep calm and search again. We have so many other product that you will like!</p></div>`;
    coctailWrapper.innerHTML = "";
  } else {
    renderData(newArr);
    oopsWrapper.innerHTML = "";
  }
}

function addEvent() {
  document.querySelectorAll(".cocktail-item").forEach((item) => {
    item.addEventListener("click", () => openCoctail());
  });
}

function openCoctail() {
  console.log();

  var winPrint = window.open("drink.html", "_self");
  winPrint.document
    .write(`<title>Print Report</title><section class="single-drink">
  <img src="${element.strDrinkThumb}" class="drink-img" alt="${element.strDrink}"">
  <article class="drink-info">
    <h2 class="drink-name">${element.strDrink}</h2>
    <p class="drink-desc">Layered in a shot glass.</p>
    <ul class="drink-ingredients"><li><i class="far fa-check-square"></i>Amaretto</li><li><i class="far fa-check-square"></i>Baileys irish cream</li><li><i class="far fa-check-square"></i>Cognac</li></ul>
    <a href="index.html" class="btn">all cocktails</a>
  </article>
</section>`);
}
