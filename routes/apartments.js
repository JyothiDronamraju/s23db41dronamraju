var express = require('express');
const apartment_controlers= require('../controllers/apartment');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('apartment', { title: 'Search Results - Apartments' });
// });
/* GET costumes */
router.get('/', apartment_controlers.apartment_view_all_Page );
module.exports = router;


