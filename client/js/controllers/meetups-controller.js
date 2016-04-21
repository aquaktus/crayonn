app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Recipe = $resource('/api/recipe');
  var Images = $resource('/images');

  Recipe.query(function (results) {
    $scope.recipes = results;
  });

  $scope.recipes = []

  $scope.slides = [
    {
      image: "/images/570e5763e0fd050414e120be/fullSize.jpg",
      title: 'First image',
      text: 'this is the first image in the slides array'
    },
    {
      image: 'https://wallpaperscraft.com/image/bread_vegetables_meat_food_70203_1920x1080.jpg',
      title: 'second image',
      text: 'this is the second image in the slides array'
    },
    {
      image: 'http://all4desktop.com/data_images/original/4244814-food.jpg',
      title: 'third image',
      text: 'this is the third image in the slides array'
    },
    {
      image: 'http://cdn.allwallpaper.in/wallpapers/1920x1080/7543/food-salmon-1920x1080-wallpaper.jpg',
      title: 'fourth image',
      text: 'this is the fourth image in the slides array'
    }
    ];



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