const validateUser = require('../middleware/addUserValidator');
const User = require('../models/User');
const AppError = require('../utils/AppError');

// create a user object
const user = new User();

function UserController() {
    // create a request GET / to get all users
    const getUsers = async (req, res, next) => {
        const { id } = req.query;
        try {
            if (id) {
               const users = await user.findById(id);
               if(users) {
                   res.status(200).json(users); 
                   return;
               } else {
                 const error = new AppError(404, 'Page not found')
                 next(error);
               }
            }
            const users = await user.findAll();
            res.status(200).json(users);
        } catch(err) {
            const error = new AppError(500, 'Service is down..');
            next(error);
        }
        
    }

    const addUser = async (req, res, next) => {
        const body = req.body;
        const { error }= validateUser.validate(body);
        // add business logic
        if (error) {
            const err = new AppError(400, error.details[0].message);
            next(err);
        } else {
            res.status(201).send('User is added successfully..!')
        }

    }
    return {
        getUsers,
        addUser
    };
};

module.exports = UserController;