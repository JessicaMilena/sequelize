const { Model, DataTypes } = require("sequelize");

class curso extends Model {
  static associate(models) {
    curso.hasMany(models.aluno, {
      foreignKey: "cur_id",
    });
  }
}

curso.init(
  {
    curso: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "curso",
  }
);

module.exports = curso;
