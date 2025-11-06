




import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  mobileNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },

  otp: String,
  otpExpires: Date,
  isVerified: { type: Boolean, default: false },

  name: { type: String, required: false },
  fathername: { type: String, required: false },
  dob: { type: Date, required: false },
  state: { type: String, required: false },
  district: { type: String, required: false },
  occupation: { type: String, required: false },
  business: { type: String, required: false },
  businessName: { type: String },
  businessAddress: { type: String },
  udyogNumber: { type: String },
  institution: { type: String, required: false },
  institutionName: { type: String },
  institutionaddress: { type: String },
  socialmedia: { type: String },

  questionOne: { type: String },
  answerOne: { type: String },
  questionTwo: { type: String },
  answerTwo: { type: String },
  questionThree: { type: String },
  answerThree: { type: String },
  registeredAt: { type: Date, default: Date.now },

  isAdmin: { type: Boolean, default: false },
},
{ timestamps: true }
);

export default mongoose.model('User', userSchema);
