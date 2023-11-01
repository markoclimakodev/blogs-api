const route = require('express').Router();

const { categoryController } = require('../controllers');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');
const validateCategoryName = require('../middlewares/validateCategoryName');

route.post('/', jwtTokenValidate, validateCategoryName, categoryController.createCategory);
route.get('/', jwtTokenValidate, categoryController.getAllCategories);

module.exports = route;