var mongoose = require('mongoose'); 
var words = mongoose.Schema({
  Name: { type: String },
  Duration: { type: String },
  School: { type: String },
  Subschool: { type: String },
  WordType: { type: String },
  WordSubtype: { type: String },
  SpellType: { type: String },
  Targets: { type: String },  
  Save: { type: String },
  Harmless: { type: Boolean },
  Resistance: { type: Boolean },
  Description: { type: String },  
  Alchemist: { type: Number },
  Bard: { type: Number },
  SorWiz: { type: Number }, 
  Cleric: { type: Number },
  Druid: { type: Number },
  Inquisitor: { type: Number },
  Summoner: { type: Number },
  Witch: { type: Number },  
  Ranger: { type: Number },
  Paladin: { type: Number },
  Magus: { type: Number },
  
});
module.exports = words;
 
