#!/usr/bin/env node

const args = process.argv.slice(2); // skip node and script path
const arg1 = args[0] || 'Guest';

console.log(`Hello, ${arg1}!`);