module.exports = function() {
  var winedao = require('../persistence/wine-dao');

  var findById = function(req, res, next, id) {
    winedao.findById(req.params.id)
      .then(
        function(wine){
          req.wine = wine;
          next();
        },
        function(err){
          res.send('error' : err);
        })
      }
  var add = function(req, res, next) {
    var wine = new Wine(req.body);
    winedao.save(wine)
      .then(
        function(addedWine) {
          res.json(addedWine);
        },
        function(err){
          res.send({'error' : err});
        }
  }

}
