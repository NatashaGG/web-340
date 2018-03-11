var express = require('express');

var http = require('http');

var path = require('path');

var logger = require('morgan');

var app = express();

// Tell express the views are in the 'views' directory
app.set('views', path.resolve(__dirname, 'views'));

//Tell Express to use the EJS view engine
app.set('view engine', 'ejs');

app.get(logger('dev'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Welcome to the Collettas Morgan Logger Example!'
    });
});

http.createServer(app).listen(8080, function() {
    console.log('Application started  and listening on port %s', 8080);
});