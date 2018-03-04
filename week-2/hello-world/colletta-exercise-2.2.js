var express = require('express');
var http = require('http');


var app = express();

app.use(function(request, response){
    console.log('In comes a request to: %s', request.url);

    response.end('Hello World\n');
});


http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});