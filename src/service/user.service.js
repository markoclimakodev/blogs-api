const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const userRegister = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });

    const { id } = newUser.dataValues;
    const token = await generateToken({ id });

    return token;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { userRegister };