'use strict'
var express = require('express');
var mongoose = require('mongoose'); 
var jstoxml = require( 'jstoxml'); 
var router = express.Router(); 
var db = mongoose.createConnection('mongodb+srv://pflancer:biz!11BIZ@polyhydragames-naorp.azure.mongodb.net/other?retryWrites=true', () => {  }); 
const xmlOptions = {  header: true,  indent: '  ' };
var podcastDefinition =   db.model('podcastdefinition', require('../models/podcastDefinition'),'podcastdefinitions');
 
router.route('/')
.get((req, response) => {  
  console.log("in route'");
var rss =  {
_name: 'rss',
_attrs: {
  'xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
  version: '2.0'
},
_content: {
  channel: [
    {title: 'Epic Fail RPG Group'},
    {        link: 'google.com'      },
    {        language: 'en-us'      },
    {        copyright: 'Copyright 2019'      },
    {        'itunes:subtitle': 'Worst Darn Gamers Around'      },
    {        'itunes:author': 'C. Richmond'      },
    {        'itunes:summary': 'Summary'      },
    {        description: 'A bunch of chodes'      },
    {        'itunes:owner': {'itunes:name': 'Name','itunes:email': 'Email'        }      },
    {        _name: 'itunes:image', _attrs: {href: 'image.jpg'        }      },
    {        _name: 'itunes:category',        _attrs: {text: 'Technology'        },
      _content: {_name: 'itunes:category',_attrs: {  text: 'Gadgets'}         }   }, 
           {        _name: 'itunes:category',        _attrs: {text: 'TV &amp; Film'        }      }, 

  ]
}
} 

podcastDefinition.find((err,result)=>{
if (err) { console.log("error" + err); }
else { 

  result.forEach((item)=>
  {
    console.log(item); // Prints documents one at a time
    rss._content.channel.push(getitem(item));
  });
  
 
 var json = jstoxml.toXML(rss,xmlOptions);
  response.json(json);
 }
});


});

function getitem(definition){
return   {
  item: [
    {
      title: definition.Title
    },
    {
      'itunes:author': definition.Author
    },
    {
      'itunes:subtitle': definition.Subtitle
    },
    {
      'itunes:summary': definition.Summary
    },
    {
      'itunes:image': definition.Image
    },
    {
      _name: definition.Name,
      _attrs: {
url: definition.FileAddress,
length: definition.FileLength,
type:  definition.FileType
      }
    },
    {
      guid: definition.Guid 
    },
    {
      pubDate: definition.PubDate
    },
    {
      'itunes:duration': definition.Duration
    },
    {
      'itunes:keywords': definition.Keywords
    }
  ]
}
} 


 
 
module.exports = router;