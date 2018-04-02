// Colletta Exercise 6.3

var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');


var mongoDB = "mongodb://<dbuser>:<dbpassword>@ds117759.mlab.com:17759/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(3030, function(){
    console.log('Application started and listening on port 3030');
});