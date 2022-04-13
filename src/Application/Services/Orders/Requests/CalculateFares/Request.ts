import { Request } from 'express'
import Order from '../../../../../Data/Entities/Models/Order'

export default interface CalculateFaresReq extends Request {
  body : Order
}
