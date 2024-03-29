## 单进程浏览器时代

## 浏览器进程与线程

### GUI渲染线程与JS引擎线程互斥
由于JavaScript是可操纵DOM的，如果在修改这些元素属性同时渲染界面（即JS线程和UI线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。

因此为了防止渲染出现不可预期的结果，浏览器设置GUI渲染线程与JS引擎为互斥的关系，当JS引擎执行时GUI线程会被挂起，GUI更新则会被保存在一个队列中等到JS引擎线程空闲时立即被执行。

### JS引擎的一些运行机制分析

#### 理解一个概念：
* JS分为同步任务和异步任务
* 同步任务都在`主线程（JS引擎线程）`上执行，形成一个`执行栈`
* 主线程之外，`事件触发线程`管理着一个`任务队列`，只要异步任务有了运行结果，就在`任务队列`之中放置一个事件。
* 主线程之外，`定时触发器线程`管理着一个`任务队列`，只要异步任务有了运行结果，就在`任务队列`之中放置一个事件。
* 一旦`执行栈`中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取`任务队列`，将可运行的异步任务添加到可执行栈中，开始执行。

### 参考链接

[从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)