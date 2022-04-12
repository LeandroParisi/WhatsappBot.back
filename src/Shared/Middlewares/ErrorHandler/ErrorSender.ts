/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Response } from 'express'
import { Service } from 'typedi'
import Sequelize from 'sequelize'
import FireError from '../../Abstractions/FireError'
import { DefaultErrorsDict, DefaultPathDict } from '../../Enums/SequelizeErrorsLib'
import { StatusCode } from '../../Enums/Status'
import { ErrorMessages, ErrorTypes } from '../../Enums/Messages'
import { IIndexable } from '../../Interfaces/SystemInterfaces/IIndexable'

@Service()
export default class ErrorSender {
  static SendCustomError(error : FireError, res : Response) : Response {
    const { statusCode, message } = error

    console.log('Sending error')

    if (!statusCode) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        type: ErrorTypes.CustomError,
        error: ErrorMessages.InternalError,
        innerError: error.innerError || null,
      })
    }

    return res.status(statusCode).json({
      type: ErrorTypes.CustomError,
      error: message,
      innerError: error.innerError || null,
    })
  }

  static SendSequelizeValidationError(error : Sequelize.ValidationError, res : Response) : Response {
    const errors = ErrorSender.ExtractValidationErrors(error)

    return res
      .status(StatusCode.BAD_REQUEST)
      .json({ type: ErrorTypes.ValidationError, error: errors })
  }

  static TranslateDefaultError(errorMessage : string) {
    const translatedMessage = (DefaultErrorsDict as IIndexable)[errorMessage] as string
    if (translatedMessage) return translatedMessage
    return errorMessage
  }

  static ExtractValidationErrors(error : Sequelize.ValidationError) {
    const { path, message } = error.errors[0]

    return ({
      invalidField: (DefaultPathDict as IIndexable)[path as string] || path,
      message: ErrorSender.TranslateDefaultError(message),
    })
  }
}
