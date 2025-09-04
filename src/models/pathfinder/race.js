var mongoose = require('mongoose'); 
var race = mongoose.Schema({
  Name: { type: String },
 
 

  Str: { type: Number },	Dex: { type: Number },
  Con: { type: Number },
  Wis: { type: Number },
  Int: { type: Number },
  Cha: { type: Number },
  Move: { type: Number },
  Advanced: { type: Number },
  Subtype: { type: String },
  Languages	: { type: String },
  Source: { type: String }


});
module.exports = race;

 
