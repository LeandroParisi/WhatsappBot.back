/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import FireError from '../../../Shared-v2-ts/Abstractions/FireError'
import { ErrorMessages } from '../../../Shared-v2-ts/APIs/Enums/Messages'
import IMiddleware from '../../../Shared-v2-ts/Middlewares/Interfaces/IMiddleware'
import JwtConfig from '../Encryption/JwtConfig'
import StaticImplements from '../../../../Commons/Anotations/StaticImplements'
import { StatusCode } from '../../../Shared-v2-ts/APIs/Enums/Status'

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
