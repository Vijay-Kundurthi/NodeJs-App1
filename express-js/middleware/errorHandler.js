const AppError = require("../utils/AppError");

const errorHandleMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal server error, please try again after some time'
    })
}

const resourceNotFound = (req, res, next) => {
    const error = new AppError(404, 'Page not found...');
    next(error);
}

module.exports = {errorHandleMiddleware, resourceNotFound}