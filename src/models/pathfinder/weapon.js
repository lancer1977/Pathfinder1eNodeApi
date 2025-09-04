var mongoose = require('mongoose'); 
var weapon = mongoose.Schema({
  Name: { type: String },
  Description: { type: String }, 
  Cost: {type:Number},
      WeaponGroup: { type: String }, 
          DmgS: { type: String }, 
              MediumDamage: { type: String }, 
                  Threshhold : {type:Number},
                      Multiplier: {type:Number},
                          Range: {type:Number},
                              Weight: {type:Number},
                                  DamageType: { type: String }, 
                                      Source: { type: String }, 
                                          Category: { type: String }, 
                                              ItemType: { type: String }, 
                                                  Action: { type: String }, 
                                                      Misfire: {type:Number},
                                                          MisfireRange: {type:Number},
                                                              Capacity: {type:Number},
                                                              	AdvancedFirearm: { type: Boolean }

});
module.exports =weapon;
 					
