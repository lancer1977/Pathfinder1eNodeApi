var express = require('express');  
var router = express.Router(); 
const db = mongoose.createConnection("mongodb+srv://pflancer:biz!11BIZ@polyhydragames-naorp.azure.mongodb.net/other?retryWrites=true", onConnect );
var mathscore = db.model('mathscore', require('../models/mathscore','mathscore'));
function onConnect(){
    router.route('/insert').post((req, res) => {   
        console.log("Inserting");
        mathscore.create(req.body,(err,result)=>{  
            if (err) { console.log(err); }
            else {  
                res.send(result);
            }
             }); 
    });

    router.route('/scores/')
        .get(async (req, response) => {   
            mathscore.find(async (err, result) => {
                if (err) { console.log(err); }
                else {  response.json(result); }
            }); 
         });
 }
 
  
 

module.exports =  router
 

