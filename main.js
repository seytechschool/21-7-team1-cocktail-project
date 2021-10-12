import { cocktails } from "./data.js"; // this is your data
import { setCoctailName } from "./drink.js";

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
const coctailWrapper = document.querySelector(".cocktail-wrapper");
const oopsWrapper = document.querySelector(".oops-wrapper");

function renderData(cocktails) {
  coctailWrapper.innerHTML = "";
  for (let element of cocktails) {
    const el = `<div class="cocktail-item"><img src="${element.strDrinkThumb}" style="width: 100%;"><p class="nameCoctail">${element.strDrink}<span class="categoryText">${element.strCategory}</span></p></div>`;
    coctailWrapper.innerHTML += el;
  }
  addEvent();
}
renderData(cocktails);

// 2. Working with event listeners, higher order functions
let inputField = document.querySelector(".cocktail-search-name");
inputField.addEventListener("input", () => onChange());

// option
function onChange() {
  const newArr = cocktails.filter((item) => {
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
  console.log("Test");
  //   `<section class="single-drink">
  //     <img src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" class="drink-img" alt="">
  //     <article class="drink-info">
  //       <h2 class="drink-name">ABC</h2>
  //       <p class="drink-desc">Layered in a shot glass.</p>
  //       <ul class="drink-ingredients"><li><i class="far fa-check-square"></i>Amaretto</li><li><i class="far fa-check-square"></i>Baileys irish cream</li><li><i class="far fa-check-square"></i>Cognac</li></ul>
  //       <a href="index.html" class="btn">all cocktails</a>
  //     </article>
  //   </section>`;

  // setCoctailName();
  window.open("drink.html", "_self");
}
