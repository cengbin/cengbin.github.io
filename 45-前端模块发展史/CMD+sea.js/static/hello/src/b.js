define(function (require, exports, module) {
  var c = require('./c')
  // console.log("spinning.js trace c:", c.plus())

  module.exports = {
    something: function () {
      console.log('i am b.js')
    }
  }
});