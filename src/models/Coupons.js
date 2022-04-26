/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid')

const createCoupons = (sequelize, DataTypes) => {
  const Coupons = sequelize.define('Coupons', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    coupomCode: {
      type: DataTypes.STRING,
    },
    discountType: {
      type: DataTypes.ENUM('percentage', 'absolute_value'),
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    used: {
      type: DataTypes.INTEGER,
    },
    priceLimit: {
      type: DataTypes.DECIMAL(10, 2),
    },
    dateLimit: {
      type: DataTypes.DATE,
    },
    distanceLimitInKm: {
      type: DataTypes.INTEGER,
    },
    usesLimit: {
      type: DataTypes.INTEGER,
    },
    freeDelivery: {
      type: DataTypes.BOOLEAN,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true })

  Coupons.beforeCreate((m) => {
    m.id = uuid()
  })

  Coupons.associate = (models) => {
    Coupons.belongsToMany(models.Branches, {
      as: 'coupomBranches',
      through: 'CouponsBranches',
      foreignKey: 'coupom_id',
    })
    Coupons.belongsToMany(models.Conditions, {
      as: 'coupomConditions',
      through: 'CouponsConditions',
      foreignKey: 'coupom_id',
    })
    Coupons.hasOne(models.Orders, {
      as: 'orderCoupom',
      foreignKey: 'coupomId',
    })
  }

  return Coupons
}

module.exports = createCoupons
