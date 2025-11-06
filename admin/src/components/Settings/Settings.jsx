// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Settings = ({ darkMode }) => {
//   const [formData, setFormData] = useState({
//     addressTitle1: '',
//     addressTitle2: '',
//     contact: '',
//     webURL: '',
//     address1: '',
//     address2: '',
//     email: '',
//     footerImg1: null,
//     footerImg2: null,
//     footerImg3: null,
//     footerImg4: null,
//     footerImg5: null,
//     pan: '',
//     gst: '',
//     iiffPoster: null,
//     brochure: null,
//     documentary: null,
//     brochureDownload: null,
//     zeroCarbon: null,
//     downloadMap: null,
//   });

//   // Fetch existing settings to prefill form on component mount
//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/settings');
//         if (response.data) {
//           const data = response.data;
//           // Prefill text inputs only; files can’t be prefilled
//           setFormData((prev) => ({
//             ...prev,
//             addressTitle1: data.addressTitle1 || '',
//             addressTitle2: data.addressTitle2 || '',
//             contact: data.contact || '',
//             webURL: data.webURL || '',
//             address1: data.address1 || '',
//             address2: data.address2 || '',
//             email: data.email || '',
//             pan: data.pan || '',
//             gst: data.gst || '',
//             // Add more fields as your backend returns them
//           }));
//         }
//       } catch (error) {
//         console.error('Error fetching settings:', error);
//         toast.error('Failed to load settings.');
//       }
//     };
//     fetchSettings();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();

//       // Append only keys with values
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value) data.append(key, value);
//       });

//       await axios.post('http://localhost:5000/api/settings', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       toast.success('Settings saved successfully!', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
//     } catch (error) {
//       console.error('Error saving settings:', error);
//       toast.error('Failed to save settings.', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer />

//       <div className={`settings-container ${darkMode ? 'dark' : 'light'}`}>
//         <div className={`settings-header ${darkMode ? 'dark' : 'light'}`}>
//           <h2>Footer Setting</h2>
//         </div>

//         <form className="form-body" onSubmit={handleSubmit} encType="multipart/form-data">
//           {/* Address and Contact Info */}
//           <div className="form-grid">
//             <div className="form-group">
//               <label>Address Title 1</label>
//               <input type="text" name="addressTitle1" value={formData.addressTitle1} onChange={handleChange} required />

//               <label>Address Title 2</label>
//               <input type="text" name="addressTitle2" value={formData.addressTitle2} onChange={handleChange} />

//               <label>Contact</label>
//               <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

//               <label>Web URL</label>
//               <input type="url" name="webURL" value={formData.webURL} onChange={handleChange} />

//               <label>Footer Image 1</label>
//               <input type="file" name="footerImg1" accept="image/*" onChange={handleChange} />

//               <label>Footer Image 3</label>
//               <input type="file" name="footerImg3" accept="image/*" onChange={handleChange} />
//             </div>

//             <div className="form-group">
//               <label>Address 1</label>
//               <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />

//               <label>Address 2</label>
//               <input type="text" name="address2" value={formData.address2} onChange={handleChange} />

//               <label>Email</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//               <label>Footer Image 2</label>
//               <input type="file" name="footerImg2" accept="image/*" onChange={handleChange} />

//               <label>Footer Image 4</label>
//               <input type="file" name="footerImg4" accept="image/*" onChange={handleChange} />

//               <label>Footer Image 5</label>
//               <input type="file" name="footerImg5" accept="image/*" onChange={handleChange} />
//             </div>
//           </div>

//           <hr style={{ margin: '40px 0' }} />

//           {/* Navbar Setting */}
//           <h3 style={{ padding: '0 32px', marginBottom: '16px' }}>Navbar Setting</h3>
//           <div className="form-grid">
//             <div className="form-group">
//               <label>PAN</label>
//               <input type="text" name="pan" value={formData.pan} onChange={handleChange} />

//               <label>IIFF 2025 Poster</label>
//               <input type="file" name="iiffPoster" accept="image/*" onChange={handleChange} />
//             </div>

//             <div className="form-group">
//               <label>GST</label>
//               <input type="text" name="gst" value={formData.gst} onChange={handleChange} />

//               <label>Download Brochure (PDF)</label>
//               <input type="file" name="brochure" accept="application/pdf" onChange={handleChange} />
//             </div>
//           </div>

//           <hr style={{ margin: '40px 0' }} />

//           {/* Expo Setting New Section */}
//           <h3 style={{ padding: '0 32px', marginBottom: '16px' }}>Expo Setting</h3>
//           <div className="form-grid">
//             <div className="form-group">
//               <label>Documentory (Video)</label>
//               <input type="file" name="documentary" accept="video/*" onChange={handleChange} />

//               <label>Brochure Download (PDF)</label>
//               <input type="file" name="brochureDownload" accept="application/pdf" onChange={handleChange} />
//             </div>

//             <div className="form-group">
//               <label>Zero Carbon (PDF)</label>
//               <input type="file" name="zeroCarbon" accept="application/pdf" onChange={handleChange} />

//               <label>Download Map (PDF)</label>
//               <input type="file" name="downloadMap" accept="application/pdf" onChange={handleChange} />
//             </div>
//           </div>

//           <button type="submit" className="update-btn">Update</button>
//         </form>
//       </div>

//       <style>{`
//         .settings-container {
//           border-radius: 8px;
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//           margin-top: 20px;
//           padding-bottom: 40px;
//         }

//         .settings-container.light {
//           background-color: white;
//         }

//         .settings-container.dark {
//           background-color: #1f2937;
//           color: #e5e7eb;
//         }

//         .settings-header {
//           padding: 24px;
//           border-bottom: 1px solid;
//         }

//         .settings-header.light {
//           border-color: #e5e7eb;
//         }

//         .settings-header.dark {
//           border-color: #374151;
//         }

//         .settings-header h2 {
//           font-size: 18px;
//           font-weight: 600;
//         }

//         .form-body {
//           padding: 32px;
//         }

//         .form-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 24px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//         }

//         label {
//           font-weight: 500;
//           margin-bottom: 6px;
//           font-size: 14px;
//           margin-top: 16px;
//         }

//         input[type="text"],
//         input[type="email"],
//         input[type="url"],
//         input[type="file"],
//         input[type="video"] {
//           padding: 10px;
//           font-size: 14px;
//           border-radius: 6px;
//           border: 1px solid #d1d5db;
//           outline: none;
//           background-color: #fff;
//         }

//         .update-btn {
//           margin: 32px;
//           padding: 12px 24px;
//           font-size: 16px;
//           font-weight: 600;
//           background-color: #2563eb;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .update-btn:hover {
//           background-color: #1e40af;
//         }

//         @media (max-width: 768px) {
//           .form-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Settings;














//after add video
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    addressTitle1: '',
    addressTitle2: '',
    contact: '',
    webURL: '',
    address1: '',
    address2: '',
    email: '',
    footerImg1: null,
    footerImg2: null,
    footerImg3: null,
    footerImg4: null,
    footerImg5: null,
    pan: '',
    gst: '',
    iiffPoster: null,
    brochure: null,
    documentary: null,
    brochureDownload: null,
    zeroCarbon: null,
    downloadMap: null,
    homeVideo: null,
  });

  const [existingData, setExistingData] = useState({});

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/settings');
        if (response.data) {
          const data = response.data;
          setExistingData(data);
          setFormData((prev) => ({
            ...prev,
            addressTitle1: data.addressTitle1 || '',
            addressTitle2: data.addressTitle2 || '',
            contact: data.contact || '',
            webURL: data.webURL || '',
            address1: data.address1 || '',
            address2: data.address2 || '',
            email: data.email || '',
            pan: data.pan || '',
            gst: data.gst || '',
          }));
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
        toast.error('Failed to load settings.');
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      await axios.post('http://localhost:5000/api/settings', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings.');
    }
  };

  return (
    <>
      <ToastContainer />

      <div className={`settings-container ${darkMode ? 'dark' : 'light'}`}>
        <div className={`settings-header ${darkMode ? 'dark' : 'light'}`}>
          <h2>Site Settings</h2>
        </div>

        <form className="form-body" onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Contact and Address */}
          <div className="form-grid">
            <div className="form-group">
              <label>Address Title 1</label>
              <input type="text" name="addressTitle1" value={formData.addressTitle1} onChange={handleChange} required />

              <label>Address Title 2</label>
              <input type="text" name="addressTitle2" value={formData.addressTitle2} onChange={handleChange} />

              <label>Contact</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

              <label>Web URL</label>
              <input type="url" name="webURL" value={formData.webURL} onChange={handleChange} />

              <label>Footer Image 1</label>
              <input type="file" name="footerImg1" accept="image/*" onChange={handleChange} />

              <label>Footer Image 3</label>
              <input type="file" name="footerImg3" accept="image/*" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Address 1</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />

              <label>Address 2</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} />

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Footer Image 2</label>
              <input type="file" name="footerImg2" accept="image/*" onChange={handleChange} />

              <label>Footer Image 4</label>
              <input type="file" name="footerImg4" accept="image/*" onChange={handleChange} />

              <label>Footer Image 5</label>
              <input type="file" name="footerImg5" accept="image/*" onChange={handleChange} />
            </div>
          </div>

          <hr style={{ margin: '40px 0' }} />

          {/* Navbar Setting */}
          <h3 style={{ padding: '0 32px' }}>Navbar Setting</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>PAN</label>
              <input type="text" name="pan" value={formData.pan} onChange={handleChange} />

              <label>IIFF Poster</label>
              <input type="file" name="iiffPoster" accept="image/*" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>GST</label>
              <input type="text" name="gst" value={formData.gst} onChange={handleChange} />

              <label>Brochure</label>
              <input type="file" name="brochure" accept="application/pdf" onChange={handleChange} />
            </div>
          </div>

          <hr style={{ margin: '40px 0' }} />

          {/* Expo Settings */}
          <h3 style={{ padding: '0 32px' }}>Expo Setting</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Documentary Video</label>
              <input type="file" name="documentary" accept="video/*" onChange={handleChange} />

              <label>Brochure Download</label>
              <input type="file" name="brochureDownload" accept="application/pdf" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Zero Carbon</label>
              <input type="file" name="zeroCarbon" accept="application/pdf" onChange={handleChange} />

              <label>Download Map</label>
              <input type="file" name="downloadMap" accept="application/pdf" onChange={handleChange} />
            </div>
          </div>

          <hr style={{ margin: '40px 0' }} />

          {/* Home Video Section */}
          <h3 style={{ padding: '0 32px' }}>Home Video Setting</h3>
          <div className="form-group" style={{ padding: '0 32px' }}>
            <label>Home Video</label>
            <input type="file" name="homeVideo" accept="video/*" onChange={handleChange} />
            {existingData.homeVideo && (
              <video width="400" controls style={{ marginTop: '12px' }}>
                <source src={`http://localhost:5000/${existingData.homeVideo}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <button type="submit" className="update-btn">Update</button>
        </form>
      </div>

      <style>{`
        .settings-container {
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
          padding-bottom: 40px;
        }

        .settings-container.light {
          background-color: white;
        }

        .settings-container.dark {
          background-color: #1f2937;
          color: #e5e7eb;
        }

        .settings-header {
          padding: 24px;
          border-bottom: 1px solid;
        }

        .settings-header.light {
          border-color: #e5e7eb;
        }

        .settings-header.dark {
          border-color: #374151;
        }

        .settings-header h2 {
          font-size: 20px;
          font-weight: 600;
        }

        .form-body {
          padding: 32px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: 500;
          margin-bottom: 6px;
          font-size: 14px;
          margin-top: 16px;
        }

        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="file"] {
          padding: 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          outline: none;
          background-color: #fff;
        }

        .update-btn {
          margin: 32px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .update-btn:hover {
          background-color: #1e40af;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Settings;
