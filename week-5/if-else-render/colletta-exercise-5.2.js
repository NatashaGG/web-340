/* Natasha Colletta
;  Exercise 5.2 */
var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var f = [
  "Banana",
  "Blueberry",
  "Pineapple",
  "Mango"
];

app.get("/", function(req, res) {
    res.render("index", {
        fruits: f
    })
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});