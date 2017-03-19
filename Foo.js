
'use strict'

class Foo {
  constructor(bar){
    this.bar = bar;
  }
  print() {
    console.log(this.bar);
  }
}

module.exports = Foo;
