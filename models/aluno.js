"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Aluno.belongsTo(models.curso, {
        foreignKey: "cur_id",
      });
    }
  }
  Aluno.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Aluno",
    }
  );
  return Aluno;
};
