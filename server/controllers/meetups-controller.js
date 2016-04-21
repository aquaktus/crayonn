var Meetup = require('../models/meetup');
var Recipe = require('../models/recipe');
var url = require('url');

module.exports.create = function (req, res) {
  var recipe = new Recipe(req.body);
  recipe.save(function (err, result) {
    res.json(result);
  });
};


module.exports.list = function (req, res) {
  Recipe.find({active: true}, function (err, results) {
    res.json(results);
    /*var recipe = new Recipe();
    recipe.save(function (err, result) {});
    console.log('hello')*/
  });
}

module.exports.deleteRecipe = function (req, res) {
  Recipe.findById(req.params._id, function (err, recipe) {
    if (err) return handleError(err);
    
    recipe.active = false;
    recipe.save(function (err) {
      if (err) return handleError(err);
    });
  });
}

