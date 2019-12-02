
var express = require('express'); 
var router = express.Router(); 
var country = require('countryjs');


router.get('/info/:state/', function(req, res, next){ //Rendiamo lo stato un parametro
    console.log("ciao");
 res.send(req.params);
})

module.exports = router; 
