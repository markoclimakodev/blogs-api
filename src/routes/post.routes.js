const route = require('express').Router();

const { postController } = require('../controllers');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');

route.get('/', jwtTokenValidate, postController.getAllPosts);

module.exports = route;