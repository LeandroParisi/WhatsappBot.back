/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const {
  PaymentMethods, DeliveryTypes,
} = require('../../models');
const QueryInterface = require('../Entities/QueryInterface');
const branchesAssociationsFactory = require('../helpers/defaultAssociations/branchesAssociations');

const {
  branchesAssociations,
  branchesInclude,
} = branchesAssociationsFactory();

class BranchQueries extends QueryInterface {
  findAll({ id, _query }) {
    const mainQuery = {
      where: { user_id: id },
      attributes: {
        include: [
          ...branchesInclude,
        ],
        exclude: [
          'countryId',
          'stateId',
          'cityId',
          'userId',
        ],
      },
      include: [
        ...branchesAssociations,
        {
          model: PaymentMethods,
          as: 'paymentMethods',
          through: { attributes: [] },
        },
        {
          model: DeliveryTypes,
          as: 'deliveryTypes',
          through: { attributes: [] },
        },
      ],
    };

    return mainQuery;
  }
}

const BranchesQueries = new BranchQueries();

module.exports = BranchesQueries;
