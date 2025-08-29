import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

function getListener(name) {
    console.log(`Hello ${name}, How are you ?`)
}

// eventEmitter.on will do samething on event is modern ES version
eventEmitter.addListener('start', getListener);

eventEmitter.emit('start', 'Vijay');
// eventEmitter.off will do same thing 
eventEmitter.removeListener('start', getListener); // remove listerner
eventEmitter.emit('start', 'Vijay'); // No output displayed.

