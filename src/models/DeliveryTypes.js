const createDeliveryTypes = (sequelize, DataTypes) => {
  const DeliveryTypes = sequelize.define('DeliveryTypes', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    deliveryType: {
      allowNull: false,
      type: DataTypes.ENUM('delivery', 'counter_pickup', 'on_spot_consumption'),
    },
  }, { underscored: true, timestamps: false })

  DeliveryTypes.associate = (models) => {
    DeliveryTypes.belongsToMany(models.Branches, {
      through: 'BranchesDeliveryTypes',
      as: 'deliveryTypes',
    })
    DeliveryTypes.hasMany(models.Orders, {
      as: 'orderDeliveryType',
      foreignKey: 'deliveryTypeId',
    })
  }

  return DeliveryTypes
}

module.exports = createDeliveryTypes
