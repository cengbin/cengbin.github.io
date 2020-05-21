(function (window, $) {
  let data = 'www.google.com'

  function fun() {
    console.log('fun()')
  }

  function foo() {
    console.log('foo() ', data);

    $('body').css('background', 'red');
  }

  function bar() {
    console.log('bar() ', data);
    fun()
  }

  window.moduleA = {
    bar: bar,
    foo: foo
  }
})(window, jQuery)