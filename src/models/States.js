/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createStates = (sequelize, DataTypes) => {
  const States = sequelize.define('States', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    stateName: {
      type: DataTypes.STRING,
    },
    stateCode: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false, underscored: true });

  States.associate = (models) => {
    States.hasMany(models.Branches, {
      as: 'branchState',
      foreignKey: 'stateId',
    });
    States.hasMany(models.CustomerAddresses, {
      as: 'addressState',
      foreignKey: 'stateId',
    });
    States.hasMany(models.Cities, {
      as: 'stateCities',
      foreignKey: 'stateId',
    });
    States.belongsTo(models.Countries, {
      as: 'countryState',
      foreignKey: 'countryId',
    });
  };

  return States;
};

module.exports = createStates;
