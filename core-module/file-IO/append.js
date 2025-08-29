const fs = require('node:fs/promises');

const appendFileFn = async () => {
    try {
        const appendText = `Current date : ${new Date().toISOString()}\n`;
        await fs.appendFile('./files/sample.txt', appendText, 'utf-8');
        console.log('Data is appeded into the file: ');
    } catch (error) {
        console.log('Error: while appending the data into the file..', error);
    }
}

appendFileFn();