/* eslint-disable no-restricted-syntax */
import Joi from 'joi'
import { Service } from 'typedi'
import { OrderStatus, OrderStatusValues } from '../../../../../Data/Entities/Models/Order'
import SchemaValidation, { IValidator } from '../../../../Shared-v2-ts/Middlewares/SchemaValidation'
import GetByBranchAndCustomerParams from './Params'
import GetByBranchAndCustomerQuery from './Query'

const queryValidation = Joi.object<GetByBranchAndCustomerQuery, true, GetByBranchAndCustomerQuery>({
  status: Joi.string().custom((value : string, helper) => {
    const receivedStatus = value.trim().split(',').map((status : string) => Number(status)) as Array<OrderStatusValues>

    for (const s of receivedStatus) {
      const validStatus = new Set(Object.values(OrderStatus))

      if (!validStatus.has(s)) return helper.message({ custom: 'Invalid status' })
    }

    return true
  }).optional().allow(null),
})

const paramsValidation = Joi.object<GetByBranchAndCustomerParams, true, GetByBranchAndCustomerParams>({
  branchId: Joi.string().uuid().required(),
  customerId: Joi.string().uuid().required(),
})

@Service()
export default class GetByBranchAndCustomerValidation extends SchemaValidation {
  Schema: IValidator;

  /**
   *
   */
  constructor() {
    super()
    this.Schema = {
      query: queryValidation,
      params: paramsValidation,
    }
  }
}
