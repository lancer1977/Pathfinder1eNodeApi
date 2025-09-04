var mongoose = require('mongoose'); 
const charactersave = require('./charactersave');
var characterClass = mongoose.Schema({
  Name: { type: String },
  SpellStat: { type: String },
  CasterType: { type: String },
  AlternateClasses: { type: String },
  Hitdie: { type: Number },
  Fortitude: { type: String },
  Reflex: { type: String },
  Will: { type: String },
  Skillsperlevel: { type: Number },
  ClassSkills: { type: String },
  System: { type: String },
  Source: { type: String },
  License: { type: String },
  Description: { type: String },
  Type: { type: String },
  Bab: { type: String },
  Gold: { type: String },
});
module.exports = characterClass;
