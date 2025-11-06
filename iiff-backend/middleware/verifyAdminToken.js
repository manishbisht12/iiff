import jwt from 'jsonwebtoken';

export const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing admin token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Not an admin.' });
    }

    req.admin = decoded; // Optional: pass admin info to next handler
    next();
  } catch (error) {
    console.error('Admin token verification failed:', error);
    return res.status(401).json({ message: 'Invalid or expired admin token' });
  }
};
