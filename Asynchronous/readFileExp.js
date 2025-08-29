// require fs module
const fs = require('fs');
console.log('1. Start reading the file..');
fs.readFile('expFn.js', 'utf-8', (err, data)=> {
    if(err) {console.log('Error in file loading:', err)}
    console.log('2. data is loading from the file', data)
})
console.log('3. End reading the file');