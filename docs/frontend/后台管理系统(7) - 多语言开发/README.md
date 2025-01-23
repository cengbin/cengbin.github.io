# 后台管理系统 之 多语言开发

## 多语言翻译

[seasun-translate](https://www.npmjs.com/package/seasun-translate)

## 多语言展示

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