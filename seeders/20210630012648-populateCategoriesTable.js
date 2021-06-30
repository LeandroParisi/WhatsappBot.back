module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        category_name: 'Comida',
      },
      {
        category_name: 'Sucos',
      },
      {
        category_name: 'Bebidas alcoólicas',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
