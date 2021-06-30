/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createPromotionsProducts = (sequelize, DataTypes) => {
  const PromotionsProducts = sequelize.define('PromotionsProducts', {
    promotionId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
  }, { underscored: true });

  return PromotionsProducts;
};

module.exports = createPromotionsProducts;
