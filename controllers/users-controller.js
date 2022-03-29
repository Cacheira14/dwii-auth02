const userService = require("../services/user-service");

//GET '/tea'
const getAllUsers = (req, res, next) => {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
};

//POST '/tea'
const newUser = (req, res, next) => {
  res.json({ message: "POST new user" });
};

//DELETE '/tea'
const deleteAllUsers = (req, res, next) => {
  res.json({ message: "DELETE all users" });
};

//GET '/tea/:name'
const getUser = (req, res, next) => {
  res.json({ message: "GET 1 user" });
};

//DELETE '/tea/:name'
const deleteUser = (req, res, next) => {
  res.json({ message: "DELETE 1 tea" });
};

//export controller functions
module.exports = {
  getAllUsers,
  newUser,
  deleteAllUsers,
  getUser,
  deleteUser,
};
