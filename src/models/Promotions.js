/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createPromotions = (sequelize, DataTypes) => {
  const Promotions = sequelize.define('Promotions', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    avaiability: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, { underscored: true });

  Promotions.associate = (models) => {
    Promotions.hasMany(models.Orders, {
      as: 'orderPromotion',
      foreignKey: 'promotionId',
    });
    Promotions.belongsToMany(models.Branches, {
      as: 'branchesPromotions',
      through: 'BranchesPromotions',
    });
    Promotions.belongsToMany(models.Products, {
      through: 'PromotionsProducts',
      as: 'promotionProducts',
    });
  };

  return Promotions;
};

module.exports = createPromotions;
