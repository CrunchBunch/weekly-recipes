


var parentElement = document.getElementById('result');


//<=================== Form input ===================>

var Form = function(items) {
  this.items = items;
};

//empty form info

var newForm = new Form([]);

// <=================== Form constructor ================>
var FormInfo = function(servings, protein, name) {
  this.servings = servings;
  this.protein = protein;
  this.name = name;
};

// Add the Serving and quantity to the cart
function addSelectedItemToForm() {
  // get the name
  var userName = document.getElementById('name');
  userName = userName.value;

  // get the servings
  var selectServings = document.getElementById('servings');
  var selectServings = selectServings.value;
 
  // get the protein
  var selectedDiet;

  if (document.getElementById('meal-type1').checked) {
    selectedDiet = document.getElementById('meal-type1').value;
  } else if (document.getElementById('meal-type2').checked) {
    selectedDiet = document.getElementById('meal-type2').value;
  }

  // TODO: using those, add one item to the Cart
newForm.addInput(selectServings, selectedDiet, userName);

}

Form.prototype.addInput = function(servings, protein, name) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  this.items.push(new FormInfo(servings,protein, name));
};
Form.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var stringForm = JSON.stringify(this.items);
  localStorage.setItem('form', stringForm);
};

//<=============== Event Listener =================>
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  // event.preventDefault();
  // Do all the things ...
  addSelectedItemToForm();
  newForm.saveToLocalStorage();

}

form.addEventListener('submit', handleSubmit);