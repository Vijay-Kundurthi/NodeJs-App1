const crypto = require('node:crypto');

const key = 'mySecreatKey';
const message = 'I am a signature message!';
// creat a function to generate secreat key
function createSecreatKey(key) {
    return crypto.scryptSync(key, key, 64).toString('hex');
}
// create a function to create signature
function createSignature(message, key) {
    const hmac = crypto.createHmac('sha256', createSecreatKey(key))
          .update(message)
          .digest('hex');
    return hmac;
}
function verifySignature(signature, message, key) {
    const expectedSignature = createSignature(message, key);
    return crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
    );

}
// GET signature from createSignature function
try {
    const signature = createSignature(message, key);
    console.log('signature:', signature);
    console.log('message:', message);
    // verify the signature
    const valid = verifySignature(signature, message, key);
    console.log('Signature valid:', valid);
    const invalid = verifySignature(signature, 'TemparedSignature', key);
    console.log('TemparedSignature valid:', invalid);
} catch (error) {
    console.log('Verification failed:', error);
}
