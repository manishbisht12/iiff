import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import studentRegisterRoutes from './controllers/studentRegister.js';
import entrepreneurRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import registerStallRoutes from './routes/registerStall.js';
import stallRoutes from './routes/stallRoutes.js';
import siteSettingsRoutes from './routes/siteSettings.js'; // Added siteSettings route import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Serve uploads folder statically for serving uploaded files (images, pdfs, videos)
app.use('/uploads', express.static('uploads')); // Added static middleware for uploads

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/student', studentRegisterRoutes);
app.use('/api/entrepreneur', entrepreneurRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/register-stall', registerStallRoutes);
app.use('/api/stalls', stallRoutes);
app.use('/api/settings', siteSettingsRoutes); // Added site settings route

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
