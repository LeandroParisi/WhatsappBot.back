import { Response } from 'express'
import { Service } from 'typedi'
import { StatusCode } from '../../Shared-v2-ts/Enums/Status'
import { resMessages } from '../../Shared/libs'
import { FireError } from '../../Shared/middlewares/errorHandler/errorHandler'
import BaseController from '../BaseClasses/v2/BaseController'
import OrdersHandler from './OrdersHandler'
import GetByBranchReq from './Requests/GetAllByBranchId/Request'
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
    // this.GetAll.bind(this)
    // this.Handler.GetAll.bind(this)
  }

  GetAllByBranchId() {
    return async (req : GetByBranchReq, res: Response) => {
      const { query } = req
      const { params } = req
      const data = await this.Handler.GetAllByBranchId(query, params)
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
}
