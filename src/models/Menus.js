/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid')

const createMenus = (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    menuName: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true })

  Menus.beforeCreate((menu) => menu.id = uuid())

  Menus.associate = (models) => {
    Menus.belongsToMany(models.Branches, {
      as: 'branchesMenus',
      through: 'BranchesMenus',
    })
    Menus.belongsToMany(models.Products, {
      through: 'MenusProducts',
      as: 'menuProducts',
    })
  }

  return Menus
}

module.exports = createMenus
