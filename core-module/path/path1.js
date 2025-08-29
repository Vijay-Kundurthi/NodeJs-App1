const path = require("node:path");

console.log('Directory:',__dirname); // built-in commonjs
console.log('Filename:',__filename); // built-in commonjs

// building paths relative to current module
const appConfigPath = path.join(__dirname, 'config', 'app-config.json');
console.log('appConfigPath:', appConfigPath);

// Getting directory name using  path.dirname()
console.log('Directory-path:',path.dirname(__filename));

