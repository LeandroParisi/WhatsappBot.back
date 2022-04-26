import { Request } from 'express'

export default interface IFileRequest extends Request {
  file : any
}
