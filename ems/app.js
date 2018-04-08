// Colletta's App.js
// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var logger = require('morgan');
var app = express();

// mLab connection
var mongoDB = "mongodb://admin:password@ds117759.mlab.com:17759/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("short"));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (request, response) {
    response.render("index", {
        title: "Employees"
    });
});

// model
var employee = new Employee({
    firstName: "John",
    lastName: "Doe"
});

http.createServer(app).listen(8080, function(){
    console.log("Applications has started and is listening on port 8080!");
});