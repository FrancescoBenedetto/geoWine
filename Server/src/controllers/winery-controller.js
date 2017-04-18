var models = require('../model/');
var helper = require('winery-helper');
var winery = models.winery;

exports.checkParams = function(req, res, next, id) {
  //check params
    next();
}
exports.findById = function(req, res, next) {
  winery.findById(req.params.id)
    .then(
      function(winery){             //success
        return res.json(winery);
      },
      function(err){              //error
        return res.send({'error' : err});
      })
}
exports.add = function(req, res, next) {
    return winery.create(req.body)
      .then(
        function(addedwinery) {
          return res.send('successfully added winery: '+ addedwinery);
        },
        function(err){
          return res.send({'error' : err});
        })
}
exports.update = function(req, res, next) {
  return winery.update(req.body, {where: {id: req.params.id}})
    .then(
      function(updatedwinery){
      return res.send('successfully updated winery');
    },
      function(err){
        return res.send('error '+ err +' updating '+ req.body);
      })
}
exports.delete = function(req, res, next) {
  return winery.destroy({where:{id:req.params.id}})
    .then(
      function(result){
        return res.send('successfully deleted')
      },
      function(err){
        return res.send('error deleting')
      }
    )
}

exports.findWineriesIn = function(req, res, next) {
  var minLat = req.params('minLat'),
    maxLat = req.params('maxLat'),
    minLong = req.params('minLong'),
    maxLong = req.params('maxLong');
  if(helper.latsLongsAreValid(req.params)){
    return winery.findAll(
      where: {
        $and: {
          latitude: {$between: [minLat, maxLat]},
          longitude: {$between: [minLong, maxLong]}
        }
      },
      include: [{model: models.wine}]
    )
    .then(
      function(wineries){
        return res.json(wineries)
      },
      function(err){              //error
        return res.send({'error' : err});
      })
  )
  }
}
