 
var mongoose = require('mongoose');
var externalUserRecord = mongoose.Schema({
    PolyhydraId: { type: String },
    Provider: { type: String },
    AccessToken: { type: String }, 
});
module.exports = mongoose.model('externalUserRecord', externalUserRecord);

 
var polyhydraUser = mongoose.Schema({
    PolyhydraId: { type: String },
    Name: { type: String },
    Email: { type: String },
});
module.exports = mongoose.model('polyhydraUser', polyhydraUser);