var express = require('express');
var path = require('path');
var swig = require('swig');
var request = require('request');
var cheerio = require('cheerio');
var _ = require('lodash');
var bodyParser = require('body-parser');
var port = 8100;

var app = express();

// set swig as templating engine
app.engine('html', swig.renderFile);

// set views folder as entry point to display html pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// ----- end swig -----

// parse json sending receiving from server to frontend
app.use(bodyParser.json());
// look in public folder to display css, img, or any other items in there
app.use(express.static(path.join(__dirname, 'public')));

// route
app.get('/', function(req, res){
  var url = 'https://jobs.lever.co/shopco/bf2b584e-8c74-4b7d-848f-831f8fa7c70f?lever-source=indeed';
  request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var companyName = $('.posting-headline h2');
    var companyNameText = companyName.text();

    var jobTitle = $('.posting-headline h2');
    var jobTitleText = jobTitle.text();

    var location = $('.medium-category-label');
    var locationText = location.text();

    var summary = $('.section div:first-child').first();
    var summaryText = summary.text();

    var details = {
      companyName: companyNameText,
      jobTitle: jobTitleText,
      location: locationText,
      summary: summaryText,
      url: url
    };

    // need to change obj to array for some reason
    // lodash change to array
    var detailsArray = _(details).toArray();

    console.log(detailsArray);
    return res.render('index', {
      jobInfo: detailsArray
    });
  });
  

  // express will look into views folder for file index
  // views b/c we set views as directory
  // res.render('index');
});

// start server
app.listen(port, function(){
  console.log('running server on port ' + port);
});