import { IncomingHttpHeaders } from 'http'
import IUserToken from '../../IUserToken'

declare module 'express-serve-static-core' {
  export interface Request {
    headers : IncomingHttpHeaders & {
      auth : string
    }
    user?: IUserToken;
  }
}
