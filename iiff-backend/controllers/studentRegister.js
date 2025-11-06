import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// POST /api/student/register
router.post('/register', async (req, res) => {
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
      dob,
      state,
      district,
      occupation,
      business,
      businessName,
      businessAddress,
      udyogNumber,
      institution,
      institutionName,
      institutionaddress,
      socialmedia,
      questionOne,
      answerOne,
      questionTwo,
      answerTwo,
      questionThree,
      answerThree,
    } = req.body;

    // ✅ Find verified user
    const user = await User.findOne({ mobileNumber });

    if (!user || !user.isVerified) {
      return res.status(400).json({ message: 'Mobile number not verified' });
    }

    // ✅ Update user with registration fields
    user.name = name;
    user.fathername = fathername;
    user.dob = dob;
    user.state = state;
    user.district = district;
    user.occupation = occupation;
    user.business = business;
    user.businessName = businessName;
    user.businessAddress = businessAddress;
    user.udyogNumber = udyogNumber;
    user.institution = institution;
    user.institutionName = institutionName;
    user.institutionaddress = institutionaddress;
    user.socialmedia = socialmedia;
    user.questionOne = questionOne;
    user.answerOne = answerOne;
    user.questionTwo = questionTwo;
    user.answerTwo = answerTwo;
    user.questionThree = questionThree;
    user.answerThree = answerThree;

    await user.save();

    return res.status(200).json({ message: 'Student registration successful' });

  } catch (error) {
    console.error('Student registration error:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
