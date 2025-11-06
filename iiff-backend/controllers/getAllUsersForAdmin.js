import User from '../models/User.js';

export const getAllUsersForAdmin = async (req, res) => {
  try {
    // Optional: Only show verified users
    const users = await User.find({ isVerified: true }).select('-otp -otpExpires -__v');

    res.status(200).json({
      message: 'All registered users fetched successfully',
      users,
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
