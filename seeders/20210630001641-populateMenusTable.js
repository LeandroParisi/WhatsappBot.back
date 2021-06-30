const uuid = require('uuid/v4');
const { branchOneId, branchTwoId } = require('./20210623221400-populateUsersTable');

const menuOne = uuid();
const menuTwo = uuid();
const menuThree = uuid();
const menuFour = uuid();
const menuFive = uuid();
const menuSix = uuid();
const menuSeven = uuid();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('menus', [
      {
        id: menuOne,
        menu_name: 'Pizzas',
        description: 'Pizzas Boladas',
      },
      {
        id: menuTwo,
        menu_name: 'Sucos',
        description: 'Sucos Bolados',
      },
      {
        id: menuThree,
        menu_name: 'Refris',
        description: 'Refris Boladas',
      },
      {
        id: menuFour,
        menu_name: 'Samdubas',
        description: 'Samdubas Boladas',
      },
      {
        id: menuFive,
        menu_name: 'Massas',
        description: 'Massas Boladas',
      },
      {
        id: menuSix,
        menu_name: 'Cervejas',
        description: 'Cervejas Boladas',
      },
      {
        id: menuSeven,
        menu_name: 'Drinks',
        description: 'Drinks Boladas',
      },

    ]);

    await queryInterface.bulkInsert('branches_menus', [
      {
        branch_id: branchOneId,
        menu_id: menuOne,
      },
      {
        branch_id: branchOneId,
        menu_id: menuTwo,
      },
      {
        branch_id: branchOneId,
        menu_id: menuThree,
      },
      {
        branch_id: branchTwoId,
        menu_id: menuFour,
      },
      {
        branch_id: branchTwoId,
        menu_id: menuFive,
      },
      {
        branch_id: branchTwoId,
        menu_id: menuSix,
      },
      {
        branch_id: branchTwoId,
        menu_id: menuSeven,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menus', null, {});
  },
};
