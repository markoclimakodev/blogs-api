const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password },
    attributes: { exclude: ['email', 'password'] } });

  if (!user) {
    return null;
  }
  const { displayName } = user.dataValues;

  const token = jwt.sign({ displayName }, process.env.JWT_SECRET);

  return token;
};

module.exports = { login };