import { Request, Response } from 'express'
import { Service } from 'typedi'
import { StatusCode } from '../../../Shared-v2-ts/Enums/Status'
import BaseController from '../../BaseClasses/v2/BaseController'
import OrdersHandler from './OrdersHandler'
import GetAllOrdersReq from './Requests/GetAllByBranchId/Request'
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
    // this.GetAll.bind(this)
    // this.Handler.GetAll.bind(this)
  }

  GetAllByBranchId() {
    return async (req : GetAllOrdersReq, res: Response) => {
      const { query } = req
      const { params } = req
      const data = await this.Handler.GetAllByBranchId(query, params)
      res.status(StatusCode.OK).json({ data })
    }
  }

  SetOrderStatus() {
    return async (req : SetOrderStatusReq, res : Response) => {
      const { id, status } = req.params
      // const data = await this.Handler.SetOrderStatus(id, status)
      res.status(StatusCode.OK).json({ status })
    }
  }
}
