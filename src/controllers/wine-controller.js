var winedao = require('../persistence/wine-dao');

exports.findById = function(req, res, next, id) {
    winedao.findById(req.params.id)
      .then(
        function(wine){
          req.wine = wine;
          next();
        },
        function(err){
          return res.send('error' : err);
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
        }
}

exports.update = function(req, res, next) {}
exports.delete = function(req, res, next) {}
