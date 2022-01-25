const { Countries } = require('../../models');
const BaseService = require('../Entities/BaseService');
const CountriesQueries = require('../../queries/Countries/CountriesQueries');

class Service extends BaseService {
// No need to be extended yet
}

const CountriesService = new Service(Countries, CountriesQueries);

module.exports = CountriesService;
