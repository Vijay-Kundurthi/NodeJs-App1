
const { readFile: read } = require("node:fs").promises;
const { log } = require("node:console");

async function readFile() {
    try {
        const data = await read('expFn.js', 'utf-8');
        log(data)
    } catch (err) {
        console.log('Error: ', err)
    }
}

readFile();