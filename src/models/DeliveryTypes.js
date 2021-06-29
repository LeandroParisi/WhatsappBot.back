/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

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
  }, { underscored: true, timestamps: false });

  DeliveryTypes.associate = (models) => {
    DeliveryTypes.belongsToMany(models.Branches, {
      through: 'BranchesDeliveryTypes',
      as: 'deliveryTypes',

    });
  };

  return DeliveryTypes;
};

module.exports = createDeliveryTypes;
