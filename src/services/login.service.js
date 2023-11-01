const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'password'] },
  });

  if (!user) return null;
  
  const { id } = user.dataValues;
  const token = generateToken({ id });

  return token;
};

module.exports = {
  login,
};