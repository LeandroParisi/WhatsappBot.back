/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createOpeningHours = (sequelize, DataTypes) => {
  const OpeningHours = sequelize.define('OpeningHours', {
    branchId: {
      type: DataTypes.UUID,
    },
    monday: {
      type: DataTypes.JSONB,
    },
    tuesday: {
      type: DataTypes.JSONB,
    },
    wednesday: {
      type: DataTypes.JSONB,
    },
    thursday: {
      type: DataTypes.JSONB,
    },
    friday: {
      type: DataTypes.JSONB,
    },
    saturday: {
      type: DataTypes.JSONB,
    },
    sunday: {
      type: DataTypes.JSONB,
    },
  }, { underscored: true })

  OpeningHours.associate = (models) => {
    OpeningHours.belongsTo(models.Branches, {
      as: 'openingHours',
      foreignKey: 'branchId',
    })
  }

  return OpeningHours
}

module.exports = createOpeningHours
