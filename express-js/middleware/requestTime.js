const app = require('express')();

const requestTime = function(req, res, next) {
    const time = new Date().toString();
    console.log('Time: '+time);
    req.requestTime = time;
    next();
}
app.use(requestTime);
app.get('/', (req, res) =>{
    let requestTime = 'Hello world<br>';
    requestTime = requestTime + `Requested at: ${req.requestTime}`;
    res.send(requestTime);
});
app.listen(3000);