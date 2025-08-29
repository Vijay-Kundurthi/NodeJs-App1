const { writeFile } = require("fs/promises");

async function writeToFile() {
    try {
        const fileName = './files/writedata.txt';
        await writeFile(fileName, 'Welcome to the nodejs programee', 'utf-8');
        console.log('Data is uploaded successfully!')
    } catch(err) {
        console.log('Error: ', err);
    }
}

const writeToJson = async () => {
    const fileName = './files/sample.txt';
    const user = [
        {userId: 1, username: 'vijay', age: 31},
        {userId: 2, username: 'Raj', age: 31},
        {userId: 3, username: 'Tumu', age: 32},
        {userId: 4, username: 'Shamukha', age: 30},
    ]
    const userJson = JSON.stringify(user, null, 2);
    try {
        await writeFile(fileName, userJson, 'utf-8');
        console.log('Json data is uploaded successfully!')
        
    } catch (error) {
        onsole.log('Json Error: ', err);
    }
}
writeToJson();
writeToFile();