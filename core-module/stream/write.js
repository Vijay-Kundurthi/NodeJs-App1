const fs = require('node:fs');

const createWriteStream = fs.createWriteStream('output.txt');
createWriteStream.write('Hello, ');
createWriteStream.write('Vijay, ');

createWriteStream.end();

// events are writable stream
createWriteStream.on('finish', ()=> {
    console.log('finished writing files into the file.');
});

createWriteStream.on('error', (error) => {
    console.log(error);
})