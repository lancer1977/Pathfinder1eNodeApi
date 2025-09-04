var mongoose = require('mongoose'); 
var deed = mongoose.Schema({
  Name: { type: String },
  Cost: { type: Number },
  Class: { type: String },
  Level: { type: Number },
  Source: { type: String }, 

  Implemented: { type: Boolean },
  Passive: { type: Boolean },
  Description: { type: String }    

});
module.exports = deed;

 					
