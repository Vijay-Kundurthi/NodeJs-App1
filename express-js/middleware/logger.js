const express = require('express');
const app = express();

const loggerFn = (req, res, next) => {
    console.log('Logged..');
    next();
}

//add loggerFn to middleware
app.use(loggerFn);
app.get('/', (req, res) => {
  //  console.log('/ get route');
    res.send('Hello World..!');
});

app.listen(3000, ()=> console.log('server is running on 3000'))