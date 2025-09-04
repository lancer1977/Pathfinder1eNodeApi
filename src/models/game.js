var mongoose = require('mongoose'); 
var game = mongoose.Schema({
  VGCId	: { type: String },
  Name	: { type: String },
  Platform: { type: String },
  Notes	: { type: String },
  Cart: { type: Boolean },
  Box	: { type: Boolean },
  Manual	: { type: Boolean },
  Other: { type: Boolean },
  PurchasedPrice: { type: Number },
  PurchasedDate	: { type: Date },
  Added	: { type: Date }
});
module.exports = game;

 					
