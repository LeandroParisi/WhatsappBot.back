/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
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

  Customers.associate = (models) => {
    Customers.hasMany(models.Orders, {
      as: 'customerOrders',
      foreignKey: 'customerId',
    });
    Customers.belongsTo(models.Countries, {
      as: 'customerCountry',
      foreignKey: 'countryId',
    });
    Customers.belongsTo(models.States, {
      as: 'customerState',
      foreignKey: 'stateId',
    });
    Customers.belongsTo(models.Cities, {
      as: 'customerCity',
      foreignKey: 'cityId',
    });
  };

  return Customers;
};

module.exports = createCustomers;
