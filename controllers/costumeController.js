const Costume = require('../models/costume');

exports.costume_list = function (req, res) {
    Costume.find({}, (err, costumes) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json(costumes);
    });
  };
  

// Display detail page for a specific costume.
exports.costume_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.costume_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST');
};

// Handle Costume delete form on DELETE.
exports.costume_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.costume_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
exports.api = function (req, res) {
    res.json({
      resources: ['costume'], // Replace with your actual resource name
      verbs: ['GET', 'POST', 'PUT', 'DELETE'],
    });
  };
  