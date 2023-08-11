// middleware/auth.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
   
    //console.log('Using secret key:', secretKey);
   // console.log('Using secret key:', token);
  
  
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { requireAuth }; // Export as a named export


//userId: user._id

