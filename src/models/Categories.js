/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCategories = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    categoryName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { underscored: true });

  Categories.associate = (models) => {
    Categories.hasMany(models.Products, {
      as: 'productCategory',
      foreignKey: 'categoryId',
    });
  };

  return Categories;
};

module.exports = createCategories;
