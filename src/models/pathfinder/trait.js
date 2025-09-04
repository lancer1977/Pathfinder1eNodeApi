var mongoose = require('mongoose'); 
var trait = mongoose.Schema({
  Id: { type: Number },
  Name: { type: String },
  Imp: { type: Boolean },
  Options: { type: String },
  BenefitType: { type: String },
  BenefitAmount: { type: Number },
  Benefit: { type: String },
  Description: { type: String },
  Category: { type: String },
  Type: { type: String },
  Prerequisites: { type: String },
  PFS_Legal: { type: String },
  Source: { type: String },
  Version: { type: String },
});
module.exports = trait;
