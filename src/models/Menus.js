/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createMenus = (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    menuName: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Menus.associate = (models) => {
    Menus.belongsToMany(models.Branches, {
      through: 'BranchesMenus',
      as: 'menus',
    });
    Menus.belongsToMany(models.Products, {
      through: 'MenusProducts',
      as: 'menuProducts',
    });
  };

  return Menus;
};

module.exports = createMenus;
