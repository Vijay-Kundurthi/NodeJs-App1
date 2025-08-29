const url = require('node:url');

const appUrl = 'https://sample.com/user?id=123&name=vijay';

const parsedUrl = url.parse(appUrl, true);

// display all url fields
console.log('href:', parsedUrl.href);
console.log('host:', parsedUrl.host);
console.log('hostname', parsedUrl.hostname);
console.log('path:', parsedUrl.path);
console.log('pathname:', parsedUrl.pathname);
console.log('search:', parsedUrl.search);
console.log('query:', parsedUrl.query);
console.log('protocal:', parsedUrl.protocol);