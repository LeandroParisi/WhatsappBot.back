/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import Sequelize from 'sequelize'
import FireError from '../../Abstractions/FireError'
import EndpointFn from '../../APIs/Interfaces/ExpressInterfaces/EndpointFn'
import IMiddleware from '../Interfaces/IMiddleware'
import ErrorSender from './ErrorSender'

export default class ErrorCatcher {
  static HandleError(
    error : FireError,
    _req : Request,
    res : Response,
    _next : NextFunction,
  ) {
    console.log(error)

    if (error instanceof Sequelize.ValidationError) {
      return ErrorSender.SendSequelizeValidationError(error, res)
    }
    return ErrorSender.SendCustomError(error, res)
  }

  static ApplyErrorCatcher(route : EndpointFn) {
    return async (req : any, res : Response, next : NextFunction) => {
      try {
        await route(req, res, next)
      } catch (err) {
        next(err)
      }
    }
  }
}
