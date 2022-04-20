import { Request } from 'express'
import AddressDTO from '../../../../../../../../Data/Entities/DTOs/AddressDTO'

export default interface CreateAddressReq extends Request {
  body : AddressDTO
}
