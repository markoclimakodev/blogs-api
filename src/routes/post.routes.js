const route = require('express').Router();

const { postController } = require('../controllers');
const jwtTokenValidate = require('../middlewares/jwtTokenValidate');

route.get('/', jwtTokenValidate, postController.getAllPosts);
route.get('/:id', jwtTokenValidate, postController.getPostById);

module.exports = route;