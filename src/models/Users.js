/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const uuid = require('uuid/v4');
const { cpf, cnpj } = require('cpf-cnpj-validator');
const { validationErrors } = require('../libs');
const { hashPassword } = require('../authentication/passwordHashing');

const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    whatsappNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    whatsappId: {
      type: DataTypes.STRING,
      unique: true,
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
