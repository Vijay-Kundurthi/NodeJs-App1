const Joi = require("joi");


const validateUser = Joi.object({
    name: Joi.string().alphanum().min(5).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(18).max(80)
});

module.exports = validateUser;