/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createBranchesPromotions = (sequelize, DataTypes) => {
  const BranchesPromotions = sequelize.define('BranchesPromotions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    branchId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    promotionId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
  }, { underscored: true, timestamps: false })

  return BranchesPromotions
}

module.exports = createBranchesPromotions
