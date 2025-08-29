// stat() method will check file stat
const { stat, statSync } = require("node:fs");

stat('./files/sample.txt', (err, data) => {
    if(err)  {
        console.log('Error:', err);
        return;
    }
    console.log('Callback - Result:', data);
});

function callStatSync() {
    try {
        const data = statSync('./files/sample.txt');
         console.log('Sync - Result:', data);
    } catch(err) {
        console.log('Error:', err);
    }
}
callStatSync();