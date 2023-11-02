
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('nwclass', { title: 'Search Results - Apartments' });
});

module.exports = router;