/**
 * 消息摘要算法示例
 * 使用 crypto-js 库实现常见的哈希算法
 * 
 * 安装: npm install crypto-js
 */

const CryptoJS = require('crypto-js');

// 原始数据
const message = 'Hello, this is a test message for hashing!';

console.log('=== 消息摘要算法示例 ===\n');
console.log('原始消息:', message);
console.log('\n');

// 1. MD5 哈希
const md5Hash = CryptoJS.MD5(message).toString();
console.log('1. MD5 哈希:');
console.log('   结果:', md5Hash);
console.log('   长度:', md5Hash.length, '字符 (128位)');
console.log('\n');

// 2. SHA-1 哈希
const sha1Hash = CryptoJS.SHA1(message).toString();
console.log('2. SHA-1 哈希:');
console.log('   结果:', sha1Hash);
console.log('   长度:', sha1Hash.length, '字符 (160位)');
console.log('\n');

// 3. SHA-256 哈希
const sha256Hash = CryptoJS.SHA256(message).toString();
console.log('3. SHA-256 哈希:');
console.log('   结果:', sha256Hash);
console.log('   长度:', sha256Hash.length, '字符 (256位)');
console.log('\n');

// 4. SHA-512 哈希
const sha512Hash = CryptoJS.SHA512(message).toString();
console.log('4. SHA-512 哈希:');
console.log('   结果:', sha512Hash);
console.log('   长度:', sha512Hash.length, '字符 (512位)');
console.log('\n');

// 5. HMAC-SHA256 (带密钥的哈希)
const secret = 'my-secret-key';
const hmacHash = CryptoJS.HmacSHA256(message, secret).toString();
console.log('5. HMAC-SHA256 (带密钥):');
console.log('   密钥:', secret);
console.log('   结果:', hmacHash);
console.log('\n');

// 验证哈希的不可逆性
console.log('=== 特性验证 ===');
console.log('1. 相同输入产生相同输出:');
const hash1 = CryptoJS.SHA256(message).toString();
const hash2 = CryptoJS.SHA256(message).toString();
console.log('   第一次:', hash1);
console.log('   第二次:', hash2);
console.log('   是否相同:', hash1 === hash2);
console.log('\n');

console.log('2. 微小改变产生完全不同的哈希:');
const message2 = 'Hello, this is a test message for hashing.'; // 末尾改为句号
const hash3 = CryptoJS.SHA256(message2).toString();
console.log('   原消息哈希:', sha256Hash);
console.log('   新消息哈希:', hash3);
console.log('   是否相同:', sha256Hash === hash3);
