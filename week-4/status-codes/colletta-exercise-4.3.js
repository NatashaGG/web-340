var express = require("express");
var http = require("http");
var app = express();

app.get("/not-found", function(req, res) {
    res.status(404);
    res.json({
        error: "Site not available."
    })
});

app.get("/ok", function(req, res) {
    res.status(200);
    res.json({
        message: "Site is up and running."
    })
});

app.get("/not-implemented", function(req, res) {
    res.status(501);
    res.json({
        error: "Site is down for maintanence."
    })
});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");
});