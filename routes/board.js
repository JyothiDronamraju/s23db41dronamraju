var express = require('express');
var router = express.Router();

// Import the computeCellValue function
function computeCellValue(i, j, rows, cols) {
    if (i === j) {
      return 1;
    } else if (i === j - 1) {
      return 2;
    } else if (i === j + 1) {
      return i;
    } else {
      return 0;
    }
  }
  

// Define a route for '/board' (without any query parameters)
router.get('/', function(req, res, next) {
  res.render('board', { title: 'Board Display', query: null, computeCellValue: computeCellValue });
});

// Define a route for '/board/gridbuild' (with query parameters)
router.get('/gridbuild', function(req, res, next) {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('board', { title: 'Board Display', query: query, computeCellValue: computeCellValue });
});

module.exports = router;
