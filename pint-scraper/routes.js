var express = require('express');
var router = express.Router();

router.get('/test', function(req, res){
  res.send('hello from api/test');
});

module.exports = router;