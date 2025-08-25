#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your programming language: ', (answer)=> {
    console.log('You said:', answer);
    rl.close();
})