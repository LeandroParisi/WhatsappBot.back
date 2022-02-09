import { StatusCode } from '../Enums/Status'

export default class FireError extends Error {
  statusCode : StatusCode

  constructor(statusCode : StatusCode, message : string) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}
