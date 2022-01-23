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
    state_id: {
      type: DataTypes.INTEGER,
    },
  }, { timestamps: false, underscored: true });

  Cities.associate = (models) => {
    Cities.hasMany(models.Branches, {
      as: 'branchCity',
      foreignKey: 'cityId',
    });
    Cities.hasMany(models.CustomerAddresses, {
      as: 'addressCity',
      foreignKey: 'cityId',
    });
    Cities.belongsTo(models.States, {
      as: 'stateCities',
      foreignKey: 'stateId',
    });
  };

  return Cities;
};

module.exports = createCities;
