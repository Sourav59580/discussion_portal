const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();

//db config 
const db = require("./config/db").mongoURI;

//connect to Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err) =>{
    console.log(err);
})

//static file
app.use(express.static('public'));

//EJS (view engine set)
app.use(expressLayouts);
app.set("view engine","ejs");

// express version
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Routes
app.use("/",require("./routes/index"));

// server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})
