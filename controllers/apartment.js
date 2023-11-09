var Apartment = require("../models/apartmentSchema");

// List of all Apartments
exports.apartment_list = async function (req, res) {
    try {
        theApartments = await Apartment.find({}, 'apartment_name location rent -_id');
        res.send(theApartments);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// For a specific Apartment
exports.apartment_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartments detail: ' + req.params.id);
};

// Handle Apartment create on POST
exports.apartment_create_post = async function (req, res) {
    console.log(req.body);
    let document = new Apartment();
    document.apartment_name = req.body.apartment_name;
    document.location = req.body.location;
    document.rent = req.body.rent;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Apartment delete form on DELETE
exports.apartment_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartments delete DELETE ' + req.params.id);
};

// Handle Apartment update form on PUT
exports.apartment_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartments update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.apartment_view_all_Page = async function (req, res) {
    try {
        let theApartments = await Apartment.find();
        res.render('apartments', { title: 'Apartment Search Results', results: theApartments });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
