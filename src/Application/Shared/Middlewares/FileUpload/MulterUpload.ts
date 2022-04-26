import { Response, NextFunction } from 'express'
import StaticImplements from '../../../../Commons/Anotations/StaticImplements'
import IFileRequest from '../../APIs/Interfaces/ExpressInterfaces/CustomRequests/IFileRequest'

import IMiddleware from '../Interfaces/IMiddleware'

@StaticImplements<IMiddleware>()
export default class MulterUpload {
  static ExecuteAsync(req: IFileRequest, res: Response, next: NextFunction) {
    console.log({ body: req.body })
    if (req.file) {
      console.log(req.file)
    }
    next()
  }
}
