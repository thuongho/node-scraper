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
  // express will look into views folder for file index
  // views b/c we set views as directory
  res.render('index');
});

// start server
app.listen(port, function(){
  console.log('running server on port ' + port);
});