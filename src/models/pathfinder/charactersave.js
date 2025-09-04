
var mongoose = require('mongoose'); 
var charactersave = mongoose.Schema({
  Name: { type: String }, 
  AzureId: { type: String },
  Data: { type: String },
  UserId: { type: String },
  Deleted: { type: Boolean }, 
  DateChanged: { type: Date }
});
module.exports = charactersave;
