var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

// var url = 'https://kissanime.to/Anime/World-Trigger';
// var url = 'http://waterservices.usgs.gov/nwis/iv/?format=json&bBox=-83.000000,36.500000,-81.000000,38.500000&period=P365D&parameterCd=00010,00060';
var destination = fs.createWriteStream('./downloads/fish.js');
var url = 'http://waterservices.usgs.gov/nwis/iv/?format=json&bBox=-83.000000,36.500000,-81.000000,38.500000&parameterCd=00010,00060';
console.log(url);

// request(url, function(err, resp, body) {
//   console.log('start cheerio');
//   // pass body into cheerio and then parse the data
//   var $ = cheerio.load(body);
//   // var animeTitle = $('.barTitle');
//   // var animeTitleText = animeTitle.text();

//   // var summary = $('.info');
//   // var summaryText = summary.text();

//   // var job = {
//     // animeTitle: animeTitleText,
//     // summary: summaryText
//   // };

//   // console.log(body);
//   destination.write(util.format(body));
//   console.log(err);
// });

request.get(url)
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(destination);

// get app running
app.listen(port);
console.log('server is listening on ' + port);