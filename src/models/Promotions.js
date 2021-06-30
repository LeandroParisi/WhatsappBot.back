/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createPromotions = (sequelize, DataTypes) => {
  const Promotions = sequelize.define('Promotions', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    branchId: {
      type: DataTypes.UUID,
    },
    totalPrice: {
      type: DataTypes.STRING,
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    avaiability: {
      type: DataTypes.ARRAY(DataTypes.ENUM(
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      )),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Promotions.associate = (models) => {
    Promotions.hasMany(models.Orders, {
      as: 'orderPromotion',
      foreignKey: 'promotionId',
    });
    Promotions.belongsTo(models.Branches, {
      as: 'branchPromotions',
      foreignKey: 'branchId',
    });
    Promotions.belongsToMany(models.Products, {
      through: 'PromotionsProducts',
      as: 'promotionProducts',
    });
  };

  return Promotions;
};

module.exports = createPromotions;
