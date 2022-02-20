import { Request } from 'express'
import Order from '../../../../../Data/Entities/Models/Order'

export default interface RegisterOrderReq extends Request {
  body : Order
}
