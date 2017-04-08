module.exports = function(express, app){
    var wineryRoute = express.Router();
    var winery = require('../controllers/winery-controller');
    //find winery by id - the function code will be reused for other routes
    wineryRoute.param('id', winery.checkParams); //req,res,next,id
    //create new winery
    wineryRoute.post('/', winery.add);

    wineryRoute.route('/:id')
      // Get winery by Id
      .get(winery.findById)
      // Update a winery with a given id
      .put(winery.update)
      // Delete winery with given id
      .delete(winery.delete);

      app.use('/winery', wineryRoute);
}
