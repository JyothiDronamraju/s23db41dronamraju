var express = require('express');
const apartment_controlers = require('../controllers/apartment');
var router = express.Router();
const secured = (req,res,next) =>{if (req.user){return next();}res.redirect("/login");}

// GET Apartments
router.get('/', apartment_controlers.apartment_view_all_Page);

// GET request for one apartment.
router.get('/apartments/:id', apartment_controlers.apartment_detail);

/* GET detail apartment page */
router.get('/detail', apartment_controlers.apartment_view_one_Page);

/* GET create apartment page */
router.get('/create', apartment_controlers.apartment_create_Page);

/* GET update apartment page */
router.get('/update',secured, apartment_controlers.apartment_update_Page);

/* GET delete apartment page */
router.get('/delete', apartment_controlers.apartment_delete_Page);

module.exports = router;
