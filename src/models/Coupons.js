/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCoupons = (sequelize, DataTypes) => {
  const Coupons = sequelize.define('Coupons', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    coupom_code: {
      type: DataTypes.STRING,
    },
    discount_type: {
      type: DataTypes.ENUM('percentage', 'absolute_value'),
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    used: {
      type: DataTypes.INTEGER,
    },
    price_limit: {
      type: DataTypes.DECIMAL(10, 2),
    },
    date_limit: {
      type: DataTypes.DATE,
    },
    distance_limit: {
      type: DataTypes.INTEGER,
    },
    uses_limit: {
      type: DataTypes.INTEGER,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Coupons.associate = (models) => {
    Coupons.belongsToMany(models.Branches, {
      as: 'coupomBranches',
      through: 'CouponsBranches',
    });
    Coupons.belongsToMany(models.Conditions, {
      as: 'coupomConditions',
      through: 'CouponsConditions',
    });
    Coupons.hasOne(models.Orders, {
      as: 'orderCoupom',
      foreignKey: 'coupomId',
    });
  };

  return Coupons;
};

module.exports = createCoupons;
