const { Countries, States, Cities } = require('../../../../../../models')
const BaseService = require('../BaseClasses/BaseService')
const LocationsQueries = require('./LocationsQueries')

class Service extends BaseService {
  async findAll() {
    const countries = await this.model.findAll()
    const states = await States.findAll()
    const cities = await Cities.findAll()

    const data = {
      countries,
      states,
      cities,
    }

    return data
  }
}

const LocationsService = new Service(Countries, LocationsQueries)

module.exports = LocationsService
