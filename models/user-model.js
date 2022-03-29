const Sequelize = require("sequelize");
module.exports = function (sequelize) {
  const user = sequelize.define(
    "user",
    {
      username: { type: Sequelize.STRING(255), allowNull: false },
      password: { type: Sequelize.STRING(255), allowNull: false },
      firstName: { type: Sequelize.STRING(255), allowNull: false },
      lastName: { type: Sequelize.STRING(255), allowNull: false },
    },
    { tablename: "users" }
  );
  return user;
};
