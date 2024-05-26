import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const _=JSON.parse('{"title":"JavaScript常见加密与解密算法","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/68 JavaScript常见加密与解密算法/README.md","filePath":"frontend/68 JavaScript常见加密与解密算法/README.md"}'),p={name:"frontend/68 JavaScript常见加密与解密算法/README.md"},l=e(`<h1 id="javascript常见加密与解密算法" tabindex="-1">JavaScript常见加密与解密算法 <a class="header-anchor" href="#javascript常见加密与解密算法" aria-label="Permalink to &quot;JavaScript常见加密与解密算法&quot;">​</a></h1><h2 id="_1、消息摘要算法" tabindex="-1">1、消息摘要算法 <a class="header-anchor" href="#_1、消息摘要算法" aria-label="Permalink to &quot;1、消息摘要算法&quot;">​</a></h2><p>常见的消息摘要算法有：MD5、SHA-1、SHA-256等。</p><p>它的特点是对不同的明文生成唯一且定长的密文，是不可逆的，即无法通过“密文”还原明文。</p><h2 id="_2、对称加密算法" tabindex="-1">2、对称加密算法 <a class="header-anchor" href="#_2、对称加密算法" aria-label="Permalink to &quot;2、对称加密算法&quot;">​</a></h2><p>常见的对称加密算法有：DES、AES、3DES等。</p><ul><li>AES是一种广泛使用的对称加密算法，被认为是目前最安全的对称加密算法之一。</li><li>根据密钥长度的不同，可以把AES、加密算法氛围AES-128/AES-192/AES-256，也就是说密钥的长度必须是16字节/24字节/32字节。</li><li>常见mode模式有CBC、ECB两种，这两种模式的区别在于是否需要配置iv向量。</li></ul><h2 id="_3、非对称加密算法" tabindex="-1">3、非对称加密算法 <a class="header-anchor" href="#_3、非对称加密算法" aria-label="Permalink to &quot;3、非对称加密算法&quot;">​</a></h2><p>非对称加密算法是一种密码学中的加密方式，也被称为公钥加密算法。与对称加密算法不同，非对称加密算法使用一对密钥，分别是公钥和私钥。非对称加密算法的一个关键特性是，使用公钥加密的数据只能由相应的私钥解密，而使用私钥加密的数据只能由相应的公钥解密。常见的非对称加密算法包括RSA和ECC等。</p><p>公钥可以公开分享的密钥，用于加密数据。任何人都可以获得公钥，但不能由公钥推导出私钥。</p><p>私钥是保密的密钥，用于解密由公钥加密的数据。只有私钥的持有者能够解密使用公钥加密的信息。</p><h2 id="实践" tabindex="-1">实践 <a class="header-anchor" href="#实践" aria-label="Permalink to &quot;实践&quot;">​</a></h2><p><code>npm install crypto-js@4.2.0 jsencrypt@3.2.1 --save --registry https://registry.npmmirror.com</code></p><blockquote><p>注意：安装完成后需要在jsencrypt模块的入口文件jsencrypt.js的首行加入如下代码，不然会运行报错。 global.window = {};</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const CryptoJS = require(&#39;crypto-js&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const JSEncrypt = require(&#39;jsencrypt&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let password = &#39;123456&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log({password})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 消息摘要算法 - MD5</span></span>
<span class="line"><span style="color:#e1e4e8;">let md5_password = CryptoJS.MD5(password).toString();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 消息摘要算法 - SHA1</span></span>
<span class="line"><span style="color:#e1e4e8;">let sha1_password = CryptoJS.SHA1(password).toString();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log({md5_password, sha1_password, length: md5_password.length})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// AES算法 - ECB模式</span></span>
<span class="line"><span style="color:#e1e4e8;">// 在UTF-8字符集编码下1个英文字母/数字占1字节，所以key等于16字节。</span></span>
<span class="line"><span style="color:#e1e4e8;">let key = &#39;0123456789abcdef&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var config = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ECB 模式</span></span>
<span class="line"><span style="color:#e1e4e8;">  mode: CryptoJS.mode.ECB,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // Pkcs7 填充模式</span></span>
<span class="line"><span style="color:#e1e4e8;">  padding: CryptoJS.pad.Pkcs7,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">let aes_ecb_encrypt_password = CryptoJS.AES.encrypt(password, key, config).toString();</span></span>
<span class="line"><span style="color:#e1e4e8;">let aes_ecb_decrypt_password = CryptoJS.AES.decrypt(aes_ecb_encrypt_password, key, config).toString(CryptoJS.enc.Utf8);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log({aes_ecb_encrypt_password, aes_ecb_decrypt_password})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// AES算法 - CBC模式</span></span>
<span class="line"><span style="color:#e1e4e8;">// 指定初始向量</span></span>
<span class="line"><span style="color:#e1e4e8;">let iv = CryptoJS.enc.Utf8.parse(&#39;12345678&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">var config = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  mode: CryptoJS.mode.CBC,</span></span>
<span class="line"><span style="color:#e1e4e8;">  padding: CryptoJS.pad.Pkcs7,</span></span>
<span class="line"><span style="color:#e1e4e8;">  iv,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">let aes_cbc_encrypt_password = CryptoJS.AES.encrypt(password, key, config).toString();</span></span>
<span class="line"><span style="color:#e1e4e8;">let aes_cbc_decrypt_password = CryptoJS.AES.decrypt(aes_cbc_encrypt_password, key, config).toString(CryptoJS.enc.Utf8);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log({aes_cbc_encrypt_password, aes_cbc_decrypt_password})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 非对称加密算法 - 加密</span></span>
<span class="line"><span style="color:#e1e4e8;">// 提前生成的公钥，公钥给别人，用于加密</span></span>
<span class="line"><span style="color:#e1e4e8;">let public_key = &#39;MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;gwQco1KRMDSmXSMkDwIDAQAB&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var encrypt = new JSEncrypt();</span></span>
<span class="line"><span style="color:#e1e4e8;">encrypt.setPublicKey(public_key);</span></span>
<span class="line"><span style="color:#e1e4e8;">var encrypted_password = encrypt.encrypt(password);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 非对称加密算法 - 解密</span></span>
<span class="line"><span style="color:#e1e4e8;">// 提前生成的私钥，私钥自己保管，用于解密</span></span>
<span class="line"><span style="color:#e1e4e8;">var private_key = &quot;MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz\\n&quot; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">var decrypt = new JSEncrypt();</span></span>
<span class="line"><span style="color:#e1e4e8;">decrypt.setPrivateKey(private_key);</span></span>
<span class="line"><span style="color:#e1e4e8;">var uncrypted_password = decrypt.decrypt(encrypted_password);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log({encrypted_password, uncrypted_password})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const CryptoJS = require(&#39;crypto-js&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const JSEncrypt = require(&#39;jsencrypt&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let password = &#39;123456&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log({password})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 消息摘要算法 - MD5</span></span>
<span class="line"><span style="color:#24292e;">let md5_password = CryptoJS.MD5(password).toString();</span></span>
<span class="line"><span style="color:#24292e;">// 消息摘要算法 - SHA1</span></span>
<span class="line"><span style="color:#24292e;">let sha1_password = CryptoJS.SHA1(password).toString();</span></span>
<span class="line"><span style="color:#24292e;">console.log({md5_password, sha1_password, length: md5_password.length})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// AES算法 - ECB模式</span></span>
<span class="line"><span style="color:#24292e;">// 在UTF-8字符集编码下1个英文字母/数字占1字节，所以key等于16字节。</span></span>
<span class="line"><span style="color:#24292e;">let key = &#39;0123456789abcdef&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var config = {</span></span>
<span class="line"><span style="color:#24292e;">  // ECB 模式</span></span>
<span class="line"><span style="color:#24292e;">  mode: CryptoJS.mode.ECB,</span></span>
<span class="line"><span style="color:#24292e;">  // Pkcs7 填充模式</span></span>
<span class="line"><span style="color:#24292e;">  padding: CryptoJS.pad.Pkcs7,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">let aes_ecb_encrypt_password = CryptoJS.AES.encrypt(password, key, config).toString();</span></span>
<span class="line"><span style="color:#24292e;">let aes_ecb_decrypt_password = CryptoJS.AES.decrypt(aes_ecb_encrypt_password, key, config).toString(CryptoJS.enc.Utf8);</span></span>
<span class="line"><span style="color:#24292e;">console.log({aes_ecb_encrypt_password, aes_ecb_decrypt_password})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// AES算法 - CBC模式</span></span>
<span class="line"><span style="color:#24292e;">// 指定初始向量</span></span>
<span class="line"><span style="color:#24292e;">let iv = CryptoJS.enc.Utf8.parse(&#39;12345678&#39;)</span></span>
<span class="line"><span style="color:#24292e;">var config = {</span></span>
<span class="line"><span style="color:#24292e;">  mode: CryptoJS.mode.CBC,</span></span>
<span class="line"><span style="color:#24292e;">  padding: CryptoJS.pad.Pkcs7,</span></span>
<span class="line"><span style="color:#24292e;">  iv,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">let aes_cbc_encrypt_password = CryptoJS.AES.encrypt(password, key, config).toString();</span></span>
<span class="line"><span style="color:#24292e;">let aes_cbc_decrypt_password = CryptoJS.AES.decrypt(aes_cbc_encrypt_password, key, config).toString(CryptoJS.enc.Utf8);</span></span>
<span class="line"><span style="color:#24292e;">console.log({aes_cbc_encrypt_password, aes_cbc_decrypt_password})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 非对称加密算法 - 加密</span></span>
<span class="line"><span style="color:#24292e;">// 提前生成的公钥，公钥给别人，用于加密</span></span>
<span class="line"><span style="color:#24292e;">let public_key = &#39;MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;gwQco1KRMDSmXSMkDwIDAQAB&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var encrypt = new JSEncrypt();</span></span>
<span class="line"><span style="color:#24292e;">encrypt.setPublicKey(public_key);</span></span>
<span class="line"><span style="color:#24292e;">var encrypted_password = encrypt.encrypt(password);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 非对称加密算法 - 解密</span></span>
<span class="line"><span style="color:#24292e;">// 提前生成的私钥，私钥自己保管，用于解密</span></span>
<span class="line"><span style="color:#24292e;">var private_key = &quot;MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz\\n&quot; +</span></span>
<span class="line"><span style="color:#24292e;">  &quot;uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876&quot;</span></span>
<span class="line"><span style="color:#24292e;">var decrypt = new JSEncrypt();</span></span>
<span class="line"><span style="color:#24292e;">decrypt.setPrivateKey(private_key);</span></span>
<span class="line"><span style="color:#24292e;">var uncrypted_password = decrypt.decrypt(encrypted_password);</span></span>
<span class="line"><span style="color:#24292e;">console.log({encrypted_password, uncrypted_password})</span></span></code></pre></div><p>参考：</p><p><a href="https://www.bilibili.com/video/BV17t4y1f7oE/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV17t4y1f7oE/</a></p>`,17),o=[l];function c(t,r,i,y,d,S){return n(),a("div",null,o)}const w=s(p,[["render",c]]);export{_ as __pageData,w as default};
