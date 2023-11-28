var Apartment = require('../models/apartment');
// List of all Costumes
exports.apartment_list = async function (req, res) {
    try {
       var theApartments = await Apartment.find();
        res.send(theApartments);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.apartment_view_all_Page = async function (req, res) {
    try {
        var theApartments = await Apartment.find();
        res.render('apartments', { title: 'Apartment Search Results', results: theApartments });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// for a specific Apartment.
exports.apartment_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        let result = await Apartment.findById(req.params.id);

        if (!result) {
            res.status(404).send(`{"error": document for id ${req.params.id} not found`);
        } else {
            res.send(result);
        }
    } catch (error) {
        res.status(500).send(`{"error": ${error.message}`);
    }
};
// Handle Apartment create on POST.
exports.apartment_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Apartment();
    document.apartment_name = req.body.apartment_name;
    document.location = req.body.location;
    document.rent = req.body.rent;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Apartment delete form on DELETE.
exports.apartment_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Apartment.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.apartment_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Apartment.findById( req.query.id)
    res.render('apartmentdetail',
    { title: 'Apartment Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a Apartment.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.apartment_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('apartmentcreate', { title: 'Apartment Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a apartment.
// query provides the id
exports.apartment_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Apartment.findById(req.query.id)
    res.render('apartmentupdate', { title: 'Apartment Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };   
// Handle Apartment update form on PUT.
exports.apartment_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Apartment.findById(req.params.id)
        // Do updates of properties
        if (req.body.apartment_name)
            toUpdate.apartment_name = req.body.apartment_name;
        if (req.body.location)
            toUpdate.location = req.body.location;
        if (req.body.rent)
            toUpdate.rent = req.rent.price;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};
//Handle a delete one view with id from query
exports.apartment_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Apartment.findById(req.query.id)
res.render('apartmentdelete', { title: 'Apartment Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


