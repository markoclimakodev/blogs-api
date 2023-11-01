const route = require('express').Router();
const { userController } = require('../controllers');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const validateUserRegister = require('../middlewares/validateUserRegister');

route.post('/', validateUserRegister, userController.userRegistration);
route.get('/', jwtTokenValidate, userController.getAllUsers);
route.get('/:id', jwtTokenValidate, userController.getUserById);

module.exports = route;