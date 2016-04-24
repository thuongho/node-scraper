var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = 'https://kissanime.to/Anime/World-Trigger';

request(url, function(err, resp, body) {
  // pass body into cheerio and then parse the data
  var $ = cheerio.load(body);
  var animeTitle = $('.barTitle');
  var animeTitleText = animeTitle.text();

  var summary = $('.info');
  var summaryText = summary.text();

  var job = {
    animeTitle: animeTitleText,
    summary: summaryText
  };

  console.log(job);
});

// get app running
app.listen(port);
console.log('server is listening on ' + port);