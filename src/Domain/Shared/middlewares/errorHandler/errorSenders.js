const { status, errorMessages, errorTypes } = require('../../libs');
const { extractValidationErrors } = require('./utils');

const sendCustomError = (err, res) => {
  const { statusCode, message } = err;

  if (!statusCode) {
    return res.status(status.internalError).json({
      type: errorTypes.customError,
      error: errorMessages.internalError,
    });
  }

  return res.status(statusCode).json({
    type: errorTypes.customError,
    error: message,
  });
};

const sendValidationError = (error, res) => {
  const errors = extractValidationErrors(error);
  res
    .status(status.unprocessableEntity)
    .json({ type: errorTypes.validationError, error: errors });
};

module.exports = { sendCustomError, sendValidationError };
