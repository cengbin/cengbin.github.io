function foo() {
  var a = 10

  function bar() {
    var c = 30

    // with语句将其对象添加在作用域链最前端(AO前)。
    with({b: 20}) {
      console.log("a:", a)
      console.log('b:', b)
      console.log('c:', c)
    }
  }

  bar()
}