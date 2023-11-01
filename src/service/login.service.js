const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password },
    attributes: { exclude: ['email', 'password'] } });

  const token = !user ? null : generateToken(user.id);

  return token;
};

module.exports = { login };