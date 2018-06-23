# setTimeout和Promise执行顺序总结

```
console.log(1);

setTimeout(function(){console.log(2)},0);

new Promise((resole,reject)=>{
    console.log(3);
    resole();
}).then(function(){
    console.log(4);
});

console.log(5);

// 1 3 4 5 2
```