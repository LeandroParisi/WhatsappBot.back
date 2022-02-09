import { Request } from 'express'
import { OrderStatus } from '../../../../../Data/Models/Order'
import { IParams } from '../../../../Shared-v2-ts/Interfaces/ExpressInterfaces/IRequestParams'

export interface SetOrderParams {
  id : string
  status : OrderStatus
}

export class SetOrderDTO {
  status : OrderStatus

  /**
   *
   */
  constructor(status : OrderStatus) {
    this.status = status
  }
}

export default interface SetOrderStatusReq extends Request, IParams<SetOrderParams> {

}
