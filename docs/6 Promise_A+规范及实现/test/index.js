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


var _p1 = Promise.resolve(3);
var _p2 = 1337;
var _p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});

Promise.all([_p1, _p2, _p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});