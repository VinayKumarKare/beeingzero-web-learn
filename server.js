const express = require('express');

const app = express();
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/frontend"));

const courselib = require('./backend/lib/courselib');
var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://Kvk_New:"+"Kvk123"+"@cluster0.b6h6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected',function(){
    console.log("Database connected");
});

app.get("/crud", function(req, res){
    let filepath = __dirname+"/frontend/html/crud.html";
    res.sendFile(filepath);
})

app.get('/api/courses', courselib.getallcourses);
app.post('/api/courses', courselib.createcourse);


 
app.get("/", function(req, res){
    res.send("Welcome to Vinay Kumar Kare's Basic Site");
})

app.get('/resume',function(req, res){

    let indexFilePath = __dirname +"/frontend/html/resume.html";
    res.sendFile(indexFilePath); 
});

app.get('/google',function(req, res){

    let indexFilePath = __dirname +"/frontend/html/googleReplica.html";
    res.sendFile(indexFilePath); 
});

app.get('/colorpicker',function(req, res){

    let indexFilePath = __dirname +"/frontend/html/colorPicker.html";
    res.sendFile(indexFilePath); 
});

app.get('/login',function(req, res){

    let indexFilePath = __dirname +"/frontend/html/loginForm.html";
    res.sendFile(indexFilePath); 
});

app.get('/register',function(req, res){

    let indexFilePath = __dirname +"/frontend/html/registrationForm.html";
    res.sendFile(indexFilePath); 
});

// app.get("/resume", function(req, res){
//     res.send("Welcome to my Resume page");
// })

app.get("/home", function(req, res){
    res.send("Welcome to my Home page");
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
