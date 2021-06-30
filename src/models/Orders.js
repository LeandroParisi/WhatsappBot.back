/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createOrders = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    branchId: {
      type: DataTypes.UUID,
    },
    customerId: {
      type: DataTypes.UUID,
    },
    subTotal: {
      type: DataTypes.STRING,
    },
    deliveryTypeId: {
      type: DataTypes.INTEGER,
    },
    deliveryFee: {
      type: DataTypes.STRING,
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM(
        'placed',
        'to_do',
        'in_production',
        'ready_to_deliver',
        'dispatched',
        'fullfilled',
      ),
    },
    coupomId: {
      type: DataTypes.INTEGER,
    },
    promotionId: {
      type: DataTypes.INTEGER,
    },
    estimatedDeliveryTime: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    dispatchTime: {
      type: DataTypes.DATE,
    },
    deliveryTime: {
      type: DataTypes.DATE,
    },
  }, { underscored: true });

  Orders.associate = (models) => {
    Orders.belongsTo(models.Customers, {
      as: 'customerOrders',
      foreignKey: 'customerId',
    });
    Orders.belongsTo(models.Branches, {
      as: 'branchOrders',
      foreignKey: 'branchId',
    });
    Orders.belongsTo(models.DeliveryTypes, {
      as: 'orderDeliveryType',
      foreignKey: 'deliveryTypeId',
    });
    Orders.belongsTo(models.PaymentMethods, {
      as: 'orderPaymentMethod',
      foreignKey: 'paymentMethodId',
    });
    Orders.belongsTo(models.Coupons, {
      as: 'orderCoupom',
      foreignKey: 'coupomId',
    });
    Orders.belongsTo(models.Promotions, {
      as: 'orderPromotion',
      foreignKey: 'promotionId',
    });
  };

  return Orders;
};

module.exports = createOrders;
