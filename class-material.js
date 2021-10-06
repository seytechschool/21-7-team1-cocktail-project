// cocktails stores array of cocktails which you have to display

// 1. Dynamic display using js
console.log(cocktails[0]);

const firstCocktail = cocktails[0];

let singleCocktail = `
	<div class="single-cocktail">
		<img src="${cocktails[0].strDrinkThumb}" />
		<p class="cocktail-name">${cocktails[0].strDrink}</p> 
	</div>
`;

const wrapper = document.querySelector(".cocktail-wrapper");

wrapper.innerHTML = singleCocktail;

// 2. Working with event listeners, higher order functions

const searchButton = document.querySelector(".search-button");

let inputField = document.querySelector(".cocktail-search-name");

searchButton.addEventListener("click", (event) => onClick(event));

function onClick(event) {
  //   console.log(event.target);

  const searchedCocktailName = inputField.value;

  //   console.log(searchedCocktailName);
}

// 3. Higher order functions

// function(){
// 	function(){
// 	}
// }

// forEach, map, filter, find

/////////////////////////////////////////////
////////////////// FOR EACH /////////////////
/////////////////////////////////////////////

const myArray = ["cat", "dog", "rooster"];

myArray.forEach((element) => callbackForEach(element));

function callbackForEach(element) {
  // callback function
  //   console.log(element);
}

// console.log("myArray: ", myArray);

/////////////////////////////////////////////
//////////////////// MAP ////////////////////
/////////////////////////////////////////////

const newArray = myArray.map((element) => callbackForMap(element));

function callbackForMap(element) {
  // callback function

  if (element === "cat") {
    return "dog";
  } else if (element === "dog") {
    return "cat";
  }

  return element;
}

// console.log("myArray: ", myArray);
// console.log("newArray: ", newArray);

/////////////////////////////////////////////
/////////////////// FIND ////////////////////
/////////////////////////////////////////////

const outputOfFind = myArray.find((element, index) =>
  callbackForFind(element, index)
);

// callback functions should return either True or False
function callbackForFind(element, index) {
  // callback function

  return element;
}

// console.log("myArray: ", myArray);
// console.log("outputOfFind:", outputOfFind);

/////////////////////////////////////////////
///////////////// FILTER ////////////////////
/////////////////////////////////////////////

const outputOfFilter = myArray.filter(callbackForFilter);

// callback functions should return either True or False
function callbackForFilter(element) {
  // callback function

  console.log("the logic:", element.length <= 3);
  return element.includes("a");
}

console.log("myArray: ", myArray);
console.log("outputOfFind:", outputOfFilter);
