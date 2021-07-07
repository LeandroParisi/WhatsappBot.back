/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const uuid = require('uuid/v4');

const userId = uuid();

const branchOneId = uuid();
const branchTwoId = uuid();

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          id: userId,
          whatsapp_number: '5531975080415',
          whatsapp_id: '5531975080415',
          bussiness_name: 'Quintal da Dirce',
          cnpj: '123456789',
          email: 'lepcbelisario@gmail.com',
          owner_first_name: 'Leandro',
          owner_middle_name: 'Parisi',
          owner_last_name: 'Carvalho',
          owner_cpf: '123456789',
          password: '123456789',
          is_active: true,
        },
      ]);

    await queryInterface.bulkInsert('countries',
      [
        {
          country_name: 'Brazil',
        },
      ]);

    await queryInterface.bulkInsert('states',
      [
        {
          state_name: 'Minas Gerais',
          state_code: 'MG',
        },
      ]);

    await queryInterface.bulkInsert('cities',
      [
        {
          city_name: 'Belo Horizonte',
        },
      ]);

    await queryInterface.bulkInsert('branches',
      [
        {
          id: branchOneId,
          user_id: userId,
          manager_name: 'Leandro',
          branch_name: 'Quintal da Dirce 1',
          country_id: 1,
          state_id: 1,
          city_id: 1,
          neibourhood: 'Minha Kombi',
          street: 'rua da kombui',
          street_number: '222',
          street_complement: '222',
          postal_code: '12345',
          is_active: true,
          delivery_fees: JSON.stringify({
            type: 'radius',
            fees: {
              5: 4,
              10: 8,
              15: 12,
            },
          }),
        },
        {
          id: branchTwoId,
          user_id: userId,
          manager_name: 'Leandro',
          branch_name: 'Quintal da Dirce 2000',
          country_id: 1,
          state_id: 1,
          city_id: 1,
          neibourhood: 'Minha Kombi',
          street: 'rua da kombui',
          street_number: '222',
          street_complement: '222',
          postal_code: '12345',
          is_active: true,
          delivery_fees: JSON.stringify({
            type: 'unique',
            fees: 5,
          }),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('branches', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('countries', null, {});
    await queryInterface.bulkDelete('states', null, {});
    await queryInterface.bulkDelete('countries', null, {});
  },

  branchOneId,
  branchTwoId,
};
