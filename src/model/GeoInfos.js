'use strict'
class GeoInfos {
  constructor(nation, region, geo_extension_text, geo_extension_coords) {
    this.nation = nation;
    this.region = region;
    this.geo_extension_text = geo_extension_text;
    this.geo_extension_coords = geo_extension_coords;
  }
  getNation(){
    return this.nation;
  }
  getRegion(){
    return this.region;
  }
  toJSON() {
    return {nation:this.nation, region:this.region, geo_extension_text:this.geo_extension_text, geo_extension_coords:this.geo_extension_coords};
  }
}

module.exports = GeoInfos;
