const { status, messages, resMessages } = require('../../libs');
const { extractValidationErrors } = require('./utils');

const sendCustomError = (err, res) => {
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

const sendValidationError = (error, res) => {
  const errors = extractValidationErrors(error);
  res.status(status.unprocessableEntity).json({ type: resMessages.invalidBody, error: errors });
};

module.exports = { sendCustomError, sendValidationError };
