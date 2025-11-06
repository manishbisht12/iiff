import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema(
  {
    addressTitle1: { type: String, required: true },
    addressTitle2: { type: String },
    contact: { type: String, required: true },
    webURL: { type: String },
    address1: { type: String, required: true },
    address2: { type: String },
    email: { type: String, required: true },

    footerImg1: { type: String },
    footerImg2: { type: String },
    footerImg3: { type: String },
    footerImg4: { type: String },
    footerImg5: { type: String },

    pan: { type: String },
    gst: { type: String },
    iiffPoster: { type: String },

    brochure: { type: String }, // PDF
    documentary: { type: String }, // video path
    brochureDownload: { type: String }, // PDF
    zeroCarbon: { type: String }, // PDF
    downloadMap: { type: String }, // PDF
    homeVideo: { type: String },
  },
  { timestamps: true }
);

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);

export default SiteSettings;
