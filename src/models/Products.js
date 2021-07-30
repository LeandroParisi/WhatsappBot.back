/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createProducts = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    branchId: {
      type: DataTypes.UUID,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    attributes: {
      type: DataTypes.JSONB,
    },
    basePrice: {
      type: DataTypes.DECIMAL(10, 2),

    },
    description: {
      type: DataTypes.TEXT,
    },
    ingredients: {
      type: DataTypes.TEXT,
    },
    avaiability: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Products.associate = (models) => {
    Products.belongsTo(models.Branches, {
      as: 'branchProducts',
      foreignKey: 'branchId',
    });
    Products.belongsToMany(models.Menus, {
      through: 'MenusProducts',
      as: 'menuProducts',
    });
    Products.belongsToMany(models.Promotions, {
      through: 'PromotionsProducts',
      as: 'promotionProducts',
    });
    Products.belongsTo(models.Categories, {
      as: 'productCategory',
      foreignKey: 'categoryId',
    });
    Products.hasMany(models.OrdersProducts, {
      as: 'productsOrders',
      foreignKey: 'productId',
    });
  };

  return Products;
};

module.exports = createProducts;
