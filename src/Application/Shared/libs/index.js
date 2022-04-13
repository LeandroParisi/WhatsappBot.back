const status = require('./statusDictionary')
const {
  errorMessages, validationErrors, responseMessages, errorTypes,
} = require('./messagesDictionary')
const METHODS = require('./methods')

module.exports = {
  status,
  errorMessages,
  resMessages: responseMessages,
  validationErrors,
  METHODS,
  errorTypes,
}
