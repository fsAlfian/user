let config = require("./db");
const Sequelize = config.Sequelize;
const sequelize = config.sequelize;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

function user() {
  const Table = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      identityNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    },
    {
      underscored: true,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      tableName: "users",
    }
  );
  return Table;
}

db.user = user();

module.exports = db;
