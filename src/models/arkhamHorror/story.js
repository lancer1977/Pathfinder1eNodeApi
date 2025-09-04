var mongoose = require('mongoose'); 
var story = mongoose.Schema({
  StoryId:{ type:Number }, 
  Description: { type: String },
  Name: {type:String}
}, { collection : 'storydto' });
module.exports = story;

 					
