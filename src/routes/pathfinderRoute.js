var runSeed = true;

var fs = require("fs");
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var pw = 'biz!11BIZ';
var pathfinderconnectionString = 'mongodb+srv://pflancer:' + pw + '@polyhydragames-naorp.azure.mongodb.net/pathfinder';
//var db = mongoose.connect('mongodb://pflancer:'+pw+'@polyhydragames-naorp.azure.mongodb.net/pathfinder?retryWrites=true');
const db = mongoose.createConnection(pathfinderconnectionString, () => {
     maps(); 
    });

//definitions
var charactersave = db.model('charactersave',  require('../models/pathfinder/charactersave'),'characterSaves');
var archtype = db.model('archtype',  require('../models/pathfinder/archtype'),'archtypess');
var armor = db.model('armor', require('../models/pathfinder/armor'),'armors'); 
var armorFeatures = db.model('armorfeature',require('../models/pathfinder/armorFeatures'), 'armorfeatures');
var ammo = db.model('ammo', require('../models/pathfinder/ammo'),'ammos'); 
var characterClass = db.model('characterclass',  require('../models/pathfinder/characterClass'),'characterclasses');
var classAbility = db.model('classability',require('../models/pathfinder/classAbility'),'classabilities');
var condition = db.model('condition', require('../models/pathfinder/condition'),'conditions');
var feat = db.model('feat', require('../models/pathfinder/feat'),'feats');
var magicItem = db.model('magicitem', require('../models/pathfinder/magicItem'),'magicitems');
var monster = db.model('monster', require('../models/pathfinder/monster'),'monsters'); 
var mundane = db.model('mundane', require('../models/pathfinder/mundane'),'mundanes');
var power = db.model('power', require('../models/pathfinder/power'),'powers'); 
var race = db.model('race', require('../models/pathfinder/race'),'races');
var racialTrait = db.model('racialtrait',  require('../models/pathfinder/racialtrait'),'racialtraits');

var skill = db.model('skill',  require('../models/pathfinder/skill'),'skills');
var spell = db.model('spell',  require('../models/pathfinder/spell'),'spells');
var specialization = db.model('specialization', require('../models/pathfinder/specialization'),'specializations'); 
var trait = db.model('trait', require('../models/pathfinder/trait'),'traits');
var weapon =  db.model('weapon', require('../models/pathfinder/weapon'),'weapons');
var weaponFeature = db.model('weaponfeature', require('../models/pathfinder/weaponfeature'),'weaponfeatures');
var language = db.model('language',  require('../models/pathfinder/language'),'languages');
var deed = db.model('deed', require('../models/pathfinder/deed'),'deeds'); 
var words = db.model('word', require('../models/pathfinder/words'),'words');
/*
 



*/
//charactersave.insertMany([{"Name":"Ted","AzureId":"12","Data":"userstuff2","UserId":"twit1234","Deleted":false,"DateChanged":Date.now()}]);

router.route('/charactersave/get/:userid')
    .get((req, response) => {
        charactersave.find({ UserId: req.params.userid }, (err, result) => {
            if (err) { console.log("error" + err); }
            else { response.json(result); }
        });
    });

router.route('/charactersave/all/')
    .get((req, response) => {
        charactersave.find((err, result) => {
            if (err) {
                console.log("error" + err);
                response.json(error);
            }
            else { response.json(result); }
        });
    });

router.route('/charactersave/trait/')
    .get((req, response) => {
        trait.find((err, result) => {
            if (err) {
                console.log("error" + err);
                response.json(error);
            }
            else { response.json(result); }
        });
    });

router.route('/charactersave/set/')
    .post((req, response) => {
        //  charactersave.findOneAndUpdate({ UserId: req.params.userid });
        charactersave.findOneAndUpdate(
            { AzureId: req.body.AzureId }, // find a document with that filter
            req.body, // document to insert when nothing was found
            { upsert: true, new: true, runValidators: true }, // options
            function (err, doc) { // callback
                if (err) {
                    // handle error
                } else {
                    // handle document
                }
            });
    },
        (err, result) => {
            if (err) { console.log("error" + err); }
            else { response.json(result); }
        });

//Maps
async function maps() {
    await mapRoute(ammo, 'ammo', 'ammo');
    await mapRoute(armorFeatures, 'armorFeatures', 'ArmorFeatures');
  
    await mapRoute(armor, 'armor', 'armor');
    await mapRoute(archtype, 'archtype', 'archtype');
    await mapRoute(characterClass, 'class', 'CharacterClass');
    await mapRoute(classAbility, 'classAbility', 'ClassAbility');
    await mapRoute(condition, 'condition', 'Conditions');
    await mapRoute(deed, 'deed', 'deed');
    await mapRoute(feat, 'feat', 'Feats');
    await mapRoute(language, 'language', 'language');
    await mapRoute(weapon, 'weapon', 'weapon');
    await mapRoute(weaponFeature, 'weaponfeature', 'weaponfeature');
    await mapRoute(mundane, 'mundane', 'mundane');
    await mapRoute(monster, 'monster', 'monster');
    await mapRoute(magicItem, 'magicItem', 'MagicItems');
    await mapRoute(power, 'power', 'Powers');
    await mapRoute(racialTrait, 'racialtrait', 'racialtrait');
    await mapRoute(race, 'race', 'race');
    await mapRoute(skill, 'skill', 'Skills');
    await mapRoute(spell, 'spell', 'Spells');
    await mapRoute(specialization, 'specialization', 'specialization');
    await mapRoute(trait, 'trait', 'Traits');
    await mapRoute(words, 'word', 'words');

    console.log("Ready");
}
async function seed(name, file, database) {
    console.log("\n *START Seed* " + name + "* \n");
    try {
        var count = await database.collection.countDocuments();
        console.log("COUNT:" + count);
        if (isNaN(count) || count === 0) {
            database.collection.insertMany(json, function (err, r) {
                if (err != null) {
                    console.log(err);
                } 
            }); 
        }
        else {
            console.log("*ABORT Seed " + name + "* , collection was not empty.");
            return;
        }
    } catch (ex) {
        console.log(ex);
    }

   
    console.log("\n *Read File " + name + "* \n");
    var content = fs.readFileSync(file, 'utf8').toString();

    var json = JSON.parse(content);
    console.log("\n *Start Insert  " + name + "* \n");
    database.collection.insertMany(json, function (err, r) {
        if (err != null) {
            console.log(err);
        }

    });
    console.log("\n *END Import " + name + "* \n");
};

function getRawFileData(file) {
    var filename = './seeds/pathfinder/' + file + '.js'; 
    var content = fs.readFileSync(filename, 'utf8').toString();
    var json = JSON.parse(content);
    return json;
}

async function mapRoute(db, name, file) {
    console.log("Start mapping " + name);
    if(runSeed){
        await seed(name, './seeds/pathfinder/' + file + '.js', db);
    }
    

    router.route('/' + name + '/raw/')
        .get((req, response) => {  
         response.json(getRawFileData(file)); 
            
        });

    router.route('/' + name + '/named/:name')
        .get((req, response) => {
            db.find({ Name: req.params.name }, (err, result) => {
                if (err) { console.log("error" + err); }
                else { response.json(result); }
            });
        });

    router.route('/' + name + '/all/').get((req, response) => {
        db.find((err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                response.json(result);
            }
        });
    });

    router.route('/' + name + '/:skip/:count').get((req, response) => {

        var limit = parseInt(req.params.count);
        var skip = parseInt(req.params.skip);
        db.find().skip(skip).limit(limit).exec((err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                response.json(result);
            }
        });
    });
    console.log("Done mapping " + name);
}
module.exports = {
    router: router
}


