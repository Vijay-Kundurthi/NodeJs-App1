import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Event is started...');
});

eventEmitter.emit('start');