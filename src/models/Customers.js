/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid');
const { validationErrors } = require('../libs');

const createCustomers = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    whatsappNumber: {
      type: DataTypes.STRING,
    },
    whatsappId: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: validationErrors.invalidEmail,
        },
      },
    },
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Customers.beforeCreate((customer) => {
    customer.id = uuid();
    customer.whatsappNumber = customer.whatsappId.split('@')[0];
  });

  Customers.associate = (models) => {
    Customers.hasMany(models.Orders, {
      as: 'customer',
      foreignKey: 'customerId',
    });
    Customers.hasMany(models.CustomerAddresses, {
      as: 'customerAddresses',
      foreignKey: 'customerId',
    });
  };

  return Customers;
};

module.exports = createCustomers;
