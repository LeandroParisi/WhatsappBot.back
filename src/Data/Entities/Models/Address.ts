import AddressDTO from '../DTOs/AddressDTO'

export default class Address {
  id : string;

  customerId : string;

  countryId : number;

  stateId : number;

  cityId : number;

  neighborhood : string;

  street : string;

  streetNumber : string;

  streetComplement : string;

  postalCode : string;

  lat : number

  lng : number

  isActive : boolean;

  updatedAt : string

  createdAt : string

  /**
   *
   */
  constructor(addressDTO : AddressDTO) {
    this.id = addressDTO.id

    this.customerId = addressDTO.customerId

    this.countryId = addressDTO.countryId

    this.stateId = addressDTO.stateId

    this.cityId = addressDTO.cityId

    this.neighborhood = addressDTO.neighborhood

    this.street = addressDTO.street

    this.streetNumber = addressDTO.streetNumber

    this.streetComplement = addressDTO.streetComplement

    this.postalCode = addressDTO.postalCode
  }
}
