/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const { v4: uuid } = require('uuid');
const { cpf, cnpj } = require('cpf-cnpj-validator');
const { hashPassword } = require('../authentication/passwordHashing');
const { validationErrors } = require('../libs');

const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    bussinessName: {
      type: DataTypes.STRING,
    },
    cnpj: {
      type: DataTypes.STRING,
      validate: {
        isValidCpf(value) {
          const isValid = cnpj.isValid(value);
          if (!isValid) throw new Error(validationErrors.invalidCNPJ);
        },
      },
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: validationErrors.invalidEmail,
        },
      },
    },
    ownerFirstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: validationErrors.emptyOwnerName,
        },
      },
    },
    ownerMiddleName: {
      type: DataTypes.STRING,
    },
    ownerLastName: {
      type: DataTypes.STRING,
    },
    ownerCpf: {
      type: DataTypes.STRING,
      validate: {
        isValidCpf(value) {
          const isValid = cpf.isValid(value);
          if (!isValid) throw new Error(validationErrors.invalidCPF);
        },
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    botName: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, { underscored: true });

  Users.beforeCreate(async (user) => {
    // To do -> tratar possível erro do hashedPassword
    const hashedPassword = await hashPassword(user.password);
    user.id = uuid();
    user.password = hashedPassword;
  });

  Users.associate = (models) => {
    Users.hasMany(models.Branches, {
      as: 'userBranches',
      foreignKey: 'userId',
    });
  };

  return Users;
};

module.exports = createUsers;
