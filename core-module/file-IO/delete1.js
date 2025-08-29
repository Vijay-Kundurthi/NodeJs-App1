const { access, unlink } = require("fs/promises");

async function deleteSingleFile() {
  //define a file path
  const filePath = "./files/sample.txt";
  try {
    // find whether file or directory is exist
    await access(filePath);
    // delete the file or directory
    await unlink(filePath)
    console.log('File or directory deleted successfully..');
  } catch (error) {
    if (error.code === 'ENOENT')
        console.log('no such file or directory.');
    else 
        console.log(error);
  }
}

deleteSingleFile();