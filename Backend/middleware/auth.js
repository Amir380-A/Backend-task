// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/Users'); // Update the path to your User model
const dotenv = require('dotenv');
dotenv.config();

const requireAuth = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decodedToken.userId); // Fetch the user object

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user; // Attach the user object to req
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
};

module.exports = { requireAuth, requireRole };