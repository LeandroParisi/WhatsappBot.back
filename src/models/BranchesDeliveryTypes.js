/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createBranchesDeliveryTypes = (sequelize, DataTypes) => {
  const BranchesDeliveryTypes = sequelize.define('BranchesDeliveryTypes', {
    branchId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    deliveryTypeId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  }, { underscored: true, timestamps: false });

  return BranchesDeliveryTypes;
};

module.exports = createBranchesDeliveryTypes;
