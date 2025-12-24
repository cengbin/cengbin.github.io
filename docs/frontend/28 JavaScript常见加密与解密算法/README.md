# JavaScript常见加密与解密算法

## 1、消息摘要算法

常见的消息摘要算法有：MD5、SHA-1、SHA-256等。

它的特点是对不同的明文生成唯一且定长的密文，是不可逆的，即无法通过“密文”还原明文。

## 2、对称加密算法

常见的对称加密算法有：DES、AES、3DES等。

* AES是一种广泛使用的对称加密算法，被认为是目前最安全的对称加密算法之一。  
* 根据密钥长度的不同，可以把AES、加密算法氛围AES-128/AES-192/AES-256，也就是说密钥的长度必须是16字节/24字节/32字节。  
* 常见mode模式有CBC、ECB两种，这两种模式的区别在于是否需要配置iv向量。  

## 3、非对称加密算法

非对称加密算法是一种密码学中的加密方式，也被称为公钥加密算法。与对称加密算法不同，非对称加密算法使用一对密钥，分别是公钥和私钥。
非对称加密算法的一个关键特性是，使用公钥加密的数据只能由相应的私钥解密，而使用私钥加密的数据只能由相应的公钥解密。
常见的非对称加密算法包括RSA和ECC等。

**公钥**是可以公开分享的密钥，用于加密数据。任何人都可以获得公钥，但不能由公钥推导出私钥。

**私钥**是保密的密钥，用于解密由公钥加密的数据。只有私钥的持有者能够解密使用公钥加密的信息。

## 实践

**安装依赖**

`npm install crypto-js@4.2.0 jsencrypt@3.2.1 --save --registry https://registry.npmmirror.com`

> 注意：安装完成后需要在jsencrypt模块的入口文件jsencrypt.js的首行加入如下代码，不然会运行报错。  
> global.window = {};

### 消息摘要算法

```
const CryptoJS = require('crypto-js');
const JSEncrypt = require('jsencrypt');

let password = '123456';
console.log({password})

// 消息摘要算法 - MD5
let md5_password = CryptoJS.MD5(password).toString();
// 消息摘要算法 - SHA1
let sha1_password = CryptoJS.SHA1(password).toString();
console.log({md5_password, sha1_password, length: md5_password.length})
```

### 对称加密算法

```
// AES算法 - ECB模式
// 在UTF-8字符集编码下1个英文字母/数字占1字节，所以key等于16字节。
let key = '0123456789abcdef';
var config = {
  // ECB 模式
  mode: CryptoJS.mode.ECB,
  // Pkcs7 填充模式
  padding: CryptoJS.pad.Pkcs7,
}
let aes_ecb_encrypt_password = CryptoJS.AES.encrypt(password, key, config).toString();
let aes_ecb_decrypt_password = CryptoJS.AES.decrypt(aes_ecb_encrypt_password, key, config).toString(CryptoJS.enc.Utf8);
console.log({aes_ecb_encrypt_password, aes_ecb_decrypt_password})

// AES算法 - CBC模式
// 指定初始向量
let iv = CryptoJS.enc.Utf8.parse('12345678')
var config = {
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
  iv,
}
let aes_cbc_encrypt_password = CryptoJS.AES.encrypt(password, key, config).toString();
let aes_cbc_decrypt_password = CryptoJS.AES.decrypt(aes_cbc_encrypt_password, key, config).toString(CryptoJS.enc.Utf8);
console.log({aes_cbc_encrypt_password, aes_cbc_decrypt_password})
```

### 非对称加密算法

```
// 非对称加密算法 - 加密
// 提前生成的公钥，公钥给别人，用于加密
let public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN\n' +
  'FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76\n' +
  'xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4\n' +
  'gwQco1KRMDSmXSMkDwIDAQAB';
var encrypt = new JSEncrypt();
encrypt.setPublicKey(public_key);
var encrypted_password = encrypt.encrypt(password);

// 非对称加密算法 - 解密
// 提前生成的私钥，私钥自己保管，用于解密
var private_key = "MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ\n" +
  "WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR\n" +
  "aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB\n" +
  "AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv\n" +
  "xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH\n" +
  "m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd\n" +
  "8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF\n" +
  "z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5\n" +
  "rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM\n" +
  "V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe\n" +
  "aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil\n" +
  "psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz\n" +
  "uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876"
var decrypt = new JSEncrypt();
decrypt.setPrivateKey(private_key);
var uncrypted_password = decrypt.decrypt(encrypted_password);
console.log({encrypted_password, uncrypted_password})
```

参考：

https://www.bilibili.com/video/BV17t4y1f7oE/ 

        数据加密(publicKey)
客户端  -------------------->   服务端

客户端数据加密发送到服务端：

* 把服务端提供的公钥 publicKey 硬编码到前端中。
* 前端通过公钥生成加密数据。
* 服务端通过私钥解密数据。

服务端数据加密发送到客服端：

* 前端生成 publicKey privateKey 放到内存中。
* 前端使用服务端公钥加密 publicKey 得到加密后的 publicKey。
* 前端把加密后的 publicKey 放到 WebSocket URL 的参数中发送到服务端。（或建立WebSocket连接后首先把加密后的 publicKey 发送到服务端）
* 服务端解密URL参数值数据拿到 publicKey。
* 服务端通过 publicKey 加密数据发送到前端。
* 前端拿到数据再通过 privateKey 解密数据。

