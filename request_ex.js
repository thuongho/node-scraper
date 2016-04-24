var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

// EXAMPLE 1
// var url = 'http://google.com';
// request(url, function(err, resp, body) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(body);
//   }
// });

// EXAMPLE 2
// download and save as a file to a folder
// need file extension

// where to save using FS
// var destination = fs.createWriteStream('./downloads/google.html');
// var url = 'http://google.com';

// // request allows to chain methods after receiving response
// request(url)
//   // .pipe(method)
//   .pipe(destination);

// EXAMPLE 3
var destination = fs.createWriteStream('./downloads/google2.html');
var url = 'http://google.com';

// request(url)
//   .pipe(destination)
//   .on('finish', function() {
//     console.log('done');
//   })
//   .on('error', function() {
//     console.log(err);
//   });

// alternative without chain
request(url)
  .pipe(destination);

destination.on('finish', function(){
  console.log('all done');
});

// get app running
app.listen(port);
console.log('server is listening on ' + port);