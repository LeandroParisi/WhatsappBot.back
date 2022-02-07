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

  const { colInclude } = colBuilder(associations);

  return {
    productsAssociations: includedAssociations,
    productsInclude: colInclude,
  };
};

module.exports = productsAssociationsFactory;
