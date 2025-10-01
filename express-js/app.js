const express = require('express');
const v1User = require('./routes/user-router-v1');
const {errorHandleMiddleware, resourceNotFound }= require('./middleware/errorHandler');
const app = express();

//use express.json() middleware for json body parser
app.use(express.json())
app.use('/user/v1', v1User);

// Route default error if no route match
app.use(resourceNotFound)
// use error handle middleware for global exception
app.use(errorHandleMiddleware);

// start the server
app.listen(3000, () => console.log('Server is running on the http://localhost:3000'))