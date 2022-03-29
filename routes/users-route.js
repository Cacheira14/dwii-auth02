const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users-controller');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.newUser);
router.delete('/', usersController.deleteAllUsers);

router.get('/:name', usersController.getUser);
router.delete('/:name', usersController.deleteUser);

module.exports = router;