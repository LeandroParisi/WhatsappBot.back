const uuid = require('uuid/v4');
const attributesFactory = require('../src/interfaces/attributes/attributesFactory');
const attributeTypes = require('../src/interfaces/attributes/attributeTypes');
const { branchOneId } = require('./20210623221400-populateUsersTable');

const productOneId = uuid();
const productTwoId = uuid();
const productThreeId = uuid();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: productOneId,
        branch_id: branchOneId,
        category_id: 1,
        name: 'Pizza Calabresa',
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            attributes: attributesFactory([
              ['pequena', 5, 'Pizza 15cm'],
              ['média', 10, 'Pizza 20cm'],
              ['grande', 15, 'Pizza 30cm'],
            ]),
          },
          {
            type: attributeTypes.additionals,
            attributes: attributesFactory([
              ['borda queijo', 2, 'Borda recheada com queijo'],
              ['borda catupiry', 4, 'Borda recheada com catupiry'],
              ['catchup', 0, 'Sachês de catchup (por conta da casa)'],
            ]),
          },
        ]),
        base_price: 20,
        description: 'Pizza de calabresa à moda da casa',
        ingredients: ['Calabresa', 'Tomate', 'Mussarela', 'Orégano'],
        avaiability: [6, 7],
      },
      {
        id: productTwoId,
        branch_id: branchOneId,
        category_id: 2,
        name: 'Suco de Laranja',
        base_price: 5,
        description: 'Suco de laranja caseiro',
        ingredients: ['Laranja', 'Açucar'],
      },
      {
        id: productThreeId,
        branch_id: branchOneId,
        category_id: 1,
        name: 'Hambúrger da casa',
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            attributes: attributesFactory([
              ['bacon', 5, '3 fatias de bacon adicionais'],
              ['carne extra', 6, 'Carne adicional no seu burgão'],
              ['molho especial', 3, 'Molho especial da casa'],
            ]),
          },
        ]),
        base_price: 30,
        description: 'Burgão violento, gigante!!',
        ingredients: ['Pão', 'Carne artesanal', 'Alface', 'Tomate', 'Molho da casa'],
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },

  productOneId,
  productTwoId,
  productThreeId,
};
