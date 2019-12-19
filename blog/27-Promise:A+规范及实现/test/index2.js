const PromiseA = require('../PromiseA').PromiseA

console.log('1')
let p1 = new PromiseA((resolve, reject) => {
  // throw new Error('error...')
  console.log('2')

  resolve('p1')

  // setTimeout(() => {
  //   resolve(1)
  // }, 1000)
})

// p1.then().then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log(error)
// })

let p2 = p1.then(value => {
  console.log('4.1 value:', value)

  // return value

  throw new Error('ha ha')

  // return new PromiseA((resolve, reject) => {
  //   resolve('p2')
  // })

  // return new PromiseA((resolve, reject) => {
  //   resolve(new PromiseA((resolve, reject) => {
  //     resolve('1.1.1')
  //   }))
  // })

  // return new PromiseA((resolve, reject) => {
  //   resolve(new PromiseA((resolve, reject) => {
  //     resolve(p1)
  //   }))
  // })

  // return new PromiseA((resolve, reject) => {
  //   resolve(new PromiseA((resolve, reject) => {
  //     resolve(p2)
  //   }))
  // })
  // return p2
}, error => {
  console.log('4.2 reason:', error)
}).catch((error) => {
  console.log('4 catch:', error)
})

let p3 = p2.then(value => {
  console.log('5.1 value:', value)
  // throw new Error('ha ha')
}, error => {
  console.log('5.2 reason:', error)
})

p3

console.log('3')

console.log(PromiseA.resolve(1))
console.log(PromiseA.reject('error'))