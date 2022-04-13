import Joi from 'joi'
import { Service } from 'typedi'
import Order from '../../../../../Data/Entities/Models/Order'
import SchemaValidation, { IValidator } from '../../../../Shared-v2-ts/Middlewares/SchemaValidation'

const orderValidation = Joi.object<Order>({
  id: Joi.string().uuid().required(),
  branchId: Joi.string().uuid().required(),
  customerId: Joi.string().uuid().required(),
  addressId: Joi.string().uuid().required(),
  subTotal: Joi.number().required(),
  deliveryTypeId: Joi.number().required(),
  deliveryFee: Joi.number().required(),
  paymentMethodId: Joi.number().required(),
  discount: Joi.number(),
  totalPrice: Joi.number().required(),
  coupomId: Joi.number(),
  promotionId: Joi.number(),
  estimatedDeliveryDuration: Joi.number().required(),
  distanceInKm: Joi.number().required(),
  comments: Joi.string(),
  createdAt: Joi.string(),
})

@Service()
export default class RegisterOrderValidation extends SchemaValidation {
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
