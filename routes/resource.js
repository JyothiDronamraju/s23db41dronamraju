var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var apartment_controller = require('../controllers/apartment');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/apartments', apartment_controller.apartment_create_post);
// DELETE request to delete Costume.
router.delete('/apartments/:id', apartment_controller.apartment_delete);
// PUT request to update Costume.
router.put('/apartments/:id', apartment_controller.apartment_update_put);
// GET request for one Costume.
router.get('/apartments/:id', apartment_controller.apartment_detail);
// GET request for list of all Costume items.
router.get('/apartments', apartment_controller.apartment_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"apartment", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};