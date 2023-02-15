/// Adi Gredi 316063353, Chen Ravuna 209190289, Orel Sonego 318253127
//users route

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users report');
});

module.exports = router;
