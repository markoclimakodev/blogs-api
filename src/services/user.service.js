const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const userRegistration = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    const { id } = newUser.dataValues;
    const token = generateToken(id);

    return token;
  } catch (error) {
    console.error(error);
  }
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  userRegistration,
  getAllUsers,
};