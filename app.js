let express = require("express");
let request = require("request");
let app = express();

const port = process.env.PORT || 3000;

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

app.get('/favicon.ico', (req, res) => res.status(204));

// Listen for PORT IP address
app.listen(port, function() {
    console.log(`Hello, Dave.  I have started the server for you on port ${port}... `);
});

