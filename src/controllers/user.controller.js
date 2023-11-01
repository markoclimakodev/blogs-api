const { userService } = require('../services');

const userRegistration = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userService.userRegistration(displayName, email, password, image);

  if (!token) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(users);
};

module.exports = {
  userRegistration,
  getAllUsers,
};