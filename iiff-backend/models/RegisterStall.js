// models/RegisterStall.js
import mongoose from 'mongoose';

const registerStallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  stallNumber: { type: String, required: true },
  peopleCount: { type: Number, required: true },
  referralCode: { type: String, default: '' },
  package: { type: String, required: true },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

const RegisterStall = mongoose.model('RegisterStall', registerStallSchema);

export default RegisterStall;
