// // import React, { useState, useEffect } from 'react';
// // import { RiArrowDropDownLine } from "react-icons/ri";
// // import { FaBars, FaTimes } from "react-icons/fa";
// // import { Link } from 'react-router-dom';
// // import headerImage from '../assets/Image 1.png';
// // import posterImage from '../assets/IIFF2025_Student_Poster (1).jpg';
// // import posterPdf from '../assets/IIFF2025_Brochure.pdf';
// // import RegisterPopup from './RegisterPopup';
// // import './Header.css';

// // const Header = () => {
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [mentorshipOpen, setMentorshipOpen] = useState(false);

// //   // Close mobile menu on outside click
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-icon')) {
// //         setMobileMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [mobileMenuOpen]);

// //   // Prevent scroll when mobile menu is open
// //   useEffect(() => {
// //     document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [mobileMenuOpen]);

// //   const handleStudentClick = () => {
// //     setShowPopup(true);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleEntrepreneurClick = () => {
// //     setShowPopup(true);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleIIFFDownload = () => {
// //     const link = document.createElement('a');
// //     link.href = posterImage;
// //     link.download = 'IIFF2025_Student_Poster.jpg';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleIIFFDownloadPdf = () => {
// //     const link = document.createElement('a');
// //     link.href = posterPdf;
// //     link.download = 'IIFF2025_Brochure.pdf';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleExpoClick = () => {
// //     setMobileMenuOpen(false);
// //   };

// //   return (
// //     <div>
// //       <div className="left-container">
// //         <div className="logo-container">
// //           <img src={headerImage} alt="Logo" className="logo-image" />
// //         </div>

// //         <div className="hamburger-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //           {mobileMenuOpen ? <FaTimes /> : <FaBars />}
// //         </div>

// //         <div className="right-container desktop-only">
// //           <div className="upper-inner-container">
// //             <span className="bold-text">PAN :</span> AAAPL1234C |{' '}
// //             <span className="bold-text">GST :</span> 27AAAPL1234C1ZV
// //           </div>

// //           <div className="bottom-inner-container">
// //             <div className="nav-wrapper">
// //               <ul className="nav-list">
// //                 <li><Link to="/" className="nav-link">Home</Link></li>
// //                 <li><Link to="/about" className="nav-link">About us</Link></li>
// //                 <li className="mentorship-menu">
// //                   Mentorship <RiArrowDropDownLine className="dropdown-icon" />
// //                   <ul className="dropdown-menu">
// //                     <li className="dropdown-item" onClick={handleStudentClick}>Students</li>
// //                     <li className="dropdown-item" onClick={handleEntrepreneurClick}>Entrepreneur</li>
// //                     <li className="dropdown-item" onClick={handleIIFFDownload}>IIFF 2025</li>
// //                   </ul>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="button-container">
// //               <button className="expo-button" onClick={handleExpoClick}>Expo</button>
// //               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation Drawer */}
// //       {mobileMenuOpen && (
// //         <div className="mobile-menu">
// //           <ul className="mobile-nav-list">
// //             <li>
// //               <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link>
// //             </li>
// //             {/* Collapsible Mentorship Menu */}
// //             <li
// //               className="mobile-mentorship-toggle"
// //               onClick={() => setMentorshipOpen(!mentorshipOpen)}
// //             >
// //               <span>Mentorship</span>
// //               <RiArrowDropDownLine
// //                 className={`mobile-dropdown-icon ${mentorshipOpen ? 'rotated' : ''}`}
// //               />
// //             </li>
// //             {mentorshipOpen && (
// //               <>
// //                 <li onClick={handleStudentClick} className="mobile-dropdown-item">Students</li>
// //                 <li onClick={handleEntrepreneurClick} className="mobile-dropdown-item">Entrepreneur</li>
// //                 <li onClick={handleIIFFDownload} className="mobile-dropdown-item">IIFF 2025</li>
// //               </>
// //             )}
// //             <li>
// //               <button className="expo-button" onClick={handleExpoClick}>Expo</button>
// //             </li>
// //             <li>
// //               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
// //             </li>
// //           </ul>
// //         </div>
// //       )}

// //       <div className="orange-bar">12 to 14 December 2025</div>
// //       {showPopup && <RegisterPopup onClose={() => setShowPopup(false)} />}
// //     </div>
// //   );
// // };

// // export default Header;



// //after navigate students and Entrepreneur

// // import React, { useState, useEffect } from 'react';
// // import { RiArrowDropDownLine } from "react-icons/ri";
// // import { FaBars, FaTimes } from "react-icons/fa";
// // import { Link, useNavigate } from 'react-router-dom';
// // import headerImage from '../assets/Image 1.png';
// // import posterImage from '../assets/IIFF2025_Student_Poster (1).jpg';
// // import posterPdf from '../assets/IIFF2025_Brochure.pdf';
// // import RegisterPopup from './RegisterPopup';
// // import './Header.css';

// // const Header = () => {
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [userType, setUserType] = useState(null); // ✅ Track student/entrepreneur
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [mentorshipOpen, setMentorshipOpen] = useState(false);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-icon')) {
// //         setMobileMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [mobileMenuOpen]);

// //   useEffect(() => {
// //     document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [mobileMenuOpen]);

// //   // ✅ Show popup and set user type
// //   const handleStudentClick = () => {
// //     setUserType('student');
// //     setShowPopup(true);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleEntrepreneurClick = () => {
// //     setUserType('entrepreneur');
// //     setShowPopup(true);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleIIFFDownload = () => {
// //     const link = document.createElement('a');
// //     link.href = posterImage;
// //     link.download = 'IIFF2025_Student_Poster.jpg';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleIIFFDownloadPdf = () => {
// //     const link = document.createElement('a');
// //     link.href = posterPdf;
// //     link.download = 'IIFF2025_Brochure.pdf';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //     setMobileMenuOpen(false);
// //   };

// //   const handleExpoClick = () => {
// //     setMobileMenuOpen(false);
// //   };

// //   return (
// //     <div>
// //       <div className="left-container">
// //         <div className="logo-container">
// //           <img src={headerImage} alt="Logo" className="logo-image-header" />
// //         </div>

// //         <div className="hamburger-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //           {mobileMenuOpen ? <FaTimes /> : <FaBars />}
// //         </div>

// //         <div className="right-container desktop-only">
// //           <div className="upper-inner-container">
// //             <span className="bold-text">PAN :</span> AAAPL1234C |{' '}
// //             <span className="bold-text">GST :</span> 27AAAPL1234C1ZV
// //           </div>

// //           <div className="bottom-inner-container">
// //             <div className="nav-wrapper">
// //               <ul className="nav-list">
// //                 <li><Link to="/" className="nav-link">Home</Link></li>
// //                 <li><Link to="/about" className="nav-link">About us</Link></li>
// //                 <li className="mentorship-menu">
// //                   Mentorship <RiArrowDropDownLine className="dropdown-icon" />
// //                   <ul className="dropdown-menu">
// //                     <li className="dropdown-item" onClick={handleStudentClick}>Students</li>
// //                     <li className="dropdown-item" onClick={handleEntrepreneurClick}>Entrepreneur</li>
// //                     <li className="dropdown-item" onClick={handleIIFFDownload}>IIFF 2025</li>
// //                   </ul>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="button-container">
// //               <Link to="/expo" className="expo-button" onClick={handleExpoClick}>
// //   Expo
// // </Link>

// //               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {mobileMenuOpen && (
// //         <div className="mobile-menu">
// //           <ul className="mobile-nav-list">
// //             <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
// //             <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link></li>
// //             <li className="mobile-mentorship-toggle" onClick={() => setMentorshipOpen(!mentorshipOpen)}>
// //               <span>Mentorship</span>
// //               <RiArrowDropDownLine className={`mobile-dropdown-icon ${mentorshipOpen ? 'rotated' : ''}`} />
// //             </li>
// //             {mentorshipOpen && (
// //               <>
// //                 <li onClick={handleStudentClick} className="mobile-dropdown-item">Students</li>
// //                 <li onClick={handleEntrepreneurClick} className="mobile-dropdown-item">Entrepreneur</li>
// //                 <li onClick={handleIIFFDownload} className="mobile-dropdown-item">IIFF 2025</li>
// //               </>
// //             )}
// //             <li>
// //               <button className="expo-button" onClick={handleExpoClick}>Expo</button>
// //             </li>
// //             <li>
// //               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
// //             </li>
// //           </ul>
// //         </div>
// //       )}

// //       <div className="orange-bar">12 to 14 December 2025</div>

// //       {/* ✅ Show Popup if needed */}
// //       {showPopup && (
// //         <RegisterPopup
// //           onClose={() => setShowPopup(false)}
// //           userType={userType} // ✅ pass student/entrepreneur
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default Header;















// import React, { useState, useEffect } from 'react';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import headerImage from '../assets/Image 1.png';
// import RegisterPopup from './RegisterPopup';
// import './Header.css';

// const API_BASE = 'http://localhost:5000'; // Ensure this is your actual backend base

// const Header = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mentorshipOpen, setMentorshipOpen] = useState(false);
//   const [settings, setSettings] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch settings from backend
//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const response = await fetch(`${API_BASE}/api/settings`);
//         if (!response.ok) throw new Error('Failed to fetch settings');
//         const data = await response.json();
//         setSettings(data);
//       } catch (err) {
//         setError(err.message || 'Unknown error');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSettings();
//   }, []);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileMenuOpen &&
//         !event.target.closest('.mobile-menu') &&
//         !event.target.closest('.hamburger-icon')
//       ) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [mobileMenuOpen]);

//   // Disable scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [mobileMenuOpen]);

//   // Helpers
//   const getFullUrl = (path) => {
//     if (!path) return null;
//     return path.startsWith('http://') || path.startsWith('https://')
//       ? path
//       : `${API_BASE}/${path}`;
//   };

//   // Download Poster Image
//   const handleIIFFDownload = () => {
//     const fullUrl = getFullUrl(settings?.iiffPoster);
//     if (!fullUrl) return;
//     const fileName = fullUrl.split('/').pop() || 'IIFF_Poster.jpg';
//     const link = document.createElement('a');
//     link.href = fullUrl;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setMobileMenuOpen(false);
//   };

//   // Download Brochure PDF
//   const handleIIFFDownloadPdf = () => {
//     const fullUrl = getFullUrl(settings?.brochure);
//     if (!fullUrl) return;
//     const fileName = fullUrl.split('/').pop() || 'IIFF_Brochure.pdf';
//     const link = document.createElement('a');
//     link.href = fullUrl;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setMobileMenuOpen(false);
//   };

//   const handleStudentClick = () => {
//     setUserType('student');
//     setShowPopup(true);
//     setMobileMenuOpen(false);
//   };

//   const handleEntrepreneurClick = () => {
//     setUserType('entrepreneur');
//     setShowPopup(true);
//     setMobileMenuOpen(false);
//   };

//   const handleExpoClick = () => {
//     setMobileMenuOpen(false);
//   };

//   if (loading) return <div className="header-loading">Loading...</div>;
//   if (error) return <div className="header-error">Error: {error}</div>;

//   return (
//     <div>
//       <div className="left-container">
//         <div className="logo-container">
//           <img src={headerImage} alt="Logo" className="logo-image-header" />
//         </div>

//         <div
//           className="hamburger-icon"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         <div className="right-container desktop-only">
//           <div className="upper-inner-container">
//             <span className="bold-text">PAN :</span> {settings.pan || 'N/A'} |{' '}
//             <span className="bold-text">GST :</span> {settings.gst || 'N/A'}
//           </div>

//           <div className="bottom-inner-container">
//             <div className="nav-wrapper">
//               <ul className="nav-list">
//                 <li><Link to="/" className="nav-link">Home</Link></li>
//                 <li><Link to="/about" className="nav-link">About us</Link></li>
//                 <li className="mentorship-menu">
//                   Mentorship <RiArrowDropDownLine className="dropdown-icon" />
//                   <ul className="dropdown-menu">
//                     <li className="dropdown-item" onClick={handleStudentClick}>Students</li>
//                     <li className="dropdown-item" onClick={handleEntrepreneurClick}>Entrepreneur</li>
//                     <li className="dropdown-item" onClick={handleIIFFDownload}>IIFF 2025</li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//             <div className="button-container">
//               <Link to="/expo" className="expo-button" onClick={handleExpoClick}>Expo</Link>
//               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="mobile-menu">
//           <ul className="mobile-nav-list">
//             <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link></li>
//             <li className="mobile-mentorship-toggle" onClick={() => setMentorshipOpen(!mentorshipOpen)}>
//               <span>Mentorship</span>
//               <RiArrowDropDownLine className={`mobile-dropdown-icon ${mentorshipOpen ? 'rotated' : ''}`} />
//             </li>
//             {mentorshipOpen && (
//               <>
//                 <li onClick={handleStudentClick} className="mobile-dropdown-item">Students</li>
//                 <li onClick={handleEntrepreneurClick} className="mobile-dropdown-item">Entrepreneur</li>
//                 <li onClick={handleIIFFDownload} className="mobile-dropdown-item">IIFF 2025</li>
//               </>
//             )}
//             <li><button className="expo-button" onClick={handleExpoClick}>Expo</button></li>
//             <li><button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button></li>
//           </ul>
//         </div>
//       )}

//       <div className="orange-bar">12 to 14 December 2025</div>

//       {showPopup && (
//         <RegisterPopup onClose={() => setShowPopup(false)} userType={userType} />
//       )}
//     </div>
//   );
// };

// export default Header;









//after  poster and pdf from admin

// import React, { useState, useEffect } from 'react';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import headerImage from '../assets/Image 1.png';
// import RegisterPopup from './RegisterPopup';
// import './Header.css';

// const API_BASE = 'http://localhost:5000';

// const Header = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mentorshipOpen, setMentorshipOpen] = useState(false);
//   const [settings, setSettings] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const response = await fetch(`${API_BASE}/api/settings`);
//         if (!response.ok) throw new Error('Failed to fetch settings');
//         const data = await response.json();
//         setSettings(data);
//       } catch (err) {
//         setError(err.message || 'Unknown error');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSettings();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileMenuOpen &&
//         !event.target.closest('.mobile-menu') &&
//         !event.target.closest('.hamburger-icon')
//       ) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [mobileMenuOpen]);

//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [mobileMenuOpen]);

//   const getFullUrl = (path) => {
//     if (!path) return null;
//     return path.startsWith('http://') || path.startsWith('https://')
//       ? path
//       : `${API_BASE}/${path}`;
//   };

//   // Download IIFF Poster image
//   const handleIIFFDownload = async () => {
//     const fullUrl = getFullUrl(settings?.iiffPoster);
//     if (!fullUrl) {
//       alert('IIFF Poster not available.');
//       setMobileMenuOpen(false);
//       return;
//     }

//     try {
//       const response = await fetch(fullUrl);
//       if (!response.ok) throw new Error('Failed to download poster image');

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       const fileNameFromUrl = fullUrl.split('/').pop() || 'IIFF_Poster.jpg';
//       link.href = url;
//       link.setAttribute('download', fileNameFromUrl);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.error('Image download failed:', err);
//       alert('Failed to download IIFF Poster image.');
//     }

//     setMobileMenuOpen(false);
//   };

//   // Download brochure PDF - forces fresh fetch every time
//   const handleIIFFDownloadPdf = async () => {
//     const rawUrl = getFullUrl(settings?.brochure);
//     if (!rawUrl) {
//       alert("Brochure not available.");
//       setMobileMenuOpen(false);
//       return;
//     }

//     const fullUrl = `${rawUrl}?t=${Date.now()}`;

//     try {
//       const response = await fetch(fullUrl, {
//         method: 'GET',
//         cache: 'no-store',
//         headers: {
//           'Cache-Control': 'no-store',
//           'Pragma': 'no-cache',
//           'Expires': '0',
//         }
//       });

//       if (!response.ok) throw new Error('Failed to download brochure');

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       const fileName = rawUrl.split('/').pop() || 'IIFF_Brochure.pdf';
//       link.href = url;
//       link.setAttribute('download', fileName);

//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       window.URL.revokeObjectURL(url);

//       console.log('Brochure download successful, status:', response.status);
//     } catch (err) {
//       console.error('Brochure download failed:', err);
//       alert('Failed to download the brochure.');
//     }

//     setMobileMenuOpen(false);
//   };

//   const handleStudentClick = () => {
//     setUserType('student');
//     setShowPopup(true);
//     setMobileMenuOpen(false);
//   };

//   const handleEntrepreneurClick = () => {
//     setUserType('entrepreneur');
//     setShowPopup(true);
//     setMobileMenuOpen(false);
//   };

//   const handleExpoClick = () => {
//     setMobileMenuOpen(false);
//   };

//   if (loading) return <div className="header-loading">Loading...</div>;
//   if (error) return <div className="header-error">Error: {error}</div>;

//   return (
//     <div>
//       <div className="left-container">
//         <div className="logo-container">
//           <img src={headerImage} alt="Logo" className="logo-image-header" />
//         </div>

//         <div
//           className="hamburger-icon"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         <div className="right-container desktop-only">
//           <div className="upper-inner-container">
//             <span className="bold-text">PAN :</span> {settings.pan || 'N/A'} |{' '}
//             <span className="bold-text">GST :</span> {settings.gst || 'N/A'}
//           </div>

//           <div className="bottom-inner-container">
//             <div className="nav-wrapper">
//               <ul className="nav-list">
//                 <li><Link to="/" className="nav-link">Home</Link></li>
//                 <li><Link to="/about" className="nav-link">About us</Link></li>
//                 <li className="mentorship-menu">
//                   Mentorship <RiArrowDropDownLine className="dropdown-icon" />
//                   <ul className="dropdown-menu">
//                     <li className="dropdown-item" onClick={handleStudentClick}>Students</li>
//                     <li className="dropdown-item" onClick={handleEntrepreneurClick}>Entrepreneur</li>
//                     <li className="dropdown-item" onClick={handleIIFFDownload}>IIFF 2025</li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//             <div className="button-container">
//               <Link to="/expo" className="expo-button" onClick={handleExpoClick}>Expo</Link>
//               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="mobile-menu">
//           <ul className="mobile-nav-list">
//             <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link></li>
//             <li
//               className="mobile-mentorship-toggle"
//               onClick={() => setMentorshipOpen(!mentorshipOpen)}
//             >
//               <span>Mentorship</span>
//               <RiArrowDropDownLine
//                 className={`mobile-dropdown-icon ${mentorshipOpen ? 'rotated' : ''}`}
//               />
//             </li>
//             {mentorshipOpen && (
//               <>
//                 <li onClick={handleStudentClick} className="mobile-dropdown-item">Students</li>
//                 <li onClick={handleEntrepreneurClick} className="mobile-dropdown-item">Entrepreneur</li>
//                 <li onClick={handleIIFFDownload} className="mobile-dropdown-item">IIFF 2025</li>
//               </>
//             )}
//             <li>
//               <button className="expo-button" onClick={handleExpoClick}>Expo</button>
//             </li>
//             <li>
//               <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Orange bar with event date */}
//       <div className="orange-bar">12 to 14 December 2025</div>

//       {showPopup && (
//         <RegisterPopup onClose={() => setShowPopup(false)} userType={userType} />
//       )}
//     </div>
//   );
// };

// export default Header;






















//after  poster and pdf from admin
import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import headerImage from '../assets/Image 1.png';
import RegisterPopup from './RegisterPopup';
import './Header.css';

const API_BASE = 'http://localhost:5000';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userType, setUserType] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mentorshipOpen, setMentorshipOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/settings`);
        if (!response.ok) throw new Error('Failed to fetch settings');
        const data = await response.json();
        setSettings(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.hamburger-icon')
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const getFullUrl = (path) => {
    if (!path) return null;
    return path.startsWith('http://') || path.startsWith('https://')
      ? path
      : `${API_BASE}/${path}`;
  };

  const handleIIFFDownload = async () => {
    const fullUrl = getFullUrl(settings?.iiffPoster);
    if (!fullUrl) {
      alert('IIFF Poster not available.');
      setMobileMenuOpen(false);
      return;
    }

    try {
      const response = await fetch(fullUrl);
      if (!response.ok) throw new Error('Failed to download poster image');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      const fileNameFromUrl = fullUrl.split('/').pop() || 'IIFF_Poster.jpg';
      link.href = url;
      link.setAttribute('download', fileNameFromUrl);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Image download failed:', err);
      alert('Failed to download IIFF Poster image.');
    }

    setMobileMenuOpen(false);
  };

  const handleIIFFDownloadPdf = async () => {
    const rawUrl = getFullUrl(settings?.brochure);
    if (!rawUrl) {
      alert("Brochure not available.");
      setMobileMenuOpen(false);
      return;
    }

    const fullUrl = `${rawUrl}?t=${Date.now()}`;

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });

      if (!response.ok) throw new Error('Failed to download brochure');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      const fileName = rawUrl.split('/').pop() || 'IIFF_Brochure.pdf';
      link.href = url;
      link.setAttribute('download', fileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      console.log('Brochure download successful, status:', response.status);
    } catch (err) {
      console.error('Brochure download failed:', err);
      alert('Failed to download the brochure.');
    }

    setMobileMenuOpen(false);
  };

  const handleStudentClick = () => {
    setUserType('student');
    setShowPopup(true);
    setMobileMenuOpen(false);
  };

  const handleEntrepreneurClick = () => {
    setUserType('entrepreneur');
    setShowPopup(true);
    setMobileMenuOpen(false);
  };

  const openExpoInNewTab = () => {
    window.open('/expo', '_blank', 'noopener,noreferrer');
    setMobileMenuOpen(false);
  };

  if (loading) return <div className="header-loading">Loading...</div>;
  if (error) return <div className="header-error">Error: {error}</div>;

  return (
    <div>
      <div className="left-container">
        <div className="logo-container">
          <img src={headerImage} alt="Logo" className="logo-image-header" />
        </div>

        <div
          className="hamburger-icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="right-container desktop-only">
          <div className="upper-inner-container">
            <span className="bold-text">PAN :</span> {settings.pan || 'N/A'} |{' '}
            <span className="bold-text">GST :</span> {settings.gst || 'N/A'}
          </div>

          <div className="bottom-inner-container">
            <div className="nav-wrapper">
              <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About us</Link></li>
                <li className="mentorship-menu">
                  Mentorship <RiArrowDropDownLine className="dropdown-icon" />
                  <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={handleStudentClick}>Students</li>
                    <li className="dropdown-item" onClick={handleEntrepreneurClick}>Entrepreneur</li>
                    <li className="dropdown-item" onClick={handleIIFFDownload}>IIFF 2025</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="button-container">
              {/* ✅ Replaced <Link> with <button> for Expo */}
              <button className="expo-button" onClick={openExpoInNewTab}>Expo</button>
              <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link></li>
            <li
              className="mobile-mentorship-toggle"
              onClick={() => setMentorshipOpen(!mentorshipOpen)}
            >
              <span>Mentorship</span>
              <RiArrowDropDownLine
                className={`mobile-dropdown-icon ${mentorshipOpen ? 'rotated' : ''}`}
              />
            </li>
            {mentorshipOpen && (
              <>
                <li onClick={handleStudentClick} className="mobile-dropdown-item">Students</li>
                <li onClick={handleEntrepreneurClick} className="mobile-dropdown-item">Entrepreneur</li>
                <li onClick={handleIIFFDownload} className="mobile-dropdown-item">IIFF 2025</li>
              </>
            )}
            {/* ✅ Updated Expo button for mobile */}
            <li>
              <button className="expo-button" onClick={openExpoInNewTab}>Expo</button>
            </li>
            <li>
              <button className="download-button" onClick={handleIIFFDownloadPdf}>Download Brochure</button>
            </li>
          </ul>
        </div>
      )}

      <div className="orange-bar">12 to 14 December 2025</div>

      {showPopup && (
        <RegisterPopup onClose={() => setShowPopup(false)} userType={userType} />
      )}
    </div>
  );
};

export default Header;
