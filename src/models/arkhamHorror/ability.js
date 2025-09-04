var mongoose = require('mongoose'); 
var talent = mongoose.Schema({
  AbilityId:{ type: Number },
  Name: {type: String }, 
  Description: { type: String }
}, { collection : 'talent' });
module.exports = talent;

 					
