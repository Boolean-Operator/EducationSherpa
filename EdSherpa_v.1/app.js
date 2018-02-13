// app.js

var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Home page"); 
   console.log("Home Page hit")
});

app.get("/:page", function(req, res){
   var page = req.params.page;
   res.send("Welcome to the " + page + " page."); 
   console.log(req.params);
   console.log("Request for the " + page + " page has been recieved.");
//   res.send("Navigating School Choice Process"); 
});

// app.get("/feeder", function(req, res){
//   res.send("Finding your Feeder School Page,  Input your Address and confirm on Google Maps API"); 
//   console.log("Request at finding feeder school page.");
   
// });

// app.get("/school", function(req, res){
//   res.send("Finding a school that matches resources with you students needs."); 
//   console.log("Request at finding school process.");
// });


app.get("*", function(req, res) {
    res.send("I'm sorry Dave, I'm afraid I can't do that.")
});




// Listen for PORT IP address
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Hello, Dave.  I have started the server for you ... ");
});