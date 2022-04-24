import { Response } from 'express'
import { Service } from 'typedi'
import Order from '../../../../../../Data/Entities/Models/Order'
import { StatusCode } from '../Shared-v2-ts/Enums/Status'
import { resMessages } from '../Shared/libs'
import BaseController from '../BaseClasses/v2/BaseController'
import OrdersHandler from './OrdersHandler'
import CalculateFaresReq from './Requests/CalculateFares/Request'
import GetByBranchAndCustomerReq from './Requests/GetAllByBranchAndCustomerId/Request'
import GetByBranchReq from './Requests/GetAllByBranchId/Request'
import RegisterOrderReq from './Requests/RegisterOrder/Request'
import UpdateOrderReq from './Requests/UpdateOne/Request'

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

  GetAllByBranchId() {
    return async (req : GetByBranchReq, res: Response) => {
      const { query } = req
      const { params } = req
      const data = await this.Handler.GetAllByBranchId(query, params) as Order[]
      res.status(StatusCode.OK).json({ data })
    }
  }

  GetAllByBranchAndCustomerId() {
    return async (req : GetByBranchAndCustomerReq, res: Response) => {
      const { params, query } = req
      const data = await this.Handler.GetAllByBranchAndCustomerId(params, query)
      res.status(StatusCode.OK).json({ data })
    }
  }

  UpdateOne() {
    return async (req : UpdateOrderReq, res : Response) => {
      const { id } = req.params
      await this.Handler.UpdateOne(id, req.body)
      res.status(StatusCode.OK).json({ data: true, message: resMessages.updateSuccess })
    }
  }

  CalculateFares() {
    return async (req : CalculateFaresReq, res : Response) => {
      const data = await this.Handler.CalculateFares(req.body)
      res.status(StatusCode.OK).json({ data, message: resMessages.updateSuccess })
    }
  }

  RegisterOrder() {
    return async (req : RegisterOrderReq, res : Response) => {
      await this.Handler.RegisterOrder(req.body)
      res.status(StatusCode.OK).json({ data: 'OK', message: resMessages.updateSuccess })
    }
  }
}
