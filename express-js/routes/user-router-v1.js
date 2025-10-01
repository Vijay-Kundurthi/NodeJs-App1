const express = require('express');
const UserController = require('../controller/userController');
const router = express.Router();

const { getUsers, addUser } = UserController();
//Get request for getting all uses list from user controller
router.get('/users', getUsers);
router.post('/add-user', addUser);
module.exports = router;