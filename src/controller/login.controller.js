const { loginService } = require('../service');

const execute = async (req, res) => {
  const { email, password } = req.body;

  const token = await loginService.login(email, password);

  if (!token) {
    res.status(400).json({ message: 'Invalid fields' });
  }

  res.status(200).json({ token });
};

module.exports = execute;