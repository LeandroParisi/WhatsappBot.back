/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCouponsConditions = (sequelize, DataTypes) => {
  const CouponsConditions = sequelize.define('CouponsConditions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    coupomId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    conditionId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  }, { underscored: true, timestamps: false })

  return CouponsConditions
}

module.exports = createCouponsConditions
