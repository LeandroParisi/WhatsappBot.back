/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createMenusProducts = (sequelize, DataTypes) => {
  const MenusProducts = sequelize.define('MenusProducts', {
    menuId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
    productId: {
      foreignKey: true,
      type: DataTypes.UUID,
    },
  }, { underscored: true, timestamps: false });

  return MenusProducts;
};

module.exports = createMenusProducts;
