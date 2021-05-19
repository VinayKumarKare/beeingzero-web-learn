const mongoose = require('mongoose');
const courselib = require('./backend/lib/courselib');
var connectionString = "mongodb+srv://Kvk_New:"+"Kvk123"+"@cluster0.b6h6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected',function(){
    console.log("Database connected");

    courselib.getallcourses(function(err, coursesArray){
        console.log(coursesArray);
    })

    courselib.createcourse({ courses:'Mean Course 1.0'}, function(err, course){
        console.log(course);
    })
});








