const { URL } = require("node:url");

const url = new URL('https://www.sample-code.com/aws/build/user?id=10&name=vijay');

console.log('href:', url.href);
console.log('protocol:', url.protocol);
console.log('host:', url.host);
console.log('hostname:', url.hostname);
console.log('pathname:', url.pathname);
console.log('searchParams:', url.searchParams.toString());
console.log('pathname:', url.search);