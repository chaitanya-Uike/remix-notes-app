const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// add your models here
const db = {
  Note: require("./Note")(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].hasOwnProperty("associate")) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Op = Sequelize.Op;

module.exports = db;
