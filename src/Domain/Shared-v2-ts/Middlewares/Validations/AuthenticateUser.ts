/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextFunction, Response } from 'express'
import StaticImplements from '../../../../Commons/Anotations/StaticImplements'
import FireError from '../../Abstractions/FireError'
import JwtConfig from '../../Authentication/JwtConfig'
import { ErrorMessages } from '../../Enums/Messages'
import { StatusCode } from '../../Enums/Status'
import IAuthenticatedRequest from '../../Interfaces/ExpressInterfaces/CustomRequests/IAuthenticatedReques'
import IMiddleware from '../Interfaces/IMiddleware'

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
