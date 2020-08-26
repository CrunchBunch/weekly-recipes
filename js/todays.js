'use strict';
//<===================== Data from Local Storage =============================>
var recipe;
var form;
function loadrecipe(){
  var recipeItems = JSON.parse(localStorage.getItem('recipes'));
  recipe = recipeItems;

  var formInfo = JSON.parse(localStorage.getItem('form'));
  form = formInfo;
  
}

//<===================== User Input for recipe ===============================>
function showRecipe() {
  
  for(var i = 0; i < form.length; i++) {
  
    for(var j = 0; j < recipe.length; j++) {
      if(form[i].servings === recipe[j].servingSize && form[i].protein === 'Meat' && recipe[j].isMeat === true){
        render(recipe[j]);
      }
      if(form[i].servings === recipe[j].servingSize && form[i].protein === 'Vegitarian' && recipe[j].isMeat === false){
        render(recipe[j]);
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
console.log(form)