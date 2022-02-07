const {
  Countries,
  States,
  Cities,
  OpeningHours,
} = require('../../../models');
const associationsFactory = require('../QueryBuilders/associationsFactory');
const colBuilder = require('../QueryBuilders/sequelizeCol');

const branchesAssociationsFactory = () => {
  const associations = {
    branchCountry: {
      model: Countries,
      column: 'country_name',
    },
    branchState: {
      model: States,
      column: 'state_name',

    },
    branchCity: {
      model: Cities,
      column: 'city_name',
    },
    openingHours: {
      model: OpeningHours,
      attributes: ['monday', 'thursday', 'wednesday', 'tuesday', 'friday', 'saturday', 'sunday'],
    },
  };

  const includedAssociations = associationsFactory(associations);

  const { colInclude } = colBuilder(associations);

  return {
    branchesAssociations: includedAssociations,
    branchesInclude: colInclude,
  };
};

module.exports = branchesAssociationsFactory;
