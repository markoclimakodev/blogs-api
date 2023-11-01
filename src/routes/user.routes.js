const router = require('express').Router();

const { userController } = require('../controller');
const validateUserRegister = require('../middlewares/validateUserRegister');

router.post('/', validateUserRegister, userController);

module.exports = router;