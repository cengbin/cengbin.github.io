// Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class PromiseA {
  constructor(executor) {
    if (typeof executor !== 'function') throw new Error(`TypeError: Promise resolver ${executor} is not a function`)

    this.state = PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn(value))
      }
    }

    let reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn(reason))
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
}

PromiseA.prototype.then = function (onFulfilled, onRejected) {
  // 2.2.7.3
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED) onFulfilled = value => value

  // 2.2.7.4
  if (typeof onRejected !== 'function' && this.state === REJECTED) onRejected = reason => reason

  let promise2 = new PromiseA((resolve, reject) => {

    // 此处ths指向的是声明promise2变量作用域中的this，并非promise2实例，因为promise2构造函数传入的是箭头函数。
    if (this.state === FULFILLED) {
      // 2.2.4 onFulfilled，onRejected是异步调用，模拟异步
      setTimeout(() => {
        // 2.2.7.2
        try {
          // 2.2.2.1 / 2.2.5
          let x = onFulfilled(this.value)
          // 2.2.6.1
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    }

    if (this.state === REJECTED) {
      setTimeout(() => {
        try {
          // 2.2.3.1
          let x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    }

    if (this.state === PENDING) {
      this.onFulfilledCallbacks.push((value) => {
        setTimeout(() => {
          try {
            let x = onFulfilled(value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      })

      this.onRejectedCallbacks.push((reason) => {
        setTimeout(() => {
          try {
            let x = onRejected(reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      })
    }
  })

  // 2.2.7
  return promise2
}

PromiseA.prototype.catch = function (errFn) {
  return this.then(null, errFn)
}

PromiseA.all = function (iterable) {
  let result = []
  let i = 0

  return new PromiseA((resolve, reject) => {
    iterable.forEach((item, idx) => {
      if (isPromise(item)) {
        item.then(value => {
          result[idx] = value

          if (++i === iterable.length) {
            resolve(result)
          }
        }, reason => {
          reject(reason)
        })
      } else {
        result[idx] = item

        if (++i === iterable.length) {
          resolve(result)
        }
      }
    })
  })
}

PromiseA.resolve = function (value) {
  return new PromiseA((resolve, reject) => resolve(value))
}

PromiseA.reject = function (reason) {
  return new PromiseA((resolve, reject) => reject(reason))
}

/**
 * Promise 处理程序
 * @param promise2 then函数返回的promise
 * @param x 是调用then函数参数onFulfilled函数返回值。x可能是Promise实例或其他类型对象。
 * @param resolve promise2的resolve
 * @param reject promise2的reject
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 2.3.1 如果返回的 promise2 和 x 是指向同一个引用（循环引用），则抛出错误
  if (promise2 === x) reject(new Error(`TypeError: Chaining cycle detected for promise`))

  let called

  // 2.3.2 如果 x 是一个 promise 实例，则采用它的状态：
  if (x instanceof PromiseA) {
    // 默认是pending状态，调用then方法得到promise的另外两个状态结果
    x.then((value) => {
      resolvePromise(promise2, value, resolve, reject)
    }, (error) => {
      reject(error)
    })

    //2.3.3 此外，如果 x 是个对象或函数类型
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // 2.3.3.1
      let then = x.then

      if (typeof then === 'function') {
        then.call(x, (y) => {
          // 2.3.3.3.3
          if (called) return
          called = true

          // 2.3.3.3.1
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return
          called = true

          // 2.3.3.3.2
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true

      reject(e)
    }

    // 2.3.4 如果 x 即不是函数类型也不是对象类型，直接 resolve x（resolve(x)）
  } else {
    resolve(x)
  }
}

/**
 * 判断是否是Promise实例
 * */
function isPromise(obj) {
  return obj instanceof PromiseA
}

module.exports = {
  PromiseA
}