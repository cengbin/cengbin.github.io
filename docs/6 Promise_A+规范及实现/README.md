# PromiseA+规范及实现

## 术语

* 解决（fulfill）：指一个 promise 成功时进行的一系列操作，如状态的改变、回调的执行。虽然规范中用 fulfill 来表示解决，但在后世的 promise 实现多以 resolve 来指代之。
* 拒绝（reject）：指一个 promise 失败时进行的一系列操作。
* 终值（eventual value）：所谓终值，指的是 promise 被解决时传递给解决回调的值，由于 promise 有一次性的特征，因此当这个值被传递时，标志着 promise 等待态的结束，故称之终值，有时也直接简称为值（value）。
* 据因（reason）：也就是拒绝原因，指在 promise 被拒绝时传递给拒绝回调的值。

> thenable对象指的是具有then方法的对象，比如下面这个对象。

```
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
```

### 参考
[https://promisesaplus.com/ Promises/A+](https://promisesaplus.com/)

[https://juejin.im/post/5c4b0423e51d4525211c0fbc 【译】 Promises/A+ 规范](https://juejin.im/post/5c4b0423e51d4525211c0fbc)

[https://www.ituring.com.cn/article/66566 【翻译】Promises/A+规范](https://www.ituring.com.cn/article/66566)