import { Request } from 'express'
import { OrderStatus } from '../../../../../Data/Entities/Models/Order'

export class SetOrderDTO {
  status : OrderStatus

  /**
   *
   */
  constructor(status : OrderStatus) {
    this.status = status
  }
}

export default interface SetOrderStatusReq extends Request {
  params: {
    'id' : string,
    'status' : string
  }
}
