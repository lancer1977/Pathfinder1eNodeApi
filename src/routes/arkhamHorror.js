var runSeed = false; 
var fs = require("fs");
var express = require('express');
var mongoose = require('mongoose');  
var router = express.Router(); 
var gameconnectionString = "mongodb+srv://pflancer:biz!11BIZ@polyhydragames-naorp.azure.mongodb.net/arkhamHorror?retryWrites=true"; 
const conn = mongoose.createConnection(gameconnectionString, () => {
   
    runmaps();
});
var ability = conn.model('talent',require('../models/arkhamHorror/ability') ,'talent'); 
var investigator = conn.model('investigator', require('../models/arkhamHorror/investigator'),'investigators'); 
var story = conn.model('story', require('../models/arkhamHorror/story'),'story');

 async function runmaps(){
    //await map_investigator();
    //await map_ability();
    await map(investigator,"investigator",runSeed);
    await map(ability,"ability",runSeed);
    await map(story,"story",true);
 }
 
async function seed(db,file ) {
    console.log("\n *START Seed* Investigator * \n"); 
    var json = getRawFileData('arkhamHorror/' + file + '.js'); 
    console.log(json)
    await db.collection.insertMany(json, function (err, r) {
        if (err != null) {
            console.log(err);
        }

    }); 
    var count = await db.collection.countDocuments();
    console.log("COUNT:" + count);
    console.log("\n *END Import* \n");
};

function getRawFileData(file) {
    var filename = './seeds/' + file ; 
    var content = fs.readFileSync(filename, 'utf8').toString();
    var json = JSON.parse(content);
    return json;
}

 

async function map(db, name,seedMe) {
    if(seedMe){ 
        await seed(db,name); 
    } 
    router.route('/'+name+'/')
        .get(async (req, response) => {  
            //var count = await ability.collection.countDocuments();
            //console.log("COUNT:" + count);
            db.find(async (err, result) => {
                if (err) {
                  console.log(err);
                }
                else { 
                    response.json(result);
                }
            }); 
         });
}

module.exports =  router
 

