# ES5函数创建对象和ES6 class创建对象的区别

> ES5 与 ES6创建的对象的所指向的原型对象不同  
> ES5创建的对象的原型对象(`__proto__`)指向函数的.prototype对象  
> ES6创建的对象的原型对象(`__proto__`)指向当前对象类的实例  

```
  // ---------- ES5 ----------
  function A() {
    this.sayName = function () {
      console.log("我是超人");
    }
  }

  function B(name) {
    this.name = name;
    this.sayHello = function () {
      console.log('我的名字叫', this.name);
    }
  }

  var a = new A()
  B.prototype = a

  var b = new B('chuck');
  b.sayHello();
  b.sayName();
  console.log(b.__proto__) // 指向的是 a 对象
  console.log('\n')

  // ---------- ES6 ----------
  class C {
    constructor() {}

    sayName() {console.log("我是超人");}
  }

  class D extends C {
    constructor(name) {
      super();
      this.name = name;
    }

    sayHello() {
      console.log('我的名字叫', this.name);
    }
  }

  var c = new C()
  console.log(c.__proto__) // 指向C类的实例

  let d = new D('chuck2');
  console.log(d.__proto__) // 指向D类的实例
  console.log(d.__proto__.__proto__) // 指向C类的实例
```


