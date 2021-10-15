// import { cocktails } from "./data.js"; // this is your data

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const coctailWrapper = document.querySelector(".cocktail-wrapper");
const oopsWrapper = document.querySelector(".oops-wrapper");
const containerMain = document.querySelector(".containerMain");
// const loadAnimation = document.querySelector(".loading");
let cocktailsData; // before it was cocktails

window.onload = () => {
  var firstTime = Boolean(sessionStorage.getItem("isLoaded"));
  if (!firstTime) {
    // first time loaded!
    containerMain.style.display = "none";
    setTimeout(() => {
      sessionStorage.setItem("isLoaded", "true");
      containerMain.style.display = "block";
      document.querySelector(".loaderMain").style.display = "none";
    }, 3000);
  } else {
    document.querySelector(".loaderMain").style.display = "none";
  }
  getData(URL);
};

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cocktailsData = data.drinks === null ? [] : data.drinks;
      renderData(cocktailsData);
    });
}

function renderData(cocktails) {
  coctailWrapper.innerHTML = "";
  // loadAnimation.style.display = "flex";
  // setTimeout(() => {
  // loadAnimation.style.display = "none";
  for (const element of cocktails) {
    const el = `<div id="${element.idDrink}" class="cocktail-item"><div class="imgWrapper"><img src="${element.strDrinkThumb}"><p class="categoryType">${element.strCategory}</p></div><p class="nameCoctail">${element.strDrink}<span class="alcoholicType">${element.strAlcoholic}</span></p></div>`;
    coctailWrapper.innerHTML += el;
  }
  addEvent();
  // }, 700);
}

// 2. Working with event listeners, higher order functions
const inputField = document.querySelector(".cocktail-search-name");
inputField.addEventListener("input", () => {
  cocktailsData = [];
  getData(URL + inputField.value);
  onChange();
});

const btn = document.querySelectorAll("button");
let sort = [];
for (const button of btn) {
  button.addEventListener("click", (event) => {
    // let current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace(" active", "");
    // this.className += " active";
    btn.forEach((el) => el.classList.remove("active"));
    button.classList.add("active");

    if (event.target.outerText === "ALL") {
      sort = cocktailsData;
    } else {
      sort = cocktailsData.filter(
        (item) => item.strCategory.toUpperCase() === event.target.outerText
      );
    }
    if (sort.length === 0) {
      oopsWrapper.innerHTML = `<div class="nothingFound"><img src="images/not-found.png"><h2>Nothing found in this category</h2></div>`;
      coctailWrapper.innerHTML = "";
    } else {
      renderData(sort);
      oopsWrapper.innerHTML = "";
    }
    sort = [];
  });
}

// option
function onChange() {
  setTimeout(() => {
    if (cocktailsData.length === 0) {
      oopsWrapper.innerHTML = `<div class="nothingFound"><img src="images/not-found.png"><h2>Nothing found</h2><p><strong>Sorry, we couldn't find any results matching "${inputField.value}"</strong></p><p>Keep calm and search again. We have so many other product that you will like!</p></div>`;
      coctailWrapper.innerHTML = "";
    } else {
      renderData(cocktailsData);
    }
  }, 1000);
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
