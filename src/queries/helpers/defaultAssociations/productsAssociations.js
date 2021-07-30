const {
  Categories,
} = require('../../../models');
const associationsFactory = require('../QueryBuilders/associationsFactory');
const colBuilder = require('../QueryBuilders/sequelizeCol');

const productsAssociationsFactory = () => {
  const associations = {
    productCategory: {
      model: Categories,
      column: 'category_name',
    },
  };

  const includedAssociations = associationsFactory(associations);

  const { colExclude, colInclude } = colBuilder(associations);

  return {
    productsAssociations: includedAssociations,
    productsExclude: colExclude,
    productsInclude: colInclude,
  };
};

module.exports = productsAssociationsFactory;
