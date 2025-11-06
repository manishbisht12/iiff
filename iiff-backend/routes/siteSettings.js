import express from 'express';
import { saveSettings, getSettings, upload } from '../controllers/siteSettingsController.js';

const router = express.Router();

const uploadMiddleware = upload.fields([
  { name: 'footerImg1', maxCount: 1 },
  { name: 'footerImg2', maxCount: 1 },
  { name: 'footerImg3', maxCount: 1 },
  { name: 'footerImg4', maxCount: 1 },
  { name: 'footerImg5', maxCount: 1 },
  { name: 'iiffPoster', maxCount: 1 },
  { name: 'brochure', maxCount: 1 },
  { name: 'documentary', maxCount: 1 },
  { name: 'brochureDownload', maxCount: 1 },
  { name: 'zeroCarbon', maxCount: 1 },
  { name: 'downloadMap', maxCount: 1 },
  { name: 'homeVideo', maxCount: 1 },
]);

// POST: Create or update site settings with multiple file uploads
router.post('/', uploadMiddleware, saveSettings);

// GET: fetch site settings
router.get('/', getSettings);

export default router;
