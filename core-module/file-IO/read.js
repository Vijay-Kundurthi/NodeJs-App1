const { readFile: readFilefs, readFileSync: readFileSyncfs } = require("node:fs");
const { readFile: readFilefsPromise } = require("node:fs/promises");

// asynchrous standard callback 
const readFileAsycfsFn = () => {
    readFilefs('./files/sample.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log('------Error: readFileAsycfs-----');
            console.log(err);
            return;
        }
        console.log('------readFileAsycfs------');
        console.log(data);
    });
}

const readFileSyncfsFn = () => {
    try {
        const data = readFileSyncfs('./files/sample.txt', 'utf-8');
         console.log('------readFileSyncfs------');
        console.log(data);
    } catch (err) {
        console.log('------Error: readFileSyncfs-----');
        console.log(err);
    }
}

async function readFilefsPromiseFn() {
   try {
        const data = await readFilefsPromise('./files/sample.txt', 'utf-8');
         console.log('------readFilefsPromise------');
        console.log(data);
    } catch (err) {
        console.log('------Error: readFilefsPromise-----');
        console.log(err);
    }
    
}
readFileAsycfsFn();
readFileSyncfsFn(); 
readFilefsPromiseFn();