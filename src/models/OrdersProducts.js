/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createOrdersProducts = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    productId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
    },

    attributes: {
      type: DataTypes.JSONB,
    },
  }, { underscored: true, timestamps: false });

  OrdersProducts.associate = (models) => {
    OrdersProducts.belongsTo(models.Products, {
      as: 'productsOrders',
      foreignKey: 'productId',
    });
    OrdersProducts.belongsTo(models.Orders, {
      as: 'ordersProducts',
      foreignKey: 'orderId',
    });
  };

  return OrdersProducts;
};

module.exports = createOrdersProducts;
