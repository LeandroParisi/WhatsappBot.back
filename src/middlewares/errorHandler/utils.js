const { defaultErrorsDict } = require('./lib');

const translateDefaultError = (errorMessage) => {
  const translatedMessage = defaultErrorsDict[errorMessage];
  if (translatedMessage) return translatedMessage;
  return errorMessage;
};

const extractValidationErrors = ({ errors }) => errors.map(({ message, path }) => ({
  invalidField: path,
  message: translateDefaultError(message),
}));

module.exports = { extractValidationErrors };