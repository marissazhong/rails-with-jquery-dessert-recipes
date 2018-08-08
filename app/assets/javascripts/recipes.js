function ShowRecipe(data_json) {
    this.id = data_json["id"];
    this.name = data_json["name"];
    this.author = data_json["user"]["username"];
    this.prep_time = data_json["prep_time"];
    this.cook_time = data_json["cook_time"];
    this.ingredients = data_json["ingredients_recipes"];
    this.directions = data_json["directions"];
}

ShowRecipe.prototype.showIngredients = function() {
    var recipe_ingredients = '<h2>Ingredients:</h2><table id="ingredients-table"><tr><th>Name</th><th>Amount</th></tr>';
    var mid = this.ingredients.length/2;
    this.ingredients.slice(0,mid).forEach(function(ingredient) {
        ingredient_name = ingredient["input_name"].charAt(0).toUpperCase() + ingredient["input_name"].slice(1);
            recipe_ingredients += '<tr><td>' + ingredient_name + '</td><td>' + ingredient["quantity"] + '</td></tr>';
    })
    recipe_ingredients += '</table>';
    return recipe_ingredients;
}

ShowRecipe.prototype.showDirections = function() {
    var recipe_directions = '<h2>Directions:</h2>';
    var i = 1;
    this.directions.match(/".*?"/g).forEach(function(direction) {
      recipe_directions += i + '. ' + direction.slice(1,-1) + '<br />';
      i++;
    });
}