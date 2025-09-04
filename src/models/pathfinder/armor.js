var mongoose = require('mongoose'); 
var armor = mongoose.Schema({
  Name: { type: String },
  Cost: { type: Number },
  Weight: { type: String },

  BaseAC: { type: Number },
    MaxDex: { type: Number },
      ArmorCheckPenalty: { type: Number },
        ArcaneSpellFailure: { type: Number },
          Move30: { type: Number },	
          Move20: { type: Number },
              Category: { type: String },	
                ItemType: { type: String },	
              Source: { type: String },	
              System: { type: String },
              	License: { type: String },
});
module.exports = armor;

 					

