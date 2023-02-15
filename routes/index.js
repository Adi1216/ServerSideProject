/// Adi Gredi 316063353, Chen Ravuna 209190289, Orel Sonego 318253127
//index route
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
