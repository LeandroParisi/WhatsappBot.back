/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const { v4: uuid } = require('uuid')
const { hashPassword } = require('../src/Domain/Shared/authentication/passwordHashing')

const userId = uuid()
const userTwoId = uuid()

const branchOneId = uuid()
const branchTwoId = uuid()
const branchThreeId = uuid()

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          id: userId,
          phone_number: '5531975080415',
          bussiness_name: 'Quintal da Dirce',
          cnpj: '123456789',
          email: 'user@teste.com',
          owner_first_name: 'Leandro',
          owner_middle_name: 'Parisi',
          owner_last_name: 'Carvalho',
          owner_cpf: '123456789',
          password: await hashPassword('123456'),
          is_active: true,
        },
        {
          id: userTwoId,
          phone_number: '5531975080416',
          bussiness_name: 'Quintal da Dirce',
          cnpj: '987654321',
          email: 'user2@teste.com',
          owner_first_name: 'Leandro',
          owner_middle_name: 'Parisi',
          owner_last_name: 'Carvalho',
          owner_cpf: '987654321',
          password: await hashPassword('123456'),
          is_active: true,
        },
      ])

    await queryInterface.bulkInsert('branches',
      [
        {
          id: branchOneId,
          user_id: userId,
          manager_name: 'Leandro',
          branch_name: 'Quintal da Dirce 1',
          country_id: 1,
          state_id: 1,
          city_id: 2,
          neighborhood: 'Minha Kombi',
          street: 'rua da kombui',
          street_number: '222',
          street_complement: '222',
          postal_code: '12345',
          lat: -22.925477,
          lng: -43.205225,
          is_active: true,
          delivery_fees: JSON.stringify({
            type: 'radius',
            fees: [
              [5, 4],
              [10, 8],
              [15, 12],
            ],
          }),
          whatsapp_number: '553182630325',
        },
        {
          id: branchTwoId,
          user_id: userId,
          manager_name: 'Leandro',
          branch_name: 'Quintal da Dirce 2000',
          country_id: 1,
          state_id: 1,
          city_id: 2,
          neighborhood: 'Minha Kombi',
          street: 'rua da kombui',
          street_number: '222',
          street_complement: '222',
          postal_code: '12345',
          lat: -22.925477,
          lng: -43.205225,
          is_active: true,
          delivery_fees: JSON.stringify({
            type: 'unique',
            fees: 5,
          }),
          whatsapp_number: '551166625766',
        },
        {
          id: branchThreeId,
          user_id: userTwoId,
          manager_name: 'Leandro',
          branch_name: 'Quintal da Dirce 2000',
          country_id: 1,
          state_id: 1,
          city_id: 2,
          neighborhood: 'Minha Kombi',
          street: 'rua da kombui',
          street_number: '222',
          street_complement: '222',
          postal_code: '12345',
          lat: -22.925477,
          lng: -43.205225,
          is_active: true,
          delivery_fees: JSON.stringify({
            type: 'unique',
            fees: 5,
          }),
          whatsapp_number: '555185076390',
        },
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('branches', null, {})
    await queryInterface.bulkDelete('users', null, {})
  },

  branchOneId,
  branchTwoId,
  branchThreeId,
}
