var mongoose = require('mongoose');

var classAbility = mongoose.Schema({
Id: {type:Number  },
Name: {type:String},
Archtype: {type:String},
SpellLike: {type:String},
Level: {type:Number },
Sacrifice: {type:String},
Implemented: {type:Boolean},
LevelsPerCharges: {type:Number },
Calculation: {type:String},
Description: {type:String},
ClassName: {type:String}
});

module.exports = classAbility;

