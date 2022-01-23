/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid');

const createCustomerAddresses = (sequelize, DataTypes) => {
  const CustomerAddresses = sequelize.define('CustomerAddresses', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    customerId: {
      type: DataTypes.UUID,
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
    stateId: {
      type: DataTypes.INTEGER,
    },
    cityId: {
      type: DataTypes.INTEGER,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    streetNumber: {
      type: DataTypes.STRING,
    },
    streetComplement: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  CustomerAddresses.beforeCreate((address) => {
    address.id = uuid();
  });

  CustomerAddresses.associate = (models) => {
    CustomerAddresses.belongsTo(models.Customers, {
      as: 'customerAddresses',
      foreignKey: 'customerId',
    });
    CustomerAddresses.hasOne(models.Orders, {
      as: 'orderAddress',
      foreignKey: 'addressId',
    });
    CustomerAddresses.belongsTo(models.Countries, {
      as: 'addressCountry',
      foreignKey: 'countryId',
    });
    CustomerAddresses.belongsTo(models.States, {
      as: 'addressState',
      foreignKey: 'stateId',
    });
    CustomerAddresses.belongsTo(models.Cities, {
      as: 'addressCity',
      foreignKey: 'cityId',
    });
  };

  return CustomerAddresses;
};

module.exports = createCustomerAddresses;
