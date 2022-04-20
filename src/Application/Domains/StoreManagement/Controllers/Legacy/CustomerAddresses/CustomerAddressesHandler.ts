import { Service } from 'typedi'
import MapQuestService from '../../../../../../ExternalServices/GeoCoding/MapQuest/Service'
import AddressDTO from '../../../../../../Data/Entities/DTOs/AddressDTO'
import Address from '../../../../../../Data/Entities/Models/Address'
import CustomerAddressesRepository from './CustomerAddressesRepository'
import AddressParser from '../../../../../../Commons/Parsers/AddressParser'

@Service()
export default class CustomerAddressesHandler {
  /**
   *
   */
  constructor(
    private readonly GeoCodingService : MapQuestService,
    private readonly AddressesRepository : CustomerAddressesRepository,
  ) {
  }

  async Create(address : AddressDTO) {
    const updatedAddress = await this.EnrichAddressWithCoordinates(address)
    await this.AddressesRepository.Insert(updatedAddress)
  }

  private async EnrichAddressWithCoordinates(newAddress: AddressDTO) : Promise<Address> {
    const address = new Address(newAddress)
    // TODO: Checar se state, city e country names existem, se não existirem pegar no banco pelo ID
    const { lat, lng } = await this.GeoCodingService.Forward(
      AddressParser.ToStringWithoutComplement(newAddress),
    )
    address.lat = lat
    address.lng = lng

    return address
  }
}
