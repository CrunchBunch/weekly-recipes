//array of recipes
var allrecipes = [];
// constructor of recipe
var Product = function(dish, isMeat, servingSize, time, source, ingredients, directions) {
  this.dish = dish;
  this.isMeat = isMeat;
  this.servingSize = servingSize;
  this.time = time;
  this.source = source;
  this.ingredients = ingredients;
  this.directions = directions;

  allrecipes.push(this);
};
//object instance of recipes
Product.prototype.AllRecipes = function(recipes) {
  this.recipes = recipes;
};
Product.prototype.addInput = function(dish, servingSize, time, source, ingredients, directions) {

  this.recipes.push(new FormInfo(servings,protein, name));

};
function saveToLocalStorage() {
  allrecipes = JSON.stringify(allrecipes);
  localStorage.setItem('allRecipes', allrecipes);
}
function generateRecipes() {
  new Product(recipeCard1.dish, recipeCard1.isMeat, recipeCard1.servingSize, recipeCard1.time, recipeCard1.source, recipeCard1.ingredients, recipeCard1.directions);
  new Product(recipeCard2.dish, recipeCard2.isMeat, recipeCard2.servingSize, recipeCard2.time, recipeCard3.source, recipeCard2.ingredients, recipeCard2.directions);
  new Product(recipeCard3.dish, recipeCard3.isMeat, recipeCard3.servingSize, recipeCard3.time, recipeCard3.source, recipeCard3.ingredients, recipeCard3.directions);
  new Product(recipeCard4.dish, recipeCard4.isMeat, recipeCard4.servingSize, recipeCard4.time, recipeCard4.source, recipeCard4.ingredients, recipeCard4.directions);
  new Product(recipeCard5.dish, recipeCard5.isMeat, recipeCard5.servingSize, recipeCard5.time, recipeCard5.source, recipeCard5.ingredients, recipeCard5.directions);
  new Product(recipeCard6.dish, recipeCard6.isMeat, recipeCard6.servingSize, recipeCard6.time, recipeCard6.source, recipeCard6.ingredients, recipeCard6.directions);
  new Product(recipeCard7.dish, recipeCard7.isMeat, recipeCard7.servingSize, recipeCard7.time, recipeCard7.source, recipeCard7.ingredients, recipeCard7.directions);
  new Product(recipeCard8.dish, recipeCard8.isMeat, recipeCard8.servingSize, recipeCard8.time, recipeCard8.source, recipeCard8.ingredients, recipeCard8.directions);
  new Product(recipeCard9.dish, recipeCard9.isMeat, recipeCard9.servingSize, recipeCard9.time, recipeCard9.source, recipeCard9.ingredients, recipeCard9.directions);
  new Product(recipeCard10.dish, recipeCard10.isMeat, recipeCard10.servingSize, recipeCard10.time, recipeCard10.source, recipeCard10.ingredients, recipeCard10.directions);
}
var recipeCard1 = {
  dish:"Shepards Pie",
  isMeat : true,
  servingSize:"6",
  time:"Prep: 35 Min | Cook: 1 hour 15 Min | Total: 1 Hour 45 Min",
  source:"Matt Ravenmoore with credit to Gorden Ramsey for a base",
  ingredients:['1lb ground beef or lamb','1 medium yellow onion','1 carrot','2 cloves of garlic minced','1 cup red wine','2 Tbsp of butter','1 Tbsp of olive oil','2 Tbsp of tomato paste','4 potatoes pealed and cubed','4 cups of beef stock','basil','oregano','thyme','salt and pepper','1/8 cup cream','1/4 cup parmesan'],
  directions:['0. Preheat the oven to 400deg.','1. Bring a medium to large pot of salted water to a boil. Add potatoes and cook until tender but still firm, about 15 minutes. Drain and mash. Mix in butter, cream, and parmesan and set aside to cool.',' 2. Heat a skillet with the olive oil, over medium high heat. Sear off your meat "no color no flavor", once it has some color drain it off and shred your onion into your pan.','3. Shred the carrot into the pan and stir, cook until the vegetables are soft and starting to take color(about 4 min).','4. Add in the tomato paste and minced garlic stir a bit while adding the wine. cook off the wine for about 3 to 5 min.','5. slowly stir in the beef stock and bring to a high simmer and let simmer without a lid for 8 min or until thick.','6. Once thickened gently spoon the mashed potatoes on top (use a rubber spatula to spread if needed) then fluff with a fork and sprinkle any extra parmesan on top and bake for 15 min.','7. cool for 15 min and serve.']
};
var recipeCard2 = {
  dish:"Chicken Parmesan",
  isMeat : true,
  servingSize: "4",
  time:"Prep: 25 Min | Cook: 20 Min | Total: 45 Min",
  source:"Matt Ravenmoore with credit to Gorden Ramsey for a base",
  ingredients:['4 Skinless, boneless chicken breast','1 cup of parmesan cheese divided in 1/4s','1/2 cup mozzarella sliced','1 cup breadcrumbs','2 large eggs','1 cup of flour','2 Tbsp of olive oil','2 to 4 Tbsp of butter in pats','16oz of Marinara sauce','1/2 cup fresh basil finely chopped','linguini pasta','Salt and pepper'],
  directions:['0.  Preheat Oven to 450 degrees F.','1. set up your trays for the breading, beat the eggs in one, flour in another and mix the breadcrumbs parmesan salt pepper and spicese in the last tray','2. lay out and cut each chicken breast to an escalope (thin butterfly style cut) place between two pieces of parchment then roll with a rolling pin to even out.','3. Apply the bread coating to the escalloped Chicken, Starting with the flour then the egg wash then the bread crumbs.','4. while the chicken rests, Start a pot of salted water for the pasta and heat a frying pan to med-high heat and add the oil.','5. Once hot place your first piece of chicken in and listen for that sizzle, add a bit of butter to the sides of the pan for browning.','6.Flip chicken once browned on one side and brown the second about 2 minutes a side. set on an oven pan to go into the oven ,Repeat steps 5 and 6 for all chicken','7. Take a Tbsp of Marinara and spoon it on to each of the pieces of chicken then layer mozzarella on top and into the oven for 10-15min.','8.Meanwhile Drop your pasta in your now boiling water','9. pull out chicken and set aside for a min to rest then drain pasta and drizzle with a bit of oil and serve.']
};
var recipeCard3 = {
  dish:"Swedish Meatballs",
  isMeat : true,
  servingSize: "4",
  time:"Prep: 1H 30min | Cook: 35min | Total 2 Hours",
  source:"All-recipes https://www.allrecipes.com/recipe/231169/chef-johns-swedish-meatballs/?internalSource=hub%20recipe&referringContentType=Search with tweeks by Matt Ravenmoore ",
  ingredients:['4 Tbsp Butter devided','1/2 Yellow Onion Finely Chopped','1/4 Cup Milk','2 Large Eggs','1/3 Cup Plain Bread Crumbs','1/4 Tsp Ground Nutmeg','1/4 Tsp Ground Allspice','1 Pound Ground Beef','1 Pound Ground Pork','3 tbsp flour','3 1/4 Cups Beef Broth','1/2 Cup Heavy Cream','1/4 Tsp Worcestershire Sauce','1 Tbsp dejon mustard','Salt and Pepper to Taste'],
  directions:['useing 1/2 of the buter saute the onions in a skilit untill translucent.','Transfer onion mixture to a large bowl. Add milk, eggs, bread crumbs, nutmeg, allspice, and salt and pepper to taste; stir to combine.','Mix beef and pork into the bread crumb mixture. Cover with plastic wrap and refrigerate for 1 hour.','Melt 2 tablespoons butter in a large skillet over medium heat; whisk flour into butter and cook until golden brown, 4 to 5 minutes. Slowly whisk beef broth into butter mixture.','Increase heat to medium-high, whisk cream into mixture and bring to a simmer. Stir mustard and Worcestershire sauce into gravy. Simmer until slightly thickened, 6 to 7 minutes. Season with salt and black pepper. Remove from heat and set aside.',' Preheat oven to 425 degrees F. Line a baking sheet with aluminum foil and lightly coat foil with cooking spray.','Roll 2 to 3 tablespoons meatball mixture into a ball using wet hands; repeat with remaining meatball mixture. Place meatballs on the prepared baking sheet.','Bake in the preheated oven until browned, about 20 minutes. A thermometer inserted into the center should read at least 160 degrees F.','Transfer meatballs to the gravy and cook over medium-low heat until warmed through, about 5 minutes.','Pull from heat, plate and enjoy!']
};
var recipeCard4 = {
  dish:"slow cook Beef Stew",
  isMeat : true,
  servingSize: "6",
  time:"Prep: 25Min | Cook: minimum 4.5 hours | Total 5 Hours Minimum",
  source:" Matt Ravenmoore ",
  ingredients:['2 Pounds cubed meat(chefs choice beef lamb venison all good options)','2 Quarts beef stock','1/2 cup butter','3/4 red onion, chopped','3 cloves Garlic, Minced','2 Leaves of Bay Leaf','1/2 Tbsp Salt','1/2 Tsp flour','3/4 Tsp white Pepper','1 sprig of Rosemerry','1/4 Tsp of oregano','2 Tbsp Butter','3 medium carrots, chopped','6 medium potatoes, quartered','2 stalks celery, chopped'],
  directions:['Heat the butter in a large skillet over medium-high heat and saute the onions just to color them and then add the garlic for about 45 seconds remove from pan into crockpot instapot or other slow cooker','In the same pan sear off the meat untill evenly browned and add to slow cooker, discard any excess grease.','Add beef stock, seasonings including flour and stir','then add the potatoes, carrots, and celery','slow cook on a low to medium heat or until meat begins to tender, usualy 3 to 4.5 hours. the lower the heat the longer it will take but the better the flavors will be.']
};
var recipeCard5 = {
  dish:"Spinach and Strawberry Salad",
  isMeat : false,
  servingSize: "6",
  time:"Prep: 10 Mins | Cook: 10 Mins | Total 20 Min",
  source:"all recipes: https://www.allrecipes.com/recipe/16409/spinach-and-strawberry-salad/?internalSource=hub%20recipe&referringContentType=Search",
  ingredients:['2 Bunches of Spinach, Rinsed and Shredded to bite-sized pieces','4 Cups Sliced Strawberries','½ Cup Vegetable Oil',' ¼ Cup White Wine vinegar',' ½ Cup White Sugar','¼ Teaspoon Paprika','2 Tablespoons Sesame Seeds (Optional)','1 Tablespoon Poppy Seeds (Optional)'],
  directions:['In a large bowl, toss together the spinach and strawberries.','In a medium bowl, whisk together the oil, vinegar, sugar, paprika, and seeds.','Pour mixture over the spinach and strawberries, and toss to coat.','Serve and Enjoy!']
};
var recipeCard6 = {
  dish:"Roast chicken and Mashed potatoes",
  isMeat : true,
  servingSize: "4",
  time:"Prep: 20 Min | Cook: 1 Hour 10 Min | Total: 1 Hour 30 Min",
  source:" Matt Ravenmoore & Andre Olivier Martin ",
  ingredients:['1 whole chicken cleaned','2 1/2 Tbsp Smoked paprika','salt','pepper','1/2 yellow onion','1/2 cup pine nuts(or other nut)','1/4 cup dried fruit(cranberrys, raisins, apples are good options)in a 1/4 cup water','3 carrots','2 cloves of garlic minced seperated','7 Tbsp butter','pinch of thyme','1/2 a lemon','twine','2 pounds baking potatoes,peeled and quartered','1 cup cream'],
  directions:['preheat oven to 375 F',' now start a skillet on med-high and just place the nuts in them with some salt','place 2 Tbsp of butter into the pan and add the onions to saute','add the dried fruit and water to the pan and let simmer off','drop in the garlic just longenough to kiss the pan then remove mixture to a bowl to cool for 15 min','Coat the chicken in rest of the butter, then rub with salt and pepper, then the smoked paprika','stuff the chicken with the nut and fruit mix and tie the legs closed with the twine','place the carrots at the bottom of your roast pan and place the chicken breast up ontop of the carrots, then cover tightly with foil place lid over foil and slide into the oven for 1 hour','durring the last 30 min Bring a pot of salted water to a boil.','Add potatoes and cook until tender about 15 minutes; then drain.','return the potatoes to the pan add last of the butter,the cream, and blend untill smooth','season mash with salt and pepper to taste','remove foil for last 20min of cooking to brown the chicken.','remove chicken from oven, let rest for 15 min, and serve']
};
var recipeCard7 = {
  dish:"Avocado Tomato and lentil Salad",
  isMeat : false,
  servingSize: "6",
  time:"Prep:  5 mins | Cook:  30 mins ",
  source:"https://mayihavethatrecipe.com",
  ingredients:['1 cup beluga lentils, picked and rinsed','1 1/4 teaspoon salt, divided','1/2 pint red grape tomatoes','1/2 pint yellow grape tomatoes, sliced in half','1 Hass Avocado, peeled and diced','3–4 Persian cucumbers or 1 English cucumber, diced','2 tbsp extra virgin olive oil','3 tbsp fresh squeezed lemon juice.'],
  directions:['Combine 5 cups of water and lentils in a medium sauce pan. Bring to a boil, reduce heat to medium and cook for 15 minutes. Add 1 teaspoon salt and continue cooking for 15 more minutes, until the lentils are tender but not mushy','Drain and rinse the lentils. Let them cool slightly, transfer them to a large bowl and add tomatoes, cucumbers and avocados. Dress with olive oil, lemon and 1/4 teaspoon salt']
};
var recipeCard8 = {
  dish:"Disney's Ratatouille",
  isMeat : false,
  servingSize: "4",
  time:"Prep: 45 mins | Cook:45 mins | Total: 1 hr 30 mins",
  source:" All Recipes https://www.allrecipes.com/recipe/222006/disneys-ratatouille/ with adapttions from Matt Ravenmoore",
  ingredients:['1 (6 ounce) can tomato paste', '½ onion, chopped','¼ cup minced garlic','1 tablespoon olive oil','¾ cup water','1 pinch salt and ground black pepper to taste','1 small eggplant, trimmed and very thinly sliced','1 zucchini, trimmed and very thinly sliced','3 tomatoes trimed and thinly sliced','1 yellow squash, trimmed and very thinly sliced','1 yellow bell pepper, cored and very thinly sliced','3 tablespoons olive oil, or to taste','1 teaspoon each of fresh thyme leaves, rosemerry,and oregino, or to taste','3 tablespoons parmesan cheese'],
  directions:['Preheat the oven to 375 degrees F','Spread tomato paste into the bottom of a 9x13-inch baking dish. Sprinkle with 1/2 herbs, onion and garlic and stir in 1 tablespoon olive oil and water until thoroughly combined. Season to taste with salt and black pepper.','Arrange alternating slices of eggplant, zucchini, yellow squash, tomato, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap the slices a little to display the colors. Drizzle the vegetables with 3 tablespoons olive oil and season with salt and black pepper. Sprinkle with the other half of the herbs. Cover vegetables with a piece of parchment paper cut to fit inside.','Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with shreded Parmesan cheese.']
};
var recipeCard9 = {
  dish:"Potato Salad with Mustard Sauce and Watercress",
  isMeat : false,
  servingSize: "4",
  time:"Prep: 1 hour | Cook: 20 Min ",
  source:" https://www.bonappetit.com/recipe/potato-salad-with-mustard-sauce ",
  ingredients:['1¼ pounds peewee, peanut, or baby potatoes (as small as possible), scrubbed','Kosher salt','2 tablespoons apple cider vinegar','2 tablespoons Dijon mustard','2 tablespoons whole grain mustard','2 tablespoons chopped dill pickles','1 tablespoon pickle brine plus more for serving','Freshly ground black pepper','2 cups trimmed watercress','Olive oil (for drizzling)'],
  directions:['Place potatoes in a large pot and cover with cold water. Throw in a palmful of salt and bring to a boil. Reduce heat and simmer until fork-tender, 15–20 minutes. Drain, then let cool slightly (the potatoes should be warm when you dress them, which will help them soak up the flavors).','Meanwhile, mix vinegar, Dijon mustard, whole grain mustard, pickles, pickle brine, and 2 Tbsp. dill in a large bowl.','Slice potatoes in half and transfer to bowl with vinegar mixture; season with salt and pepper and toss to coat. Let cool.','Add watercress and toss to coat. Top with more dill, a good drizzle of oil, and more pepper.','Do Ahead: Potato salad, without watercress, can be made 1 day ahead. Cover and chill.']
};
var recipeCard10 = {
  dish:"EASY BAKED LEEK AND PEA RISOTTO",
  isMeat : false,
  servingSize: "4",
  time:"Prep:  10 MIN| Cook: 35 MIN",
  source:" https://thymeandlove.com/easy-baked-leek-pea-risotto/",
  ingredients:['2 Tablespoons Olive Oil','2 Leeks, white and pale green parts, thinly diced','2 Garlic Cloves, minced','2 Teaspoons Thyme Leaves','1 Cup Arborio Rice','1/2 Cup Dry White Wine','3 Cups Vegetable Stock, warmed','3/4 Cup Peas, thawed','1 Tablespoon Vegan Butter','1-2 Tablespoons Nutritional Yeast','1 Tablespoon Lemon Juice','Salt and Pepper to taste'],
  directions:['Preheat the oven to 375ºF.','Heat a Dutch oven over medium-high heat and add olive oil. Add the leeks and cook until almost tender, about 4-6 minutes. Add the garlic, thyme and cook for 1 minute. Season with salt and pepper.','Add the rice and toast in the pan for 1-2 minutes until lightly opaque. Add the wine and allow to reduce by half. Add 2 cups of vegetable stock and stir to combine. Bring to a simmer, cover and place in the oven to bake for 25 until the liquid is absorbed and the rice is al dente.','Remove from the oven, stir in the remaining vegetable stock, peas, butter, nutritional yeast, and lemon juice. Stir to combine. Season with salt and pepper.']
};
generateRecipes();
saveToLocalStorage();
