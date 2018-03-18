var express = require("express");
var http = require("http");
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.get("/customer/:id", function(req, res){
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: "Chris",
        lastName: "Doe",
        cusId: id
    });
});

http.createServer(app).listen.listen(3000, function(){
    console.log("Application started on port 3000");
});