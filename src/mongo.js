
const MongoClient = require( 'mongodb' ).MongoClient; 
const url = 'mongodb+srv://pflancer:biz!11BIZ@polyhydragames-naorp.azure.mongodb.net/?retryWrites=true';

var _arkhamHorror;
var _pathfinder;
module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('arkhamHorror');
      _pathfinder = client.db('pathfinder');
      return callback( err );
    } );
  },

  getArkhamHorror: function() {
    return _arkhamHorror;
  },

  getPathfinder: function() {
    return _pathfinder;
  }
};