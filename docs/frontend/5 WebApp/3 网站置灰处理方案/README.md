# 网站置灰处理方案

在重大事件(9.18、5.12)、重要节日(清明节)或领导人逝世时，为表达哀思，网站需要进行置灰处理。本文介绍几种常用的网站置灰实现方案。

## 1. CSS filter 方案（推荐）

使用 CSS filter 属性是最简单且兼容性最好的方案。

```css
/* 在需要置灰的时候，给 html 或 body 添加以下样式 */
html {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
}
```

优点：
- 实现简单，一行代码搞定
- 兼容性好，支持主流浏览器
- 性能影响较小
- 对所有元素都生效，包括图片、视频等

缺点：
- 在某些低版本浏览器可能需要添加前缀
- 可能会影响部分 CSS 动画效果

## 2. 混合模式方案

使用 CSS 混合模式也可以实现置灰效果。

```css
body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    mix-blend-mode: color;
    pointer-events: none;
    z-index: 9999;
}
```

优点：
- 可以更精细地控制灰度效果
- 不会影响原有的动画效果

缺点：
- 兼容性相对较差
- 实现相对复杂

## 3. JavaScript 动态控制方案

可以通过 JavaScript 动态添加或移除置灰样式。

```javascript
// 添加置灰效果
function enableGrayScale() {
    document.documentElement.style.filter = 'grayscale(100%)';
}

// 移除置灰效果
function disableGrayScale() {
    document.documentElement.style.filter = 'none';
}

// 根据条件判断是否需要置灰
function checkGrayScale() {
    const specialDates = ['2024-04-04']; // 清明节示例
    const today = new Date().toISOString().split('T')[0];
    
    if (specialDates.includes(today)) {
        enableGrayScale();
    } else {
        disableGrayScale();
    }
}
```

## 4. 注意事项

1. **性能考虑**
   - 置灰效果可能会影响页面渲染性能
   - 建议在必要时才启用置灰效果

2. **特殊元素处理**
   - 某些特殊的功能性元素（如验证码）可能需要排除置灰效果
   - 可以通过添加特定类名来排除：
   ```css
   .no-gray {
       filter: none !important;
   }
   ```

3. **移动端适配**
   - 确保在移动端也能正常显示置灰效果
   - 注意测试不同移动设备的兼容性

4. **动态内容处理**
   - 对于动态加载的内容，确保置灰效果也能正确应用

## 5. 实现示例

完整的实现示例：

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* 定义置灰样式 */
        .gray-scale {
            filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
        }
        
        /* 排除特定元素 */
        .no-gray {
            filter: none !important;
        }
    </style>
</head>
<body>
    <script>
        // 判断是否需要置灰
        function checkGrayScale() {
            const specialDates = ['2024-04-04']; // 示例日期
            const today = new Date().toISOString().split('T')[0];
            
            if (specialDates.includes(today)) {
                document.documentElement.classList.add('gray-scale');
            }
        }
        
        // 页面加载时检查
        window.addEventListener('load', checkGrayScale);
    </script>
</body>
</html>
```

## 6. 总结

网站置灰是一种表达哀思的重要方式。在实现时，建议：

1. 优先使用 CSS filter 方案
2. 注意兼容性和性能问题
3. 合理处理特殊元素
4. 做好移动端适配
5. 可以通过配置动态控制置灰时间