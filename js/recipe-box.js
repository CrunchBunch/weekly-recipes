

//<====================== local storage =======================>
var recipeItems = JSON.parse(localStorage.getItem('allRecipes'));

//<===================== array of recipes =====================>

var myRecipesArr = [];
var ingredientArr = [];
var amountArr =[];
var directionsArr = [];
var ingredientLineCount = 1;
var directionsLineCount = 1;
// <=================== Recipe Constructor ====================>
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

// <================Input box add line counter =================>
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

// <=============== new ingredients line add button ================>
function renderIngredientsFormLines(){

  var ingredientListParent = document.getElementById('ingredients-list');
  var ingredientsFormLine = document.createElement('li');
    ingredientListParent.appendChild(ingredientsFormLine);

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
// <================= new ingredients line add button ===============>
function renderDirectionsFormLines(){

  var directionsListParent = document.getElementById('directions-list');
  var directionsFormLine = document.createElement('li');
    directionsListParent.appendChild(directionsFormLine);

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
function saveToLocalStorage(data){
  myRecipes= Object.assign(JSON.stringify(myRecipesArr));
  var defaultStorage = [];
  defaultStorage = JSON.parse(localStorage.getItem('allRecipes')) || [];
  defaultStorage.push(data)
  localStorage.setItem('allRecipes', JSON.stringify(defaultStorage));
}
function renderRecipeBox(array) {
  var parentRecipe = document.getElementById('Recipe-Cards-holder');

  for (var i = 0; i < array.length; i++) {
  var recipeCard = document.createElement('div');
  recipeCard.setAttribute('id',`Recipe-Cards`)
  var recipeList1 = document.createElement('article');
  recipeList1.setAttribute('id',`rendered-Recipes`);

  var recipeParagraph = document.createElement('h3');
  recipeParagraph.textContent = `Dish: ${array[i].dish}`;
  recipeList1.appendChild(recipeParagraph);
  var recipeServingSize = document.createElement('p');
  recipeServingSize.textContent = `Serving size: ${array[i].servingSize}`;
  recipeList1.appendChild(recipeServingSize);
  var recipeTime = document.createElement('li');
  recipeTime.textContent = `${array[i].time}`;
  recipeList1.appendChild(recipeTime);
  var recipeSource = document.createElement('p');
  recipeSource.textContent = `Source: ${array[i].source}`;
  recipeList1.appendChild(recipeSource);
  recipeCard.appendChild(recipeList1)
  //<================= Ingredients ====================>
  var recipeList2 = document.createElement('article');
  recipeList2.setAttribute('id',`ingrediants-Rendered-List`);
  for (var l = 0; l < array[i].ingredients.length; l++){
    var recipeIngredients = document.createElement('li');
    recipeIngredients.textContent = ` pcs of ${array[i].ingredients[l]} `;
    recipeList2.appendChild(recipeIngredients);
  }
  recipeCard.appendChild(recipeList2)
  //<================ directions =======================>
  var recipeList3 = document.createElement('article');
  recipeList3.setAttribute('id',`directions-Rendered-list`);
  // var stepsList = document.getElementById('directions-Rendered-list');
  for (var t = 0; t < array[i].directions.length; t++){
  var recipeDirections = document.createElement('li');
  recipeDirections.textContent = `${array[i].directions[t]}`;
  recipeList3.appendChild(recipeDirections);
  }
  recipeCard.appendChild(recipeList3);
  parentRecipe.appendChild(recipeCard);
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
    var data = new RecipeCard(dish, isMeat, servingSize, time, source,ingredients, amount,directions );
    renderRecipeBox(recipeItems);
    saveToLocalStorage(data);
    }  

onPageLoad(3);
form.addEventListener('submit',recipeSubmit);