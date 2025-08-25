#!/usr/bin/env node

const fs = require('fs');

fs.readdir('.', (err, files)=> {
    if(err) {
        console.log('Error reading file: ', err);
        return;
    }
    files.forEach((file) => console.log(file))
})
