var mongoose = require('mongoose'); 
var language = mongoose.Schema({
  Name: { type: String },
  Spoken: { type: String },
  Description: { type: String }
});
module.exports = language;