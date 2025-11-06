import mongoose from 'mongoose';
import Stall from '../models/Stall.js';

// @desc    Get all stalls
// @route   GET /api/register-stall
// @access  Public or Private depending on your auth logic
export const getStalls = async (req, res) => {
  try {
    const stalls = await Stall.find({});
    res.json(stalls);
  } catch (error) {
    console.error('Get stalls error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add new stall
// @route   POST /api/register-stall
// @access  Public or Private depending on your auth logic
export const addStall = async (req, res) => {
  let { number, size, status } = req.body;

  if (!number || !size) {
    return res.status(400).json({ message: 'Stall number and size are required' });
  }

  if (status) {
    status = status.toLowerCase(); // Normalize status to lowercase
  } else {
    status = 'available'; // default if not provided
  }

  try {
    const existing = await Stall.findOne({ number });
    if (existing) {
      return res.status(400).json({ message: 'Stall number must be unique' });
    }

    const newStall = new Stall({ number, size, status });
    await newStall.save();
    res.status(201).json(newStall);
  } catch (error) {
    console.error('Add stall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a stall
// @route   PUT /api/register-stall/:id
// @access  Public or Private depending on your auth logic
export const updateStall = async (req, res) => {
  const { id } = req.params;
  let { size, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid stall ID format' });
  }

  if (status) {
    status = status.toLowerCase(); // Normalize status to lowercase
  }

  try {
    const stall = await Stall.findById(id);
    if (!stall) {
      return res.status(404).json({ message: 'Stall not found' });
    }
    
    if (size !== undefined) stall.size = size;
    if (status !== undefined) stall.status = status;

    await stall.save();
    res.json(stall);
  } catch (error) {
    console.error('Update stall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a stall
// @route   DELETE /api/register-stall/:id
// @access  Public or Private depending on your auth logic
export const deleteStall = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid stall ID format' });
  }

  try {
    const stall = await Stall.findById(id);
    if (!stall) {
      return res.status(404).json({ message: 'Stall not found' });
    }

    await Stall.findByIdAndDelete(id);
    res.json({ message: 'Stall removed' });
  } catch (error) {
    console.error('Delete stall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
