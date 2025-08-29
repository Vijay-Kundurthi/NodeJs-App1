const path = require('node:path');

// Get extension of the file
console.log('Extension:', path.extname('file.json'));
// parse the directory of file full details using path.parse()
console.log('result:', path.parse(__filename));
// Resolve relative navigation
console.log(path.normalize('/users/./docs/../data/file.txt')); // '/users/data/file.txt'

// Handle multiple consecutive slashes
console.log(path.normalize('/users//docs////file.txt')); // '/users/docs/file.txt'

// Windows-style paths (automatically handled)
console.log(path.normalize('C:\\users\\docs\\..\\file.txt')); // 'C:\\users\\file.txt'