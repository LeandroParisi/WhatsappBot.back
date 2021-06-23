const createBranches = (sequelize, DataTypes) => {
  const Branches = sequelize.define('Branches', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
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
      type: DataTypes.UUID,
      references: {
        model: 'Countries',
        key: 'id',
      },
    },
    stateId: {
      type: DataTypes.UUID,
      references: {
        model: 'States',
        key: 'id',
      },
    },
    cityId: {
      type: DataTypes.UUID,
      references: {
        model: 'Cities',
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
  });

  Branches.associate = (models) => {
    Branches.belongsTo(models.Users, {
      as: 'userBranches',
      foreignKey: 'userId',
    });
  };

  return Branches;
};

module.exports = createBranches;
