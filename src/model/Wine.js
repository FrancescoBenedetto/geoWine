'use strict'

class Wine {
  constructor(name, type, description, geographicInformations) {
    this.name = name;
    this.description = description;
    this.geographicInformations = geographicInformations;
  }
  getName() {
    return this.name;
  }
  getType() {
    return this.type;
  }
  getDescription() {
    return this.description;
  }
  getGeoInfos() {
    return this.geographicInformations;
  }
  setName(name) {
    this.name = name;
  }
  setType(type) {
    this.type = type;
  }
  setDescription(description) {
    this.description = description;
  }
  setGeoInfos(geographicInformations) {
    this.geographicInformations = geographicInformations;
  }
}

module.exports = Wine;
