const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./user-router');

// Middleware to parse JSON request bodies
app.use(express.json())

// set view engine to embeded HTML view
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount the users router on path /user
app.use('/users', userRouter);

// Listen server response
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})