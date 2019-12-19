console.log('1')
let p1 = new Promise((resolve, reject) => {
  console.log('2')
  resolve(1)
})

let p2 = p1.then((value) => {
  console.log('p1 value:', value)
  // return p2 // TypeError: Chaining cycle detected for promise #<Promise>
}, (error) => {
  console.log('p1 reason:', error)
})

let p3 = p2.then((value) => {
  console.log('p2 value:', value)
  // return p2
}, (error) => {
  console.log('p2 reason:', error)
})
console.log('5')