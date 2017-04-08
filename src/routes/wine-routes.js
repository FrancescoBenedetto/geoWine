module.exports = function(express, app){
    var wineRoute = express.Router();
    var wine = require('../controllers/wine-controller');
    //find wine by id - the function code will be reused for other routes
    wineRoute.param('id', wine.checkParams); //req,res,next,id
    //create new wine
    wineRoute.post('/', wine.add);

    wineRoute.route('/:id')
      // Get Wine by Id
      .get(wine.findById)
      // Update a Wine with a given id
      .put(wine.update)
      // Delete Wine with given id
      .delete(wine.delete);

      app.use('/wine', wineRoute);
}
