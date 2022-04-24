import { Request } from 'express'
import IUserToken from '../../IUserToken'

export default interface IAuthenticatedRequest extends Request {
  user : IUserToken
}
