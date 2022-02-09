import { Request, Response } from 'express'
import { Service } from 'typedi'
import { StatusCode } from '../../../Shared-v2-ts/Enums/Status'
import BaseController from '../../BaseClasses/v2/BaseController'
import OrdersHandler from './OrdersHandler'
import SetOrderStatusReq from './Requests/SetOrderStatusReq'

@Service()
export default class OrdersController extends BaseController {
  /**
   *
   */
  constructor(
    private readonly Handler : OrdersHandler,
  ) {
    super()
  }

  async SetOrderStatus(req : SetOrderStatusReq, res : Response) {
    const { id, status } = req.Params
    const data = await this.Handler.SetOrderStatus(id, status)
    res.status(StatusCode.OK).json({ data })
  }
}
