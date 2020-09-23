define(function (require, exports, module) {
  var main = require('./main');
  var b = require('./b');

  var count = 0

  module.exports = {
    plus: function () {
      console.log('i am c.js. plus=', ++count);
    },
    getb: function () {
      console.log('c.js b:', b)
    },
    getmain: function () {
      console.log('c.js main', main)
    }
  }
});