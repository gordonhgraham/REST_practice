var express = require('express');
var router = express.Router();

var styles = require('./styles');
router.use('/styles', styles);

router.get('/', function(req, res, next) {
  res.send('this is the homepage');
});


module.exports = router;
