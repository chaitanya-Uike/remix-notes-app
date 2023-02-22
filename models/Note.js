const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    static associate(models) {}
  }
  Notes.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
      },
      color: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  return Notes;
};
