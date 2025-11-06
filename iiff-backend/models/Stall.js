import mongoose from 'mongoose';

const stallSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  size: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'booked'],
    default: 'available',
  },
}, {
  timestamps: true,
});

const Stall = mongoose.model('Stall', stallSchema);

export default Stall;
