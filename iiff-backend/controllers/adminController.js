// // // import Admin from '../models/admin.js';
// // // import bcrypt from 'bcryptjs';
// // // import jwt from 'jsonwebtoken';

// // // export const adminRegister = async (req, res) => {
// // //   const { mobileNumber, password } = req.body;

// // //   if (!mobileNumber || !password) {
// // //     return res.status(400).json({ message: 'Mobile number and password are required' });
// // //   }

// // //   try {
// // //     // Check if admin with this mobileNumber already exists
// // //     const existingAdmin = await Admin.findOne({ mobileNumber, isAdmin: true });

// // //     if (existingAdmin) {
// // //       return res.status(400).json({ message: 'Mobile number already registered as admin' });
// // //     }

// // //     // Hash password
// // //     const hashedPassword = await bcrypt.hash(password, 12);

// // //     // Create admin Admin
// // //     const adminAdmin = new Admin({
// // //       mobileNumber,
// // //       password: hashedPassword,
// // //       isAdmin: true,
// // //       isVerified: true,
// // //     });

// // //     await adminAdmin.save();

// // //     // Generate JWT token
// // //     const token = jwt.sign(
// // //       {
// // //         AdminId: adminAdmin._id,
// // //         mobileNumber: adminAdmin.mobileNumber,
// // //         isAdmin: true,
// // //       },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
// // //     );

// // //     res.status(201).json({
// // //       message: 'Admin registered successfully',
// // //       token,
// // //       expiresIn: process.env.JWT_EXPIRES_IN || '1h',
// // //     });
// // //   } catch (error) {
// // //     console.error('Admin register error:', error);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // };

// // // export const adminLogin = async (req, res) => {
// // //   const { mobileNumber, password } = req.body;

// // //   if (!mobileNumber || !password) {
// // //     return res.status(400).json({ message: 'Mobile number and password are required' });
// // //   }

// // //   try {
// // //     // Find admin Admin
// // //     const admin = await Admin.findOne({ mobileNumber, isAdmin: true });

// // //     if (!admin) {
// // //       return res.status(401).json({ message: 'Invalid credentials' });
// // //     }

// // //     // Compare password
// // //     const isMatch = await bcrypt.compare(password, admin.password || '');
// // //     if (!isMatch) {
// // //       return res.status(401).json({ message: 'Invalid credentials' });
// // //     }

// // //     if (!admin.isVerified) {
// // //       return res.status(403).json({ message: 'Admin account not verified' });
// // //     }

// // //     // Generate JWT token
// // //     const token = jwt.sign(
// // //       {
// // //         AdminId: admin._id,
// // //         mobileNumber: admin.mobileNumber,
// // //         isAdmin: true,
// // //       },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
// // //     );

// // //     res.status(200).json({
// // //       message: 'Admin login successful',
// // //       token,
// // //       expiresIn: process.env.JWT_EXPIRES_IN || '1h',
// // //     });
// // //   } catch (error) {
// // //     console.error('Admin login error:', error);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // };

// // // controllers/adminController.js

// // import Admin from '../models/admin.js';
// // import bcrypt from 'bcryptjs';
// // import jwt from 'jsonwebtoken';

// // // Admin Register (unchanged)
// // export const adminRegister = async (req, res) => {
// //   const { mobileNumber, password } = req.body;

// //   if (!mobileNumber || !password) {
// //     return res.status(400).json({ message: 'Mobile number and password are required' });
// //   }

// //   try {
// //     // Check if admin exists
// //     const existingAdmin = await Admin.findOne({ mobileNumber, isAdmin: true });

// //     if (existingAdmin) {
// //       return res.status(400).json({ message: 'Mobile number already registered as admin' });
// //     }

// //     // Hash password
// //     const hashedPassword = await bcrypt.hash(password, 12);

// //     // Create admin
// //     const adminAdmin = new Admin({
// //       mobileNumber,
// //       password: hashedPassword,
// //       isAdmin: true,
// //       isVerified: true,
// //     });

// //     await adminAdmin.save();

// //     // Generate token
// //     const token = jwt.sign(
// //       {
// //         AdminId: adminAdmin._id,
// //         mobileNumber: adminAdmin.mobileNumber,
// //         isAdmin: true,
// //       },
// //       process.env.JWT_SECRET,
// //       { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
// //     );

// //     res.status(201).json({
// //       message: 'Admin registered successfully',
// //       token,
// //       expiresIn: process.env.JWT_EXPIRES_IN || '1h',
// //     });
// //   } catch (error) {
// //     console.error('Admin register error:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // // Admin Login + Token Verify combined
// // export const adminLogin = async (req, res) => {
// //   const token = req.headers.authorization?.split(' ')[1];

// //   if (token) {
// //     // Verify token flow
// //     try {
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //       if (!decoded.isAdmin) {
// //         return res.status(403).json({ message: 'Access denied: Not an admin' });
// //       }

// //       const admin = await Admin.findById(decoded.AdminId);
// //       if (!admin) {
// //         return res.status(401).json({ message: 'Invalid token: Admin not found' });
// //       }

// //       return res.status(200).json({
// //         message: 'Token is valid',
// //         token,
// //         expiresIn: process.env.JWT_EXPIRES_IN || '1h',
// //         admin: {
// //           AdminId: admin._id,
// //           mobileNumber: admin.mobileNumber,
// //           isAdmin: admin.isAdmin,
// //         },
// //       });
// //     } catch (error) {
// //       return res.status(401).json({ message: 'Invalid or expired token' });
// //     }
// //   }

// //   // Login with credentials flow
// //   const { mobileNumber, password } = req.body;

// //   if (!mobileNumber || !password) {
// //     return res.status(400).json({ message: 'Mobile number and password are required' });
// //   }

// //   try {
// //     const admin = await Admin.findOne({ mobileNumber, isAdmin: true });

// //     if (!admin) {
// //       return res.status(401).json({ message: 'Invalid credentials' });
// //     }

// //     const isMatch = await bcrypt.compare(password, admin.password || '');
// //     if (!isMatch) {
// //       return res.status(401).json({ message: 'Invalid credentials' });
// //     }

// //     if (!admin.isVerified) {
// //       return res.status(403).json({ message: 'Admin account not verified' });
// //     }

// //     const newToken = jwt.sign(
// //       {
// //         AdminId: admin._id,
// //         mobileNumber: admin.mobileNumber,
// //         isAdmin: true,
// //       },
// //       process.env.JWT_SECRET,
// //       { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
// //     );

// //     res.status(200).json({
// //       message: 'Admin login successful',
// //       token: newToken,
// //       expiresIn: process.env.JWT_EXPIRES_IN || '1h',
// //     });
// //   } catch (error) {
// //     console.error('Admin login error:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// import Admin from '../models/admin.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export const adminRegister = async (req, res) => {
//   const { mobileNumber, password } = req.body;

//   if (!mobileNumber || !password) {
//     return res.status(400).json({ message: 'Mobile number and password are required' });
//   }

//   try {
//     // Check if admin with this mobileNumber already exists
//     const existingAdmin = await Admin.findOne({ mobileNumber, isAdmin: true });

//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Mobile number already registered as admin' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Create admin Admin
//     const adminAdmin = new Admin({
//       mobileNumber,
//       password: hashedPassword,
//       isAdmin: true,
//       isVerified: true,
//     });

//     await adminAdmin.save();

//     // Generate JWT token
//     const token = jwt.sign(
//       {
//         AdminId: adminAdmin._id,
//         mobileNumber: adminAdmin.mobileNumber,
//         isAdmin: true,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
//     );

//     res.status(201).json({
//       message: 'Admin registered successfully',
//       token,
//       expiresIn: process.env.JWT_EXPIRES_IN || '1h',
//     });
//   } catch (error) {
//     console.error('Admin register error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// export const adminLogin = async (req, res) => {
//   const { mobileNumber, password } = req.body;

//   if (!mobileNumber || !password) {
//     return res.status(400).json({ message: 'Mobile number and password are required' });
//   }

//   try {
//     // Find admin
//     const admin = await Admin.findOne({ mobileNumber, isAdmin: true });

//     if (!admin) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, admin.password || '');
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     if (!admin.isVerified) {
//       return res.status(403).json({ message: 'Admin account not verified' });
//     }

//     // Generate token
//     const token = jwt.sign(
//       {
//         AdminId: admin._id,
//         mobileNumber: admin.mobileNumber,
//         isAdmin: true,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
//     );

//     return res.status(200).json({
//       message: 'Admin login successful',
//       token,
//       expiresIn: process.env.JWT_EXPIRES_IN || '1h',
//     });
//   } catch (error) {
//     console.error('Admin login error:', error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };















import Admin from '../models/admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const adminLogin = async (req, res) => {
  const { mobileNumber, password } = req.body;

  const allowedAdminMobile = process.env.ADMIN_MOBILE;
  const allowedAdminPassword = process.env.ADMIN_PASSWORD;

  if (!mobileNumber || !password) {
    return res.status(400).json({ message: 'Mobile number and password are required' });
  }

  // ✅ Allow login only for one specific admin
  if (mobileNumber !== allowedAdminMobile || password !== allowedAdminPassword) {
    return res.status(403).json({ message: 'Access denied. Invalid admin credentials.' });
  }

  try {
    // Check if admin exists in DB
    const admin = await Admin.findOne({ mobileNumber, isAdmin: true });

    if (!admin) {
      return res.status(401).json({ message: 'Admin not found in database' });
    }

    if (!admin.isVerified) {
      return res.status(403).json({ message: 'Admin account not verified' });
    }

    // Generate token
    const token = jwt.sign(
      {
        AdminId: admin._id,
        mobileNumber: admin.mobileNumber,
        isAdmin: true,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    return res.status(200).json({
      message: 'Admin login successful',
      token,
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    });
  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
