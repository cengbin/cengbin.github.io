// handler.get() 方法用于拦截对象的读取属性操作。

var aaaname = "-- i am window --"

let handler = {
  get(target, property, receiver) {
    console.log("get: ", target, property)
    let value = null
    if (property in target) {
      value = target[property]
    } else {
      throw `无法访问${target}的属性或方法 ${property}`
      value = undefined;
    }
    return value;
  }
}

let target = window

let proxy = new Proxy(target, handler)

let code = `
    console.log(aaaname);
    console.log(window.aaaname);
`

let outCode = `
  (function(window){
    ${code}
  }(arguments[0]))
`

let fn = new Function(outCode)

fn.call({}, proxy)