var mongoose = require('mongoose'); 
var ammo = mongoose.Schema({
  Name: { type: String },
  Cost: { type: Number },
  Weight: { type: String },
  DamageType: { type: String },
  Source: { type: String },
  AmmoType: { type: String }, 

  Quantity: { type: String },
  Special: { type: String },
  Misfire: { type: String }, 
});
module.exports = ammo;

 					
