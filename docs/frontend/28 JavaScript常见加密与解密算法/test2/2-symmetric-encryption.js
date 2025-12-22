/**
 * 对称加密算法示例
 * 使用 crypto-js 库实现 AES 加密
 * 
 * 安装: npm install crypto-js
 */

const CryptoJS = require('crypto-js');

// 原始数据
const message = 'This is a secret message that needs to be encrypted!';
const secretKey = 'my-secret-key-123456'; // 密钥

console.log('=== 对称加密算法示例 (AES) ===\n');
console.log('原始消息:', message);
console.log('密钥:', secretKey);
console.log('\n');

// 1. AES 加密
console.log('1. AES 加密:');
const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log('   加密结果:', encrypted);
console.log('\n');

// 2. AES 解密
console.log('2. AES 解密:');
const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey).toString(CryptoJS.enc.Utf8);
console.log('   解密结果:', decrypted);
console.log('   是否与原文相同:', decrypted === message);
console.log('\n');

// 3. 使用不同的加密模式和填充
console.log('3. 高级配置 (指定 IV 和模式):');
const key = CryptoJS.enc.Utf8.parse('1234567890123456'); // 16字节密钥
const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // 16字节初始化向量

const encryptedAdvanced = CryptoJS.AES.encrypt(message, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC, // CBC 模式
  padding: CryptoJS.pad.Pkcs7, // PKCS7 填充
}).toString();

console.log('   密钥 (Hex):', key.toString());
console.log('   IV (Hex):', iv.toString());
console.log('   加密结果:', encryptedAdvanced);

const decryptedAdvanced = CryptoJS.AES.decrypt(encryptedAdvanced, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
}).toString(CryptoJS.enc.Utf8);

console.log('   解密结果:', decryptedAdvanced);
console.log('\n');

// 4. DES 加密示例
console.log('4. DES 加密示例:');
const desEncrypted = CryptoJS.DES.encrypt(message, secretKey).toString();
console.log('   DES 加密结果:', desEncrypted);

const desDecrypted = CryptoJS.DES.decrypt(desEncrypted, secretKey).toString(CryptoJS.enc.Utf8);
console.log('   DES 解密结果:', desDecrypted);
console.log('\n');

// 5. Triple DES 加密示例
console.log('5. Triple DES (3DES) 加密示例:');
const tripleDesEncrypted = CryptoJS.TripleDES.encrypt(message, secretKey).toString();
console.log('   3DES 加密结果:', tripleDesEncrypted);

const tripleDesDecrypted = CryptoJS.TripleDES.decrypt(tripleDesEncrypted, secretKey).toString(
  CryptoJS.enc.Utf8,
);
console.log('   3DES 解密结果:', tripleDesDecrypted);
console.log('\n');

// 6. 错误密钥解密演示
console.log('6. 使用错误密钥解密:');
const wrongKey = 'wrong-key-123456';
try {
  const wrongDecrypted = CryptoJS.AES.decrypt(encrypted, wrongKey).toString(CryptoJS.enc.Utf8);
  console.log('   解密结果:', wrongDecrypted || '(空字符串 - 解密失败)');
  console.log('   是否与原文相同:', wrongDecrypted === message);
} catch (error) {
  console.log('   解密失败:', error.message);
}
console.log('\n');

// 7. 实用函数封装
console.log('7. 实用函数封装示例:');

function aesEncrypt(text, key) {
  return CryptoJS.AES.encrypt(text, key).toString();
}

function aesDecrypt(ciphertext, key) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

const testMessage = '用户敏感数据';
const testKey = 'secure-key-2024';
const encrypted2 = aesEncrypt(testMessage, testKey);
const decrypted2 = aesDecrypt(encrypted2, testKey);

console.log('   原始数据:', testMessage);
console.log('   加密后:', encrypted2);
console.log('   解密后:', decrypted2);
console.log('   验证成功:', testMessage === decrypted2);
