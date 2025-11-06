import RegisterStall from '../models/RegisterStall.js';

export const registerStall = async (req, res) => {
  const { name, email, mobile, stallNumber, peopleCount, referralCode, package: selectedPackage } = req.body;

  if (!name || !email || !mobile || !stallNumber || !peopleCount || !selectedPackage) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    const newRegistration = new RegisterStall({
      name,
      email,
      mobile,
      stallNumber,
      peopleCount,
      referralCode,
      package: selectedPackage,
    });

    await newRegistration.save();

    res.status(201).json({ message: `Registration successful for package: ${selectedPackage}` });
  } catch (error) {
    console.error('Register stall error:', error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
};

export const getAllStalls = async (req, res) => {
  try {
    const stalls = await RegisterStall.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({ stalls });
  } catch (error) {
    console.error('Fetch stalls error:', error);
    res.status(500).json({ error: 'Failed to fetch stall registrations.' });
  }
};