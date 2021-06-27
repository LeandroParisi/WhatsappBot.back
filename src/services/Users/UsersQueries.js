const {
  Branches, Countries, Cities, States, Sequelize,
} = require('../../models');
const QueryInterface = require('../Entities/QueryInterface');

const queries = {
  findAll: () => ({
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
          'countryId', 'stateId', 'cityId',
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
      ],
    },
  }),

};

const UserQueries = new QueryInterface(queries);

module.exports = UserQueries;