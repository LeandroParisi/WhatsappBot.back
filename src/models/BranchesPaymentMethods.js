/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createBranchesPaymentMethods = (sequelize, DataTypes) => {
  const BranchesPaymentMethods = sequelize.define('BranchesPaymentMethods', {
    branchId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    paymentMethodId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
  }, { underscored: true, timestamps: false });

  return BranchesPaymentMethods;
};

module.exports = createBranchesPaymentMethods;
