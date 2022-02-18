import Joi from 'joi'
import { Service } from 'typedi'
import Order from '../../../../../Data/Entities/Models/Order'
import SchemaValidation, { IValidator } from '../../../../Shared-v2-ts/Middlewares/Validations/SchemaValidation'

const orderValidation = Joi.object<Order>({
  id: Joi.string().uuid().required(),
  addressId: Joi.string().uuid().required(),
  branchId: Joi.string().uuid().required(),
  customerId: Joi.string().uuid().required(),
  deliveryTypeId: Joi.number().required(),
  paymentMethodId: Joi.number().required(),
  comments: Joi.string().optional().allow(null),
  coupomId: Joi.number().optional().allow(null),
  promotionId: Joi.number().optional().allow(null),
  createdAt: Joi.string().optional().allow(null),
})

@Service()
export default class CalculateFaresValidation extends SchemaValidation {
  Schema: IValidator;

  /**
   *
   */
  constructor() {
    super()
    this.Schema = {
      body: orderValidation,
    }
  }
}
