const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const jwtTokenValidate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authorization.split(' ')[1];
    jwt.verify(token, secretKey);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = jwtTokenValidate;
