/*
* Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
* and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units
* for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
* Ingredients that are not present in the objects, can be considered as 0.
*
* Examples:
* // must return 2
* bakeCakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
* // must return 0
* bakeCakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
* */

function bakeCakes(recipe, available) {
  const res = {};
  
  for (let ingr in recipe) {
    if (!available[ingr]) return 0;
    
    res[ingr] = Math.floor(available[ingr] / recipe[ingr]);
  }
  
  return Object.values(res).reduce((acc, val) => acc < val ? acc : val);
}
