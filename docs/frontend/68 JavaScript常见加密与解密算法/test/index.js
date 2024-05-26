const CryptoJS = require('crypto-js');
const JSEncrypt = require('jsencrypt');

let password = '123456';
console.log({password})

// 消息摘要算法 - MD5
let md5_password = CryptoJS.MD5(password).toString();
// 消息摘要算法 - SHA1
let sha1_password = CryptoJS.SHA1(password).toString();
console.log({md5_password, sha1_password, length: md5_password.length})

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