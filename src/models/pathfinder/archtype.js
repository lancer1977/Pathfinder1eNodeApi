var mongoose = require('mongoose'); 
var archtype = mongoose.Schema({
  Name: { type: String },
  ClassName: { type: String } 
});
module.exports = archtype;