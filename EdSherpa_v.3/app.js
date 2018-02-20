// app.js

var express = require("express");
var request = require("request");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

request("https://maps.googleapis.com/maps/api/js?key=AIzaSyBoghMfd2fobTrImQGjCHOqNk8oDr2QOLE&libraries=places&callback=initMap", function (error, response, body) {
  console.log('error: ', error);
  console.log('statusCode: ', response);
  console.log('body: ', body);
  });

app.get("/", function(req, res){
   res.render("home"); 
   console.log("Home Page hit");
});

app.get("/:page", function(req, res){
   var page = req.params.page;
   res.render(page); 
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