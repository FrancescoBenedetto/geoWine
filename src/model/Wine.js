'use strict'

class Wine {
  constructor(name, type, description, geographicInformations) {
    this.name = name;
    this.description = description;
    this.type = type;
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
  setName(name) {
    this.name = name;
  }
  setType(type) {
    this.type = type;
  }
  setDescription(description) {
    this.description = description;
  }
}

module.exports = Wine;
