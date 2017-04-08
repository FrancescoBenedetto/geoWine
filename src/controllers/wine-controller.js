var models = require('../model/');
var wine = models.wine;

exports.checkParams = function(req, res, next, id) {
  //check params
    next();
}
exports.findById = function(req, res, next) {
  wine.findById(req.params.id)
    .then(
      function(wine){             //success
        return res.json(wine);
      },
      function(err){              //error
        return res.send({'error' : err});
      })
}
exports.add = function(req, res, next) {
    return wine.create(req.body)
      .then(
        function(addedWine) {
          return res.send('successfully added wine: '+ addedWine);
        },
        function(err){
          return res.send({'error' : err});
        })
}
exports.update = function(req, res, next) {
  return wine.update(req.body, {where: {id: req.params.id}})
    .then(
      function(updatedWine){
      return res.send('successfully updated wine');
    },
      function(err){
        res.send('error '+ err +' updating '+ req.body);
      })
}
exports.delete = function(req, res, next) {
  
}
