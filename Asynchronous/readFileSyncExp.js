// require fs module
const fs = require('fs');
console.log('1. Start reading the file..');
const read = fs.readFileSync('expFn.js', 'utf-8')
console.log('2. data is loading from the file', read)
console.log('3. End reading the file');