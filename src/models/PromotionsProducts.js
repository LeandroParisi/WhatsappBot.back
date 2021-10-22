/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createPromotionsProducts = (sequelize, DataTypes) => {
  const PromotionsProducts = sequelize.define('PromotionsProducts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    promotionId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    attributes: {
      type: DataTypes.JSONB,
      defaultValue: JSON.stringify([]),
    },
  }, { underscored: true, timestamps: false });

  PromotionsProducts.associate = (models) => {
    PromotionsProducts.belongsTo(models.Promotions, {
      as: 'promotionProducts',
      foreignKey: 'promotionId',
    });
    PromotionsProducts.belongsTo(models.Products, {
      as: 'productsPromotions',
      foreignKey: 'productId',
    });
  };

  return PromotionsProducts;
};

module.exports = createPromotionsProducts;
