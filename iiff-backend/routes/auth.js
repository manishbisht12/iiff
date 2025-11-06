import express from 'express';
import {
  registerUser,
  verifyOtp,
} from '../controllers/authController.js';
import { registerEntrepreneur } from '../controllers/registerEntrepreneur.js';
// import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOtp);
router.post('/entrepreneur/register',  registerEntrepreneur); 

export default router;
