/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createOrdersProducts = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    orderId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    productId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
  }, { underscored: true, timestamps: false });

  return OrdersProducts;
};

module.exports = createOrdersProducts;
