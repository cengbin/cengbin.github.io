define(function (require, exports, module) {
  var c = require('./c')
  console.log("b.js trace c:", c, c.plus())

  module.exports = {
    something: function () {
      console.log('i am b.js')
    }
  }
});