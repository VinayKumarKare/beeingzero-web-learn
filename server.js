const express = require('express');
 
const app = express();

app.use(express.static(__dirname+"/frontend"));
 
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
