module.exports = function(express, app){
    var wineryRoute = express.Router();
    var winery = require('../controllers/winery-controller');
    //find winery by id - the function code will be reused for other routes
    wineryRoute.param('id', winery.checkParams); //req,res,next,id
    //create new winery
    wineryRoute.post('/', winery.add);

    // simple winery's Id Endpoints
    wineryRoute.route('/:id')
      // Get winery by Id
      .get(winery.findById)
      // Update a winery with a given id
      .put(winery.update)
      // Delete winery with given id
      .delete(winery.delete);

    // search Endpoints
    var search = '/search';

    // Get all of a winery (also its wines) by lat and long
    wineryRoute.route(search + '/wineriesIn')
      .get(winery.findWineriesIn);



    app.use('/winery', wineryRoute);
}
