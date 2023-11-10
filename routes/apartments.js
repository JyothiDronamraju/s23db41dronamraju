// apartments.js
const express = require('express');
const apartment_controllers = require('../controllers/apartment');
const router = express.Router();

// Define the route to retrieve apartment data
router.get('/', apartment_controllers.apartment_view_all_Page);
router.get('/:id', apartment_controllers.apartment_detail);


module.exports = router;
