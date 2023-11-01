const router = require('express').Router();

const { loginController } = require('../controller');
const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, loginController);

module.exports = router;