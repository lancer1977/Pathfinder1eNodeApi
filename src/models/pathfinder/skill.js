var mongoose = require('mongoose'); 
var skill = mongoose.Schema({
  Name: { type: String },
  Stat: { type: String },
  Description: { type: String },
  Game: { type: String },
  Trained: { type: Boolean },
  CategoryId: { type: Number },
});
module.exports = skill;
