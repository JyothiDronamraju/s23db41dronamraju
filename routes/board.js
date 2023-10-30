var express = require('express');
var router = express.Router();

// Define a route for '/board' (without any query parameters)
router.get('/', function(req, res, next) {
  res.render('board', { title: 'Board Display', query: null }); // Pass null for query
});

// Define a route for '/board/gridbuild' (with query parameters)
router.get('/gridbuild', function(req, res, next) {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('board', { title: 'Board Display', query: query });
});

module.exports = router;
