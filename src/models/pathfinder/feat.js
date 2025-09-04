var mongoose = require('mongoose'); 
var feat =  mongoose.Schema({
  Name: { type: String },
  Type: { type: String },
  Implemented: { type: Boolean },
  Multiple: { type: Boolean },
  Options: { type: String },
  Benefits: { type: String },
  Prerequistites: { type: String },
  PrereqFeat: { type: String },
  Description: { type: String },
  Source: { type: String },
  System: { type: String },
});
module.exports = feat;
