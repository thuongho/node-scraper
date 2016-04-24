var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8080;

var url = 'https://www.pinterest.com/pin/356980707943937271/';

// the old pinterest had <meta itemprop="image" content="https..."
// request(url, function(err, resp, body){
  
//   // obj to return in console
//   var pin = {};
//   var $ = cheerio.load(body);

//   var img = $("meta[itemprop = 'image']").get(1);
//   var $img = $(img).attr('content');
//   var $desc = $("meta[itemprop='text']").attr('content');

//   var pin = {
//     img: $img,
//     desc: $desc,
//     url: url
//   }
//   console.log('scraped: ', pin);
// });
request(url, function(err, resp, body) {
  var $ = cheerio.load(body);

  var img = $('.heightContainer img');
  // console.log('img', img);
  var $img = $(img).attr('src');
  // console.log('$img', $img);
  var desc = $('.pinDesc');
  console.log('desc', desc);
  var descText = desc.text();

  // pin.img = $img;
  // pin.url = url;
  var pin = {
    img: $img,
    desc: descText,
    url: url
  };

  console.log('scraped', pin);
});

app.listen(port, function(){
  console.log('running server on port ' + port);
});