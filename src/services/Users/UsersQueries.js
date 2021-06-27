const { Branches, Countries, Sequelize } = require('../../models');
const QueryInterface = require('../Entities/QueryInterface');

const queries = {
  // include: { all: true, nested: true, raw: false },

  findAll: () => ({
    include: {
      model: Branches,
      as: 'userBranches',
      attributes: {
        include: [
          [Sequelize.literal('"userBranches->branchCountry".countryName'), 'countryName'],
        ],
      },
      include: {
        model: Countries,
        as: 'branchCountry',
        // attributes: [],
      },
    },
  }),
  deleteOne: (id) => ({
    where: { id },
  }),

};

const UserQueries = new QueryInterface(queries);

module.exports = UserQueries;
