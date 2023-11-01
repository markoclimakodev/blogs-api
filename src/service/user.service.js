const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const userRegister = async (displayName, email, password, image) => {
  try {
    const user = await User.create({ displayName, email, password, image });
    const token = await generateToken(user.id);

    return token;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { userRegister };