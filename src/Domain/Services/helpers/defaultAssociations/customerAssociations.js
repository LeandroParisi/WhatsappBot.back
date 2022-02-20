const {
  Countries,
  States,
  Cities,
} = require('../../../../models')
const associationsFactory = require('../QueryBuilders/associationsFactory')
const colBuilder = require('../QueryBuilders/sequelizeCol')

const customerAssociationsFactory = () => {
  const associations = {
    customerCountry: {
      model: Countries,
      column: 'country_name',
    },
    customerState: {
      model: States,
      column: 'state_name',

    },
    customerCity: {
      model: Cities,
      column: 'city_name',
    },
  }

  const includedAssociations = associationsFactory(associations)

  const { colInclude } = colBuilder(associations)

  return {
    customerAssociations: includedAssociations,
    customerInclude: colInclude,
  }
}

module.exports = customerAssociationsFactory
