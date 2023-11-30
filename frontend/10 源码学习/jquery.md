# jquery.js 源码学习

如下极致精简版jquery.js代码
```
(function (){
    function jQuery(){
        if(字符串){
        return new JQuery();
        }else if(函数){

        }
    }
    
    jQuery.fn = jQuery.prototype ={
        addClass(){},
        removeClass(){},
        width(){},
        ...
    }
    
    jQuery.ajax = function(){}

    window.$ = window.jQuery = jQuery;
})(window)
```

* 全局挂载了$和jquery变量。window.$ === window.jQuery 相等是一个对象, 指向一个函数。
* jQuery.fn = jQuery.prototype ={} 。
* jQuery.prototype 这个对象分别实现了addClass,removeClass,hasClass,width,height...等等的属性。所以可以通过扩展jQuery.fn 对象写jquery插件。
* jQuery.ajax、jQuery.extend 等等这些属性，是作为$和jQqery对象的静态属性挂上去的。

* 调用这个$或jQuery函数根据参数的类型判断具体的返回。
    * 如果是一个函数，当DOMContentLoaded事件触发的时候会调用这个函数。
    * 参数是一个字符串返回一个JQuery对象，这个对象的原型就是jQuery.prototype。
    * JQuery对象有length属性，对象中的0，1，2...属性分别记录了匹配到dom对象。
