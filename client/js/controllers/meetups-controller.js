app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Recipe = $resource('/api/recipe');
  var Images = $resource('/images');

  Recipe.query(function (results) {
    $scope.recipes = results;
  });

  $scope.recipes = []

  $scope.createRecipe = function () {
    var recipe = new Recipe();
    recipe.name = $scope.recipeName;
    recipe.instructions = $scope.recipeInstruction;
    recipe.description = $scope.recipeDescription;
    recipe.rating = 2;
    recipe.$save(function (result) {
      $scope.recipes.push(result);
      $scope.recipeName = '';
      $scope.recipeInstruction = '';
      $scope.recipeDescription = '';
    });
  }

  $scope.deleteRecipe = function(_id, index){
    $resource('/api/recipe/'+_id).delete();
    $scope.recipes.splice(index,1);
    return $scope.recipes
  };



}]);
