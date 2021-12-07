# 为什么Vue3要改用Proxy？

1. 可以用Proxy检测对象新添加的属性，让他反应过来。（Vue2+只能通过Vue.set(obj,key,value)来添加新的响应式的属性）。
2. 同样是适用于数组对象，（Vue2+改写了Array.prototype,对它做了代理所以当调用array.push,array.pop，改变数据长度等等的方法或操作的时候可以做到视图响应。注意：改变原生对象的prototype是不推荐，且需要谨慎的事情！），使用Proxy代理数组就能够监听到数组的变化。
3. proxy比defineProperty强大了太多，不仅解决了vue的历史难题，让vue的体验更上了一层，更是去除了不少因为defineProperty、Array.prototy代理而必须要的方法，精简了vue的包大小。
4. 摆脱Vue目前的警告。（动态给对象添加属性，不用显示的告诉Vue您正在添加属性，你想让它反应过来）