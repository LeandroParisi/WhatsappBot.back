const extractValidationErrors = ({ errors }) => errors.map(({ message, path }) => ({
  invalidField: path,
  message,
}));

module.exports = { extractValidationErrors };
