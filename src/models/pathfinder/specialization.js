var mongoose = require('mongoose'); 
var specialization = mongoose.Schema({
  Name: { type: String },
  Type: { type: String },
  Power1: { type: String },
  Power2: { type: String },
  Implemented: { type: Boolean },
  Power3: { type: String },
  Power4: { type: String },
  Power5: { type: String },
  Feat: { type: String },
  Skill: { type: String },
  Power: { type: String },
  Subtype: { type: String },
  Description: { type: String },
  Spells: { type: String },
});
module.exports = specialization;
