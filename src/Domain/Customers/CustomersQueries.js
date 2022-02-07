/* eslint-disable class-methods-use-this */

const {
  CustomerAddresses, Countries, Cities, States, Sequelize,
} = require('../../models');
const QueryInterface = require('../BaseClasses/QueryInterface');

class CustomerQuery extends QueryInterface {
  findOne(query) {
    return {
      where: query,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [
        {
          model: CustomerAddresses,
          as: 'customerAddresses',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
            include: [
              [Sequelize.literal('"customerAddresses->addressCountry".country_name'), 'countryName'],
              [Sequelize.literal('"customerAddresses->addressState".state_name'), 'stateName'],
              [Sequelize.literal('"customerAddresses->addressCity".city_name'), 'cityName'],
            ],
          },
          include: [
            {
              model: Countries,
              as: 'addressCountry',
              attributes: [],
            },
            {
              model: States,
              as: 'addressState',
              attributes: [],
            },
            {
              model: Cities,
              as: 'addressCity',
              attributes: [],
            },
          ],
        },
      ],
    };
  }
// No need to be extended yet
}

const CustomersQuery = new CustomerQuery();

module.exports = CustomersQuery;
