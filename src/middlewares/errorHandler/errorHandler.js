const { status, messages } = require('../../libs');
const { Sequelize } = require('../../models');

class FireError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const sendError = (err, res) => {
  const { statusCode, message } = err;

  if (!statusCode) {
    return res.status(status.internalError).json({
      message: messages.internalError,
    });
  }

  return res.status(statusCode).json({
    message,
  });
};

const errorHandler = (error, _req, res, _next) => {
  // console.log('CHEGOU NO ERROR HANDLER!!!');
  // console.log(error);
  // if (error instanceof Sequelize.ValidationError) {
  //   console.log('sequelize Error');
  // }
  // console.log(error);
  console.log(error);
  sendError(error, res);
};

const errorCatcher = (middleware) => async (req, res, next) => {
  try {
    await middleware(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = { errorHandler, FireError, errorCatcher };
