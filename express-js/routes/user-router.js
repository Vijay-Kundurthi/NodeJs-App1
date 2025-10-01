const express = require('express');

// Get router from express
const router = express.Router();

// a middleware function to display current time for all user request.
router.use((req, res, next) => {
    console.log("User Time: ", new Date().toString());
    next();
})
// Define user object
const user = [
    {id:1, name: 'vijay'},
    {id:2, name: 'kundurthi'},
    {id:3, name: 'Raj'},
]
// GET api for get all user list
router.get('/get', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.org/users');
        const users = await response.json();
        //res.render('user', users);
        res.send(users)
    } catch(err) {
        res.send(err)
    }
   
});
// POST api for adding new user to user table
router.post('/add', (req, res) => {
    const id = user.length + 1;
    const { name } = req.body;
    const newUser = {
        id: id,
        name: name
    }
    user.push(newUser);
    res.json(user);
});

// PUT api for updating exiting user
router.put('/update', (req, res) => {
   res.send('updated the user successfully..');
});

// DELETE api to delete the user
router.delete('/delete', (req, res) => {
   res.send('user deleted sucessfully..');
});

module.exports = router;