/* eslint-disable class-methods-use-this */

const QueryInterface = require('../Entities/QueryInterface');
const {
  CustomerAddresses, Countries, Cities, States,
} = require('../../models');

class CustomerQuery extends QueryInterface {
  findOne(query) {
    return {
      where: query,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: CustomerAddresses,
          as: 'customerAddresses',
          include: [
            {
              model: Countries,
              as: 'addressCountry',
            },
            {
              model: States,
              as: 'addressState',
            },
            {
              model: Cities,
              as: 'addressCity',
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
