const { defaultErrorsDict, defaultPathDict } = require('./lib');

const translateDefaultError = (errorMessage) => {
  const translatedMessage = defaultErrorsDict[errorMessage];
  if (translatedMessage) return translatedMessage;
  return errorMessage;
};

const extractValidationErrors = ({ errors }) => errors.map(({ message, path }) => ({
  invalidField: defaultPathDict[path],
  message: translateDefaultError(message),
}));

module.exports = { extractValidationErrors };
