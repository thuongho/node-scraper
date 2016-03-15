var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// reference external route
var routes = require('./routes');

var port = 8100;
mongoose.connect('mongodb://localhost/pintScraper');

var app = express();

// setting views path as the views folder
app.set('views', path.join(__dirname, 'views'));
// view engine to html using ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// body-parser to use and parse json obj
app.use(bodyParser.json());
// in order to use public folder and all client side objects in that folder
app.use(express.static(path.join(__dirname, 'public')));

// use routes at the end before launching server
app.use('/api', routes);

app.listen(port, function(){
  console.log('running server on port ' + port);
});