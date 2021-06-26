/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const uuid = require('uuid/v4');

const userId = uuid();
const brazilId = uuid();
const minasGeraisId = uuid();
const bhId = uuid();

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          id: userId,
          whatsappNumber: '5531975080415',
          whatsappId: '5531975080415',
          bussinessName: 'Quintal da Dirce',
          cnpj: '123456789',
          email: 'lepcbelisario@gmail.com',
          ownerFirstName: 'Leandro',
          ownerMiddleName: 'Parisi',
          ownerLastName: 'Carvalho',
          ownerCpf: '123456789',
          password: '123456789',
          isActive: true,
        },
      ]);

    await queryInterface.bulkInsert('Countries',
      [
        {
          id: brazilId,
          countryName: 'Brazil',
        },
      ]);

    await queryInterface.bulkInsert('States',
      [
        {
          id: minasGeraisId,
          stateName: 'Minas Gerais',
          stateCode: 'MG',
        },
      ]);

    await queryInterface.bulkInsert('Cities',
      [
        {
          id: bhId,
          cityName: 'Belo Horizonte',
        },
      ]);

    await queryInterface.bulkInsert('Branches',
      [
        {
          id: uuid(),
          userId,
          managerName: 'Leandro',
          branchName: 'Quintal da Dirce 1',
          countryId: brazilId,
          stateId: minasGeraisId,
          cityId: bhId,
          neibourhood: 'Minha Kombi',
          street: 'rua da kombui',
          streetNumber: '222',
          streetComplement: '222',
          postalCode: '12345',
          isActive: true,
        },
        {
          id: uuid(),
          userId,
          managerName: 'Leandro',
          branchName: 'Quintal da Dirce 2000',
          countryId: brazilId,
          stateId: minasGeraisId,
          cityId: bhId,
          neibourhood: 'Minha Kombi',
          street: 'rua da kombui',
          streetNumber: '222',
          streetComplement: '222',
          postalCode: '12345',
          isActive: true,
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Branches', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Countries', null, {});
    await queryInterface.bulkDelete('States', null, {});
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
