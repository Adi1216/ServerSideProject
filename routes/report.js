/// Adi Gredi 316063353, Chen Ravuna 209190289, Orel Sonego 318253127
//report route
var express = require('express');
var router = express.Router();
var {Cost,Report} = require('../DataBase');
//data constructor for details in the report (day in month, the description, and the sum)
/*
function Data(category,day, description, sum)
{
    this.category = category;
    this.day = day;
    this.description = description;
    this.sum = sum;
}

 */



/* GET users listing. */
router.get('/',  async function(req, res, next) {
//checking if there is already report in report schema
    const ComputedPatternReport = await Report.findOne({
        user_id: req.query.user_id,
        year: req.query.year,
        month: req.query.month,
    });
//if there is report already, sending it right away.
    if (ComputedPatternReport === true) {
        res.status(200).json(checkReport.report);
    }

//if there is no report in the report schema, checking in cost schema for any expense with this date.
    const expenses = await Cost.find({
        user_id: req.query.user_id,
        year: req.query.year,
        month: req.query.month,
    });

    console.log(expenses);
//checking if the array is empty, if it's not empty, making new report.
    if (expenses.length == 0) res.send(`There is No such Expense!`);
    else {
        const newReport = new Report({
            user_id: req.query.user_id,
            month: req.query.month,
            year: req.query.year,
        });
        for(let expense of expenses) {
            newReport.report[expense.category].push({
                day: expense.day,
                description: expense.description,
                sum: expense.sum
            });
        }

//saving the report to the database
        newReport.save(function (e, data) {
            res.status(200).json(data.report);
        });
    }
});

module.exports = router;


// users.find({year : 1990 , month : 1500}
