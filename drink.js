const cocktailWrapper = document.querySelector(".container");

const itemURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const id = localStorage.getItem("id");
getData(itemURL + id);
let cocktailDetails;

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cocktailDetails = data.drinks === null ? [] : data.drinks;
      renderData(cocktailDetails);
    });
}
function renderData(cocktail) {
  const item = cocktail[0];
  let arr = [];
  let li = "";
  for (let i = 1; i <= 15; i++) {
    if (item["strIngredient" + i] !== null) {
      arr.push(item["strIngredient" + i]);
    }
  }
  console.log(arr);
  arr.forEach(function (ingredient) {
    li += `<li class="ingredientLi">${ingredient}</li>`;
  });

  const el = `<div class="left-side"><img class="drink-image" src="${item.strDrinkThumb}" alt="" /></div><div class="right-side"><h3 class="drink-name">${item.strDrink}</h3><p class="drink-receipt">${item.strInstructions}</p><ul class="drink-composition">${li}</ul><a class="link-to-index" href="index.html">All Coctails</a>
  </div>`;
  cocktailWrapper.innerHTML = el;
}

// localStorage.removeItem("id");
