var express = require('express');
var router = express.Router();

/* GET apartments page. */
router.get('/', function(req, res, next) {
  console.log('Apartments route hit'); // Add this line
  res.render('apartments', { title: 'Search Results - Apartments' });
});

module.exports = router;
