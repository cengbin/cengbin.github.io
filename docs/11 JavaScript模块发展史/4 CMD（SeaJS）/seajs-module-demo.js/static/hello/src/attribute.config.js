define(function (require, exports, module) {
  console.log('attribute.config.js');

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