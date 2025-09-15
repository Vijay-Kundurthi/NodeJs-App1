const {
  generateKeyPairSync,
  publicEncrypt,
  constants,
  privateDecrypt,
} = require("node:crypto");

// Generate a public and private keys
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // keys size
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});
console.log("publicKey:", publicKey);
console.log("privateKey:", privateKey);

// encrypt the text with publicEncrypt
function encryptedWithPublicKey(text, publicKey) {
  const buffer = Buffer.from(text, "utf8");
  const encrypted = publicEncrypt(
    {
      key: publicKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
    },
    buffer
  );
  return encrypted.toString("base64");
}

// Decrypt the encrypted data with private decrypt
function decryptWithPrivateDecrypt(encrypted, privateKey) {
  const buffer = Buffer.from(encrypted, "base64");
  const decrypted = privateDecrypt(
    {
      key: privateKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
    },
    buffer
  );
  return decrypted.toString("utf8");
}
const message = "This is my encrypted RSA";
const encrypted = encryptedWithPublicKey(message, publicKey);
console.log("encrypted:", encrypted);
const decrypted = decryptWithPrivateDecrypt(encrypted, privateKey);
console.log("decrypted:", decrypted);
