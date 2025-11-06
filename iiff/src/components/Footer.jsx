// import React from 'react';
// import { FaLocationDot } from "react-icons/fa6";
// import { CgMail } from "react-icons/cg";
// import { TbWorldWww } from "react-icons/tb";
// import { MdAddIcCall } from "react-icons/md";

// import frame1 from '../assets/Frame686553367.png';
// import frame2 from '../assets/Frame1686553368.png'; 
// import frame3 from '../assets/Frame1686553381.png';
// import frame4 from '../assets/Swachh_Bharat_Mission_Logo 1.png';
// import frame5 from '../assets/yoars-CK0owxDy.png';

// const Footer = () => {
//   return (
//     <>
//       <style>{`
//         .footer-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 25px 20px 5px;
//           width: 100%;
//           background: #000000;
//           color: #FFFFFF;
//           box-sizing: border-box;
//         }

//         .footer-wrapper {
//           display: flex;
//           flex-direction: column;
//           width: 100%;
//           max-width: 1400px;
//           gap: 20px;
//         }

//         .top-section {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           width: 100%;
//           gap: 15px;
//         }

//         .logo-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 15px;
//           width: 100%;
//         }

//         .logo-card {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 18px 20px;
//           min-width: 180px;
//           max-width: 200px;
//           height: 88px;
//           background: #FDFDFD;
//           border-radius: 15px;
//           box-sizing: border-box;
//           flex: 0 0 auto;
//         }

//         .logo-image {
//           max-width: 100%;
//           max-height: 62px;
//           width: auto;
//           height: auto;
//           object-fit: contain;
//           object-position: center;
//           display: block;
//           margin: 0 auto;
//         }

//         .middle-section {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           width: 100%;
//           gap: 60px;
//           padding: 12px 0;
//         }

//         .secretariat-wrapper {
//           display: flex;
//           flex-direction: column;
//           gap: 18px;
//           flex: 1;
//           max-width: 60%;
//         }

//         .secretariat-block {
//           display: flex;
//           align-items: flex-start;
//           gap: 10px;
//           padding-left: 20px;
//         }

//         .location-icon {
//           color: #F28119;
//           font-size: 26px;
//           flex-shrink: 0;
//           margin-top: 2px;
//         }

//         .secretariat-content {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         .secretariat-title {
//           font-family: 'Poppins', sans-serif;
//           font-weight: 600;
//           font-size: 15px;
//           color: #F28119;
//           margin: 0;
//           line-height: 1.3;
//         }

//         .secretariat-label {
//           font-family: 'Poppins', sans-serif;
//           font-weight: 600;
//           font-size: 16px;
//           color: #FFFFFF;
//           margin: 0;
//         }

//         .address {
//           font-family: 'Poppins', sans-serif;
//           font-weight: 400;
//           font-size: 13px;
//           line-height: 1.5;
//           color: #FFFFFF;
//           margin: 0;
//         }

//         .contact-wrapper {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           flex: 0 0 auto;
//           min-width: 350px;
//         }

//         .contact-row {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .contact-icon {
//           font-size: 24px;
//           color: #FFFFFF;
//           flex-shrink: 0;
//         }

//         .contact-info {
//           font-family: 'Poppins', sans-serif;
//           font-weight: 400;
//           font-size: 14px;
//           color: #F28119;
//           margin: 0;
//           line-height: 1.3;
//         }

//         .contact-link {
//           font-family: 'Poppins', sans-serif;
//           font-weight: 400;
//           font-size: 14px;
//           color: #F28119;
//           text-decoration: none;
//           line-height: 1.3;
//         }

//         .contact-link:hover {
//           text-decoration: underline;
//         }

//         .divider {
//           width: 100%;
//           height: 1px;
//           background: rgba(255, 255, 255, 0.15);
//           margin: 5px 0 3px;
//         }

//         .bottom-section {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 4px 0 3px;
//         }

//         .credit-text {
//           font-family: 'Poppins', sans-serif;
//           font-weight: 400;
//           font-size: 14px;
//           color: #FFFFFF;
//           text-align: center;
//         }

//         .credit-link {
//           color: #F28119;
//           text-decoration: none;
//           font-weight: 500;
//         }

//         .credit-link:hover {
//           text-decoration: underline;
//         }

//         @media screen and (max-width: 1199px) {
//           .logo-card {
//             min-width: 220px;
//             height: 95px;
//             padding: 18px 25px;
//           }

//           .logo-image {
//             max-height: 65px;
//           }

//           .secretariat-title {
//             font-size: 17px;
//           }

//           .secretariat-label {
//             font-size: 15px;
//           }

//           .address {
//             font-size: 13px;
//           }

//           .contact-info,
//           .contact-link {
//             font-size: 13px;
//           }

//           .location-icon {
//             font-size: 30px;
//           }

//           .contact-icon {
//             font-size: 26px;
//           }
//         }

//         @media screen and (max-width: 1023px) {
//           .middle-section {
//             flex-direction: column;
//             gap: 30px;
//           }

//           .secretariat-wrapper {
//             max-width: 100%;
//           }

//           .contact-wrapper {
//             min-width: auto;
//           }

//           .logo-card {
//             min-width: 200px;
//             height: 90px;
//             padding: 15px 20px;
//           }

//           .logo-image {
//             max-height: 60px;
//           }
//         }

//         @media screen and (max-width: 767px) {
//           .footer-container {
//             padding: 30px 15px 15px;
//           }

//           .footer-wrapper {
//             gap: 30px;
//           }

//           .logo-container {
//             flex-direction: column;
//             gap: 15px;
//           }

//           .logo-card {
//             width: 100%;
//             max-width: 400px;
//             height: 85px;
//           }

//           .secretariat-block {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//             gap: 10px;
//           }

//           .secretariat-title,
//           .secretariat-label,
//           .address {
//             text-align: center;
//           }

//           .contact-row {
//             flex-direction: row;
//             justify-content: flex-start;
//             gap: 12px;
//           }

//           .location-icon {
//             font-size: 28px;
//           }

//           .contact-icon {
//             font-size: 24px;
//           }

//           .secretariat-title {
//             font-size: 16px;
//           }

//           .secretariat-label {
//             font-size: 14px;
//           }

//           .address,
//           .contact-info,
//           .contact-link {
//             font-size: 12px;
//           }

//           .credit-text {
//             font-size: 13px;
//           }
//         }

//         @media screen and (max-width: 479px) {
//           .footer-container {
//             padding: 25px 12px 12px;
//           }

//           .logo-card {
//             height: 80px;
//             padding: 12px 15px;
//           }

//           .logo-image {
//             max-height: 55px;
//           }

//           .secretariat-wrapper,
//           .contact-wrapper {
//             gap: 15px;
//           }

//           .secretariat-title {
//             font-size: 15px;
//           }

//           .secretariat-label {
//             font-size: 13px;
//           }

//           .address,
//           .contact-info,
//           .contact-link {
//             font-size: 11px;
//           }

//           .location-icon {
//             font-size: 26px;
//           }

//           .contact-icon {
//             font-size: 22px;
//           }

//           .credit-text {
//             font-size: 12px;
//           }
//         }
//       `}</style>

//       <div className="footer-container">
//         <div className="footer-wrapper">
//           {/* Top Section with Government Logos */}
//           <div className="top-section">
//             <div className="logo-container">
//               <div className="logo-card">
//                 <img 
//                   src={frame1} 
//                   alt="MOFPI Logo" 
//                   className="logo-image"
//                   onError={(e) => {
//                     console.log('Failed to load:', frame1);
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//               <div className="logo-card">
//                 <img 
//                   src={frame2} 
//                   alt="Skill Development Logo" 
//                   className="logo-image"
//                   onError={(e) => {
//                     console.log('Failed to load:', frame2);
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//               <div className="logo-card">
//                 <img 
//                   src={frame3} 
//                   alt="AYUSH Logo" 
//                   className="logo-image"
//                   onError={(e) => {
//                     console.log('Failed to load:', frame3);
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//               <div className="logo-card">
//                 <img 
//                   src={frame4} 
//                   alt="Swachh Bharat Logo" 
//                   className="logo-image"
//                   onError={(e) => {
//                     console.log('Failed to load:', frame4);
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//               <div className="logo-card">
//                 <img 
//                   src={frame5} 
//                   alt="Constitution Logo" 
//                   className="logo-image"
//                   onError={(e) => {
//                     console.log('Failed to load:', frame5);
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Middle Section with Secretariat and Contact Info */}
//           <div className="middle-section">
//             <div className="secretariat-wrapper">
//               <div className="secretariat-block">
//                 <FaLocationDot className="location-icon" />
//                 <div className="secretariat-content">
//                   <div className="secretariat-title">IIFF Secretariat (Corporate Office)</div>
//                   <div className="address">
//                     15th Floor, Eros Corporate Tower, Nehru Place, New Delhi - 110019 (India).
//                   </div>
//                 </div>
//               </div>

//               <div className="secretariat-block">
//                 <FaLocationDot className="location-icon" />
//                 <div className="secretariat-content">
//                   <div className="secretariat-title">IIFF Secretariat (Working Office)</div>
//                   <div className="address">
//                     3393 A (Ground Floor), Ranjeet Nagar, Near Old Pusa Gate, New Delhi – 110008
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-wrapper">
//               <div className="contact-row">
//                 <MdAddIcCall className="contact-icon" />
//                 <div className="contact-info">+91 92055 14998 ,96507 03383</div>
//               </div>
//               <div className="contact-row">
//                 <CgMail className="contact-icon" />
//                 <div className="contact-info">info@iiff2025.in,expo@iiff2025.in</div>
//               </div>
//               <div className="contact-row">
//                 <TbWorldWww className="contact-icon" />
//                 <a
//                   href="https://iiff2025.in"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="contact-link"
//                 >
//                   https://iiff2025.in
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="divider"></div>

//           {/* Bottom Section with Credits */}
//           <div className="bottom-section">
//             <div className="credit-text">
//               Design and developed by{' '}
//               <a
//                 href="https://iiff2025.in/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="credit-link"
//               >
//                 Hwinfotech
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;


import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";
import { MdAddIcCall } from "react-icons/md";
import axios from 'axios';

const API_BASE = 'http://localhost:5000';

// A generic placeholder image (you can replace with your own)
const PLACEHOLDER_IMG = 'https://via.placeholder.com/150?text=Logo';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE}/api/settings`)
      .then((res) => {
        setFooterData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching footer settings:", err);
      });
  }, []);

  const getFullImageUrl = (imgPath) => {
    if (!imgPath) {
      return PLACEHOLDER_IMG;
    }
    // If it's already an absolute URL (http:// or https://), use it
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
      return imgPath;
    }
    // Otherwise, join with API_BASE
    return `${API_BASE}/${imgPath}`;
  };

  if (!footerData) {
    // You can return a loader if you prefer
    return null;
  }

  return (
    <>
      <style>{`
        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 25px 20px 5px;
          width: 100%;
          background: #000000;
          color: #FFFFFF;
          box-sizing: border-box;
        }
        .footer-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1400px;
          gap: 20px;
        }

        .top-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          gap: 15px;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          width: 100%;
        }

        .logo-card {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px 20px;
          min-width: 180px;
          max-width: 200px;
          height: 88px;
          background: #FDFDFD;
          border-radius: 15px;
          box-sizing: border-box;
          flex: 0 0 auto;
        }

        .logo-image {
          max-width: 100%;
          max-height: 62px;
          width: auto;
          height: auto;
          object-fit: contain;
          object-position: center;
          display: block;
          margin: 0 auto;
        }

        .middle-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          gap: 60px;
          padding: 12px 0;
        }

        .secretariat-wrapper {
          display: flex;
          flex-direction: column;
          gap: 18px;
          flex: 1;
          max-width: 60%;
        }

        .secretariat-block {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding-left: 20px;
        }

        .location-icon {
          color: #F28119;
          font-size: 26px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .secretariat-content {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .secretariat-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #F28119;
          margin: 0;
          line-height: 1.3;
        }

        .address {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 13px;
          line-height: 1.5;
          color: #FFFFFF;
          margin: 0;
        }

        .contact-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 0 0 auto;
          min-width: 350px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-icon {
          font-size: 24px;
          color: #FFFFFF;
          flex-shrink: 0;
        }

        .contact-info {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #F28119;
          margin: 0;
          line-height: 1.3;
        }

        .contact-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #F28119;
          text-decoration: none;
          line-height: 1.3;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          margin: 5px 0 3px;
        }

        .bottom-section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px 0 3px;
        }

        .credit-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
          text-align: center;
        }

        .credit-link {
          color: #F28119;
          text-decoration: none;
          font-weight: 500;
        }

        .credit-link:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 1023px) {
          .middle-section {
            flex-direction: column;
            gap: 30px;
          }
          .secretariat-wrapper {
            max-width: 100%;
          }
          .contact-wrapper {
            min-width: auto;
          }
          .logo-card {
            min-width: 200px;
            height: 90px;
            padding: 15px 20px;
          }
          .logo-image {
            max-height: 60px;
          }
        }

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 30px 15px 15px;
          }
          .footer-wrapper {
            gap: 30px;
          }
          .logo-container {
            flex-direction: column;
            gap: 15px;
          }
          .logo-card {
            width: 100%;
            max-width: 400px;
            height: 85px;
          }
          .secretariat-block {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
          }
          .secretariat-title,
          .address {
            text-align: center;
          }
          .contact-row {
            flex-direction: row;
            justify-content: flex-start;
            gap: 12px;
          }
        }

        @media screen and (max-width: 479px) {
          .footer-container {
            padding: 25px 12px 12px;
          }
          .logo-card {
            height: 80px;
            padding: 12px 15px;
          }
          .logo-image {
            max-height: 55px;
          }
          .secretariat-wrapper,
          .contact-wrapper {
            gap: 15px;
          }
          .secretariat-title {
            font-size: 15px;
          }
          .address,
          .contact-info,
          .contact-link {
            font-size: 11px;
          }
          .location-icon {
            font-size: 26px;
          }
          .contact-icon {
            font-size: 22px;
          }
          .credit-text {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-wrapper">
          {/* Top Logos */}
          <div className="top-section">
            <div className="logo-container">
              {[
                footerData.footerImg1,
                footerData.footerImg2,
                footerData.footerImg3,
                footerData.footerImg4,
                footerData.footerImg5
              ].map((imgPath, idx) => (
                <div className="logo-card" key={idx}>
                  <img
                    src={getFullImageUrl(imgPath)}
                    alt={`Footer Logo ${idx + 1}`}
                    className="logo-image"
                    onError={e => {
                      console.error("Image failed to load:", imgPath);
                      e.target.onerror = null;
                      e.target.src = PLACEHOLDER_IMG;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="middle-section">
            <div className="secretariat-wrapper">
              <div className="secretariat-block">
                <FaLocationDot className="location-icon" />
                <div className="secretariat-content">
                  <div className="secretariat-title">{footerData.addressTitle1}</div>
                  <div className="address">{footerData.address1}</div>
                </div>
              </div>
              <div className="secretariat-block">
                <FaLocationDot className="location-icon" />
                <div className="secretariat-content">
                  <div className="secretariat-title">{footerData.addressTitle2}</div>
                  <div className="address">{footerData.address2}</div>
                </div>
              </div>
            </div>

            <div className="contact-wrapper">
              <div className="contact-row">
                <MdAddIcCall className="contact-icon" />
                <div className="contact-info">{footerData.contact}</div>
              </div>
              <div className="contact-row">
                <CgMail className="contact-icon" />
                <div className="contact-info">{footerData.email}</div>
              </div>
              <div className="contact-row">
                <TbWorldWww classname="contact-icon" />
                <a
                  href={footerData.webURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {footerData.webURL}
                </a>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="bottom-section">
            <div className="credit-text">
              Design and developed by{' '}
              <a
                href="https://iiff2025.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-link"
              >
                Hwinfotech
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
