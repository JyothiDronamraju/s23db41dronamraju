// apartments.js
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('apartments', { title: 'Search Results - Apartments' });
});
module.exports = router;
