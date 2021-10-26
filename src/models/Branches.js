/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid');

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
    Branches.hasOne(models.OpeningHours, {
      as: 'openingHours',
      foreignKey: 'branchId',
    });
    Branches.belongsToMany(models.Menus, {
      as: 'branchesMenus',
      through: 'BranchesMenus',
    });
    Branches.belongsToMany(models.Coupons, {
      as: 'coupomBranches',
      through: 'CouponsBranches',
    });
    Branches.hasMany(models.Orders, {
      as: 'branchOrders',
      foreignKey: 'branchId',
    });
    Branches.belongsToMany(models.Promotions, {
      as: 'branchesPromotions',
      through: 'BranchesPromotions',
    });
    Branches.hasMany(models.Coupons, {
      as: 'branchCoupons',
      foreignKey: 'branchId',
    });
    Branches.belongsToMany(models.Products, {
      as: 'branchesProducts',
      through: 'BranchesProducts',
    });
  };

  return Branches;
};

module.exports = createBranches;
