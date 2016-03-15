var express = require('express');
var router = express.Router();
// include model
var Item = require('./model/Item.model');

router.get('/test', function(req, res){
  res.send('hello from api/test');
});

module.exports = router;