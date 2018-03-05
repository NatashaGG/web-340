var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

//Tell express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {
        message: "Welcome to the Colletta's homepage!",
        firstName: "Billy",
        lastName: "Bob Joe",
        address: "billybobjoe@gmail.com"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});
