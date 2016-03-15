var express = require('express');
var router = express.Router();
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
// include model
var Item = require('./model/Item.model');

// router.get('/test', function(req, res){
//   res.send('hello from api/test');
// });

router.post('/scrape', function(req, res){
  var url = req.body.url;
  // console.log('req', req);
  console.log('url', url);

  if (url.indexOf("pinterest") > -1) {
    request(url, function(error, resp, body){
      console.log(url);

      if (error) {
        console.log('error scrapping');
      }

      if (!error) {
        var pin = {};
        var $ = cheerio.load(body);

        // var img = $("meta[itemprop = 'image']").get(1);
        var img = $('.heightContainer img');
        // var $img = $(img).attr('content');
        var $img = $(img).attr('src');
        // var $desc = $("meta[itemprop = 'text']").attr('content');
        // var desc = $('.pinDesc');
        var $desc = $(img).attr('alt');

        var pin = {
          img: $img,
          desc: $desc,
          url: url
        };
        console.log('scraped: ', pin);
        // send data back as json
        res.json(pin);
      }
    });
  } else {
    console.log('cannot locate scraper');
  }
});

module.exports = router;