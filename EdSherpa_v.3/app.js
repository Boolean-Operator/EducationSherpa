// app.js

let express = require("express");
let request = require("request");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");




app.get("/", function(req, res){
   res.render("home"); 
   console.log("Home Page hit");
});

app.get("/:page", function(req, res){
   var page = req.params.page;
   res.render(page); 
   console.log(req.params);
   console.log("Request for the " + page + " page has been recieved.");

});


app.get("*", function(req, res) {
    res.send("I'm sorry Dave, I'm afraid I can't do that.")
});




// Listen for PORT IP address
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Hello, Dave.  I have started the server for you ... ");
});

// app.listen(3000, function() {
//     console.log("Hello, Dave.  I have started the server for you ... ");
// });