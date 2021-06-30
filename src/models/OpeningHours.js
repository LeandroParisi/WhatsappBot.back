/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createOpeningHours = (sequelize, DataTypes) => {
  const OpeningHours = sequelize.define('OpeningHours', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    branchId: {
      type: DataTypes.UUID,
    },
    monday: {
      type: DataTypes.STRING,
    },
    tuesday: {
      type: DataTypes.STRING,
    },
    wednesday: {
      type: DataTypes.STRING,
    },
    thursday: {
      type: DataTypes.STRING,
    },
    friday: {
      type: DataTypes.STRING,
    },
    saturday: {
      type: DataTypes.STRING,
    },
    sunday: {
      type: DataTypes.STRING,
    },
  }, { underscored: true });

  OpeningHours.associate = (models) => {
    OpeningHours.belongsTo(models.Branches, {
      as: 'openingHours',
      foreignKey: 'branchId',
    });
  };

  return OpeningHours;
};

module.exports = createOpeningHours;
