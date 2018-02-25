var url = require('url');

var parsedURL = url.parse('https://www.reddit.com/subreddit?cats');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);