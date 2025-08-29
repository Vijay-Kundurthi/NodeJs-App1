const {setTimeout: delay}= require('node:timers/promises');

const promise = delay(1000).then(() => 'First task completed..');

promise
  .then((result) => {
    console.log(result);
    return delay(1000).then(() => "Second task completed..");
  })
  .then((result2) => console.log(result2))
  .catch((err) => console.log(err));