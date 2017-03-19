var mongoose = require('mongoose');

var wineSchema = new mongoose.Schema({
      name: String,
      type: String,
      description: String,
      geographicInformations : {
        nation: String,
        region: String,
        geo_extension_text: [String],
        geo_extension_coords: [Number]
      }
    });

var WineDAO = mongoose.model('Wine', wineSchema);

module.exports = WineDAO;
