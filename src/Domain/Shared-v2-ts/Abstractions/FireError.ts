import { StatusCode } from '../Enums/Status'

export default class FireError extends Error {
  statusCode : StatusCode

  innerError? : Error

  constructor(statusCode : StatusCode, message : string, innerError? : Error) {
    super()
    this.statusCode = statusCode
    this.message = message
    this.innerError = innerError
  }
}
