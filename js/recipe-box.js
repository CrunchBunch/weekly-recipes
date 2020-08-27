
// function loadrecipe(){
//   myRecipesArr = JSON.parse(localStorage.getItem('myRecipesJSON'));
//   for(var i=0 ;i < myRecipesArr ; i++){
//     new RecipeCard(dish, isMeat, servingSize, time, source,ingredients, amount,directions );
//     renderRecipeBox(myRecipesArr[0]);
//   }

// }
  

//array of recipes

var myRecipesArr = [];
var ingredientArr = [];
var amountArr =[];
var directionsArr = [];
var ingredientLineCount = 1;
var directionsLineCount = 1;
// constructor of recipe
var RecipeCard = function(dish, isMeat, servingSize, time, source,ingredients, amount,directions ) {
  this.dish = dish;
  this.isMeat = isMeat
  this.servingSize = servingSize;
  this.source = source;
  this.time = time;
  this.ingredients = ingredients;
  this.directions = directions;
  this.amount = amount;

  myRecipesArr.push(this)
}
var ingredientsList= function(event){
  for (var i= 1 ; i < ingredientLineCount; i++){
    // ingredientArr.push(document.getElementById(`ingredient${i}`.value));
    ingredientArr.push(eval(`event.target.ingredient${i}.value`));
    amountArr.push(eval(`event.target.amount${i}.value`));
  }
}
var directionsList = function(event){
  for (var i = 1 ;i < directionsLineCount; i++){
    directionsArr.push(eval(`event.target.directions${i}.value`));
  }
}    
function recipeSubmit(event){
  event.preventDefault();
  var dish = event.target.dish.value;
  var isMeat;
   if (document.getElementById('vegitarian').checked) {
    isMeat = document.getElementById('vegitarian').value;
  };
  var servingSize = event.target.servings.value;
  var source = event.target.source.value;
  var prepTime = event.target.preptime.value;
  var cookTime = event.target.cooktime.value;
  var totalTime = prepTime + cookTime;
  var time = [prepTime, cookTime, totalTime];
  var ingredients = ingredientArr;
  var amount = amountArr;
  var directions = directionsArr;
  ingredientsList(event);
  directionsList(event);
  new RecipeCard(dish, isMeat, servingSize, time, source,ingredients, amount,directions );
  renderRecipeBox(myRecipesArr[0]);
  saveToLocalStorage();
  }
// new ingredients line add button
function renderIngredientsFormLines(){

  var ingredientListParent = document.getElementById('ingredients-list');
  var ingredientsFormLine = document.createElement('li');
  ingredientListParent.appendChild(ingredientsFormLine)
  var ingredient = document.createElement('input');
  ingredient.setAttribute('type','text');
  ingredient.setAttribute('id',`ingredient${ingredientLineCount}`);
  ingredient.setAttribute('name',`ingredient${ingredientLineCount}`);
  ingredient.setAttribute('placeholder',`ingredient${ingredientLineCount}`);
  var amount = document.createElement('input');
  amount.setAttribute('type','text');
  amount.setAttribute('id',`amount${ingredientLineCount}`);
  amount.setAttribute('name',`amount${ingredientLineCount}`);
  amount.setAttribute('placeholder',`amount${ingredientLineCount}`);

  ingredientsFormLine.appendChild(ingredient);
  ingredientsFormLine.appendChild(amount);
  ingredientLineCount++;
}
// new ingredients line add button
function renderDirectionsFormLines(){

  var directionsListParent = document.getElementById('directions-list');
  var directionsFormLine = document.createElement('li');
  directionsListParent.appendChild(directionsFormLine)
  var directions = document.createElement('input');
  directions.setAttribute('type','text');
  directions.setAttribute('id',`directions${directionsLineCount}`);
  directions.setAttribute('name',`directions${directionsLineCount}`);
  directions.setAttribute('placeholder',`directions${directionsLineCount}`);

  directionsFormLine.appendChild(directions);
  directionsLineCount++;
}

// to load 3 ingredients on first load
function onPageLoad(startIngredients){
  for(var i = 0 ;i< startIngredients ; i++){
    renderIngredientsFormLines();
    renderDirectionsFormLines();  
  }  
  
}
function saveToLocalStorage(){
  myRecipes= JSON.stringify(myRecipesArr);
  console.log(myRecipes);
  localStorage.setItem('myRecipesJSON', myRecipes);
}
function renderRecipeBox(array) {
  var parentRecipe = document.getElementById('Recipe-Cards');
  var recipeList1 = document.createElement('article');
  recipeList1.setAttribute('id',`rendered-Recipes`);
  parentRecipe.appendChild(recipeList1)
  var body = document.getElementById('rendered-Recipes');
  var recipeList1 = document.createElement('p');
  recipeList1.textContent = `Dish: ${array.dish}`;
  body.appendChild(recipeList1);
  var recipeList2 = document.createElement('p');
  recipeList2.textContent = `Serving size: ${array.servingSize}`;
  body.appendChild(recipeList2);
  var recipeList3 = document.createElement('li');
  recipeList3.textContent = `${array.time}`;
  body.appendChild(recipeList3);
  var recipeList4 = document.createElement('p');
  recipeList4.textContent = `Source: ${array.source}`;
  body.appendChild(recipeList4);
  //<================= Ingredients ====================>
  var recipeList2 = document.createElement('article');
  recipeList2.setAttribute('id',`ingrediants-Rendered-List`);
  parentRecipe.appendChild(recipeList2)
  var ingrediantsList = document.getElementById('ingrediants-Rendered-List');
  for (var l = 0; l < array.ingredients.length; l++){
    var recipeList5 = document.createElement('li');
  recipeList5.textContent = `${array.amount[l]} pcs of ${array.ingredients[l]} `;
  ingrediantsList.appendChild(recipeList5);
  }
  //<================ directions =======================>
  var recipeList3 = document.createElement('article');
  recipeList3.setAttribute('id',`directions-Rendered-list`);
  parentRecipe.appendChild(recipeList3)
  var stepsList = document.getElementById('directions-Rendered-list');
  for (var t = 0; t < array.directions.length; t++){
  var recipeList6 = document.createElement('li');
  recipeList6.textContent = `${array.directions[t]}`;
  stepsList.appendChild(recipeList6);
  }
  }
// function createCard(){
//   for(var i=0 ;i<allRecipes)
// }


onPageLoad(3);
// loadrecipe()
// generateRecipes();
// renderRecipeBox(myRecipes);
//need recall for datastore to populate card
form.addEventListener('submit',recipeSubmit);