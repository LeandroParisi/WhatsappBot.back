/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createCountries = (sequelize, DataTypes) => {
  const Countries = sequelize.define('Countries', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    countryName: {
      type: DataTypes.STRING,
    },
  }, { timestamps: false, underscored: true });

  Countries.associate = (models) => {
    Countries.hasMany(models.Branches, {
      as: 'branchCountry',
      foreignKey: 'countryId',
    });
    Countries.hasMany(models.CustomerAddresses, {
      as: 'addressCountry',
      foreignKey: 'countryId',
    });
    Countries.hasMany(models.States, {
      as: 'countryStates',
      foreignKey: 'countryId',
    });
  };

  return Countries;
};

module.exports = createCountries;
