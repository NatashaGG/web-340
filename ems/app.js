// Colletta's App.js
// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var logger = require('morgan');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-oarser');
var csrf = require('csurf');
var app = express();

//setup csrf protection
var csrfProtection = csrf({cookie:true});

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

// initialize the express application
var app = express();

//use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next){
    var token = requrest.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//routing
app.get("/", function (req, res) {
    res.render("index", {
        title: "Employees"
    });
});
app.post('/process', function(req, res){
    console.log(req.body.txtName);
    res.redirect('/');
});

// model
var employee = new Employee({
    firstName: "John",
    lastName: "Doe"
});

//create and start the Node server
http.createServer(app).listen(8080, function(){
    console.log("Applications has started and is listening on port 8080!");
});