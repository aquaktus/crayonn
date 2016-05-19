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


  $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        $resource.upload({
            url: 'api/imageUpload',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
    // for multiple files:
    $scope.uploadFiles = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          $resource.upload({..., data: {file: files[i]}, ...})...;
        }
        // or send them all together for HTML5 browsers:
        $resource.upload({..., data: {file: files}, ...})...;
      }
    }



}]);
