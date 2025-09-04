var mongoose = require('mongoose'); 
var weaponfeature =  mongoose.Schema({
  Name: { type: String },
  Aura: { type: String },
  Craft: { type: String },  
  CL: { type: String },  
  Description: { type: String },
  Price: { type: String }
});
module.exports = weaponfeature;


 

