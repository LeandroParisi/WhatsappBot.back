/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import FireError from '../../Abstractions/FireError'
import { StatusCode } from '../../Enums/Status'
import { ErrorMessages } from '../../Enums/Messages'
import IMiddleware from '../Interfaces/IMiddleware'
import JwtConfig from '../../Authentication/JwtConfig'
import StaticImplements from '../../../../../../../../Commons/Anotations/StaticImplements'

@StaticImplements<IMiddleware>()
export default class AuthenticateBotUser {
  static async ExecuteAsync(req : Request, res : Response, next : NextFunction) : Promise<void> {
    const { auth } = req.headers

    if (!auth) throw new FireError(StatusCode.UNAUTHORIZED, ErrorMessages.ExpiredSession)
    try {
      const { userData } = JwtConfig.Decode(auth)
      req.user = { ...userData }
      next()
    } catch (error) {
      throw new FireError(StatusCode.UNAUTHORIZED, ErrorMessages.ExpiredSession)
    }
  }
}
