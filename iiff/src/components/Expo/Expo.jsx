// // import React, { useState, useEffect } from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import Stalls from './Stalls';
// // import download from '../../assets/download.jpeg';

// // const API_BASE = 'http://localhost:5000';

// // const buttonStyles = {
// //   container: {
// //     position: 'absolute',
// //     top: '30px',
// //     right: '100px',
// //     display: 'flex',
// //     gap: '20px',
// //     zIndex: 10,
// //   },
// //   sponsorship: {
// //     backgroundColor: 'transparent',
// //     color: 'black',
// //     border: '2px solid black',
// //     padding: '10px 28px',
// //     cursor: 'pointer',
// //     fontWeight: 'bold',
// //     borderRadius: '6px',
// //     fontSize: '15px',
// //     transition: 'all 0.3s ease',
// //   },
// //   documentary: {
// //     backgroundColor: '#f36b0a',
// //     color: 'white',
// //     border: 'none',
// //     padding: '14px 28px',
// //     cursor: 'pointer',
// //     fontWeight: 'bold',
// //     borderRadius: '6px',
// //     fontSize: '15px',
// //     transition: 'all 0.3s ease',
// //   },
// // };

// // const exhibitorCardStyle = {
// //   position: 'absolute',
// //   top: '150px',
// //   left: '80px',
// //   backgroundColor: 'rgba(0, 0, 0, 0.55)',
// //   borderRadius: '16px',
// //   color: '#fff',
// //   padding: '20px',
// //   width: '730px',
// //   maxWidth: '90vw',
// //   zIndex: 10,
// //   fontFamily: '"Poppins", sans-serif',
// //   cursor: 'default',
// // };

// // const buttonRowStyle = {
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   marginTop: '10px',
// //   gap: '20px',
// // };

// // const buttonBase = {
// //   flex: 1,
// //   padding: '13px 16px',
// //   borderRadius: '6px',
// //   fontSize: '14px',
// //   cursor: 'pointer',
// //   color: 'white',
// //   backgroundColor: 'transparent',
// //   textAlign: 'center',
// //   transition: 'all 0.3s ease',
// //   border: '2px solid white',
// //   userSelect: 'none',
// // };

// // const dateBarStyle = {
// //   width: '100%',
// //   height: '43px',
// //   backgroundColor: '#f97619',
// //   color: 'white',
// //   fontSize: '1.3rem',
// //   fontWeight: 'bold',
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   margin: 0,
// //   userSelect: 'none',
// // };

// // const Expo = () => {
// //   const [registerHover, setRegisterHover] = useState(false);
// //   const [brochureHover, setBrochureHover] = useState(false);
// //   const [carbonHover, setCarbonHover] = useState(false);
// //   const [sponsorHover, setSponsorHover] = useState(false);
// //   const [docuHover, setDocuHover] = useState(false);
// //   const [settings, setSettings] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [downloading, setDownloading] = useState(false);
// //   const [showVideoModal, setShowVideoModal] = useState(false);

// //   // Fetch settings from backend
// //   useEffect(() => {
// //     const fetchSettings = async () => {
// //       try {
// //         const response = await fetch(`${API_BASE}/api/settings`);
// //         if (!response.ok) throw new Error('Failed to fetch settings');
// //         const data = await response.json();
// //         setSettings(data);
// //       } catch (err) {
// //         console.error('Error fetching settings:', err);
// //         alert('Failed to load settings from server');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchSettings();
// //   }, []);

// //   const getFullUrl = (path) => {
// //     if (!path) return null;
// //     return path.startsWith('http://') || path.startsWith('https://')
// //       ? path
// //       : `${API_BASE}/${path}`;
// //   };

// //   // Download Brochure Handler
// //   const handleBrochureDownload = async () => {
// //     if (downloading) return;

// //     const fullUrl = getFullUrl(settings?.brochure);
// //     if (!fullUrl) {
// //       alert("Brochure not available.");
// //       return;
// //     }

// //     setDownloading(true);

// //     try {
// //       const response = await fetch(fullUrl, {
// //         method: 'GET',
// //         headers: {
// //           'Accept': 'application/pdf',
// //         },
// //         mode: 'cors',
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const blob = await response.blob();
// //       const pdfBlob = new Blob([blob], { type: 'application/pdf' });
// //       const url = window.URL.createObjectURL(pdfBlob);

// //       const link = document.createElement('a');
// //       link.href = url;
// //       const fileName = fullUrl.split('/').pop()?.split('?')[0] || 'IIFF_Brochure.pdf';
// //       link.setAttribute('download', fileName);
// //       link.style.display = 'none';

// //       document.body.appendChild(link);
// //       link.click();

// //       setTimeout(() => {
// //         document.body.removeChild(link);
// //         window.URL.revokeObjectURL(url);
// //       }, 100);

// //       console.log('Brochure downloaded successfully');
// //     } catch (err) {
// //       console.error('Brochure download failed:', err);
// //       alert(`Failed to download the brochure. Error: ${err.message}`);
// //     } finally {
// //       setDownloading(false);
// //     }
// //   };

// //   // Zero Carbon Download Handler
// //   const handleZeroCarbonDownload = async () => {
// //     if (downloading) return;

// //     const fullUrl = getFullUrl(settings?.zeroCarbon);
// //     if (!fullUrl) {
// //       alert("Zero Carbon document not available.");
// //       return;
// //     }

// //     setDownloading(true);

// //     try {
// //       const response = await fetch(fullUrl, {
// //         method: 'GET',
// //         mode: 'cors',
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const blob = await response.blob();
// //       const url = window.URL.createObjectURL(blob);

// //       const link = document.createElement('a');
// //       link.href = url;
// //       const fileName = fullUrl.split('/').pop()?.split('?')[0] || 'Zero_Carbon_Document.pdf';
// //       link.setAttribute('download', fileName);
// //       link.style.display = 'none';

// //       document.body.appendChild(link);
// //       link.click();

// //       setTimeout(() => {
// //         document.body.removeChild(link);
// //         window.URL.revokeObjectURL(url);
// //       }, 100);

// //       console.log('Zero Carbon document downloaded successfully');
// //     } catch (err) {
// //       console.error('Zero Carbon download failed:', err);
// //       alert(`Failed to download Zero Carbon document. Error: ${err.message}`);
// //     } finally {
// //       setDownloading(false);
// //     }
// //   };

// //   // Documentary Video Handler - Opens video modal
// //   const handleDocumentaryClick = () => {
// //     const videoUrl = getFullUrl(settings?.documentary);
// //     if (!videoUrl) {
// //       alert("Documentary video not available.");
// //       return;
// //     }
// //     setShowVideoModal(true);
// //   };

// //   // Close video modal
// //   const closeVideoModal = () => {
// //     setShowVideoModal(false);
// //   };

// //   if (loading) {
// //     return (
// //       <div style={{ 
// //         width: '100%', 
// //         height: '520px', 
// //         display: 'flex', 
// //         justifyContent: 'center', 
// //         alignItems: 'center',
// //         fontSize: '1.5rem',
// //         color: '#f36b0a'
// //       }}>
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ width: '100%', margin: 'auto', position: 'relative' }}>
// //       {/* Top Buttons container */}
// //       <div style={buttonStyles.container}>
// //         <button
// //           style={{
// //             ...buttonStyles.sponsorship,
// //             backgroundColor: sponsorHover ? '#f36b0a' : 'transparent',
// //             border: sponsorHover ? 'none' : '2px solid black',
// //             color: sponsorHover ? 'white' : 'black',
// //           }}
// //           onMouseEnter={() => setSponsorHover(true)}
// //           onMouseLeave={() => setSponsorHover(false)}
// //         >
// //           Sponsorship
// //         </button>
// //         <button
// //           style={{
// //             ...buttonStyles.documentary,
// //             backgroundColor: docuHover ? 'green' : '#ed7925',
// //           }}
// //           onMouseEnter={() => setDocuHover(true)}
// //           onMouseLeave={() => setDocuHover(false)}
// //           onClick={handleDocumentaryClick}
// //         >
// //           Documentory
// //         </button>
// //       </div>

// //       {/* Exhibitor Card */}
// //       <div style={exhibitorCardStyle}>
// //         <h2
// //           style={{
// //             fontSize: '2.5rem',
// //             marginBottom: '4px',
// //             textShadow: '2px 2px 6px rgba(239, 121, 38, 0.8)',
// //           }}
// //         >
// //           Exhibitor
// //         </h2>
// //         <p style={{ fontSize: '1rem', marginBottom: '6px' }}>
// //           The Food Science & Technology and Innovations Conclave 2025 Expo brings together
// //           researchers, industry leaders, entrepreneurs, and policymakers to explore the latest
// //           trends in food innovation.
// //         </p>

// //         {/* Bottom Buttons */}
// //         <div style={buttonRowStyle}>
// //           <button
// //             onMouseEnter={() => setRegisterHover(true)}
// //             onMouseLeave={() => setRegisterHover(false)}
// //             style={{
// //               ...buttonBase,
// //               backgroundColor: registerHover ? 'green' : '#f36b0a',
// //               border: 'none',
// //             }}
// //           >
// //             Register as Exhibitor
// //           </button>

// //           <button
// //             onClick={handleBrochureDownload}
// //             onMouseEnter={() => setBrochureHover(true)}
// //             onMouseLeave={() => setBrochureHover(false)}
// //             disabled={downloading}
// //             style={{
// //               ...buttonBase,
// //               backgroundColor: brochureHover ? '#f36b0a' : 'transparent',
// //               border: brochureHover ? 'none' : '2px solid white',
// //               color: 'white',
// //               opacity: downloading ? 0.7 : 1,
// //               cursor: downloading ? 'not-allowed' : 'pointer',
// //             }}
// //           >
// //             {downloading ? 'Downloading...' : 'Brochure Download'}
// //           </button>

// //           <button
// //             onClick={handleZeroCarbonDownload}
// //             onMouseEnter={() => setCarbonHover(true)}
// //             onMouseLeave={() => setCarbonHover(false)}
// //             disabled={downloading}
// //             style={{
// //               ...buttonBase,
// //               backgroundColor: carbonHover ? '#f36b0a' : 'transparent',
// //               border: carbonHover ? 'none' : '2px solid white',
// //               color: 'white',
// //               opacity: downloading ? 0.7 : 1,
// //               cursor: downloading ? 'not-allowed' : 'pointer',
// //             }}
// //           >
// //             {downloading ? 'Downloading...' : 'Zero Carbon'}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Carousel */}
// //       <Carousel
// //         autoPlay
// //         infiniteLoop
// //         showThumbs={false}
// //         showStatus={false}
// //         interval={3000}
// //       >
// //         <div>
// //           <img
// //             src={download}
// //             alt="Slide 1"
// //             style={{ width: '100%', height: '520px', objectFit: 'cover' }}
// //           />
// //         </div>

// //         <div>
// //           <img
// //             src={download}
// //             alt="Slide 2"
// //             style={{ width: '100%', height: '520px', objectFit: 'cover' }}
// //           />
// //         </div>
// //       </Carousel>

// //       {/* Date Bar below the carousel */}
// //       <div style={dateBarStyle}>
// //         12 to 14 December 2025
// //       </div>

// //       {/* Video Modal */}
// //       {showVideoModal && (
// //         <div
// //           style={{
// //             position: 'fixed',
// //             top: 0,
// //             left: 0,
// //             width: '100%',
// //             height: '100%',
// //             backgroundColor: 'rgba(0, 0, 0, 0.9)',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             zIndex: 9999,
// //           }}
// //           onClick={closeVideoModal}
// //         >
// //           <div
// //             style={{
// //               position: 'relative',
// //               width: '90%',
// //               maxWidth: '1200px',
// //               backgroundColor: '#000',
// //               borderRadius: '10px',
// //               overflow: 'hidden',
// //             }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             {/* Close Button */}
// //             <button
// //               onClick={closeVideoModal}
// //               style={{
// //                 position: 'absolute',
// //                 top: '10px',
// //                 right: '10px',
// //                 backgroundColor: '#f36b0a',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '50%',
// //                 width: '40px',
// //                 height: '40px',
// //                 fontSize: '24px',
// //                 cursor: 'pointer',
// //                 zIndex: 10000,
// //                 display: 'flex',
// //                 justifyContent: 'center',
// //                 alignItems: 'center',
// //                 fontWeight: 'bold',
// //               }}
// //             >
// //               ×
// //             </button>

// //             {/* Video Player */}
// //             <video
// //               controls
// //               autoPlay
// //               style={{
// //                 width: '100%',
// //                 height: 'auto',
// //                 maxHeight: '80vh',
// //                 display: 'block',
// //               }}
// //             >
// //               <source src={getFullUrl(settings?.documentary)} type="video/mp4" />
// //               <source src={getFullUrl(settings?.documentary)} type="video/webm" />
// //               <source src={getFullUrl(settings?.documentary)} type="video/ogg" />
// //               Your browser does not support the video tag.
// //             </video>
// //           </div>
// //         </div>
// //       )}

// //       <Stalls/>
// //     </div>
// //   );
// // };

// // export default Expo;







// //after responsive
// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Stalls from './Stalls';
// import download from '../../assets/download.jpeg';

// const API_BASE = 'http://localhost:5000';

// const Expo = () => {
//   const [registerHover, setRegisterHover] = useState(false);
//   const [brochureHover, setBrochureHover] = useState(false);
//   const [carbonHover, setCarbonHover] = useState(false);
//   const [sponsorHover, setSponsorHover] = useState(false);
//   const [docuHover, setDocuHover] = useState(false);
//   const [settings, setSettings] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [downloading, setDownloading] = useState(false);
//   const [showVideoModal, setShowVideoModal] = useState(false);

//   // Fetch settings from backend
//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const response = await fetch(`${API_BASE}/api/settings`);
//         if (!response.ok) throw new Error('Failed to fetch settings');
//         const data = await response.json();
//         setSettings(data);
//       } catch (err) {
//         console.error('Error fetching settings:', err);
//         alert('Failed to load settings from server');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSettings();
//   }, []);

//   const getFullUrl = (path) => {
//     if (!path) return null;
//     return path.startsWith('http://') || path.startsWith('https://')
//       ? path
//       : `${API_BASE}/${path}`;
//   };

//   // Download Brochure Handler
//   const handleBrochureDownload = async () => {
//     if (downloading) return;

//     const fullUrl = getFullUrl(settings?.brochure);
//     if (!fullUrl) {
//       alert("Brochure not available.");
//       return;
//     }

//     setDownloading(true);

//     try {
//       const response = await fetch(fullUrl, {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/pdf',
//         },
//         mode: 'cors',
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const blob = await response.blob();
//       const pdfBlob = new Blob([blob], { type: 'application/pdf' });
//       const url = window.URL.createObjectURL(pdfBlob);

//       const link = document.createElement('a');
//       link.href = url;
//       const fileName = fullUrl.split('/').pop()?.split('?')[0] || 'IIFF_Brochure.pdf';
//       link.setAttribute('download', fileName);
//       link.style.display = 'none';

//       document.body.appendChild(link);
//       link.click();

//       setTimeout(() => {
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       }, 100);

//       console.log('Brochure downloaded successfully');
//     } catch (err) {
//       console.error('Brochure download failed:', err);
//       alert(`Failed to download the brochure. Error: ${err.message}`);
//     } finally {
//       setDownloading(false);
//     }
//   };

//   // Zero Carbon Download Handler
//   const handleZeroCarbonDownload = async () => {
//     if (downloading) return;

//     const fullUrl = getFullUrl(settings?.zeroCarbon);
//     if (!fullUrl) {
//       alert("Zero Carbon document not available.");
//       return;
//     }

//     setDownloading(true);

//     try {
//       const response = await fetch(fullUrl, {
//         method: 'GET',
//         mode: 'cors',
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       link.href = url;
//       const fileName = fullUrl.split('/').pop()?.split('?')[0] || 'Zero_Carbon_Document.pdf';
//       link.setAttribute('download', fileName);
//       link.style.display = 'none';

//       document.body.appendChild(link);
//       link.click();

//       setTimeout(() => {
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       }, 100);

//       console.log('Zero Carbon document downloaded successfully');
//     } catch (err) {
//       console.error('Zero Carbon download failed:', err);
//       alert(`Failed to download Zero Carbon document. Error: ${err.message}`);
//     } finally {
//       setDownloading(false);
//     }
//   };

//   // Documentary Video Handler - Opens video modal
//   const handleDocumentaryClick = () => {
//     const videoUrl = getFullUrl(settings?.documentary);
//     if (!videoUrl) {
//       alert("Documentary video not available.");
//       return;
//     }
//     setShowVideoModal(true);
//   };

//   // Close video modal
//   const closeVideoModal = () => {
//     setShowVideoModal(false);
//   };

//   if (loading) {
//     return (
//       <div style={{ 
//         width: '100%', 
//         height: '520px', 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center',
//         fontSize: '1.5rem',
//         color: '#f36b0a'
//       }}>
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <>
//       <style>{`
//         /* Base styles */
//         .expo-container {
//           width: 100%;
//           margin: auto;
//           position: relative;
//         }

//         /* Top Buttons */
//         .top-buttons-container {
//           position: absolute;
//           top: 30px;
//           right: 100px;
//           display: flex;
//           gap: 20px;
//           z-index: 10;
//         }

//         .btn-sponsorship,
//         .btn-documentary {
//           padding: 10px 28px;
//           cursor: pointer;
//           font-weight: bold;
//           border-radius: 6px;
//           fontSize: 15px;
//           transition: all 0.3s ease;
//         }

//         .btn-sponsorship {
//           background-color: transparent;
//           color: black;
//           border: 2px solid black;
//         }

//         .btn-documentary {
//           background-color: #ed7925;
//           color: white;
//           border: none;
//           padding: 14px 28px;
//         }

//         /* Exhibitor Card */
//         .exhibitor-card {
//           position: absolute;
//           top: 150px;
//           left: 80px;
//           background-color: rgba(0, 0, 0, 0.55);
//           border-radius: 16px;
//           color: #fff;
//           padding: 20px;
//           width: 730px;
//           max-width: 90vw;
//           z-index: 10;
//           font-family: "Poppins", sans-serif;
//           cursor: default;
//         }

//         .exhibitor-title {
//           font-size: 2.5rem;
//           margin-bottom: 4px;
//           text-shadow: 2px 2px 6px rgba(239, 121, 38, 0.8);
//         }

//         .exhibitor-description {
//           font-size: 1rem;
//           margin-bottom: 6px;
//         }

//         /* Button Row */
//         .button-row {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 10px;
//           gap: 20px;
//         }

//         .action-button {
//           flex: 1;
//           padding: 13px 16px;
//           border-radius: 6px;
//           font-size: 14px;
//           cursor: pointer;
//           color: white;
//           background-color: transparent;
//           text-align: center;
//           transition: all 0.3s ease;
//           border: 2px solid white;
//           user-select: none;
//           white-space: nowrap;
//         }

//         /* Date Bar */
//         .date-bar {
//           width: 100%;
//           height: 43px;
//           background-color: #f97619;
//           color: white;
//           font-size: 1.3rem;
//           font-weight: bold;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin: 0;
//           user-select: none;
//         }

//         /* Carousel Image */
//         .carousel-image {
//           width: 100%;
//           height: 520px;
//           object-fit: cover;
//         }

//         /* Video Modal */
//         .video-modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.9);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//         }

//         .video-modal-container {
//           position: relative;
//           width: 90%;
//           max-width: 1200px;
//           background-color: #000;
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         .video-close-btn {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background-color: #f36b0a;
//           color: white;
//           border: none;
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           font-size: 24px;
//           cursor: pointer;
//           z-index: 10000;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           font-weight: bold;
//         }

//         .video-player {
//           width: 100%;
//           height: auto;
//           max-height: 80vh;
//           display: block;
//         }

//         /* Tablet Styles (768px - 1024px) */
//         @media (max-width: 1024px) {
//           .top-buttons-container {
//             right: 40px;
//             top: 20px;
//             gap: 15px;
//           }

//           .btn-sponsorship,
//           .btn-documentary {
//             padding: 8px 20px;
//             font-size: 13px;
//           }

//           .exhibitor-card {
//             left: 40px;
//             top: 120px;
//             width: calc(100% - 80px);
//             padding: 18px;
//           }

//           .exhibitor-title {
//             font-size: 2rem;
//           }

//           .exhibitor-description {
//             font-size: 0.9rem;
//           }

//           .button-row {
//             gap: 12px;
//           }

//           .action-button {
//             padding: 11px 12px;
//             font-size: 12px;
//           }

//           .carousel-image {
//             height: 400px;
//           }

//           .date-bar {
//             font-size: 1.1rem;
//             height: 38px;
//           }
//         }

//         /* Mobile Styles (max-width: 767px) */
//         @media (max-width: 767px) {
//           .top-buttons-container {
//             position: static;
//             flex-direction: column;
//             padding: 15px;
//             gap: 10px;
//             width: 100%;
//           }

//           .btn-sponsorship,
//           .btn-documentary {
//             width: 100%;
//             padding: 12px 20px;
//             font-size: 14px;
//           }

//           .exhibitor-card {
//             position: static;
//             width: 100%;
//             max-width: 100%;
//             margin: 15px 0;
//             padding: 15px;
//             border-radius: 12px;
//           }

//           .exhibitor-title {
//             font-size: 1.5rem;
//             margin-bottom: 8px;
//           }

//           .exhibitor-description {
//             font-size: 0.85rem;
//             margin-bottom: 12px;
//           }

//           .button-row {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .action-button {
//             width: 100%;
//             padding: 12px 16px;
//             font-size: 13px;
//           }

//           .carousel-image {
//             height: 250px;
//           }

//           .date-bar {
//             font-size: 0.9rem;
//             height: 35px;
//             padding: 0 10px;
//           }

//           .video-modal-container {
//             width: 95%;
//           }

//           .video-close-btn {
//             width: 35px;
//             height: 35px;
//             font-size: 20px;
//           }
//         }

//         /* Small Mobile (max-width: 480px) */
//         @media (max-width: 480px) {
//           .top-buttons-container {
//             padding: 10px;
//           }

//           .btn-sponsorship,
//           .btn-documentary {
//             padding: 10px 16px;
//             font-size: 13px;
//           }

//           .exhibitor-card {
//             margin: 10px;
//             padding: 12px;
//           }

//           .exhibitor-title {
//             font-size: 1.3rem;
//           }

//           .exhibitor-description {
//             font-size: 0.8rem;
//           }

//           .action-button {
//             padding: 10px 12px;
//             font-size: 12px;
//           }

//           .carousel-image {
//             height: 200px;
//           }

//           .date-bar {
//             font-size: 0.8rem;
//             height: 32px;
//           }
//         }

//         /* Extra Small Mobile (max-width: 360px) */
//         @media (max-width: 360px) {
//           .exhibitor-title {
//             font-size: 1.1rem;
//           }

//           .exhibitor-description {
//             font-size: 0.75rem;
//           }

//           .action-button {
//             font-size: 11px;
//             padding: 9px 10px;
//           }

//           .date-bar {
//             font-size: 0.75rem;
//           }
//         }
//       `}</style>

//       <div className="expo-container">
//         {/* Top Buttons container */}
//         <div className="top-buttons-container">
//           <button
//             className="btn-sponsorship"
//             style={{
//               backgroundColor: sponsorHover ? '#f36b0a' : 'transparent',
//               border: sponsorHover ? 'none' : '2px solid black',
//               color: sponsorHover ? 'white' : 'black',
//             }}
//             onMouseEnter={() => setSponsorHover(true)}
//             onMouseLeave={() => setSponsorHover(false)}
//           >
//             Sponsorship
//           </button>
//           <button
//             className="btn-documentary"
//             style={{
//               backgroundColor: docuHover ? 'green' : '#ed7925',
//             }}
//             onMouseEnter={() => setDocuHover(true)}
//             onMouseLeave={() => setDocuHover(false)}
//             onClick={handleDocumentaryClick}
//           >
//             Documentary
//           </button>
//         </div>

//         {/* Exhibitor Card */}
//         <div className="exhibitor-card">
//           <h2 className="exhibitor-title">Exhibitor</h2>
//           <p className="exhibitor-description">
//             The Food Science & Technology and Innovations Conclave 2025 Expo brings together
//             researchers, industry leaders, entrepreneurs, and policymakers to explore the latest
//             trends in food innovation.
//           </p>

//           {/* Bottom Buttons */}
//           <div className="button-row">
//             <button
//               onMouseEnter={() => setRegisterHover(true)}
//               onMouseLeave={() => setRegisterHover(false)}
//               className="action-button"
//               style={{
//                 backgroundColor: registerHover ? 'green' : '#f36b0a',
//                 border: 'none',
//               }}
//             >
//               Register as Exhibitor
//             </button>

//             <button
//               onClick={handleBrochureDownload}
//               onMouseEnter={() => setBrochureHover(true)}
//               onMouseLeave={() => setBrochureHover(false)}
//               disabled={downloading}
//               className="action-button"
//               style={{
//                 backgroundColor: brochureHover ? '#f36b0a' : 'transparent',
//                 border: brochureHover ? 'none' : '2px solid white',
//                 color: 'white',
//                 opacity: downloading ? 0.7 : 1,
//                 cursor: downloading ? 'not-allowed' : 'pointer',
//               }}
//             >
//               {downloading ? 'Downloading...' : 'Brochure Download'}
//             </button>

//             <button
//               onClick={handleZeroCarbonDownload}
//               onMouseEnter={() => setCarbonHover(true)}
//               onMouseLeave={() => setCarbonHover(false)}
//               disabled={downloading}
//               className="action-button"
//               style={{
//                 backgroundColor: carbonHover ? '#f36b0a' : 'transparent',
//                 border: carbonHover ? 'none' : '2px solid white',
//                 color: 'white',
//                 opacity: downloading ? 0.7 : 1,
//                 cursor: downloading ? 'not-allowed' : 'pointer',
//               }}
//             >
//               {downloading ? 'Downloading...' : 'Zero Carbon'}
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           interval={3000}
//         >
//           <div>
//             <img
//               src={download}
//               alt="Slide 1"
//               className="carousel-image"
//             />
//           </div>

//           <div>
//             <img
//               src={download}
//               alt="Slide 2"
//               className="carousel-image"
//             />
//           </div>
//         </Carousel>

//         {/* Date Bar below the carousel */}
//         <div className="date-bar">
//           12 to 14 December 2025
//         </div>

//         {/* Video Modal */}
//         {showVideoModal && (
//           <div
//             className="video-modal-overlay"
//             onClick={closeVideoModal}
//           >
//             <div
//               className="video-modal-container"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeVideoModal}
//                 className="video-close-btn"
//               >
//                 ×
//               </button>

//               {/* Video Player */}
//               <video
//                 controls
//                 autoPlay
//                 className="video-player"
//               >
//                 <source src={getFullUrl(settings?.documentary)} type="video/mp4" />
//                 <source src={getFullUrl(settings?.documentary)} type="video/webm" />
//                 <source src={getFullUrl(settings?.documentary)} type="video/ogg" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         )}

//         <Stalls/>
//       </div>
//     </>
//   );
// };

// export default Expo;









//Register as Exhibitor button working 
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Stalls from './Stalls';
import download from '../../assets/download.jpeg';

const API_BASE = 'http://localhost:5000';

const Expo = () => {
  const [registerHover, setRegisterHover] = useState(false);
  const [brochureHover, setBrochureHover] = useState(false);
  const [carbonHover, setCarbonHover] = useState(false);
  const [sponsorHover, setSponsorHover] = useState(false);
  const [docuHover, setDocuHover] = useState(false);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Fetch settings from backend
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/settings`);
        if (!response.ok) throw new Error('Failed to fetch settings');
        const data = await response.json();
        setSettings(data);
      } catch (err) {
        console.error('Error fetching settings:', err);
        alert('Failed to load settings from server');
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const getFullUrl = (path) => {
    if (!path) return null;
    return path.startsWith('http://') || path.startsWith('https://')
      ? path
      : `${API_BASE}/${path}`;
  };

  // Scroll to Packages section
  const handleRegisterClick = () => {
    const packagesSection = document.querySelector('.packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Download Brochure Handler
  const handleBrochureDownload = async () => {
    if (downloading) return;

    const fullUrl = getFullUrl(settings?.brochure);
    if (!fullUrl) {
      alert("Brochure not available.");
      return;
    }

    setDownloading(true);

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf',
        },
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = url;
      const fileName = fullUrl.split('/').pop()?.split('?')[0] || 'IIFF_Brochure.pdf';
      link.setAttribute('download', fileName);
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

      console.log('Brochure downloaded successfully');
    } catch (err) {
      console.error('Brochure download failed:', err);
      alert(`Failed to download the brochure. Error: ${err.message}`);
    } finally {
      setDownloading(false);
    }
  };

  // Zero Carbon Download Handler
  const handleZeroCarbonDownload = async () => {
    if (downloading) return;

    const fullUrl = getFullUrl(settings?.zeroCarbon);
    if (!fullUrl) {
      alert("Zero Carbon document not available.");
      return;
    }

    setDownloading(true);

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      const fileName = fullUrl.split('/').pop()?.split('?')[0] || 'Zero_Carbon_Document.pdf';
      link.setAttribute('download', fileName);
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

      console.log('Zero Carbon document downloaded successfully');
    } catch (err) {
      console.error('Zero Carbon download failed:', err);
      alert(`Failed to download Zero Carbon document. Error: ${err.message}`);
    } finally {
      setDownloading(false);
    }
  };

  // Documentary Video Handler - Opens video modal
  const handleDocumentaryClick = () => {
    const videoUrl = getFullUrl(settings?.documentary);
    if (!videoUrl) {
      alert("Documentary video not available.");
      return;
    }
    setShowVideoModal(true);
  };

  // Close video modal
  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  if (loading) {
    return (
      <div style={{ 
        width: '100%', 
        height: '520px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '1.5rem',
        color: '#f36b0a'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <style>{`
        /* Base styles */
        .expo-container {
          width: 100%;
          margin: auto;
          position: relative;
        }

        /* Top Buttons */
        .top-buttons-container {
          position: absolute;
          top: 30px;
          right: 100px;
          display: flex;
          gap: 20px;
          z-index: 10;
        }

        .btn-sponsorship,
        .btn-documentary {
          padding: 10px 28px;
          cursor: pointer;
          font-weight: bold;
          border-radius: 6px;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .btn-sponsorship {
          background-color: transparent;
          color: black;
          border: 2px solid black;
        }

        .btn-documentary {
          background-color: #ed7925;
          color: white;
          border: none;
          padding: 14px 28px;
        }

        /* Exhibitor Card */
        .exhibitor-card {
          position: absolute;
          top: 150px;
          left: 80px;
          background-color: rgba(0, 0, 0, 0.55);
          border-radius: 16px;
          color: #fff;
          padding: 20px;
          width: 730px;
          max-width: 90vw;
          z-index: 10;
          font-family: "Poppins", sans-serif;
          cursor: default;
        }

        .exhibitor-title {
          font-size: 2.5rem;
          margin-bottom: 4px;
          text-shadow: 2px 2px 6px rgba(239, 121, 38, 0.8);
        }

        .exhibitor-description {
          font-size: 1rem;
          margin-bottom: 6px;
        }

        /* Button Row */
        .button-row {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          gap: 20px;
        }

        .action-button {
          flex: 1;
          padding: 13px 16px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          color: white;
          background-color: transparent;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid white;
          user-select: none;
          white-space: nowrap;
        }

        /* Date Bar */
        .date-bar {
          width: 100%;
          height: 43px;
          background-color: #f97619;
          color: white;
          font-size: 1.3rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          user-select: none;
        }

        /* Carousel Image */
        .carousel-image {
          width: 100%;
          height: 520px;
          object-fit: cover;
        }

        /* Video Modal */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .video-modal-container {
          position: relative;
          width: 90%;
          max-width: 1200px;
          background-color: #000;
          border-radius: 10px;
          overflow: hidden;
        }

        .video-close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #f36b0a;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 24px;
          cursor: pointer;
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }

        .video-player {
          width: 100%;
          height: auto;
          max-height: 80vh;
          display: block;
        }

        /* Tablet Styles (768px - 1024px) */
        @media (max-width: 1024px) {
          .top-buttons-container {
            right: 40px;
            top: 20px;
            gap: 15px;
          }

          .btn-sponsorship,
          .btn-documentary {
            padding: 8px 20px;
            font-size: 13px;
          }

          .exhibitor-card {
            left: 40px;
            top: 120px;
            width: calc(100% - 80px);
            padding: 18px;
          }

          .exhibitor-title {
            font-size: 2rem;
          }

          .exhibitor-description {
            font-size: 0.9rem;
          }

          .button-row {
            gap: 12px;
          }

          .action-button {
            padding: 11px 12px;
            font-size: 12px;
          }

          .carousel-image {
            height: 400px;
          }

          .date-bar {
            font-size: 1.1rem;
            height: 38px;
          }
        }

        /* Mobile Styles (max-width: 767px) */
        @media (max-width: 767px) {
          .top-buttons-container {
            position: static;
            flex-direction: column;
            padding: 15px;
            gap: 10px;
            width: 100%;
          }

          .btn-sponsorship,
          .btn-documentary {
            width: 100%;
            padding: 12px 20px;
            font-size: 14px;
          }

          .exhibitor-card {
            position: static;
            width: 100%;
            max-width: 100%;
            margin: 15px 0;
            padding: 15px;
            border-radius: 12px;
          }

          .exhibitor-title {
            font-size: 1.5rem;
            margin-bottom: 8px;
          }

          .exhibitor-description {
            font-size: 0.85rem;
            margin-bottom: 12px;
          }

          .button-row {
            flex-direction: column;
            gap: 10px;
          }

          .action-button {
            width: 100%;
            padding: 12px 16px;
            font-size: 13px;
          }

          .carousel-image {
            height: 250px;
          }

          .date-bar {
            font-size: 0.9rem;
            height: 35px;
            padding: 0 10px;
          }

          .video-modal-container {
            width: 95%;
          }

          .video-close-btn {
            width: 35px;
            height: 35px;
            font-size: 20px;
          }
        }

        /* Small Mobile (max-width: 480px) */
        @media (max-width: 480px) {
          .top-buttons-container {
            padding: 10px;
          }

          .btn-sponsorship,
          .btn-documentary {
            padding: 10px 16px;
            font-size: 13px;
          }

          .exhibitor-card {
            margin: 10px;
            padding: 12px;
          }

          .exhibitor-title {
            font-size: 1.3rem;
          }

          .exhibitor-description {
            font-size: 0.8rem;
          }

          .action-button {
            padding: 10px 12px;
            font-size: 12px;
          }

          .carousel-image {
            height: 200px;
          }

          .date-bar {
            font-size: 0.8rem;
            height: 32px;
          }
        }

        /* Extra Small Mobile (max-width: 360px) */
        @media (max-width: 360px) {
          .exhibitor-title {
            font-size: 1.1rem;
          }

          .exhibitor-description {
            font-size: 0.75rem;
          }

          .action-button {
            font-size: 11px;
            padding: 9px 10px;
          }

          .date-bar {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="expo-container">
        {/* Top Buttons container */}
        <div className="top-buttons-container">
          <button
            className="btn-sponsorship"
            style={{
              backgroundColor: sponsorHover ? '#f36b0a' : 'transparent',
              border: sponsorHover ? 'none' : '2px solid black',
              color: sponsorHover ? 'white' : 'black',
            }}
            onMouseEnter={() => setSponsorHover(true)}
            onMouseLeave={() => setSponsorHover(false)}
          >
            Sponsorship
          </button>
          <button
            className="btn-documentary"
            style={{
              backgroundColor: docuHover ? 'green' : '#ed7925',
            }}
            onMouseEnter={() => setDocuHover(true)}
            onMouseLeave={() => setDocuHover(false)}
            onClick={handleDocumentaryClick}
          >
            Documentary
          </button>
        </div>

        {/* Exhibitor Card */}
        <div className="exhibitor-card">
          <h2 className="exhibitor-title">Exhibitor</h2>
          <p className="exhibitor-description">
            The Food Science & Technology and Innovations Conclave 2025 Expo brings together
            researchers, industry leaders, entrepreneurs, and policymakers to explore the latest
            trends in food innovation.
          </p>

          {/* Bottom Buttons */}
          <div className="button-row">
            <button
              onClick={handleRegisterClick}
              onMouseEnter={() => setRegisterHover(true)}
              onMouseLeave={() => setRegisterHover(false)}
              className="action-button"
              style={{
                backgroundColor: registerHover ? 'green' : '#f36b0a',
                border: 'none',
              }}
            >
              Register as Exhibitor
            </button>

            <button
              onClick={handleBrochureDownload}
              onMouseEnter={() => setBrochureHover(true)}
              onMouseLeave={() => setBrochureHover(false)}
              disabled={downloading}
              className="action-button"
              style={{
                backgroundColor: brochureHover ? '#f36b0a' : 'transparent',
                border: brochureHover ? 'none' : '2px solid white',
                color: 'white',
                opacity: downloading ? 0.7 : 1,
                cursor: downloading ? 'not-allowed' : 'pointer',
              }}
            >
              {downloading ? 'Downloading...' : 'Brochure Download'}
            </button>

            <button
              onClick={handleZeroCarbonDownload}
              onMouseEnter={() => setCarbonHover(true)}
              onMouseLeave={() => setCarbonHover(false)}
              disabled={downloading}
              className="action-button"
              style={{
                backgroundColor: carbonHover ? '#f36b0a' : 'transparent',
                border: carbonHover ? 'none' : '2px solid white',
                color: 'white',
                opacity: downloading ? 0.7 : 1,
                cursor: downloading ? 'not-allowed' : 'pointer',
              }}
            >
              {downloading ? 'Downloading...' : 'Zero Carbon'}
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img
              src={download}
              alt="Slide 1"
              className="carousel-image"
            />
          </div>

          <div>
            <img
              src={download}
              alt="Slide 2"
              className="carousel-image"
            />
          </div>
        </Carousel>

        {/* Date Bar below the carousel */}
        <div className="date-bar">
          12 to 14 December 2025
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div
            className="video-modal-overlay"
            onClick={closeVideoModal}
          >
            <div
              className="video-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="video-close-btn"
              >
                ×
              </button>

              {/* Video Player */}
              <video
                controls
                autoPlay
                className="video-player"
              >
                <source src={getFullUrl(settings?.documentary)} type="video/mp4" />
                <source src={getFullUrl(settings?.documentary)} type="video/webm" />
                <source src={getFullUrl(settings?.documentary)} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <Stalls/>
      </div>
    </>
  );
};

export default Expo;