/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const { v4: uuid } = require('uuid')
const { validationErrors } = require('../Domain/Shared/libs')

const createBranches = (sequelize, DataTypes) => {
  const Branches = sequelize.define('Branches', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.UUID,
    },
    whatsappNumber: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: {
          args: /[0-9]{13}/,
          msg: validationErrors.invalidZapNumberFormat,
        },
      },
    },
    whatsappId: {
      type: DataTypes.STRING,
      unique: true,
    },
    managerName: {
      type: DataTypes.STRING,
    },
    branchName: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.NUMBER,
    },
    stateId: {
      type: DataTypes.NUMBER,
    },
    cityId: {
      type: DataTypes.NUMBER,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    streetNumber: {
      type: DataTypes.STRING,
    },
    streetComplement: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.DECIMAL(17, 15),
    },
    lng: {
      type: DataTypes.DECIMAL(19, 15),
    },
    deliveryFees: {
      type: DataTypes.JSONB,
    },
    logo: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true })

  Branches.beforeCreate((branch) => {
    branch.id = uuid()
  })

  // TODO;
  // Branches.beforeUpdate((branch) => {
  //   branch.deliveryFees = normalizeDeliveryFee(branch.deliveryFees);
  // });

  Branches.associate = (models) => {
    Branches.belongsTo(models.Users, {
      as: 'userBranches',
      foreignKey: 'userId',
    })
    Branches.belongsTo(models.Countries, {
      as: 'branchCountry',
      foreignKey: 'countryId',
    })
    Branches.belongsTo(models.States, {
      as: 'branchState',
      foreignKey: 'stateId',
    })
    Branches.belongsTo(models.Cities, {
      as: 'branchCity',
      foreignKey: 'cityId',
    })
    Branches.belongsToMany(models.DeliveryTypes, {
      through: 'BranchesDeliveryTypes',
      as: 'deliveryTypes',
    })
    Branches.belongsToMany(models.PaymentMethods, {
      through: 'BranchesPaymentMethods',
      as: 'paymentMethods',
    })
    Branches.hasOne(models.OpeningHours, {
      as: 'openingHours',
      foreignKey: 'branchId',
    })
    Branches.belongsToMany(models.Menus, {
      as: 'branchesMenus',
      through: 'BranchesMenus',
    })
    Branches.belongsToMany(models.Coupons, {
      as: 'coupomBranches',
      through: 'CouponsBranches',
      foreignKey: 'branch_id',
    })
    Branches.hasMany(models.Orders, {
      as: 'branchOrders',
      foreignKey: 'branchId',
    })
    Branches.belongsToMany(models.Promotions, {
      as: 'branchesPromotions',
      through: 'BranchesPromotions',
    })
    Branches.belongsToMany(models.Products, {
      as: 'branchesProducts',
      through: 'BranchesProducts',
    })
  }

  return Branches
}

module.exports = createBranches
