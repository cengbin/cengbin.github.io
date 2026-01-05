const CryptoJS = require('crypto-js');

/**
 * AES-CBC 解密（零填充）
 * data 参数应该是 Base64 编码的字符串
 */
function decodeAes(data, key, iv) {
  try {
    const keyParsed = CryptoJS.enc.Utf8.parse(key);
    const ivParsed = CryptoJS.enc.Utf8.parse(iv);

    const decrypted = CryptoJS.AES.decrypt(data, keyParsed, {
      iv: ivParsed,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    }).toString(CryptoJS.enc.Utf8);

    return decrypted;
  } catch (err) {
    console.error('解密失败：', err);
    return null;
  }
}

/**
 * AES-CBC 加密（零填充）
 * 返回 Base64 编码的密文
 */
function encodeAes(data, key, iv) {
  try {
    // 如果是对象，先转为 JSON 字符串
    const dataStr = typeof data === 'object' ? JSON.stringify(data) : String(data);

    const keyParsed = CryptoJS.enc.Utf8.parse(key);
    const ivParsed = CryptoJS.enc.Utf8.parse(iv);
    const encrypted = CryptoJS.AES.encrypt(dataStr, keyParsed, {
      iv: ivParsed,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
  } catch (err) {
    console.error('加密失败：', err);
    return null;
  }
}

/**
 * 完整解密流程：直接对 Base64 字符串进行 AES 解密
 */
function decode(encryptedData, key, iv) {
  const decrypted = decodeAes(encryptedData, key, iv);
  return decrypted;
}

/**
 * 完整加密流程：AES加密（返回的就是 Base64 格式）
 */
function encode(data, key, iv) {
  const encrypted = encodeAes(data, key, iv);
  return encrypted;
}

const encryptedData = 'rR+PeOkK1n/wGmcQh0mYmJCrJmS7HypVdi9sKuE/QCk1NElhEto4iQAVkFdOgs9Jj2SwhBpyXORy5NzVmSBXGqSDkcKeu6CLTL7o8Vfmw1PsdYbPiNtwSd5w4J0eMuLJxM7XVajC3RiVx8jo948AoWrGZnSha8h2gU4n+3idv8rpJeI3mW/K1WnOB8xcV9vmMeyco0+Sc8oePKW2r6BolQCBYtx0P4z82weuSk/S4Q/lkMbodRdaMVIURayVU4Rk3DPqukIGSWp816FMY7pze5EpEkJdborj1Tj0TuI4r8Oat3rnObDq1aVyVp+BPRH8RH28wP++d660QLdgeLdY2/PX0GXjxJiTNtx9pm4E0oQ=';
const key = 'FWey55Ic4l06AjAr';
const iv = 'FWey55Ic4l06AjAr';

const result_str = decode(encryptedData, key, iv);
const result_data = JSON.parse(result_str);
console.log('解密结果：', {result_str, result_data});

const result2_str = encode(result_data, key, iv);
console.log('加密结果：', result2_str);

console.log(encryptedData == result2_str);