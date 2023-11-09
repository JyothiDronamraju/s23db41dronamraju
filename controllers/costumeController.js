const { Costume, connectToDatabase } = require('../models/Costume');

// Seeding the collection if needed on server start
async function recreateDB() {
  try {
    // Delete everything
    await costume.deleteMany();

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

// List all costumes
exports.costume_list = async function (req, res) {
  try {
    const allCostume = await Costume.find();
    res.json(allCostume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details for a specific costume
exports.costume_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

// Handle creating a new costume on POST
exports.costume_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume create POST');
};

// Handle deleting a costume on DELETE
exports.costume_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

// Handle updating a costume on PUT
exports.costume_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume update PUT ' + req.params.id);
};

// Handle a show all view
exports.costume_view_all_Page = async function (req, res) {
  try {
    const theCostumes = await Costume.find();
    res.render('costume', { title: 'Costume Search Results', results: theCostumes });
  } catch (err) {
    res.status(500).send(`{"error": "${err.message}"}`);
  }
};
