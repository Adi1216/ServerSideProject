/// Adi Gredi 316063353, Chen Ravuna 209190289, Orel Sonego 318253127
//about route
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json(
        [{name : 'Adi', lastname : 'Gredi', id : '316063353', email : 'adigredi1@gmail.com'},
              {name : 'Chen', lastname : 'Ravuna', id : '209190289', email : 'Chenravuna786@gmail.com'},
              {name : 'Orel', lastname : 'Sonego', id :'318253127', email : 'orelsonego123@gmail.com'}]
    )
});
module.exports = router;
