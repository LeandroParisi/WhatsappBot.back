import { IncomingHttpHeaders } from 'http'
import IUserToken from '../../../Domain/Shared-v2-ts/Interfaces/IUserToken'

declare module 'express' {
  export interface Request {
    headers : IncomingHttpHeaders & {
      auth : string
    }
    user?: IUserToken;
  }
}
