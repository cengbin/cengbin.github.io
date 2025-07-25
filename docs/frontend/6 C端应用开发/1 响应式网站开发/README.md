# 响应式网站开发

响应式网站指一个网站要适配PC端、Pad端、Mobile端。

## 1、CSS媒体查询

通过CSS3的媒体查询，根据不同的屏幕尺寸区间设置不同的样式效果，和不同尺寸的图片，来保证页面图片显示不失真，布局元素错乱。

参考示例：

* [苹果官网](https://www.apple.com.cn)

## 2、栅格布局

栅格布局是一种网格化的页面布局方式，它由行和列组成。

参考示例：

* [微软官网](https://www.microsoft.com/zh-cn)
* [暴雪官网](https://www.blizzard.com/zh-tw/)

## 3、弹性布局(flex/grid)

Flexbox是一种基于弹性盒子模型的布局技术。

* 使用 Flexbox 布局可以让元素自动适应不同屏幕尺寸
* 元素可以自动换行、伸缩，减少媒体查询的使用
* 特别适合一维布局（行或列）

## 4、隐藏/显示

## 5、调整元素顺序

## 6、CSS变量（自定义属性）配合媒体查询

参考示例：[暴雪官网](https://www.blizzard.com/zh-tw/)

![](./CSS变量.png)


```
:root {
  --main-font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    --main-font-size: 14px;
  }
}

.text {
  font-size: var(--main-font-size);
}
```

# 7、移动优先设计（Mobile First）

```scss
// 网站的响应式设计：移动优先设计（Mobil e First）
// 移动端默认样式
.container {
  width: 100%;
}

// 平板（屏幕宽度不小于768px时）
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

// 桌面（屏幕宽度不小于1024时）
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```

### 响应式网站开发建议

![](./响应式网站开发建议.png)

## PC端和移动端采用了不同的布局和交互处理方式

响应式的逻辑是一套代码通过灵活的布局和样式调整适配不同端，如果有些模块PC端和移动端布局和展现方式完全不一样是两套组件。

网站是根据初始加载时的设备类型决定渲染内容，而不是随窗口大小实时切换内容，所以没有很好的办法通过在改变浏览器宽度的情况下实时重新渲染内容。

一种强制刷新方案，在检测到从PC端切到移动端的情况下强制刷新页面重新渲染内容。

```tsx
useEffect(() => {
  const initialIsMobile = window.innerWidth < 768;

  function handleResize() {
    const currentIsMobile = window.innerWidth < 768;
    if (initialIsMobile !== currentIsMobile) {
      window.location.reload();
    }
  }

  const debouncedHandleResize = debounce(handleResize, 500);
  window.addEventListener('resize', debouncedHandleResize);

  return () => {
    window.removeEventListener('resize', debouncedHandleResize);
  };
}, []);
```