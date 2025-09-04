var mongoose = require('mongoose'); 
var book = mongoose.Schema({ 
  Title	: { type: String },
  Author: { type: String },
  Notes	: { type: String }, 
  PurchasedPrice: { type: Number },
  PurchasedDate	: { type: Date },
  Added	: { type: Date },
  ExternalId : {type: Number}
});
module.exports = book;

 					
