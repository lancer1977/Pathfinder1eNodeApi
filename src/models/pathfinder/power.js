var mongoose = require('mongoose'); 
var power = mongoose.Schema({
  Name: { type: String },
  Type: { type: String },
  Implemented: { type: Boolean },
  Level: { type: Number },
  Subtype: { type: String },
  Prereq: { type: String },
  SpellLike: { type: String },
  Rogue: { type: Number },
  Slayer: { type: Number },
  Ninja: { type: Number },
  Investigator: { type: Number },
  Description: { type: String },
});
module.exports = power;
