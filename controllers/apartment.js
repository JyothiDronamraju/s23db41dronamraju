const Apartment = require("../models/apartmentSchema");

// List of all Apartments
exports.apartment_list = async function (req, res) {
    try {
        const theApartments = await Apartment.find({}, 'apartment_name location rent -_id');
        res.send(theApartments);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
};

// Retrieve details of a specific Apartment
exports.apartment_detail = async function (req, res) {
    try {
        const apartment = await Apartment.findById(req.params.id, 'apartment_name location rent -_id');
        if (apartment) {
            res.send(apartment);
        } else {
            res.status(404).send({ error: `Apartment for id ${req.params.id} not found` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
};

// Handle Apartment update form on PUT
exports.apartment_update_put = async function (req, res) {
    console.log(`Update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    console.log('Full request:', req);
    try {
        let toUpdate = await Apartment.findById(req.params.id);

        // Check if the document exists
        if (!toUpdate) {
            return res.status(404).send({ error: `Apartment for id ${req.params.id} not found` });
        }

        // Update properties based on request body
        if (req.body.apartment_name) {
            toUpdate.apartment_name = req.body.apartment_name;
        }
        if (req.body.location) {
            toUpdate.location = req.body.location;
        }
        if (req.body.rent) {
            toUpdate.rent = req.body.rent;
        }

        // Save the changes
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send({ error: `Update for id ${req.params.id} failed: ${err.message}` });
    }
};

// Handle Apartment delete form on DELETE
exports.apartment_delete = async function (req, res) {
    try {
        let result = await Apartment.findByIdAndDelete(req.params.id);
        if (result) {
            res.send({ message: `Apartment with id ${req.params.id} deleted successfully`, result });
        } else {
            res.status(404).send({ error: `Apartment for id ${req.params.id} not found` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: `Delete for id ${req.params.id} failed: ${err.message}` });
    }
};

// Handle Apartment create on POST
exports.apartment_create_post = async function (req, res) {
    console.log(req.body);
    try {
        let document = new Apartment({
            apartment_name: req.body.apartment_name,
            location: req.body.location,
            rent: req.body.rent
        });

        let result = await document.save();
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
};

// Handle a show one view with id specified by query parameter
exports.apartment_view_one_Page = async function (req, res) {
    console.log("Single view for id " + req.params.id);
    try {
        const result = await Apartment.findById(req.params.id);
        res.render('apartmentdetail', { title: 'Apartment Detail', toShow: result });
    } catch (err) {
        res.status(500).send(`{'error': '${err}'}`);
    }
};


// VIEWS
// Handle a show all view
exports.apartment_view_all_Page = async function (req, res) {
    try {
        let theApartments = await Apartment.find();
        res.render('apartments', { title: 'Apartment Search Results', results: theApartments });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
};
