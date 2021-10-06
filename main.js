import { cocktails } from "./data.js"; // this is your data
import { setCoctailName } from "./drink.js";

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
const wrapper = document.querySelector(".cocktail-wrapper");
// const searchButton = document.querySelector(".search-button");

function renderData(cocktails) {
  wrapper.innerHTML = "";
  for (let element of cocktails) {
    const el = `<div class="cocktail-item"><img src="${element.strDrinkThumb}" style="width: 100%;"><p>${element.strDrink}</p></div>`;
    wrapper.innerHTML += el;
  }
  addEvent();
}

renderData(cocktails);

// 2. Working with event listeners, higher order functions
let inputField = document.querySelector(".cocktail-search-name");
inputField.addEventListener("input", (event) => onClick(event));

// option1
// function onClick(event) {
//   let newArr = [];
//   const searchedCocktailName = inputField.value.toLowerCase();
//   for (let item of cocktails) {
//     if (item.strDrink.toLowerCase().includes(searchedCocktailName)) {
//       newArr.push(item);
//     }
//   }
//   renderData(newArr);
// }

// option2
function onClick() {
  const newArr = cocktails.filter((item) => {
    const searchedCocktailName = inputField.value.toLowerCase();
    const str = item.strDrink.toLowerCase();
    const char = searchedCocktailName.toLowerCase();
    return str.includes(char);
  });
  renderData(newArr);
}

function addEvent() {
  document.querySelectorAll(".cocktail-item").forEach((item) => {
    item.addEventListener("click", () => openCoctail(item));
    //     {
    //       //handle click
    //       console.log("test");
    //     });
  });
}

// 3. Opening coctail details on new page
// const coctailDiv = document.querySelector(".cocktail-item");
// coctailDiv.addEventListener("click", function () {
//   console.log("test");
// });

function openCoctail(item) {
  //   console.log(item);
  //   ${event.path[0].currentSrc}
  const coctail = `HELLO`;
  //   `<section class="single-drink">
  //     <img src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" class="drink-img" alt="">
  //     <article class="drink-info">
  //       <h2 class="drink-name">ABC</h2>
  //       <p class="drink-desc">Layered in a shot glass.</p>
  //       <ul class="drink-ingredients"><li><i class="far fa-check-square"></i>Amaretto</li><li><i class="far fa-check-square"></i>Baileys irish cream</li><li><i class="far fa-check-square"></i>Cognac</li></ul>
  //       <a href="index.html" class="btn">all cocktails</a>
  //     </article>
  //   </section>`;

  setCoctailName();
  //   const container = document.querySelector(".container");
  //   console.log(container);
  //   container.innerHTML = coctail;
  // window.location = `drink.html?img=${}&name${}&`
  window.open("drink.html", "_blank");
}
