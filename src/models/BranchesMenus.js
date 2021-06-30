/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createBranchesMenus = (sequelize, DataTypes) => {
  const BranchesMenus = sequelize.define('BranchesMenus', {
    branchId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    menuId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
  }, { underscored: true });

  return BranchesMenus;
};

module.exports = createBranchesMenus;
