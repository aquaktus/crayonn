var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  name: String,
  password: String,
  profilePicture: String,
  allergens: [{type: String}],
  description: String

});