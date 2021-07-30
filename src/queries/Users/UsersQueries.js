/* eslint-disable class-methods-use-this */
const rfr = require('rfr');

const {
  Branches,
  Countries,
  Cities,
  States,
  Sequelize,
  DeliveryTypes,
  OpeningHours,
  PaymentMethods,
  Menus,
} = rfr('src/models');
const QueryInterface = require('../Entities/QueryInterface');
const { addressIds, timeStamps } = require('../helpers/exclusions');

class UserQueries extends QueryInterface {
  findAll() {
    return {
      attributes: {
        exclude: ['password', ...timeStamps],
      },
      include: {
        model: Branches,
        as: 'userBranches',
        attributes: {
          include: [
            [Sequelize.literal('"userBranches->branchCountry".country_name'), 'countryName'],
            [Sequelize.literal('"userBranches->branchState".state_name'), 'stateName'],
            [Sequelize.literal('"userBranches->branchCity".city_name'), 'cityName'],
          ],
          exclude: [
            ...addressIds, ...timeStamps, 'userId',
          ],
        },
        include: [
          {
            model: Countries,
            as: 'branchCountry',
            attributes: [],
          },
          {
            model: States,
            as: 'branchState',
            attributes: [],
          },
          {
            model: Cities,
            as: 'branchCity',
            attributes: [],
          },
          {
            model: DeliveryTypes,
            as: 'deliveryTypes',
            attributes: ['deliveryType'],
            through: { attributes: [] },
          },
          {
            model: PaymentMethods,
            as: 'paymentMethods',
            attributes: ['paymentMethod'],
            through: { attributes: [] },
          },
          {
            model: Menus,
            as: 'branchMenus',
            attributes: { exclude: [...timeStamps] },
            through: { attributes: [] },
          },
          {
            model: OpeningHours,
            as: 'openingHours',
            attributes: { exclude: ['id', 'branchId', ...timeStamps] },
          },
        ],
      },
    };
  }
}

const UsersQueries = new UserQueries();

module.exports = UsersQueries;
