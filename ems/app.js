// Colletta's App.js
// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose = require("mongoose");
var Fruit = require("./models/fruit");

// database
var mongoDB = "mongodb://admin:P@ssw0rd@ds117759.mlab.com:17759/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//setup csrf protection
var csrfProtection = csrf({cookie: true});

//initialize the espress application
var app = express();

//use statements
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function(req, res, next){
    var token = request.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});
app.use(logger("short"));

//set statements
app.set("views".path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

//route requests
app.get("/", function(req, res){
    res.render("index", {
        title: "Home page"
    });
});

app.get("/new", function(req, res){
    res.render("new", {
        title: "Employee records"
    });
});

app.post("/process", function(req, res){
    //console.log(request.body.txtName);
    if (!request.body.txtName){
        res.status(400).send("Entries must have a name");
        return;
    }

    // get the request's form data
   var employeeName = request.body.txtName;
   console.log(employeeName);

   // create a fruit model
   var employee = new Employee({
       fullName: employeeName
   });

   // save
   employee.save(function (error) {
       if (error) throw error;

       console.log(employeeName + " saved successfully!");
   });

   response.redirect("/list");
})

app.get("/list", function(req, res) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;

       response.render("list", {
           title: "Employee Records",
           employees: employees
       });
    });
});

app.get("/view/:queryName", function (req, res) {
    var queryName = request.params.queryName;

    Employee.find({'name': queryName}, function(error, employees) {
        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {
            res.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }

    });
});

http.createServer(app).listen(8080, function(){
    console.log("Applications has started and is listening on port 8080!");
});