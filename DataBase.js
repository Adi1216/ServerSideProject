/// Adi Gredi 316063353, Chen Ravuna 209190289, Orel Sonego 318253127
//database.js
const mongoose = require('mongoose');
//connecting to mongoDB atlas
mongoose.connect('mongodb+srv://adi:9wZ2E4j2dcV!aJM@cluster0.wawk0lj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.log('Cannot Connect to mongoose', err);
    })
//creating the user schema (id,firstname,lastname,birthday)
const userSchema = mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    birthday: Date
});
const User = mongoose.model('User', userSchema);

/* // creating the fake user accroding to the document.
const user = new User({
    id: '123',
    first_name : 'Moshe',
    last_name : 'Israeli',
    birthday : new Date(1990,1,10),
});

user.save();
*/
//creating the cost schema according to the project document rules
const costSchema = mongoose.Schema({
    user_id: String,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    category: {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other']
    },
    sum: Number
});

const reportSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    report: {
        type: JSON,
        default: {
            food: [],
            housing: [],
            health: [],
            sport: [],
            education: [],
            transportation: [],
            other: [],
        },
    },


});

const Report = mongoose.model('Report', reportSchema);



const Cost = mongoose.model('Cost', costSchema);
//export the cost model to use it later when needed.
module.exports = {Cost,Report,User};