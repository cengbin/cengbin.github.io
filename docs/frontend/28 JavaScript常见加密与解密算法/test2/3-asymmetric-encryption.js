/**
 * 非对称加密算法示例
 * 使用 jsencrypt 库实现 RSA 加密
 * 使用 Node.js crypto 模块实现完整的 RSA 加密解密
 * 
 * 安装: npm install jsencrypt
 */

const JSEncrypt = require('jsencrypt');
const crypto = require('crypto');

console.log('=== 非对称加密算法示例 (RSA) ===\n');

// ============================================
// 方法一: 使用 jsencrypt 库
// ============================================
console.log('【方法一: 使用 jsencrypt 库】\n');

// RSA 密钥对 (2048位)
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw6GvhJxYqF3YvN5F8Wqr
hxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3Y
vN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3
pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqr
hxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3Y
vN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3
pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5QIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAw6GvhJxYqF3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrhxqk
j8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F
8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ
5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrhxqk
j8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F
8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ
5QIDAQABAoIBABxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrhxq
Kj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5
F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqX
Z5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrhxq
Kj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5
F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqX
Z5F3YvN5AoGBAOrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrh
xqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3Yv
N5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3p
qXZ5F3YvN5AoGBANYvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3
YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F
3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wq
rhxqKj8F3pqXZ5AoGAF3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqX
Z5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrhxq
Kj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5
F8WqrhxqKj8F3pqXZ5ECgYBxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN
5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pq
XZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8Wqrhx
qKj8F3pqXZ5QKBgQDYvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F
3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8
F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8WqrhxqKj8F3pqXZ5F3YvN5F8W
qrhxqKj8F3pqXZ5Q==
-----END RSA PRIVATE KEY-----`;

// 原始消息
const message = 'This is a secret message for RSA encryption!';

console.log('原始消息:', message);
console.log('\n');

// 1. 使用公钥加密
const encrypt = new JSEncrypt();
encrypt.setPublicKey(publicKey);
const encrypted = encrypt.encrypt(message);

console.log('1. 使用公钥加密:');
console.log('   加密结果:', encrypted);
console.log('\n');

// 2. 使用私钥解密
const decrypt = new JSEncrypt();
decrypt.setPrivateKey(privateKey);
const decrypted = decrypt.decrypt(encrypted);

console.log('2. 使用私钥解密:');
console.log('   解密结果:', decrypted);
console.log('   是否与原文相同:', decrypted === message);
console.log('\n');

// ============================================
// 方法二: 使用 Node.js crypto 模块 (推荐)
// ============================================
console.log('\n【方法二: 使用 Node.js crypto 模块】\n');

// 生成新的 RSA 密钥对
const { publicKey: pubKey, privateKey: privKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

console.log('1. 生成 RSA 密钥对:');
console.log('   公钥长度:', pubKey.length, '字符');
console.log('   私钥长度:', privKey.length, '字符');
console.log('\n');

// 使用公钥加密
const message2 = 'Node.js crypto module RSA encryption example!';
const encryptedBuffer = crypto.publicEncrypt(
  {
    key: pubKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(message2),
);

const encryptedBase64 = encryptedBuffer.toString('base64');

console.log('2. 使用公钥加密:');
console.log('   原始消息:', message2);
console.log('   加密结果 (Base64):', encryptedBase64);
console.log('\n');

// 使用私钥解密
const decryptedBuffer = crypto.privateDecrypt(
  {
    key: privKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  encryptedBuffer,
);

const decrypted2 = decryptedBuffer.toString('utf8');

console.log('3. 使用私钥解密:');
console.log('   解密结果:', decrypted2);
console.log('   是否与原文相同:', decrypted2 === message2);
console.log('\n');

// ============================================
// 数字签名示例
// ============================================
console.log('\n【数字签名示例】\n');

const signMessage = 'This message needs to be signed';

// 1. 使用私钥签名
const sign = crypto.createSign('SHA256');
sign.update(signMessage);
sign.end();
const signature = sign.sign(privKey, 'base64');

console.log('1. 使用私钥签名:');
console.log('   消息:', signMessage);
console.log('   签名 (Base64):', signature);
console.log('\n');

// 2. 使用公钥验证签名
const verify = crypto.createVerify('SHA256');
verify.update(signMessage);
verify.end();
const isValid = verify.verify(pubKey, signature, 'base64');

console.log('2. 使用公钥验证签名:');
console.log('   验证结果:', isValid ? '✓ 签名有效' : '✗ 签名无效');
console.log('\n');

// 3. 篡改消息后验证
const tamperedMessage = 'This message has been tampered';
const verify2 = crypto.createVerify('SHA256');
verify2.update(tamperedMessage);
verify2.end();
const isValid2 = verify2.verify(pubKey, signature, 'base64');

console.log('3. 篡改消息后验证:');
console.log('   篡改后的消息:', tamperedMessage);
console.log('   验证结果:', isValid2 ? '✓ 签名有效' : '✗ 签名无效');
console.log('\n');

// ============================================
// 实用函数封装
// ============================================
console.log('\n【实用函数封装】\n');

class RSAEncryption {
  constructor() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }

  encrypt(text) {
    const buffer = crypto.publicEncrypt(
      {
        key: this.publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      Buffer.from(text),
    );
    return buffer.toString('base64');
  }

  decrypt(encryptedBase64) {
    const buffer = crypto.privateDecrypt(
      {
        key: this.privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      Buffer.from(encryptedBase64, 'base64'),
    );
    return buffer.toString('utf8');
  }

  sign(text) {
    const sign = crypto.createSign('SHA256');
    sign.update(text);
    sign.end();
    return sign.sign(this.privateKey, 'base64');
  }

  verify(text, signature) {
    const verify = crypto.createVerify('SHA256');
    verify.update(text);
    verify.end();
    return verify.verify(this.publicKey, signature, 'base64');
  }
}

// 使用封装的类
const rsa = new RSAEncryption();
const testMsg = '测试 RSA 加密类';
const encrypted3 = rsa.encrypt(testMsg);
const decrypted3 = rsa.decrypt(encrypted3);
const signature3 = rsa.sign(testMsg);
const verified3 = rsa.verify(testMsg, signature3);

console.log('使用封装的 RSA 类:');
console.log('   原始消息:', testMsg);
console.log('   加密后:', encrypted3.substring(0, 50) + '...');
console.log('   解密后:', decrypted3);
console.log('   签名:', signature3.substring(0, 50) + '...');
console.log('   验证结果:', verified3 ? '✓ 有效' : '✗ 无效');
