const cocktailWrapper = document.querySelector(".container");
const loading = document.querySelector("#loading");

const itemURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const id = localStorage.getItem("id");
let cocktailDetails;

loading.className = "loading";
setTimeout(() => {
  loading.className = "hide-loading";
  getData(itemURL + id);
}, 2000);

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
  arr.forEach(function (ingredient) {
    li += `<li class="ingredientLi">${ingredient}</li>`;
  });

  const el = `<div class="card mb-3  border-warning rounded shadow p-3 mb-5 bg-body rounded border-32 bg-light border mx-auto mt-5" style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${item.strDrinkThumb}" class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h2 class="card-title">${item.strDrink}</h2>
      <p class="card-text text-muted">${item.strInstructions}</p>
      <h6 class="card-subtitle mb-2 text-warning">Ingridients:</h6>
      <ol class="list-group list-group-numbered">${li}</ol>    
    <a href="index.html#search" class="btn btn-warning mt-3">Go Back</a>
    </div>
  </div>
</div>
</div>`;
  cocktailWrapper.innerHTML = el;
}
