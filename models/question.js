const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    question : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const Question = mongoose.model("Question",QuestionSchema);
module.exports = Question;