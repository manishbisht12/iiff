// // import jwt from 'jsonwebtoken';

// // export const authenticateToken = (req, res, next) => {
// //   const authHeader = req.headers['authorization'];
// //   const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

// //   if (!token) {
// //     return res.status(401).json({ message: 'Access token missing' });
// //   }

// //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
// //     if (err) return res.status(403).json({ message: 'Invalid token' });
// //     req.user = user;
// //     next();
// //   });
// // };


// import jwt from 'jsonwebtoken';

// export const protect = (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = { userId: decoded.userId }; // <-- use userId here
//       next();
//     } catch (error) {
//       console.error('Token verification failed:', error);
//       return res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   } else {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }
// };


// middleware/authMiddleware.js

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    // Use either decoded.userId or decoded.id depending on your token structure
    req.user = { userId: decoded.userId }; // or decoded.id

    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
