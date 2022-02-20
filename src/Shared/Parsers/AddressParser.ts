import AddressDTO from '../../Data/Entities/DTOs/AddressDTO'
import StaticImplements from '../Anotations/StaticImplements'

@StaticImplements()
export default class AddressParser {
  public static ToStringWithoutComplement(a : AddressDTO) {
    return `${a.street}, ${a.streetNumber} - ${a.cityName}, ${a.stateName} - ${a.countryName}`
  }
}
