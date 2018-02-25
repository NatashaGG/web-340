/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 25 Feb 2018
; Modified By: Natasha Colletta
; Description: Recreating a Node.js Server
; with our own message
;===========================================
*/ 
// Variable declaration:
var http = require("http");

function processRequest(req, res){
    var body = "Hello Colletta's World";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);