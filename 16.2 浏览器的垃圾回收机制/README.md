# JavaScript 垃圾回收

* 垃圾收集器会定期（周期性）找出那些不再继续使用的变量，然后释放其内存。
* JavaScript引擎基础GC方案是（simple GC）：mark and sweep （标记清除），即
    1. 从根对象开始遍历所有可访问的对象。
    2. 回收已不可访问的对象。
* IE6垃圾回收
* IE7垃圾回收	