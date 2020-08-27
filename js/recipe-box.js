
function loadrecipe(){
  myRecipes = JSON.parse(localStorage.getItem('myRecipes'));;


}
//array of recipes
var myRecipes = [];
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

  myRecipes.push(this)
}
var ingredientsList= function(event){
  for (var i= 1 ; i < ingredientLineCount; i++){
    ingredientArr.push(document.getElementById(`ingredient${i}`.value));
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
  alert('IM A DRAGON')
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
  new RecipeCard(dish, isMeat, servingSize, time, source,ingredients,directions);
  RecipeCard.prototype.saveToLocalStorage();
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
RecipeCard.prototype.saveToLocalStorage = function() {
  this.recipes = myRecipes;
  var stringRecipes = JSON.stringify(this.recipes);
  console.log(stringRecipes);
  localStorage.setItem('myRecipes', stringRecipes);
}

function renderRecipeBox (array) {
  console.log(array);
  var recipeCardParent = document.getElementById('All-Recipe-Cards');
  for(var i = 0 ; i < array.length ;i++){
    var recipeCards = document.createElement('div');
    recipeCards.setAttribute('id','Recipe-Card');
    
    var recipeList1 = document.createElement('p');
    recipeList1.textContent = `${array.dish}`;
    recipeCards.appendChild(recipeList1);
    var recipeList2 = document.createElement('p');
    recipeList2.textContent = `${array.servingSize}`;
    recipeCards.appendChild(recipeList2);
    var recipeList3 = document.createElement('li');
    recipeList3.textContent = `${array.time}`;
    recipeCards.appendChild(recipeList3);
    var recipeList4 = document.createElement('p');
    recipeList4.textContent = `${array.source}`;
    recipeCards.appendChild(recipeList4);
  }
  //<================= Ingredients ====================>
  var ingredientCards = document.createElement('div');
    ingredientCards.setAttribute('id','ingrediants-Rendered-List');
  for (var i = 0; i < ingredientArr.length; i++){
  var recipeList5 = document.createElement('li');
  recipeList5.textContent = `${ingredientArr[i]}`;
  console.log(recipeList5,ingredientArr[i]);
  ingredientCards.appendChild(recipeList5);
  }
  //<================ directions =======================>
  var stepsList = document.createElement('div');
  stepsList.setAttribute('id','directions-Rendered-list')
  for (var t = 0; t < directionsArr.length; t++){
  var recipeList6 = document.createElement('li');
  recipeList6.textContent = `${directionsArr[t]}`;
  stepsList.appendChild(recipeList6);
  }
  
}

onPageLoad(3);
loadrecipe()
// generateRecipes();
renderRecipeBox(myRecipes);
//need recall for datastore to populate card
form.addEventListener('submit',recipeSubmit);