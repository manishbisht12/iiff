import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {  // hashed password
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: true,  // admins usually verified on creation
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);
    