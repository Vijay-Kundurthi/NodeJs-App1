const fs = require('node:fs');
const { Readable } = require("node:stream");
const { pipeline } = require('node:stream/promises');

const writeLargeFile = async () => {
    //create a readable stream for large file (basically data would come through HTTPs)
    const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`);
    const readStream = Readable.from(data);
    const writeStream = fs.createWriteStream('./files/largedata.txt');
    try {
        await pipeline(readStream, writeStream);
        console.log('Large steam data is pushed into the file successfully..');
    } catch (error) {
        console.log('Error:', error);
    }
}

writeLargeFile();