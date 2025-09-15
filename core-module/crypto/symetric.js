const crypto = require('node:crypto');

const message = 'username=vijay@gmail.com?password=1234';
const salt = 'staticsalt';
const key = crypto.scryptSync(message, crypto.randomBytes(16), 32); // 32 bits = b4 bytes

// create a function to encrypted the message or data
const encrypt = (message, key) => {
    const iv = crypto.randomBytes(16); // initialization vector
    // Create a cipher with AES 256 algorithm
    const cypher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cypher.update(message, 'utf8', 'hex');
    encrypted += cypher.final('hex');
    return {
        encrypted: encrypted,
        iv: iv.toString('hex')
    };
}
const decrypt = (encrypted, key, iv) => {
   const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
   let decrypted = decipher.update(encrypted, 'hex', 'utf8');
   decrypted += decipher.final('utf8');
   return decrypted;
}

// get encrytion data from the messge
const {encrypted, iv} = encrypt(message, key);
const decrypted = decrypt(encrypted, key, iv);
console.log('iv:', iv);
console.log('Encrypted data:', encrypted);
console.log('Decrypted data:', decrypted);


