var runSeed = true;
var fs = require("fs");
var express = require("express");
var mongoose = require("mongoose");
var bookSchema = require("../models/book");

var router = express.Router(); 
const db = mongoose.createConnection("mongodb+srv://pflancer:biz!11BIZ@polyhydragames-naorp.azure.mongodb.net/other?retryWrites=true", () => {
    if(runSeed)
        seed(game)
    maps(game);
});
db.model('book', bookSchema,'books');
async function seed(database) {
    console.log("\n *START Seed* * \n");
    const json = getRawFileData("game");
    database.collection.insertMany(json, function (err, r) {
        if (err != null) {
            console.log(err);
        }

    });
    console.log("\n *END Import* \n");
};

function getRawFileData(file) {
    const filename = "./seeds/" + file + ".js";
    const content = fs.readFileSync(filename, "utf8").toString();
    const json = JSON.parse(content);
    return json;
}

async function maps(db) {
    console.log("Start mapping ");

    router.route("/all/").get((req, response) => {
        db.find((err, result) => {
            if (err) {console.log(err);}
            else {response.json(result);}
        });

        router.route('/insert').post((req, res) => {   
            console.log("Inserting");
            mathscore.create(req.body,(err,result)=>{ 
                if (err) { console.log(err); }
                else { 
                    console.log("Completed");
                    res.send(result);
                }
                 });
            
        });
    

    });


    console.log("Done mapping ");
}
module.exports = router


