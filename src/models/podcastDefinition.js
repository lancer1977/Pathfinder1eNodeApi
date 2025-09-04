var mongoose = require('mongoose'); 
var podcastDefinition = mongoose.Schema({ 
  Title: { type: String },  
 Author: { type: String }, 
 Subtitle: { type: String }, 
Summary: { type: String }, 
Image: { type: String }, 
Name: { type: String }, 
FileAddress: { type: String }, 
FileLength: { type: String }, 
FileType: { type: String }, 
Guid: { type: String }, 
PubDate: { type: String }, 
Duration: { type: String }, 
Keywords: { type: String }, 

});
module.exports = podcastDefinition;

 					
