import Joi from 'joi'
import { Service } from 'typedi'
import AddressDTO from '../../../../../../../../Data/Entities/DTOs/AddressDTO'
import SchemaValidation, { IValidator } from '../../../Shared-v2-ts/Middlewares/Validations/SchemaValidation'

const addressValidation = Joi.object<AddressDTO, true, AddressDTO>({
  id: Joi.string().uuid().required(),
  customerId: Joi.string().uuid().required(),
  countryName: Joi.string().optional(),
  stateName: Joi.string().optional(),
  cityName: Joi.string().optional(),
  countryId: Joi.number().required(),
  stateId: Joi.number().required(),
  cityId: Joi.number().required(),
  neighborhood: Joi.string().required(),
  street: Joi.string().required(),
  streetNumber: Joi.string().required(),
  streetComplement: Joi.string().optional().allow(''),
  postalCode: Joi.string().required(),
  lat: Joi.number().optional(),
  lng: Joi.number().optional(),
  isActive: Joi.boolean().optional(),
  updatedAt: Joi.string().optional(),
  createdAt: Joi.string().optional(),
})

@Service()
export default class CreateAddressValidation extends SchemaValidation {
  Schema: IValidator;

  /**
   *
   */
  constructor() {
    super()
    this.Schema = {
      body: addressValidation,
    }
  }
}
