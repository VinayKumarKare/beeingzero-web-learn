const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.send("Welcome to Vinay Kumar Kare's Basic Site");
})

app.get('/resume',function(req, res){

    let indexFilePath = _dirname +"/resume.html";
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
