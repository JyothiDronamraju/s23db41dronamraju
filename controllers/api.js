exports.api = function (req, res) {
    res.json({
      resources: ['costume'], 
      verbs: ['GET', 'POST', 'PUT', 'DELETE'],
    });
  };
  