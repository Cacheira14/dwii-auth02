const userService = require("../services/user-service");

const list = (req, res) => {
  res.send("This resource access requires authentication!")
}

module.exports = {
  list
};
