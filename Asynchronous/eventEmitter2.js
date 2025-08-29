import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('event', function firstListener() {
    console.log('First listener called..')
})

eventEmitter.on('event', function scondListener(param1, param2) {
    console.log('Sencond Listener called.. two params:', param1, param2)
})

eventEmitter.on('event', function thirdListener(...rest) {
    console.log('Third Listener called with rest values:', ...rest);
})

eventEmitter.emit('event');
eventEmitter.emit('event', 'vijay', 'raj');
eventEmitter.emit('event', 1,2,3,4);