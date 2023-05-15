define(function (require, exports, module) {
  var $ = require('jquery'); // $为undefined，因为jquery.js没有遵循CMD规范输出模块所以为undefined。可以通过window.$访问。
  var b = require('./b');
  console.log("b:", b);
  // var c = require('./c');
  // var css = require('./main.css');
  // var tpl = require('./main.html');

  var config = require('./attribute.config');

  console.log('config:', config);

  console.log('$:', $)
  console.log('window.$:', window.$)


  // console.log('css:', css)
  // console.log('tpl:', tpl)

  // exports 参数是 module.exports 对象的一个引用
  // console.log(module.exports === exports);  // true

  module.exports = {
    name: 'i am main.js',
    init: function () {

      // console.log('tpl:', tpl)
      // window.$(document.body).append(tpl)
      //
      // console.log('main.js, b:', b);
      // b.something();
      //
      // console.log('main.js, c:', c);
      // c.plus()
      //
      // c.getmain()
      // c.getb()
    }
  }

  // console.log('module.exports === exports:', module.exports === exports); // false
})