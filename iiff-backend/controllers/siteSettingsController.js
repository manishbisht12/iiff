// // // import multer from 'multer';
// // // import path from 'path';
// // // import fs from 'fs';
// // // import SiteSettings from '../models/siteSettingsModel.js';

// // // // Multer storage config for different files in different folders
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     let folder = 'uploads/others';

// // //     if (file.fieldname === 'footerImg1' || file.fieldname === 'footerImg2' || file.fieldname === 'footerImg3' || file.fieldname === 'footerImg4' || file.fieldname === 'footerImg5') {
// // //       folder = 'uploads/footerImages';
// // //     } else if (file.fieldname === 'iiffPoster') {
// // //       folder = 'uploads/iiffPosters';
// // //     } else if (file.fieldname === 'brochure' || file.fieldname === 'brochureDownload') {
// // //       folder = 'uploads/brochures';
// // //     } else if (file.fieldname === 'documentary') {
// // //       folder = 'uploads/documentaries';
// // //     } else if (file.fieldname === 'zeroCarbon') {
// // //       folder = 'uploads/zeroCarbon';
// // //     } else if (file.fieldname === 'downloadMap') {
// // //       folder = 'uploads/downloadMaps';
// // //     }

// // //     fs.mkdirSync(folder, { recursive: true });
// // //     cb(null, folder);
// // //   },
// // //   filename: (req, file, cb) => {
// // //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// // //     cb(null, uniqueSuffix + path.extname(file.originalname));
// // //   },
// // // });

// // // export const upload = multer({ storage });

// // // // Save or update site settings
// // // export const saveSettings = async (req, res) => {
// // //   try {
// // //     const {
// // //       addressTitle1,
// // //       addressTitle2,
// // //       contact,
// // //       webURL,
// // //       address1,
// // //       address2,
// // //       email,
// // //       pan,
// // //       gst,
// // //     } = req.body;

// // //     // Prepare file paths if uploaded
// // //     const files = req.files || {};
// // //     const getFilePath = (field) => (files[field] ? files[field][0].path : undefined);

// // //     const existing = await SiteSettings.findOne();

// // //     if (existing) {
// // //       existing.addressTitle1 = addressTitle1;
// // //       existing.addressTitle2 = addressTitle2;
// // //       existing.contact = contact;
// // //       existing.webURL = webURL;
// // //       existing.address1 = address1;
// // //       existing.address2 = address2;
// // //       existing.email = email;
// // //       existing.pan = pan;
// // //       existing.gst = gst;

// // //       if (getFilePath('footerImg1')) existing.footerImg1 = getFilePath('footerImg1');
// // //       if (getFilePath('footerImg2')) existing.footerImg2 = getFilePath('footerImg2');
// // //       if (getFilePath('footerImg3')) existing.footerImg3 = getFilePath('footerImg3');
// // //       if (getFilePath('footerImg4')) existing.footerImg4 = getFilePath('footerImg4');
// // //       if (getFilePath('footerImg5')) existing.footerImg5 = getFilePath('footerImg5');

// // //       if (getFilePath('iiffPoster')) existing.iiffPoster = getFilePath('iiffPoster');
// // //       if (getFilePath('brochure')) existing.brochure = getFilePath('brochure');
// // //       if (getFilePath('documentary')) existing.documentary = getFilePath('documentary');
// // //       if (getFilePath('brochureDownload')) existing.brochureDownload = getFilePath('brochureDownload');
// // //       if (getFilePath('zeroCarbon')) existing.zeroCarbon = getFilePath('zeroCarbon');
// // //       if (getFilePath('downloadMap')) existing.downloadMap = getFilePath('downloadMap');

// // //       await existing.save();
// // //       return res.status(200).json({ message: 'Settings updated', settings: existing });
// // //     }

// // //     // Create new
// // //     const newSettings = new SiteSettings({
// // //       addressTitle1,
// // //       addressTitle2,
// // //       contact,
// // //       webURL,
// // //       address1,
// // //       address2,
// // //       email,
// // //       pan,
// // //       gst,
// // //       footerImg1: getFilePath('footerImg1'),
// // //       footerImg2: getFilePath('footerImg2'),
// // //       footerImg3: getFilePath('footerImg3'),
// // //       footerImg4: getFilePath('footerImg4'),
// // //       footerImg5: getFilePath('footerImg5'),
// // //       iiffPoster: getFilePath('iiffPoster'),
// // //       brochure: getFilePath('brochure'),
// // //       documentary: getFilePath('documentary'),
// // //       brochureDownload: getFilePath('brochureDownload'),
// // //       zeroCarbon: getFilePath('zeroCarbon'),
// // //       downloadMap: getFilePath('downloadMap'),
// // //     });

// // //     await newSettings.save();
// // //     res.status(201).json({ message: 'Settings created', settings: newSettings });
// // //   } catch (error) {
// // //     console.error('Error saving settings:', error);
// // //     res.status(500).json({ message: 'Server error', error: error.message });
// // //   }
// // // };

// // // // Get site settings
// // // export const getSettings = async (req, res) => {
// // //   try {
// // //     const settings = await SiteSettings.findOne().sort({ createdAt: -1 });
// // //     if (!settings) {
// // //       return res.status(404).json({ message: 'No settings found' });
// // //     }
// // //     res.status(200).json(settings);
// // //   } catch (error) {
// // //     console.error('Error fetching settings:', error);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // };




// // //change '\\' to '/'

// // import multer from 'multer';
// // import path from 'path';
// // import fs from 'fs';
// // import SiteSettings from '../models/siteSettingsModel.js';

// // // Helper function to normalize file paths with forward slashes
// // const normalizePath = (filePath) => {
// //   if (!filePath) return filePath;
// //   return filePath.replace(/\\/g, '/');
// // };

// // // Multer storage configuration
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     let folder = 'uploads/others';

// //     if (['footerImg1', 'footerImg2', 'footerImg3', 'footerImg4', 'footerImg5'].includes(file.fieldname)) {
// //       folder = 'uploads/footerImages';
// //     } else if (file.fieldname === 'iiffPoster') {
// //       folder = 'uploads/iiffPosters';
// //     } else if (file.fieldname === 'brochure' || file.fieldname === 'brochureDownload') {
// //       folder = 'uploads/brochures';
// //     } else if (file.fieldname === 'documentary') {
// //       folder = 'uploads/documentaries';
// //     } else if (file.fieldname === 'zeroCarbon') {
// //       folder = 'uploads/zeroCarbon';
// //     } else if (file.fieldname === 'downloadMap') {
// //       folder = 'uploads/downloadMaps';
// //     }

// //     fs.mkdirSync(folder, { recursive: true });
// //     cb(null, folder);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// //     cb(null, uniqueSuffix + path.extname(file.originalname));
// //   },
// // });

// // export const upload = multer({ storage });

// // // Save or update site settings
// // export const saveSettings = async (req, res) => {
// //   try {
// //     const {
// //       addressTitle1,
// //       addressTitle2,
// //       contact,
// //       webURL,
// //       address1,
// //       address2,
// //       email,
// //       pan,
// //       gst,
// //     } = req.body;

// //     const files = req.files || {};

// //     // Get file path normalized or undefined
// //     const getFilePath = (field) => normalizePath(files[field] ? files[field][0].path : undefined);

// //     const existing = await SiteSettings.findOne();

// //     if (existing) {
// //       existing.addressTitle1 = addressTitle1;
// //       existing.addressTitle2 = addressTitle2;
// //       existing.contact = contact;
// //       existing.webURL = webURL;
// //       existing.address1 = address1;
// //       existing.address2 = address2;
// //       existing.email = email;
// //       existing.pan = pan;
// //       existing.gst = gst;

// //       if (getFilePath('footerImg1')) existing.footerImg1 = getFilePath('footerImg1');
// //       if (getFilePath('footerImg2')) existing.footerImg2 = getFilePath('footerImg2');
// //       if (getFilePath('footerImg3')) existing.footerImg3 = getFilePath('footerImg3');
// //       if (getFilePath('footerImg4')) existing.footerImg4 = getFilePath('footerImg4');
// //       if (getFilePath('footerImg5')) existing.footerImg5 = getFilePath('footerImg5');

// //       if (getFilePath('iiffPoster')) existing.iiffPoster = getFilePath('iiffPoster');
// //       if (getFilePath('brochure')) existing.brochure = getFilePath('brochure');
// //       if (getFilePath('documentary')) existing.documentary = getFilePath('documentary');
// //       if (getFilePath('brochureDownload')) existing.brochureDownload = getFilePath('brochureDownload');
// //       if (getFilePath('zeroCarbon')) existing.zeroCarbon = getFilePath('zeroCarbon');
// //       if (getFilePath('downloadMap')) existing.downloadMap = getFilePath('downloadMap');

// //       await existing.save();
// //       return res.status(200).json({ message: 'Settings updated', settings: existing });
// //     }

// //     // Create new site settings document
// //     const newSettings = new SiteSettings({
// //       addressTitle1,
// //       addressTitle2,
// //       contact,
// //       webURL,
// //       address1,
// //       address2,
// //       email,
// //       pan,
// //       gst,
// //       footerImg1: getFilePath('footerImg1'),
// //       footerImg2: getFilePath('footerImg2'),
// //       footerImg3: getFilePath('footerImg3'),
// //       footerImg4: getFilePath('footerImg4'),
// //       footerImg5: getFilePath('footerImg5'),
// //       iiffPoster: getFilePath('iiffPoster'),
// //       brochure: getFilePath('brochure'),
// //       documentary: getFilePath('documentary'),
// //       brochureDownload: getFilePath('brochureDownload'),
// //       zeroCarbon: getFilePath('zeroCarbon'),
// //       downloadMap: getFilePath('downloadMap'),
// //     });

// //     await newSettings.save();
// //     res.status(201).json({ message: 'Settings created', settings: newSettings });
// //   } catch (error) {
// //     console.error('Error saving settings:', error);
// //     res.status(500).json({ message: 'Server error', error: error.message });
// //   }
// // };

// // // Get site settings
// // export const getSettings = async (req, res) => {
// //   try {
// //     const settings = await SiteSettings.findOne().sort({ createdAt: -1 });
// //     if (!settings) {
// //       return res.status(404).json({ message: 'No settings found' });
// //     }
// //     res.status(200).json(settings);
// //   } catch (error) {
// //     console.error('Error fetching settings:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };


// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import SiteSettings from '../models/siteSettingsModel.js';

// // Helper function to normalize file paths with forward slashes
// const normalizePath = (filePath) => {
//   if (!filePath) return filePath;
//   return filePath.replace(/\\/g, '/');
// };

// // Helper function to delete file if exists
// const deleteIfExists = (filePath) => {
//   if (!filePath) return;
//   try {
//     // Resolve absolute path
//     const normalized = path.resolve(filePath);
//     // Safety check - only delete if inside uploads folder
//     if (normalized.startsWith(path.resolve('uploads')) && fs.existsSync(normalized)) {
//       fs.unlinkSync(normalized);
//     }
//   } catch (err) {
//     console.warn(`Failed to delete file: ${filePath}`, err);
//   }
// };

// // Multer storage configuration (unchanged)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     let folder = 'uploads/others';

//     if (['footerImg1', 'footerImg2', 'footerImg3', 'footerImg4', 'footerImg5'].includes(file.fieldname)) {
//       folder = 'uploads/footerImages';
//     } else if (file.fieldname === 'iiffPoster') {
//       folder = 'uploads/iiffPosters';
//     } else if (file.fieldname === 'brochure' || file.fieldname === 'brochureDownload') {
//       folder = 'uploads/brochures';
//     } else if (file.fieldname === 'documentary') {
//       folder = 'uploads/documentaries';
//     } else if (file.fieldname === 'zeroCarbon') {
//       folder = 'uploads/zeroCarbon';
//     } else if (file.fieldname === 'downloadMap') {
//       folder = 'uploads/downloadMaps';
//     }

//     fs.mkdirSync(folder, { recursive: true });
//     cb(null, folder);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// export const upload = multer({ storage });

// // Save or update site settings with file cleanup
// export const saveSettings = async (req, res) => {
//   try {
//     const {
//       addressTitle1,
//       addressTitle2,
//       contact,
//       webURL,
//       address1,
//       address2,
//       email,
//       pan,
//       gst,
//     } = req.body;

//     const files = req.files || {};

//     // Get file path normalized or undefined
//     const getFilePath = (field) => normalizePath(files[field] ? files[field][0].path : undefined);

//     const existing = await SiteSettings.findOne();

//     if (existing) {
//       existing.addressTitle1 = addressTitle1;
//       existing.addressTitle2 = addressTitle2;
//       existing.contact = contact;
//       existing.webURL = webURL;
//       existing.address1 = address1;
//       existing.address2 = address2;
//       existing.email = email;
//       existing.pan = pan;
//       existing.gst = gst;

//       // Delete old files if new ones are uploaded and update paths
//       if (getFilePath('footerImg1')) {
//         deleteIfExists(existing.footerImg1);
//         existing.footerImg1 = getFilePath('footerImg1');
//       }
//       if (getFilePath('footerImg2')) {
//         deleteIfExists(existing.footerImg2);
//         existing.footerImg2 = getFilePath('footerImg2');
//       }
//       if (getFilePath('footerImg3')) {
//         deleteIfExists(existing.footerImg3);
//         existing.footerImg3 = getFilePath('footerImg3');
//       }
//       if (getFilePath('footerImg4')) {
//         deleteIfExists(existing.footerImg4);
//         existing.footerImg4 = getFilePath('footerImg4');
//       }
//       if (getFilePath('footerImg5')) {
//         deleteIfExists(existing.footerImg5);
//         existing.footerImg5 = getFilePath('footerImg5');
//       }

//       if (getFilePath('iiffPoster')) {
//         deleteIfExists(existing.iiffPoster);
//         existing.iiffPoster = getFilePath('iiffPoster');
//       }
//       if (getFilePath('brochure')) {
//         deleteIfExists(existing.brochure);
//         existing.brochure = getFilePath('brochure');
//       }
//       if (getFilePath('documentary')) {
//         deleteIfExists(existing.documentary);
//         existing.documentary = getFilePath('documentary');
//       }
//       if (getFilePath('brochureDownload')) {
//         deleteIfExists(existing.brochureDownload);
//         existing.brochureDownload = getFilePath('brochureDownload');
//       }
//       if (getFilePath('zeroCarbon')) {
//         deleteIfExists(existing.zeroCarbon);
//         existing.zeroCarbon = getFilePath('zeroCarbon');
//       }
//       if (getFilePath('downloadMap')) {
//         deleteIfExists(existing.downloadMap);
//         existing.downloadMap = getFilePath('downloadMap');
//       }

//       await existing.save();
//       return res.status(200).json({ message: 'Settings updated', settings: existing });
//     }

//     // Create new site settings document
//     const newSettings = new SiteSettings({
//       addressTitle1,
//       addressTitle2,
//       contact,
//       webURL,
//       address1,
//       address2,
//       email,
//       pan,
//       gst,
//       footerImg1: getFilePath('footerImg1'),
//       footerImg2: getFilePath('footerImg2'),
//       footerImg3: getFilePath('footerImg3'),
//       footerImg4: getFilePath('footerImg4'),
//       footerImg5: getFilePath('footerImg5'),
//       iiffPoster: getFilePath('iiffPoster'),
//       brochure: getFilePath('brochure'),
//       documentary: getFilePath('documentary'),
//       brochureDownload: getFilePath('brochureDownload'),
//       zeroCarbon: getFilePath('zeroCarbon'),
//       downloadMap: getFilePath('downloadMap'),
//     });

//     await newSettings.save();
//     res.status(201).json({ message: 'Settings created', settings: newSettings });
//   } catch (error) {
//     console.error('Error saving settings:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Get site settings (unchanged)
// export const getSettings = async (req, res) => {
//   try {
//     const settings = await SiteSettings.findOne().sort({ createdAt: -1 });
//     if (!settings) {
//       return res.status(404).json({ message: 'No settings found' });
//     }
//     res.status(200).json(settings);
//   } catch (error) {
//     console.error('Error fetching settings:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };




//after video add
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import SiteSettings from '../models/siteSettingsModel.js';

// Helper to normalize path slashes
const normalizePath = (filePath) => {
  if (!filePath) return filePath;
  return filePath.replace(/\\/g, '/');
};

// Helper to delete old files safely
const deleteIfExists = (filePath) => {
  if (!filePath) return;
  try {
    const normalized = path.resolve(filePath);
    if (normalized.startsWith(path.resolve('uploads')) && fs.existsSync(normalized)) {
      fs.unlinkSync(normalized);
      console.log(`Deleted old file: ${normalized}`);
    }
  } catch (err) {
    console.warn(`Failed to delete file: ${filePath}`, err);
  }
};

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'uploads/others';

    if (['footerImg1', 'footerImg2', 'footerImg3', 'footerImg4', 'footerImg5'].includes(file.fieldname)) {
      folder = 'uploads/footerImages';
    } else if (file.fieldname === 'iiffPoster') {
      folder = 'uploads/iiffPosters';
    } else if (file.fieldname === 'brochure' || file.fieldname === 'brochureDownload') {
      folder = 'uploads/brochures';
    } else if (file.fieldname === 'documentary') {
      folder = 'uploads/documentaries';
    } else if (file.fieldname === 'zeroCarbon') {
      folder = 'uploads/zeroCarbon';
    } else if (file.fieldname === 'downloadMap') {
      folder = 'uploads/downloadMaps';
    } else if (file.fieldname === 'homeVideo') {
      folder = 'uploads/homeVideos';
    }

    fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB limit (adjust as needed)
});

// Controller to save settings
export const saveSettings = async (req, res) => {
  try {
    console.log('Received files:', req.files);

    const {
      addressTitle1,
      addressTitle2,
      contact,
      webURL,
      address1,
      address2,
      email,
      pan,
      gst,
    } = req.body;

    const files = req.files || {};

    // Helper to get normalized file path from uploaded files
    const getFilePath = (field) => normalizePath(files[field] ? files[field][0].path : undefined);

    const existing = await SiteSettings.findOne();

    if (existing) {
      existing.addressTitle1 = addressTitle1;
      existing.addressTitle2 = addressTitle2;
      existing.contact = contact;
      existing.webURL = webURL;
      existing.address1 = address1;
      existing.address2 = address2;
      existing.email = email;
      existing.pan = pan;
      existing.gst = gst;

      // Delete old files if new ones uploaded & update paths
      ['footerImg1', 'footerImg2', 'footerImg3', 'footerImg4', 'footerImg5', 'iiffPoster', 'brochure', 'documentary', 'brochureDownload', 'zeroCarbon', 'downloadMap', 'homeVideo'].forEach(field => {
        const newPath = getFilePath(field);
        if (newPath) {
          deleteIfExists(existing[field]);
          existing[field] = newPath;
        }
      });

      await existing.save();
      return res.status(200).json({ message: 'Settings updated', settings: existing });
    }

    // Create new settings if none exist
    const newSettings = new SiteSettings({
      addressTitle1,
      addressTitle2,
      contact,
      webURL,
      address1,
      address2,
      email,
      pan,
      gst,
      footerImg1: getFilePath('footerImg1'),
      footerImg2: getFilePath('footerImg2'),
      footerImg3: getFilePath('footerImg3'),
      footerImg4: getFilePath('footerImg4'),
      footerImg5: getFilePath('footerImg5'),
      iiffPoster: getFilePath('iiffPoster'),
      brochure: getFilePath('brochure'),
      documentary: getFilePath('documentary'),
      brochureDownload: getFilePath('brochureDownload'),
      zeroCarbon: getFilePath('zeroCarbon'),
      downloadMap: getFilePath('downloadMap'),
      homeVideo: getFilePath('homeVideo'),
    });

    await newSettings.save();
    res.status(201).json({ message: 'Settings created', settings: newSettings });
  } catch (error) {
    console.error('Error saving settings:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get settings controller (unchanged)
export const getSettings = async (req, res) => {
  try {
    const settings = await SiteSettings.findOne().sort({ createdAt: -1 });
    if (!settings) {
      return res.status(404).json({ message: 'No settings found' });
    }
    res.status(200).json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
