const recipe ={
    recipeTitle: "Lasagna",
    servings: 4,
    ingredients: ["cheese", "tomato paste", "minced beef", "flour", "olive oil", "whole egg", "salt", "spices"],
    directions: "Add flour in a bowl, add  whole egg, olive oil and salt, stir until combined, dough has to be a bit hard, wrap the dough and let it rest for 30 minutes, while the dough rests, grind cheese and heat the pan, add oil, put minced beef, when minced beef turned brown, add tomato paste and spices, roll the dough into your baking tray shape, boil water, cook your dough slices for 3 minutes each, put boied dough pices into baking tray, then minced beef, add cheese, repeat until you don't have ingredients left, bake for 40 minutes in preheat oven 200 celcius."
}

console.log("Recipe name: " + recipe.recipeTitle, ". Servings: " + recipe.servings, ". Ingredients: " + recipe.ingredients, ". Directions: " + recipe.directions);

for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}