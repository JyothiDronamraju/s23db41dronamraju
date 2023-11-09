
// apartment.js
const express = require('express');
const router = express.Router();

// GET request for displaying the apartment search results page
router.get('/', function(req, res, next) {
  res.render('apartment', { title: 'Search Results - Apartments' });
});

module.exports = router;
