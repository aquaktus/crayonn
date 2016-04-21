var mongoose = require('mongoose');

module.exports = mongoose.model('Recipe', {
  name: { type: String, default: 'Iranian Cuscus' },
  rating: {type: Number, default: 4},
  description: {type: String, default: 'John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do.'},
  instructions: {type:String, default: 'Place tray in oven...'},
  ingredients: [{name:String,ratio:String}],
  rank: {type:Number},
  active: {type: Boolean, default: true },
  category: {type:String, default:'lunch'}
});


