function callbackFn(param1, param2) {
    console.log(param1 + ' ' +param2);
}

setTimeout(callbackFn, 1000, 'Hello', 'Vijay');