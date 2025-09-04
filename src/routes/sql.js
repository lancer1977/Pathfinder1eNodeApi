const sql = require('mssql')
var express = require('express');
var router = express.Router(); 
var dbConfig = {
    server: "polyhydragames.asuscomm.com",
    database: "master",
    user:"sa",
    password:"biz$314$!35##!21",
    port: 1433,
    options: {
        trustedConnection: true,
        encrypt:true
    }
};

sql.connect(dbConfig); 
router.route('/')
.get(async (req, response) => {  
  console.log("in route'");
 
      try { 
        const result = await sql.query`select * from mytable where id = ${value}`;
        console.dir(result);
        response.json(result);

    } catch (err) {
        console.log(err);
        // ... error checks
    }

});

module.exports = router;