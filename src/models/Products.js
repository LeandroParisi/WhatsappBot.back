/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid')

const createProducts = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    attributes: {
      type: DataTypes.JSONB,
      defaultValue: JSON.stringify([]),
    },
    basePrice: {
      type: DataTypes.DECIMAL(10, 2),
    },
    description: {
      type: DataTypes.TEXT,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    avaiability: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true })

  Products.beforeCreate((product) => product.id = uuid())

  Products.associate = (models) => {
    Products.belongsToMany(models.Branches, {
      through: 'BranchesProducts',
      as: 'branchesProducts',
    })
    Products.belongsToMany(models.Menus, {
      through: 'MenusProducts',
      as: 'menuProducts',
    })
    Products.hasMany(models.PromotionsProducts, {
      as: 'productsPromotions',
      foreignKey: 'productId',
    })
    Products.belongsTo(models.Categories, {
      as: 'productCategory',
      foreignKey: 'categoryId',
    })
    Products.hasMany(models.OrdersProducts, {
      as: 'productsOrders',
      foreignKey: 'productId',
    })
  }

  return Products
}

module.exports = createProducts
