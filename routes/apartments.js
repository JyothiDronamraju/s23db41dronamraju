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

// Handle Apartment delete form on DELETE
router.delete('/:id', apartment_controllers.apartment_delete);

// Display details of a specific apartment (GET request for detail view)
router.get('/detail/:id', apartment_controllers.apartment_view_one_Page);

module.exports = router;
