const router = require('express').Router();

const { loginController } = require('../controllers');
const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, loginController.login);

module.exports = router;