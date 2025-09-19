import CryptoJS from 'crypto-js';

export function encrypt(data) {
  return CryptoJS.AES.encrypt(data, process.env.ENCRYPTION_KEY).toString();
}

export function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.ENCRYPTION_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
