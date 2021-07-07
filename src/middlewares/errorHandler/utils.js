const { defaultErrorsDict, defaultPathDict } = require('./lib');

const translateDefaultError = (errorMessage) => {
  const translatedMessage = defaultErrorsDict[errorMessage];
  if (translatedMessage) return translatedMessage;
  return errorMessage;
};

const extractValidationErrors = ({ errors }) => {
  const { path, message } = errors[0];
  return ({
    invalidField: defaultPathDict[path] || path,
    message: translateDefaultError(message),
  });
};

module.exports = { extractValidationErrors };
