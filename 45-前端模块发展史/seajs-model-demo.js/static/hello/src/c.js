define(function (require, exports, module) {
  var main = require('./main');
  var b = require('./b');

  var count = 0

  exports.plus = function () {
    console.log('i am c.js。 plus=', ++count);
  }

  exports.getb = function () {
    console.log('c.js b:', b)
  }

  exports.getmain = function () {
    console.log('c.js main', main)
  }
});