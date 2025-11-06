import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerEntrepreneur = async (req, res) => {
  try {
    // Get JWT token from Authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const mobileNumber = decoded.mobileNumber;

    const {
      name,
      fathername,
      state,
      district,
      businessName,
      businessAddress,
      udyogNumber,
      socialmedia,
    } = req.body;

    // ✅ Find verified user
    const user = await User.findOne({ mobileNumber });

    if (!user || !user.isVerified) {
      return res.status(400).json({ message: 'Mobile number not verified' });
    }

    // ✅ Update only provided fields (fallback to existing)
    user.name = name ?? user.name;
    user.fathername = fathername ?? user.fathername;
    user.state = state ?? user.state;
    user.district = district ?? user.district;
    user.businessName = businessName ?? user.businessName;
    user.businessAddress = businessAddress ?? user.businessAddress;
    user.udyogNumber = udyogNumber ?? user.udyogNumber;
    user.socialmedia = socialmedia ?? user.socialmedia;

    await user.save();

    return res.status(200).json({ message: 'Entrepreneur details updated successfully!' });

  } catch (error) {
    console.error('Entrepreneur registration error:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
