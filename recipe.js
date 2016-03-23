'use strict';

function addIngredient(recipe, ingredient, quantity) {
  recipe[ingredient] = quantity;
  return recipe;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, quantity) {
  recipe[ingredient] = quantity;
  return recipe;
}

function readRecipe(recipe) {
  for (var ingredient in recipe) {
    console.log("this recipe calls for " + recipe[ingredient] + " of " + ingredient);
  }
}