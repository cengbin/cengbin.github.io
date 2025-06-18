# 后台管理系统 之 多语言开发

## 多语言翻译

[seasun-translate](https://www.npmjs.com/package/seasun-translate)

## 多语言展示

常见的检测顺序包括：

1. URL 查询参数 (e.g., yoursite.com?lng=en)
1. Cookie
1. localStorage
1. sessionStorage
1. 浏览器 navigator 对象 (即用户在浏览器设置中偏好的语言)
1. HTML lang 标签

`i18next-browser-languagedetector`这个插件非常有用，因为它可以让你的应用“智能地”以用户最熟悉的语言展示，提升用户体验。

```javascript
// 获取当前语言
function getUserLang() {
    const defaultLang = 'zh_CN'
    const queries = getQueryObj()
    // 语言设置优先级：URL传参 > cookie > 浏览器语言 > 默认'zh_CN'
    const language = queries['lang'] || getCookie('locale') || window.navigator.language || defaultLang
    // 外部配置的语言和代码中的语言做一个映射
    const lang = config.map[language]
    if (!lang) {
        console.warn(`不支持的语言：${language}`)
        return config.map[defaultLang]
    } else {
        return lang
    }
}
```

1. 获取用户当前语言
2. 言加载对应语言的配置文件
3. 显示对应文本

## 语言切换

切换语言设置用户的语言信息，然后刷新网页重新进入应用。

**为什么是切换语言后刷新页面？**

1. 多语言过多的情况，进应用需要一次性拉取多语言的配置文件导致资源多过多、过大、下载慢。
2. 用户一般不会在使用的过程中切换语言，都是进入应用的时候切换语言，后面基本上不动了。所以进入应用的时候只需要拉一种语言信息就够了。
3. 切换语言的时候，局部信息有可能是从服务端获取。假如这些局部是由不同团队开发，那么要局部刷新，改造工作比较麻烦。