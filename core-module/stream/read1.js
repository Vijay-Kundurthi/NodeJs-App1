const fs = require('node:fs');

// create a readable stream to read the file
const readableStream = fs.createReadStream('../file-IO/files/largedata.txt1', {
    encoding: 'utf-8',
    highWaterMark: 64 * 1024 // 64 kb
});

// create a listern to start the even for reading the data chunk by chunk
readableStream.on('data', (chunk)=> {
    console.log(`Received ${chunk.length} bytes of data.`);
    console.log(chunk);
});

// create a end listener
readableStream.on('end', () => {
    console.log('No more data to read..');
})

//create a error event for listerning error while reading data from file.
readableStream.on('error', (error)=> {
    if(error.code = 'ENOENT')
        console.log('no such file or directory to open');
    else 
        console.log(error);
})