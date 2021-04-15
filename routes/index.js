const express = require('express');
const router = express.Router();

//questions model
const Question = require("../models/question"); 

//@type GET
//$route /
//@desc route for get home page
//@access PUBLIC
router.get("/",(req,res)=>{
    Question.find()
        .then(result => {
            console.log(result);
            res.render("home",{ questions: result });
        })
        .catch(err => {
            console.log(err);
        })
})

router.post("/send",(req,res)=>{
    const { subject, question } = req.body;
    const newQuestion = new Question({ subject, question });

    newQuestion.save()
    .then(result => {
        if(result){
        console.log(result);
        res.redirect("/");
        //res.render("home",{success:"Question Saved successfully."})
        }
        else
        console.log("Something went wrong please try again");
    })
    .catch((err)=>{
       console.log(err);
    })


})











module.exports = router;