 
var mongoose = require('mongoose'); 
var mathscore = mongoose.Schema({
    Date	: { type: Date }, 
    Seconds : { type: Number }, 
    Operation : { type: Number }, 
    Difficulty : { type: Number }, 
    Questions: { type: Number }, 
    Date :  { type: Date },
    Name :  { type: String }
});
module.exports = mathscore;
