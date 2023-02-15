/// Adi Gredi 316063353, Chen Ravuna 209190289, Orel Sonego 318253127
//addcost route
var express = require('express');
var router = express.Router();
//taking the schema from mongoose cost in database.js
const {Cost,Report} = require('../DataBase');

/* GET users listing. */
router.post('/', async function(req, res, next)
{
    //creating new cost
        await Cost.create(req.body, (err) => {
           console.log('addcost worked');
            if (err) {
           console.log("ERROR OCCURED");
            }
        })
//checking if there is report to update it later.
            const CheckIfThereIsReport = await Report.findOne({
                user_id: req.body.user_id,
                year: req.body.year,
                month: req.body.month,
            });
//update the report if there is one.
            if (CheckIfThereIsReport === true) {
                CheckIfThereIsReport.report[req.body.category].push({
                    day: req.body.day,
                    description: req.body.description,
                    sum: req.body.sum,
                });
                await Report.updateOne(
                    {
                        user_id: req.body.user_id,
                        year: req.body.year,
                        month: req.body.month
                    },
                    { report: CheckIfThereIsReport.report }
                );
            }
//sending message that everything is ok.
           res.send("Data has been added Successfully")

});

module.exports = router;
