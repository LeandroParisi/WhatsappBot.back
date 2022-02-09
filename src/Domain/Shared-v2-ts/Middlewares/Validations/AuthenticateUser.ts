import { NextFunction, Request, Response } from 'express'
import StaticImplements from '../../../../Shared/Anotations/StaticImplements'
import FireError from '../../Abstractions/FireError'
import JwtConfig from '../../Authentication/JwtConfig'
import { ErrorMessages } from '../../Enums/Messages'
import { StatusCode } from '../../Enums/Status'
import IMiddleware from '../Interfaces/IMiddleware'

require('dotenv/config')

@StaticImplements<IMiddleware>()
export default class AuthenticateUser {
  static async ExecuteAsync(req : Request, res : Response, next : NextFunction) : Promise<void> {
    const { wbt } = req.cookies
    if (!wbt) throw new FireError(StatusCode.UNAUTHORIZED, ErrorMessages.ExpiredSession)
    try {
      const { userData } = JwtConfig.Decode(wbt)
      req.user = { ...userData }
      next()
    } catch (error) {
      throw new FireError(StatusCode.UNAUTHORIZED, ErrorMessages.ExpiredSession)
    }
  }
}
