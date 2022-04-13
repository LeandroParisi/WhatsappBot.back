/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextFunction, Response } from 'express'
import StaticImplements from '../../../../Commons/Anotations/StaticImplements'
import FireError from '../../../Shared-v2-ts/Abstractions/FireError'
import JwtConfig from '../Encryption/JwtConfig'
import { ErrorMessages } from '../../../Shared-v2-ts/APIs/Enums/Messages'
import IAuthenticatedRequest from '../../../Shared-v2-ts/APIs/Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import IMiddleware from '../../../Shared-v2-ts/Middlewares/Interfaces/IMiddleware'
import { StatusCode } from '../../../Shared-v2-ts/APIs/Enums/Status'

require('dotenv/config')

@StaticImplements<IMiddleware>()
export default class AuthenticateUser {
  static async ExecuteAsync(
    req : IAuthenticatedRequest, res : Response, next : NextFunction,
  ) : Promise<void> {
    const { wbt } = req.cookies

    console.log({ req })

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
