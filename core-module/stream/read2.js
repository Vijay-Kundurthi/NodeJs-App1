const { createReadStream } = require("node:fs");

const readStream = createReadStream('../file-IO/files/largedata.txt', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024, // 64kb chunks
});

readStream.on('readable', ()=> {
    let chunk;
    while (null !== (chunk = readStream.read())) {
        console.log(`Received ${chunk.length} bytes of data.`);
        console.log(chunk);
    }
});
readStream.on('end', ()=> {
    console.log('no more data to read.');
})

readStream.on('error', (error) => {
    console.log(error);
})
