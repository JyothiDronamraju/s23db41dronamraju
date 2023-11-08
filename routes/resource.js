var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costumeController'); // Corrected the controller name

/// API ROUTE ///
router.get('/', api_controller.api);

/// COSTUME ROUTES ///

router.post('/costume', costume_controller.costume_create_post);
router.delete('/costume/:id', costume_controller.costume_delete);
router.put('/costume/:id', costume_controller.costume_update_put);
router.get('/costume/:id', costume_controller.costume_detail);
router.get('/costume', costume_controller.costume_list);

module.exports = router;
