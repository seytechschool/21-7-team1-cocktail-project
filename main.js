import { cocktails } from "./data.js"; // this is your data

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const coctailWrapper = document.querySelector(".cocktail-wrapper");
const oopsWrapper = document.querySelector(".oops-wrapper");
let cocktailsData; // before it was cocktails

// window.addEventListener("load", function () {
//   const loader = document.querySelector(".loading");
//   // loader.className += " loading";
//   console.log(loader);
// })
window.onload = function () {
    //hide the preloader
    document.querySelector(".filters-button-group").style.display = "none";
    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".filters-button-group").style.display = "block";
        getData(URL);
    }, 2000);
};

function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            cocktailsData = data.drinks === null ? [] : data.drinks;
            renderData(cocktailsData);
        });
}

function renderData(cocktails) {
    coctailWrapper.innerHTML = "";
    for (const element of cocktails) {
        const el = `<div id="${element.idDrink}" class="cocktail-item"><div class="imgWrapper"><img src="${element.strDrinkThumb}"><p class="categoryType">${element.strCategory}</p></div><p class="nameCoctail">${element.strDrink}<span class="alcoholicType">${element.strAlcoholic}</span></p></div>`;
        coctailWrapper.innerHTML += el;
    }
    addEvent();
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
    button.addEventListener("click", event => {
        // let current = document.getElementsByClassName("active");
        // current[0].className = current[0].className.replace(" active", "");
        // this.className += " active";
        btn.forEach(el => el.classList.remove("active"));
        button.classList.add("active");

        if (event.target.outerText === "ALL") {
            sort = cocktailsData;
        } else {
            sort = cocktailsData.filter(
                item => item.strCategory.toUpperCase() === event.target.outerText
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
    }, 500);
    oopsWrapper.innerHTML = "";
}

function addEvent() {
    document.querySelectorAll(".cocktail-item").forEach(item => {
        item.addEventListener("click", () => openCoctail(item));
    });
}

function openCoctail(element) {
    localStorage.setItem("id", element.id);
    window.open("drink.html", "_self");
}
