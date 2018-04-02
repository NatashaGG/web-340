// Colletta's App.js
// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (request, response) {
    response.render("index", {
        title: "Employees"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Applications has started and is listening on port 8080!");
});