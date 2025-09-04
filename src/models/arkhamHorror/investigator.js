var mongoose = require('mongoose'); 
var investigator = mongoose.Schema({
  InvestigatorId:{type:Number},
  Name: { type: String }, 
  Title: { type: String }, 
  Lore: { type: Number }, 
  Influence: { type: Number }, 
  Observation: { type: Number }, 
  Strength: { type: Number }, 
  Will: { type: Number },  
  StartingWealth: { type: Number },  
  Focus: { type: Number }, 
  Health: { type: Number }, 
  Horror: { type: Number }, 
  FlavorText: { type: String }, 
  AdditionalRules: { type: String },  
  StartingItems: { type: String }, 
  OptionalItems: { type: String },  
  Role1: {type:String},
  Role2: {type:String}
});
module.exports = investigator;

 					
