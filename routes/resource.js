var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var apartment_controller = require('../controllers/apartment');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Apartment ROUTES ///
// POST request for creating a Apartment.
router.post('/apartments', apartment_controller.apartment_create_post);
// DELETE request to delete Apartment.
router.delete('/apartments/:id', apartment_controller.apartment_delete);
// PUT request to update Apartment.
router.put('/apartments/:id', apartment_controller.apartment_update_put);
// GET request for one Apartment.
router.get('/apartments/:id', partment_controller.apartment_detail);
// GET request for list of all Apartment items.
router.get('/apartments', apartment_controller.apartment_list);
module.exports = router;