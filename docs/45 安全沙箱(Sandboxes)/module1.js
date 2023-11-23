function bar(){
  console.log('this3:', this);
}

bar.call({name:'bar'})
// bar();

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
console.log('this1:',this); // 非严格模式下，this指向proxy

function foo(){

  eval("var b=2;console.log('document=',document)");

  var fun3 = new Function("var b=2;console.log('document=',document)"); fun3();

  console.log(name);

  // this === window 非严格模式下，此写法会造成沙箱逃逸
  console.log("this2:", this); // 非严格模式下，this是AO，ECMAScript规范规定AO作为this值返回时通常为null，this不能为null，重置为全局对象。
  // console.log(this.document);

  function bar(){
    var b = 10;
    console.log("b: ",b);
    console.log(Math.random());
    console.log(new Date());
    // console.log(document);
    // console.log(window);
  }

  bar();


}

foo()