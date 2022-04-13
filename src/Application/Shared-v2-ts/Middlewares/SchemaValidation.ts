import { Request, Response, NextFunction } from 'express'
import { Schema } from 'joi'
import { ErrorTypes } from '../APIs/Enums/Messages'
import { StatusCode } from '../APIs/Enums/Status'
import IMiddleware from './Interfaces/IMiddleware'

export interface IValidator {
  params?: Schema
  query?: Schema
  body?: Schema
}

export interface IValidationError {
  field: string
  error: string
}

abstract class SchemaValidation implements IMiddleware {
  abstract Schema: IValidator

  public ExecuteAsync() {
    return (req: Request, res: Response, next: NextFunction) => {
      const errors : Array<IValidationError> = []

      Object.keys(this.Schema).forEach((field : keyof IValidator) => {
        const { error } = this.Schema[field]!.validate(req[field])

        if (error) errors.push({ field, error: error.message })
      })

      if (errors.length === 0) {
        return next()
      }

      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ type: ErrorTypes.ValidationError, error: errors })
    }
  }
}

export default SchemaValidation
// import { Request, Response, NextFunction } from 'express'
// import { BaseSchema } from 'yup'
// import { validate } from 'class-validator'
// import IMiddleware from '../Interfaces/IMiddleware'

// // https:// www.linkedin.com/pulse/valida%C3%A7%C3%A3o-com-joi-em-requisi%C3%A7%C3%B5es-http-utilizando-node-ivo-junior/?originalSubdomain=pt
// // https:// stackoverflow.com/questions/69112132/joi-validation-allow-field-to-be-optional-but-when-supplied-must-be-a-positive

// export default class SchemaValidator implements IMiddleware {
//   Schema : BaseSchema

//   /**
//    *
//    */
//   constructor(schema : class) {
//     this.Schema = schema
//     // this.CreateValidator = this.CreateValidator.bind(this)
//     this.ExecuteAsync = this.ExecuteAsync.bind(this)
//   }

//   async ExecuteAsync(req: Request, res: Response, next: NextFunction) : Promise<void> {
//     try {
//       await this.Schema.validate(req)
//       next()
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }
