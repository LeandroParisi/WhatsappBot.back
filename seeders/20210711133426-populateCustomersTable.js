const { v4: uuid } = require('uuid');


const customer1 = uuid();
const customer2 = uuid();
const customer3 = uuid();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customers', [
      {
        id: customer1,
        whatsapp_number: '5531975080715',
        whatsapp_id: '5531975080715@c.us',
        email: 'customer1@teste.com',
        first_name: 'Customer',
        middle_name: 'Teste',
        last_name: 'ONE',
        cpf: '08891890057',
        country_id: 1,
        state_id: 1,
        city_id: 1,
        neighborhood: 'Testelandia',
        street: 'Rua do Teste',
        street_number: '123',
        street_complement: '123',
        postal_code: '30220000',
      },
      {
        id: customer2,
        whatsapp_number: '5531875080715',
        whatsapp_id: '5531875080715@c.us',
        email: 'customer2@teste.com',
        first_name: 'Customer',
        middle_name: 'Teste',
        last_name: 'TWO',
        cpf: '96128398081',
        country_id: 1,
        state_id: 1,
        city_id: 1,
        neighborhood: 'Testelandia',
        street: 'Rua do Teste',
        street_number: '123',
        street_complement: '123',
        postal_code: '30220000',
      },
      {
        id: customer3,
        whatsapp_number: '5531775080715',
        whatsapp_id: '5531775080715@c.us',
        email: 'customer3@teste.com',
        first_name: 'Customer',
        middle_name: 'Teste',
        last_name: 'THREE',
        cpf: '25098789052',
        country_id: 1,
        state_id: 1,
        city_id: 1,
        neighborhood: 'Testelandia',
        street: 'Rua do Teste',
        street_number: '123',
        street_complement: '123',
        postal_code: '30220000',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
  },
  customer1,
  customer2,
  customer3,
};
