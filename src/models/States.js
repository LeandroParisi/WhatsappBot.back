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
  }, { timestamps: false, underscored: true });

  States.associate = (models) => {
    States.hasMany(models.Branches, {
      as: 'branchState',
      foreignKey: 'stateId',
    });
    States.hasMany(models.Customers, {
      as: 'customerState',
      foreignKey: 'stateId',
    });
  };

  return States;
};

module.exports = createStates;
