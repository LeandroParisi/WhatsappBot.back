const status = require('./statusDictionary');
const { errorMessages, validationErrors } = require('./messagesDictionary');
const resMessages = require('./responseDictionary');
const METHODS = require('./methods');

module.exports = {
  status,
  errorMessages,
  resMessages,
  validationErrors,
  METHODS,
};
