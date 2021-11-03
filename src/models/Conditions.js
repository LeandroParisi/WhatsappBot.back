/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createConditions = (sequelize, DataTypes) => {
  const Conditions = sequelize.define('Conditions', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    condition: {
      type: DataTypes.STRING,
    },
  }, { underscored: true, timestamps: false });

  Conditions.associate = (models) => {
    Conditions.belongsToMany(models.Coupons, {
      as: 'coupomConditions',
      through: 'CouponsConditions',
      foreignKey: 'condition_id',
    });
  };

  return Conditions;
};

module.exports = createConditions;
