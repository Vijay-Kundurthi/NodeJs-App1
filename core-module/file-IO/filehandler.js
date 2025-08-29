const fs = require('node:fs').promises;

async function writeToFileHandler() {
    let fileHandler;
    try {
        // open a file or creates if file doesn't exist
        fileHandler = await fs.open('./files/output.txt', 'w');
        fileHandler.write('First line\n');
        fileHandler.write('second line\n');
        console.log('File create sucessfull..');
    } catch (error) {
        console.log('Error while writing data into the file:', error);
    } finally {
        if(fileHandler) {
            fileHandler.close();
        }
    }
}

writeToFileHandler();