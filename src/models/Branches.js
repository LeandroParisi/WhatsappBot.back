/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const uuid = require('uuid/v4');

const createBranches = (sequelize, DataTypes) => {
  const Branches = sequelize.define('Branches', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    managerName: {
      type: DataTypes.STRING,
    },
    branchName: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.NUMBER,
      references: {
        model: 'countries',
        key: 'id',
      },
    },
    stateId: {
      type: DataTypes.NUMBER,
      references: {
        model: 'states',
        key: 'id',
      },
    },
    cityId: {
      type: DataTypes.NUMBER,
      references: {
        model: 'cities',
        key: 'id',
      },
    },
    neibourhood: {
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

  Branches.beforeCreate((branch) => branch.id = uuid());

  Branches.associate = (models) => {
    Branches.belongsTo(models.Users, {
      as: 'userBranches',
      foreignKey: 'userId',
    });
    Branches.belongsTo(models.Countries, {
      as: 'branchCountry',
      foreignKey: 'countryId',
    });
    Branches.belongsTo(models.States, {
      as: 'branchState',
      foreignKey: 'stateId',
    });
    Branches.belongsTo(models.Cities, {
      as: 'branchCity',
      foreignKey: 'cityId',
    });
  };

  return Branches;
};

module.exports = createBranches;
