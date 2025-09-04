var mongoose = require('mongoose'); 
var armorFeatures = mongoose.Schema({
  Name: { type: String },
  Aura: { type: String },
  CL: { type: String },
  Craft: { type: String },
  Price: { type: String },
  Description: { type: String }, 
});
module.exports = armorFeatures;
 
