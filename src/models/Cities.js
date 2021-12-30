/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCities = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cityName: {
      type: DataTypes.STRING,
    },
  }, { timestamps: false, underscored: true });

  Cities.associate = (models) => {
    Cities.hasMany(models.Branches, {
      as: 'branchCity',
      foreignKey: 'cityId',
    });
    Cities.hasMany(models.Customers, {
      as: 'addressCity',
      foreignKey: 'cityId',
    });
  };

  return Cities;
};

module.exports = createCities;
