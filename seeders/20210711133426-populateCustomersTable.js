const { v4: uuid } = require('uuid');


const customer1 = uuid();
const customer2 = uuid();
const customer3 = uuid();

const customerAddress1 = uuid();
const customerAddress2 = uuid();


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customers', [
      {
        id: customer1,
        whatsapp_number: '5531993368575',
        whatsapp_id: '5531993368575@c.us',
        email: 'customer1@teste.com',
        first_name: 'Customer',
        middle_name: 'Teste',
        last_name: 'ONE',
        cpf: '08891890057',
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
      },
    ]);

    await queryInterface.bulkInsert('customer_addresses', [
      {
        id: customerAddress1,
        customer_id: customer1,
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
        id: customerAddress2,
        customer_id: customer1,
        country_id: 1,
        state_id: 1,
        city_id: 1,
        neighborhood: 'Outra TesteLandia',
        street: 'Rua do Teste 2',
        street_number: '321',
        street_complement: '321',
        postal_code: '99999999',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
    await queryInterface.bulkDelete('customer_addresses', null, {});
  },

  customer1,
  customer2,
  customer3,
  customerAddress1,
  customerAddress2,
};
