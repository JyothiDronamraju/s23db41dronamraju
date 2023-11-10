// apartments.js
const express = require('express');
const apartment_controllers = require('../controllers/apartment');
const router = express.Router();

// List all apartments
router.get('/', apartment_controllers.apartment_list);

// Retrieve details of a specific apartment
router.get('/:id', apartment_controllers.apartment_detail);

// Update details of a specific apartment (PUT request)
router.put('/:id', apartment_controllers.apartment_update_put);

// Create a new apartment (POST request)
router.post('/', apartment_controllers.apartment_create_post);

module.exports = router;
