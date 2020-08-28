'use strict';
//<===================== Data from Local Storage =============================>
var recipe;
var form;
function loadrecipe(){
  var recipeItems = JSON.parse(localStorage.getItem('allRecipes'));
  recipe = recipeItems;

  var formInfo = JSON.parse(localStorage.getItem('form'));
  form = formInfo;
  
}
//<====================== Random Index of Recipe =============================>
var recipeRandomIndex = [];
// helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//<========================= RandomGenerator =================================>
function randomImage() {

  var randomIndex = getRandomNumber(recipeRandomIndex.length); 
  var chosenRecipe = recipeRandomIndex[randomIndex];
  render(chosenRecipe);
}

//<===================== User Input for recipe ===============================>
function showRecipe() {
  
  for(var i = 0; i < form.length; i++) {
  
    for(var j = 0; j < recipe.length; j++) {
      if(form[i].servings === recipe[j].servingSize && form[i].protein === 'Meat' && recipe[j].isMeat === true){
        recipeRandomIndex.push(recipe[j]);
      }
      if(form[i].servings === recipe[j].servingSize && form[i].protein === 'Vegetarian' && recipe[j].isMeat === false){
        recipeRandomIndex.push(recipe[j]);
      }
    }
  }
}


//<======================== Recipe data Render ===============================>

function render (array) {
  var body = document.getElementById('random-recipe');
  var recipeList1 = document.createElement('p');
  recipeList1.textContent = `${array.dish}`;
  body.appendChild(recipeList1);
  var recipeList2 = document.createElement('p');
  recipeList2.textContent = `${array.servingSize}`;
  body.appendChild(recipeList2);
  var recipeList3 = document.createElement('li');
  recipeList3.textContent = `${array.time}`;
  body.appendChild(recipeList3);
  var recipeList4 = document.createElement('p');
  recipeList4.textContent = `${array.source}`;
  body.appendChild(recipeList4);
  
  //<================= Ingredients ====================>
  var ingrediantsList = document.getElementById('ingrediants-list');
  for (var l = 0; l < array.ingredients.length; l++){
  var recipeList5 = document.createElement('li');
  recipeList5.textContent = `${array.ingredients[l]}`;
  ingrediantsList.appendChild(recipeList5);
  }
  //<================ directions =======================>
  var stepsList = document.getElementById('steps-list');
  for (var t = 0; t < array.directions.length; t++){
  var recipeList6 = document.createElement('li');
  recipeList6.textContent = `${array.directions[t]}`;
  stepsList.appendChild(recipeList6);
  }
}


//<======================= function call ======================================>
loadrecipe();
showRecipe();
randomImage();
console.log(form)