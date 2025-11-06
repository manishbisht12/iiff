

// import User from '../models/User.js';
// import jwt from 'jsonwebtoken';
// import nodemailer from 'nodemailer';

// // Generate 4-digit OTP
// const generateOtp = () => {
//   return Math.floor(1000 + Math.random() * 9000).toString();
// };

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const registerUser = async (req, res) => {
//   const { mobileNumber, email } = req.body;

//   if (!mobileNumber || !email) {
//     return res.status(400).json({ message: 'Mobile number and email are required' });
//   }

//   try {
//     const otp = generateOtp();
//     const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

//     let user = await User.findOne({ mobileNumber });

//     if (user) {
//       if (user.isVerified) {
//         return res.status(400).json({ message: 'User already verified' });
//       }
//       user.otp = otp;
//       user.otpExpires = otpExpires;
//       user.email = email;
//     } else {
//       user = new User({ mobileNumber, email, otp, otpExpires });
//     }

//     await user.save();

//     // ✅ Send OTP via email
//     await transporter.sendMail({
//       from: `"OTP Service" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP is ${otp}`,
//       html: `<p>Your OTP is <b>${otp}</b>. It will expire in 10 minutes.</p>`,
//     });

//     res.json({ message: 'OTP sent to your email' });
//   } catch (error) {
//     console.error('Register error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// export const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   if (!email || !otp) {
//     return res.status(400).json({ message: 'Email and OTP are required' });
//   }

//   try {
//     const user = await User.findOne({ email, isVerified: false });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found or already verified' });
//     }

//     if (user.otp !== otp) {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }

//     if (user.otpExpires < new Date()) {
//       return res.status(400).json({ message: 'OTP expired' });
//     }

//     user.isVerified = true;
//     user.otp = null;
//     user.otpExpires = null;
//     await user.save();

//     const token = jwt.sign(
//       { userId: user._id, mobileNumber: user.mobileNumber },
//       process.env.JWT_SECRET,
//       { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
//     );

//     res.json({ message: 'User verified successfully', token });
//   } catch (error) {
//     console.error('Verify OTP error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };






//after otp receive
// controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err, ok) => {
  if (err) {
    console.error('Transporter verify error:', err);
  } else {
    console.log('Transporter is ready');
  }
});

export const registerUser = async (req, res) => {
  const { mobileNumber, email } = req.body;
  console.log('registerUser called with:', mobileNumber, email);

  if (!mobileNumber || !email) {
    return res.status(400).json({ message: 'Mobile number and email required' });
  }

  try {
    const otp = generateOtp();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    let user = await User.findOne({
      $or: [{ mobileNumber }, { email }],
    });

    if (user) {
      if (user.isVerified) {
        return res.status(400).json({ message: 'User already verified' });
      }
      user.otp = otp;
      user.otpExpires = otpExpires;
      user.email = email;
      user.mobileNumber = mobileNumber;
    } else {
      user = new User({ mobileNumber, email, otp, otpExpires });
    }

    await user.save();

    // Send OTP email
    try {
      const info = await transporter.sendMail({
        from: `"IIFF OTP Service" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Your IIFF OTP Code',
        text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.5;">
            <h2>Your OTP Code</h2>
            <p>Use the following OTP to verify your account:</p>
            <h1 style="color: #F28119;">${otp}</h1>
            <p>This OTP will expire in <b>10 minutes</b>.</p>
            <hr />
            <p>If you did not request this, please ignore this email.</p>
            <p>Thanks,<br/>IIFF Team</p>
          </div>
        `,
      });
      console.log('Email send result:', info);
    } catch (mailErr) {
      console.error('Error sending OTP email:', mailErr);
      return res.status(500).json({ message: 'Failed to send OTP email', error: mailErr.message });
    }

    return res.json({ message: 'OTP sent to your email' });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  console.log('verifyOtp called with:', email, otp);

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  try {
    const user = await User.findOne({ email, isVerified: false });

    if (!user) {
      return res.status(404).json({ message: 'User not found or already verified' });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (user.otpExpires < new Date()) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const token = jwt.sign(
      { userId: user._id, mobileNumber: user.mobileNumber },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
    );

    return res.json({ message: 'User verified successfully', token });
  } catch (err) {
    console.error('Verify OTP error:', err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};
