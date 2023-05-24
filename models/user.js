"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 15],
            mssg: "Name must be between 3 and 15 characters",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { msg: "Invalid email" },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 15],
            msg: "Password length must be between 6 and 15 characters",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
