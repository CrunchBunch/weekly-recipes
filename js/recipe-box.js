//array of recipes
var myRecipes = [];

// constructor of recipe
var RecipeCard = function(dish, isMeat, servingSize, time, source, ingredients, directions) {
  this.dish = dish;
  this.isMeat = isMeat
  this.servingSize = servingSize;
  this.source = source;
  this.time = time;
  this.ingredients = ingredientsList(ingredients,amount);
  this.directions = directionsList(directions);

  myRecipes.push(this)
}

var directionsList = function(ingredients,amount){
  var ingredients = event.target.ingrediants.value;
  var amount = event.target.amount.value;
  
}   
var IngredientsList = function(ingredients,amount){
  var ingredients = event.target.ingrediants.value;
  var amount = event.target.amount.value;

}    
var ingredientLineCount = 1;

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
var directionsLineCount = 1;

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
onPageLoad(4);

function recipeSubmit(event){
  eventPreventDefault;
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
  var ingrediants = ingredientsList(ingredients,amount);
  var directions = directionsList(directions);

  }
  
// local storage process
Product.prototype.AllRecipes = function(recipes) {
  this.recipes = recipes;
};

Product.prototype.saveToLocalStorage = function() {
  this.recipes = allrecipes;
  var stringRecipes = JSON.stringify(this.recipes)
  localStorage.setItem('recipes', stringRecipes);
  
}

generateRecipes();
Product.prototype.saveToLocalStorage();