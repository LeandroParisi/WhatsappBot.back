/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCouponsBranches = (sequelize, DataTypes) => {
  const CouponsBranches = sequelize.define('CouponsBranches', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    branchId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    coupomId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  }, { underscored: true, timestamps: false });

  return CouponsBranches;
};

module.exports = createCouponsBranches;
