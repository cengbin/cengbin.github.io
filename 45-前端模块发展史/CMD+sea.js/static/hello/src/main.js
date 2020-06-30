define(function (require, exports, module) {
  var $ = require('jquery');
  var b = require('./b');
  var c = require('./c');

  // exports 参数是 module.exports 对象的一个引用
  console.log(module.exports === exports);  // true

  module.exports = {
    name: 'i am main.js',
    init: function () {
      console.log(window.$)

      console.log('main.js, b:', b);
      b.something();

      console.log('main.js, c:', c);
      c.plus()
      c.getmain()
      c.getb()
    }
  }

  console.log(module.exports === exports); // false
})