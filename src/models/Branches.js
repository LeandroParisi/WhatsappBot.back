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
    },
    managerName: {
      type: DataTypes.STRING,
    },
    branchName: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.NUMBER,
    },
    stateId: {
      type: DataTypes.NUMBER,
    },
    cityId: {
      type: DataTypes.NUMBER,
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
    deliveryFees: {
      type: DataTypes.JSONB,
    },
    logo: {
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
    Branches.belongsToMany(models.DeliveryTypes, {
      through: 'BranchesDeliveryTypes',
      as: 'deliveryTypes',
    });
    Branches.belongsToMany(models.PaymentMethods, {
      through: 'BranchesPaymentMethods',
      as: 'paymentMethods',
    });
    Branches.belongsToMany(models.Menus, {
      through: 'BranchesMenus',
      as: 'branchMenus',
    });
    Branches.hasOne(models.OpeningHours, {
      as: 'openingHours',
      foreignKey: 'branchId',
    });
    Branches.hasMany(models.Orders, {
      as: 'branchOrders',
      foreignKey: 'branchId',
    });
    Branches.hasMany(models.Promotions, {
      as: 'branchPromotions',
      foreignKey: 'branchId',
    });
    Branches.hasMany(models.Coupons, {
      as: 'branchCoupons',
      foreignKey: 'branchId',
    });
    Branches.hasMany(models.Products, {
      as: 'branchProducts',
      foreignKey: 'branchId',
    });
  };

  return Branches;
};

module.exports = createBranches;
