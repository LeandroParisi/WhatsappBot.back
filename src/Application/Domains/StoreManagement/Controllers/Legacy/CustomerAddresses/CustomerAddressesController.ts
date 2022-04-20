import { Response } from 'express'
import { Service } from 'typedi'
import { StatusCode } from '../../../../../../Domain/Shared-v2-ts/Enums/Status'
import { resMessages } from '../Shared/libs'
import BaseController from '../BaseClasses/v2/BaseController'
import CustomerAddressesHandler from './CustomerAddressesHandler'
import CreateAddressReq from './Requests/Create/Request'

@Service()
export default class CustomersAddressesController extends BaseController {
  /**
   *
   */
  constructor(
    private readonly Handler : CustomerAddressesHandler,
  ) {
    super()
  }

  Create() {
    return async (req : CreateAddressReq, res: Response) => {
      const { body: address } = req
      await this.Handler.Create(address)
      return res.status(StatusCode.CREATED).json({ data: {}, message: resMessages.created })
    }
  }
}
