module.exports = function(app){
    var wineRoute = app.Router();
    var wine = require('./controllers/wine');
    //find wine by id - the function code will be reused for other routes
    wineRoute.param('id', wine.findById); //req,res,next,id
    //create new wine
    wineRoute.post('/', wine.add);

    wine.route('/:id')
      // Get Wine by Id
      .get(wine.find)
      // Update a Wine with a given id
      .put(wine.update);
      // Delete Wine with given id
      .delete(wine.delete);

      app.use('/wine');
}
