/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createPaymentMethods = (sequelize, DataTypes) => {
  const PaymentMethods = sequelize.define('PaymentMethods', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    paymentMethod: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { underscored: true, timestamps: false });

  PaymentMethods.associate = (models) => {
    PaymentMethods.belongsToMany(models.Branches, {
      through: 'BranchesPaymentMethods',
      as: 'paymentMethods',
    });
    PaymentMethods.hasMany(models.Orders, {
      as: 'orderPaymentMethod',
      foreignKey: 'paymentMethodId',
    });
  };

  return PaymentMethods;
};

module.exports = createPaymentMethods;
