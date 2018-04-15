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
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

// mLab connection
var mongoDB = "mongodb://admin:password@ds117759.mlab.com:17759/ems";
mongoose.connect(mongoDB, {
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//setup csrf protection
var csrfProtection = csrf({cookie:true});

// initialize the express application
var app = express();

//use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function(req, res, next) {
    var token = requrest.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

//routing
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home Page"
    });
});

app.get('/new', function (req, res) {
    res.render('new', {
        title: 'New Employee'
    });
});

app.post('/process', function(req, res) {
     // console.log(request.body.txtName);
    if (!request.body.txtName) {
        response.status(400).send("Entries must have a name");
        return;
    }

    // get the request's form data
    var employeeSchema = request.body.txtName;
    console.log(employeeSchema);
    
    // create a employee model
    var employee = new Employee({
        name: employeeSchema
    });
    
    // save
    employee.save(function (error) {
        if (error) throw error;
        
        console.log(employeeSchema + " saved successfully!");
    });
    
    res.redirect('/');
});

app.get("/list", function(req, res) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;

        response.render("list", {
           title: "Employee List",
           employees: employees
        });
    });
});

app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;

    Employee.find({'name': queryName}, function(error, employees) {
        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }
    });
});

//create and start the Node server
http.createServer(app).listen(8080, function(){
    console.log("Applications has started and is listening on port 8080!");
});