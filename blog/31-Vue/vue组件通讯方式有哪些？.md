# vue组件通讯方式有哪些？

1. 父传子用props
2. 子传父用自定义事件(子组件调用`this.emit('event_name',data)`,父组件`v-on: event_name="function")`
3. 多组件之间数据通讯用Vuex
4. 实例化Vue对象时候传递data数据`new Vue({data: store})`, 组件中用`this.$root.$data`访问数据