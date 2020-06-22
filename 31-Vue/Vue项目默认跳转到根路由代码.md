# Vue项目每次进入项目都跳转到根目录代码：

```
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  beforeCreate () {
    if (this.$route.path !== '/') {
      this.$router.push({path: '/'})
    }
  }
})
```