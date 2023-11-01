const { userService } = require('../service');

const userRegister = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userService.userRegister(displayName, email, password, image);

  if (!token) {
    res.status(409).json({ message: 'User already registered' });
  }

  res.status(201).json({ token });
};

module.exports = userRegister;