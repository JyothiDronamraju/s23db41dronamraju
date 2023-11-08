const Costume = require('../models/costume'); // Adjust the import based on your project structure

// Seeding the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Costume.deleteMany();

  const instance1 = new Costume({
    costume_type: 'ghost',
    size: 'large',
    cost: 15.4,
  });

  instance1.save().then((doc) => {
    console.log('First object saved');
  }).catch((err) => {
    console.error(err);
  });
}

const reseed = true;
if (reseed) {
  recreateDB();
}

// List of all costumes
exports.costume_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Costume list');
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
  res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
