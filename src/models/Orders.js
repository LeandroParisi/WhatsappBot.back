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
    addressId: {
      type: DataTypes.UUID,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    subTotal: {
      type: DataTypes.DECIMAL(10, 2),
    },
    deliveryTypeId: {
      type: DataTypes.INTEGER,
    },
    deliveryFee: {
      type: DataTypes.DECIMAL(10, 2),
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
    },
    status: {
      type: DataTypes.INTEGER,
    },
    coupomId: {
      type: DataTypes.INTEGER,
    },
    promotionId: {
      type: DataTypes.INTEGER,
    },
    estimatedDeliveryDuration: {
      type: DataTypes.NUMBER,
    },
    distanceInKm: {
      type: DataTypes.NUMBER,
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
  }, { underscored: true })

  Orders.associate = (models) => {
    Orders.belongsTo(models.Customers, {
      as: 'customer',
      foreignKey: 'customerId',
    })
    Orders.belongsTo(models.Branches, {
      as: 'branchOrders',
      foreignKey: 'branchId',
    })
    Orders.belongsTo(models.DeliveryTypes, {
      as: 'orderDeliveryType',
      foreignKey: 'deliveryTypeId',
    })
    Orders.belongsTo(models.PaymentMethods, {
      as: 'orderPaymentMethod',
      foreignKey: 'paymentMethodId',
    })
    Orders.belongsTo(models.Coupons, {
      as: 'orderCoupom',
      foreignKey: 'coupomId',
    })
    Orders.belongsTo(models.Promotions, {
      as: 'orderPromotion',
      foreignKey: 'promotionId',
    })
    Orders.hasMany(models.OrdersProducts, {
      as: 'ordersProducts',
      foreignKey: 'orderId',
    })
    Orders.belongsTo(models.CustomerAddresses, {
      as: 'orderAddress',
      foreignKey: 'addressId',
    })
  }

  return Orders
}

module.exports = createOrders
