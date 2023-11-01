const route = require('express').Router();
const { userController } = require('../controllers');
const validateUserRegister = require('../middlewares/validateUserRegister');

route.post('/', validateUserRegister, userController.userRegistration);

module.exports = route;