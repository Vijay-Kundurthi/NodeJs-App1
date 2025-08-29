console.log('Start');

setTimeout(() => { // third async
    console.log('setTimeout');
}, 0);
setImmediate(() => { // second async
    console.log('setImmediate');
});

process.nextTick(() => { // first async
  console.log('process.nextTick');
});

console.log('End');