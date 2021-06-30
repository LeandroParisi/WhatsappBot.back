/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCoupons = (sequelize, DataTypes) => {
  const Coupons = sequelize.define('Coupons', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    branchId: {
      type: DataTypes.UUID,
    },
    cupomCode: {
      type: DataTypes.STRING,
    },
    discout: {
      type: DataTypes.STRING,
    },
    conditions: {
      type: DataTypes.JSONB,
    },
    maxUses: {
      type: DataTypes.INTEGER,
    },
    used: {
      type: DataTypes.INTEGER,
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Coupons.associate = (models) => {
    Coupons.hasMany(models.Orders, {
      as: 'orderCoupom',
      foreignKey: 'coupomId',
    });
    Coupons.belongsTo(models.Branches, {
      as: 'branchCoupons',
      foreignKey: 'branchId',
    });
  };

  return Coupons;
};

module.exports = createCoupons;
