const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require("node:crypto");

const {publicKey, privateKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048, // key size
    publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
    }
});

console.log('publicKey:', publicKey);
console.log('privateKey:', privateKey);

const message = 'password';
// encrypt the message
const encrypted = publicEncrypt(publicKey, Buffer.from(message))
console.log('encrypted:', encrypted.toString('base64'));

// decrypt the message
const decrypted = privateDecrypt(privateKey, encrypted);
console.log('decrypted:', decrypted.toString());