const { v4: uuid } = require('uuid');

const {productsAttrFactory} = require('../src/interfaces/attributes/attributesFactory');
const attributeTypes = require('../src/interfaces/attributes/attributeTypes');

const productOneId = uuid();
const productTwoId = uuid();
const productThreeId = uuid();
const productFourId = uuid();

const productOneAttrOne = uuid();
const productOneAttrTwo = uuid();
const productOneAttrThree = uuid();
const productOneAttrFour = uuid();
const productOneAttrFive = uuid();
const productOneAttrSix = uuid();

const productThreeAttrOne = uuid();
const productThreeAttrTwo = uuid();
const productThreeAttrThree = uuid();

const productFourAttrOne = uuid();
const productFourAttrTwo = uuid();
const productFourAttrThree = uuid();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: productOneId,
        category_id: 1,
        name: 'Pizza Calabresa',
        attributes: JSON.stringify([
          {
            type: attributeTypes.sizes,
            options: productsAttrFactory([
              ['P', 5, 'Pizza 15cm', null, null,  productOneAttrOne],
              ['M', 10, 'Pizza 20cm', null, null,  productOneAttrTwo],
              ['G', 15, 'Pizza 30cm', null, null,  productOneAttrThree],
            ]),
          },
          {
            type: attributeTypes.additionals,
            options: productsAttrFactory([
              ['borda queijo', 2, 'Borda recheada com queijo', null, null,  productOneAttrFour],
              ['borda catupiry', 4, 'Borda recheada com catupiry', null, null,  productOneAttrFive],
              ['catchup', 0, 'Sachês de catchup (por conta da casa)', null, null,  productOneAttrSix],
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
        category_id: 2,
        attributes: JSON.stringify([]),
        avaiability: [1],
        name: 'Suco de Laranja',
        base_price: 5,
        description: 'Suco de laranja caseiro',
        ingredients: ['Laranja', 'Açucar'],
      },
      {
        id: productThreeId,
        category_id: 1,
        name: 'Hambúrger da casa',
        avaiability: [1],
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            options: productsAttrFactory([
              ['bacon', 5, '3 fatias de bacon adicionais', null, null,  productThreeAttrOne],
              ['carne extra', 6, 'Carne adicional no seu burgão',  null, null, productThreeAttrTwo],
              ['molho especial', 3, 'Molho especial da casa', null, null,  productThreeAttrThree],
            ]),
          },
        ]),
        base_price: 30,
        description: 'Burgão violento, gigante!!',
        ingredients: ['Pão', 'Carne artesanal', 'Alface', 'Tomate', 'Molho da casa'],
      },
      {
        id: productFourId,
        category_id: 1,
        name: 'Hambúrger da casa 666!',
        attributes: JSON.stringify([
          {
            type: attributeTypes.additionals,
            options: productsAttrFactory([
              ['bacon', 5, '3 fatias de bacon adicionais', null, null,  productFourAttrOne],
              ['carne extra', 6, 'Carne adicional no seu burgão',  null, null, productFourAttrTwo],
              ['molho especial', 3, 'Molho especial da casa', null, null,  productFourAttrThree],
            ]),
          },
        ]),
        avaiability: [1],
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
  productFourId,
  productOneAttrOne,
  productOneAttrTwo,
  productOneAttrThree,
  productOneAttrFour,
  productOneAttrFive,
  productOneAttrSix,
  productThreeAttrOne,
  productThreeAttrTwo,
  productThreeAttrThree,
  productFourAttrOne,
  productFourAttrTwo,
  productFourAttrThree,
};
