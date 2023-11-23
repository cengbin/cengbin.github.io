# 函数节流与函数防抖

## 节流 throttle

节流(Throttle):函数间隔一段时间后才能再触发，避免某些函数触发频率过高，比如滚动条滚动事件触发的函数。

### 应用场景

* 鼠标不断点击触发，click（单位时间内只触发一次）
* 监听页面滚动事件，当滚动到某一个div时给div添加动画

```
<body>
  <style>
    body {
      height: 2000px;
    }
  </style>
  <script>
    function throuttle(fn, interval) {
      let lastTime = new Date().valueOf()
      return function () {
        let now = new Date().valueOf()

        if (now - lastTime > interval) {
          lastTime = now
          fn()
        }
      }
    }

    window.addEventListener('scroll', throuttle(function () {
      console.log('window scroll')
    }, 100))

    window.addEventListener('click', throuttle(function () {
      console.log('window click')
    }, 100))
  </script>
</body>
```

## 防抖debounce

防抖(Debounce):多次触发，只在最后一次触发时，执行目标函数。

> 函数防抖就是，延迟一段时间再执行函数，如果这段时间内又触发了该函数，则延迟重新计算。

### 应用场景

1. 通过监听某些事件完成对应的需求，比如：
	* 通过监听 scroll 事件，检测滚动位置，根据滚动位置显示返回顶部按钮
	* 通过监听 resize 事件，对某些自适应页面调整DOM的渲染
	* 通过监听 keyup 事件，监听文字输入并调用接口进行模糊匹配
	* 通过监听 input 事件，用户在不断输入值时，用防抖来节约请求资源

2. 其他场景	
	* 表单组件输入内容验证
	* 防止多次点击导致表单多次提交
	* ...

### 实现

```
<body>
  <style>
    body {
      height: 2000px;
    }
  </style>
  <input type="text">
  <p id="tips"></p>
  <script>
    function debounce(fn, interval) {
      let num = null
      return function () {
        if (num) clearTimeout(num)

        num = setTimeout(fn, interval)
      }
    }

    let input = document.getElementsByTagName('input')[0]
    let p = document.getElementsByTagName('p')[0]

    input.addEventListener('input', function () {
      p.innerText = '输入中...'
    })

    input.addEventListener('input', debounce(function () {
      p.innerText = '搜索中...'
    }, 300))

    window.addEventListener('scroll', debounce(function () {
      console.log('window scroll stop')
    }, 300))

    window.addEventListener('click', debounce(function () {
      console.log('last click window')
    }, 300))
  </script>
</body>
```	