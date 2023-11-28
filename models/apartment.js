var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('apartment', { title: 'Search Results - Apartments' });
});

module.exports = router;


const mongoose = require("mongoose")
const apartmentSchema = mongoose.Schema({
apartment_name: String,
location: String,
rent: Number
})
module.exports = mongoose.model("Apartment",apartmentSchema)
