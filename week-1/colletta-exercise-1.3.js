/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 24 Feb 2018
; Modified By: Natasha Colletta
; Description: creates a url variable to be
; parsed out into sections.
;===========================================
*/ 
var url = require('url');

var parsedURL = url.parse('https://www.reddit.com/subreddit?cats');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);