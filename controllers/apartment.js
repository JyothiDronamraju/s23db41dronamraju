const { Costume } = require('../models/costume');

// Seeding the collection if needed on server start
async function recreateDB() {
  try {
    // Delete everything
    await Costume.deleteMany();

    const instance1 = new Costume({
      costume_type: 'ghost',
      size: 'large',
      cost: 15.4,
    });

    await instance1.save();
    console.log('First object saved');
  } catch (err) {
    console.error(err);
  }
}

const reseed = true;
if (reseed) {
  recreateDB();
}
// Handle creating a new costume on POST
exports.costume_create_post = function (req, res) {
    // Your implementation logic for creating a new costume
    res.send('NOT IMPLEMENTED: Costume create POST');
};

// Handle deleting a costume on DELETE
exports.costume_delete = function (req, res) {
    // Your implementation logic for deleting a costume
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

// Handle updating a costume on PUT
exports.costume_update_put = function (req, res) {
    // Your implementation logic for updating a costume
    res.send('NOT IMPLEMENTED: Costume update PUT ' + req.params.id);
};

exports.costume_update_get = function (req, res) {
    // Your implementation logic for updating a costume
    res.send('NOT IMPLEMENTED: Costume update GET ' + req.params.id);
};
  
// API routes for costumes
exports.api_costume_list = async function (req, res) {
  try {
    const allCostumes = await Costume.find();
    res.json(allCostumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.api_costume_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

exports.api_costume_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume create POST');
};

exports.api_costume_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

exports.api_costume_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume update PUT ' + req.params.id);
};

// View-related routes for costumes
exports.view_costume_list = async function (req, res) {
  try {
    const allCostumes = await Costume.find();
    res.render('costume', { title: 'Costume List', costumes: allCostumes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.view_costume_search_results = async function (req, res) {
  try {
    const theCostumes = await Costume.find();
    res.render('costume', { title: 'Costume Search Results', results: theCostumes });
  } catch (err) {
    res.status(500).send(`{"error": "${err.message}"}`);
  }
};
exports.costume_list = async function (req, res) {
    try {
        const allCostumes = await Costume.find();
        res.json(allCostumes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
