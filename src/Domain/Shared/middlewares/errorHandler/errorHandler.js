/* eslint-disable no-unused-vars */
const { Sequelize } = require('../../../../models')
const { sendCustomError, sendValidationError } = require('./errorSenders')

class FireError extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const errorHandler = (error, _req, res, _next) => {
  console.log(error)
  if (error instanceof Sequelize.ValidationError) {
    return sendValidationError(error, res)
  }
  return sendCustomError(error, res)
}

const errorCatcher = (middleware) => async (req, res, next) => {
  try {
    await middleware(req, res, next)
  } catch (err) {
    next(err)
  }
}

module.exports = { errorHandler, FireError, errorCatcher }
