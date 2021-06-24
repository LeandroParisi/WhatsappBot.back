/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const uuid = require('uuid/v4');

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
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
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
    },
    passwordHash: {
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
  });

  Users.beforeCreate((user) => user.id = uuid());

  Users.associate = (models) => {
    Users.hasMany(models.Branches, {
      as: 'userBranches',
      foreignKey: 'userId',
    });
  };

  return Users;
};

module.exports = createUsers;
