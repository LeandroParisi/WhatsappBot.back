/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createBranchesProducts = (sequelize, DataTypes) => {
  const BranchesProducts = sequelize.define('BranchesProducts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    branchId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    productId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
  }, { underscored: true, timestamps: false });

  return BranchesProducts;
};

module.exports = createBranchesProducts;
