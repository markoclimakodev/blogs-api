const { userService } = require('../services');

const userRegistration = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userService.userRegistration(displayName, email, password, image);

  if (!token) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }

  return res.status(200).json(user);
};

module.exports = {
  userRegistration,
  getAllUsers,
  getUserById,
};