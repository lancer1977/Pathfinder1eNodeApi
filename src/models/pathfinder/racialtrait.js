var mongoose = require('mongoose'); 
var racialtrait = mongoose.Schema({
  Name: { type: String }, 
  Alternate: { type: Boolean },
  Race: { type: String },
  Implemented: { type: Boolean },
  Replaces: { type: String},
  BenefitType: { type: String },
  BenefitValue: { type: String },
  Description: { type: String }

});
module.exports = racialtrait;

 
