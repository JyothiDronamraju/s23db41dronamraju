// apartments.js
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  // Render the 'apartments' view
  res.render('apartments');
});

module.exports = router;
