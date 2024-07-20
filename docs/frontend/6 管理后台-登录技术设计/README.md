# 登录 - 技术设计

## 1. 系统登录

1. 账号密码校验
2. 用户行为校验
	1. 验证码校验
	2. 短信校验
	3. 滑块校验 
	    1. https://www.bookstack.cn/read/anji-plus-captcha/f26c8bfb057c4a15.md
		2. captcha https://github.com/anji-plus/captcha/
3. 账号密码加密
4. 记住密码
5. 第三方登录
6. sessionId与token存储


### 1.6 sessionId 与 token 存储

* 将 Token 存储在 webStorage (localStorage, sessionStorage) 中可以通过同域的js访问，这样导致很容易受到 XSS 攻击，特别是项目中引入很多第三方 js 库的情况下，如果js脚本被盗用，攻击者就可以轻易访问你的网站。

> 跨站脚本攻击（XSS）：是一种注入代码攻击，通过在网站里注入script代码，当访问者浏览网站的时候通过注入的script代码窃取用户信息，盗用用户身份等

* 将Token 存储在 cookie 中，可以指定 httponly来防止js被读取，也可以指定 secure 来保证Token 只在 HTTPS 下传输，缺点是不符合RestFul 最佳实践，容易受到 CSRF 攻击。

> 跨站请求伪造（CSRF）：跨站点请求伪造，攻击者盗用已经认证过的用户信息，以用户信息的名义进行操作（转账，购买商品等），由于身份已经认证过了，所以网站会认为此操作是用户本人操作。CSRF 并不能拿到用户信息，但它可以盗用用户的凭证进行操作。

## 2. 多个系统登录

[单点登录（Single Sign On，SSO）](https://sa-token.cc/doc.html#/sso/readme)

### 参考

[Sa-Token](https://sa-token.cc/doc.html)