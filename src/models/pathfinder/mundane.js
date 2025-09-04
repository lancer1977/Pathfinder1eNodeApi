var mongoose = require('mongoose'); 
var mundane = mongoose.Schema({
  Name: { type: String },
  Cost: { type: Number },
  Weight: { type: String },
  Source: { type: String },
  Subtype: { type: String },   
});
module.exports = mundane;
