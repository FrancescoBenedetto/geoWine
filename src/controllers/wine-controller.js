var models = require('../model/');
var wine = models.wine;

exports.findById = function(req, res, next, id) {
  //check params
    wine.find(
      {
      raw: true,
      where: {id: req.params.id}
    })
      .then(
        function(wine){             //success
          req.wine = wine;
          next();
        },
        function(err){              //error
          return res.send({'error' : err});
        })
}
exports.find = function(req, res, next) {
  return res.json(req.wine);
}
exports.add = function(req, res, next) {
    var wine = new Wine(req.body);
    return winedao.save(wine)
      .then(
        function(addedWine) {
          return res.json(addedWine);
        },
        function(err){
          return res.send({'error' : err});
        })
}

exports.update = function(req, res, next) {}
exports.delete = function(req, res, next) {}
