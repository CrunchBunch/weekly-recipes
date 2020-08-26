'use strict';

var recipe;
var form;
function loadrecipe(){
  var recipeItems = JSON.parse(localStorage.getItem('recipes'));
  recipe = recipeItems;

  var formInfo = JSON.parse(localStorage.getItem('form'));
  form = formInfo;
  
}
loadrecipe();
console.log(recipe);
console.log(form);

function showRecipe() {
  var body = document.getElementById('single-recipe');
  for(var i = 0; i < form.length; i++) {
    for(var j = 0; j < recipe.length; j++) {
      if(form[i].servings === recipe[j].servingSize && form[i].protein === 'Meat' && recipe[j].isMeat === true){
        var recipeList1 = document.createElement('li');
        recipeList1.textContent = `${recipe[j].dish}`;
        body.appendChild(recipeList1);
        var recipeList2 = document.createElement('li');
        recipeList2.textContent = `${recipe[j].servingSize}`;
        body.appendChild(recipeList2);
        var recipeList3 = document.createElement('li');
        recipeList3.textContent = `${recipe[j].time}`;
        body.appendChild(recipeList3);
        var recipeList4 = document.createElement('li');
        recipeList4.textContent = `${recipe[j].source}`;
        body.appendChild(recipeList4);
        var recipeList5 = document.createElement('li');
        recipeList5.textContent = `${recipe[j].ingredients}`;
        body.appendChild(recipeList5);
        var recipeList6 = document.createElement('li');
        recipeList6.textContent = `${recipe[j].directions}`;
        body.appendChild(recipeList6);
        alert('im here');
      }
      
    }
  }
}
showRecipe();