// // import React, { useState } from 'react';
// // import { X } from 'lucide-react';
// // import Otpverification from './Otpverification';
// // import { toast } from 'react-toastify';

// // const RegisterPopup = ({ onClose }) => {
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [showOtpVerification, setShowOtpVerification] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleRegisterSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       // Replace with your actual backend URL
// //       const response = await fetch('http://localhost:5000/api/auth/register', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ mobileNumber, email }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         toast.success('OTP has been sent to your mobile number!');
// //         setShowOtpVerification(true);
// //       } else {
// //         // Backend returned an error message
// //         toast.error(data.message || 'Failed to send OTP, please try again.');
// //       }
// //     } catch (error) {
// //       toast.error('Server error! Please try again later.');
// //       console.error('Register error:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleOtpClose = () => {
// //     setShowOtpVerification(false);
// //     onClose?.(); // Close the full popup
// //   };

// //   return (
// //     <>
// //       <style>
// //         {`
// //           .popup-overlay {
// //             position: fixed;
// //             inset: 0;
// //             background-color: rgba(0, 0, 0, 0.3);
// //             backdrop-filter: blur(5px);
// //             -webkit-backdrop-filter: blur(5px);
// //             display: flex;
// //             justify-content: center;
// //             align-items: center;
// //             z-index: 9999;
// //           }

// //           .popup-container {
// //             background-color: white;
// //             width: 500px;
// //             border-radius: 20px;
// //             box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
// //             overflow: hidden;
// //             display: flex;
// //             flex-direction: column;
// //           }

// //           .popup-header {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: center;
// //             padding: 25px 40px;
// //             background-color: rgba(227, 227, 227, 0.62);
// //           }

// //           .popup-title {
// //             margin: 0;
// //             font-family: 'Poppins', sans-serif;
// //             font-weight: 600;
// //             font-size: 35px;
// //             color: #000;
// //           }

// //           .popup-close-button {
// //             position: relative;
// //             width: 40px;
// //             height: 40px;
// //             cursor: pointer;
// //           }

// //           .popup-close-circle {
// //             position: absolute;
// //             width: 40px;
// //             height: 40px;
// //             background-color: white;
// //             border: 1px solid rgba(113, 128, 150, 0.5);
// //             border-radius: 50%;
// //           }

// //           .popup-close-icon {
// //             position: absolute;
// //             top: 30%;
// //             left: 30%;
// //             display: flex;
// //             justify-content: center;
// //             align-items: center;
// //           }

// //           .popup-form {
// //             padding: 30px 40px;
// //             display: flex;
// //             flex-direction: column;
// //             gap: 20px;
// //           }

// //           .popup-input-wrapper {
// //             height: 50px;
// //             border: 1px solid rgba(113, 128, 150, 0.5);
// //             border-radius: 10px;
// //             padding: 10px;
// //             box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
// //             display: flex;
// //             align-items: center;
// //             background-color: white;
// //           }

// //           .popup-input-wrapper input {
// //             width: 100%;
// //             border: none;
// //             outline: none;
// //             font-family: 'Poppins', sans-serif;
// //             font-size: 18px;
// //             color: #778196;
// //             background-color: transparent;
// //           }

// //           .popup-submit-button {
// //             background-color: #F28119;
// //             color: white;
// //             font-family: 'Poppins', sans-serif;
// //             font-weight: 700;
// //             font-size: 20px;
// //             text-transform: uppercase;
// //             border: none;
// //             padding: 14px;
// //             cursor: pointer;
// //             border-radius: 5px;
// //           }

// //           .popup-submit-button:disabled {
// //             background-color: #ccc;
// //             cursor: not-allowed;
// //           }
// //         `}
// //       </style>

// //       <div className="popup-overlay">
// //         <div className="popup-container">
// //           <div className="popup-header">
// //             <h2 className="popup-title">
// //               {showOtpVerification ? 'OTP Verification' : 'Register'}
// //             </h2>
// //             <div className="popup-close-button" onClick={onClose}>
// //               <div className="popup-close-circle" />
// //               <div className="popup-close-icon">
// //                 <X size={16} color="#718096" />
// //               </div>
// //             </div>
// //           </div>

// //           {!showOtpVerification ? (
// //             <form className="popup-form" onSubmit={handleRegisterSubmit}>
// //               <div className="popup-input-wrapper">
// //                 <input
// //                   type="tel"
// //                   placeholder="Enter mobile number"
// //                   value={mobileNumber}
// //                   onChange={(e) => setMobileNumber(e.target.value)}
// //                   required
// //                   disabled={loading}
// //                 />
// //               </div>
// //               <div className="popup-input-wrapper">
// //                 <input
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                   disabled={loading}
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="popup-submit-button"
// //                 disabled={loading}
// //               >
// //                 {loading ? 'Submitting...' : 'Submit'}
// //               </button>
// //             </form>
// //           ) : (
// //             <Otpverification onClose={handleOtpClose} />
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default RegisterPopup;


// //after navigate students and Entrepreneur

// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import Otpverification from './Otpverification';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const RegisterPopup = ({ onClose, userType }) => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [showOtpVerification, setShowOtpVerification] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//       if (mobileNumber.length !== 10) {
//       toast.error('Please enter a valid 10-digit mobile number.');
//       return;
//     }
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ mobileNumber, email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success('OTP has been sent to your mobile number!');
//         setShowOtpVerification(true);
//       } else {
//         toast.error(data.message || 'Failed to send OTP, please try again.');
//       }
//     } catch (error) {
//       toast.error('Server error! Please try again later.');
//       console.error('Register error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Called after OTP is verified inside Otpverification component
//   const handleOtpClose = (verified = false) => {
//     setShowOtpVerification(false);
//     if (verified) {
//       // Redirect based on userType
//       if (userType === 'student') {
//         navigate('/student-register');
//       } else if (userType === 'entrepreneur') {
//         navigate('/entrepreneur-register');
//       }
//     }
//     onClose?.(); // Close the full popup either way
//   };

//   return (
//     <>
//       <style>{`
//         .popup-overlay {
//           position: fixed;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.3);
//           backdrop-filter: blur(5px);
//           -webkit-backdrop-filter: blur(5px);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//         }
//         .popup-container {
//           background-color: white;
//           width: 500px;
//           border-radius: 20px;
//           box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//         }
//         .popup-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 25px 40px;
//           background-color: rgba(227, 227, 227, 0.62);
//         }
//         .popup-title {
//           margin: 0;
//           font-family: 'Poppins', sans-serif;
//           font-weight: 600;
//           font-size: 35px;
//           color: #000;
//         }
//         .popup-close-button {
//           position: relative;
//           width: 40px;
//           height: 40px;
//           cursor: pointer;
//         }
//         .popup-close-circle {
//           position: absolute;
//           width: 40px;
//           height: 40px;
//           background-color: white;
//           border: 1px solid rgba(113, 128, 150, 0.5);
//           border-radius: 50%;
//         }
//         .popup-close-icon {
//           position: absolute;
//           top: 30%;
//           left: 30%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .popup-form {
//           padding: 30px 40px;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }
//         .popup-input-wrapper {
//           height: 50px;
//           border: 1px solid rgba(113, 128, 150, 0.5);
//           border-radius: 10px;
//           padding: 10px;
//           box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
//           display: flex;
//           align-items: center;
//           background-color: white;
//         }
//         .popup-input-wrapper input {
//           width: 100%;
//           border: none;
//           outline: none;
//           font-family: 'Poppins', sans-serif;
//           font-size: 18px;
//           color: #778196;
//           background-color: transparent;
//         }
//         .popup-submit-button {
//           background-color: #F28119;
//           color: white;
//           font-family: 'Poppins', sans-serif;
//           font-weight: 700;
//           font-size: 20px;
//           text-transform: uppercase;
//           border: none;
//           padding: 14px;
//           cursor: pointer;
//           border-radius: 5px;
//         }
//         .popup-submit-button:disabled {
//           background-color: #ccc;
//           cursor: not-allowed;
//         }
//       `}</style>

//       <div className="popup-overlay">
//         <div className="popup-container">
//           <div className="popup-header">
//             <h2 className="popup-title">
//               {showOtpVerification ? 'OTP Verification' : 'Register'}
//             </h2>
//             <div className="popup-close-button" onClick={() => onClose?.()}>
//               <div className="popup-close-circle" />
//               <div className="popup-close-icon">
//                 <X size={16} color="#718096" />
//               </div>
//             </div>
//           </div>

//           {!showOtpVerification ? (
//             <form className="popup-form" onSubmit={handleRegisterSubmit}>
//               <div className="popup-input-wrapper">
//                 <input
//                   type="tel"
//                   placeholder="Enter mobile number"
//                   value={mobileNumber}
//                   onChange={(e) => {
//                     const val = e.target.value;
//                     // Only allow digits and max length 10
//                     if (/^\d{0,10}$/.test(val)) {
//                       setMobileNumber(val);
//                     }
//                   }}
//                   required
//                   disabled={loading}
//                   maxLength={10}
//                 />
//               </div>
//               <div className="popup-input-wrapper">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   disabled={loading}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="popup-submit-button"
//                 disabled={loading}
//               >
//                 {loading ? 'Submitting...' : 'Submit'}
//               </button>
//             </form>
//           ) : (
//             <Otpverification
//               mobileNumber={mobileNumber}
//               onClose={handleOtpClose} // pass callback with verified flag
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RegisterPopup;









//after otp 

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Otpverification from './Otpverification';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterPopup = ({ onClose, userType }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (mobileNumber.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!email) {
      toast.error('Please enter your email.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber, email }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success('OTP has been sent to your email!');
        setShowOtpVerification(true);
      } else {
        toast.error(data.message || 'Failed to send OTP.');
      }
    } catch (err) {
      console.error('Register fetch error:', err);
      toast.error('Server error! Please try later.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpClose = (verified = false) => {
    setShowOtpVerification(false);
    if (verified) {
      if (userType === 'student') {
        navigate('/student-register');
      } else if (userType === 'entrepreneur') {
        navigate('/entrepreneur-register');
      }
    }
    onClose?.();
  };

  return (
    <>
      <style>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .popup-container {
          background-color: white;
          width: 500px;
          border-radius: 20px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 40px;
          background-color: rgba(227, 227, 227, 0.62);
        }
        .popup-title {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 35px;
          color: #000;
        }
        .popup-close-button {
          position: relative;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
        .popup-close-circle {
          position: absolute;
          width: 40px;
          height: 40px;
          background-color: white;
          border: 1px solid rgba(113, 128, 150, 0.5);
          border-radius: 50%;
        }
        .popup-close-icon {
          position: absolute;
          top: 30%;
          left: 30%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-form {
          padding: 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .popup-input-wrapper {
          height: 50px;
          border: 1px solid rgba(113, 128, 150, 0.5);
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          background-color: white;
        }
        .popup-input-wrapper input {
          width: 100%;
          border: none;
          outline: none;
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          color: #778196;
          background-color: transparent;
        }
        .popup-submit-button {
          background-color: #F28119;
          color: white;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 20px;
          text-transform: uppercase;
          border: none;
          padding: 14px;
          cursor: pointer;
          border-radius: 5px;
        }
        .popup-submit-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>

      <div className="popup-overlay">
        <div className="popup-container">
          <div className="popup-header">
            <h2 className="popup-title">
              {showOtpVerification ? 'OTP Verification' : 'Register'}
            </h2>
            <div className="popup-close-button" onClick={() => onClose?.()}>
              <div className="popup-close-circle" />
              <div className="popup-close-icon">
                <X size={16} color="#718096" />
              </div>
            </div>
          </div>

          {!showOtpVerification ? (
            <form className="popup-form" onSubmit={handleRegisterSubmit}>
              <div className="popup-input-wrapper">
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,10}$/.test(val)) {
                      setMobileNumber(val);
                    }
                  }}
                  disabled={loading}
                  maxLength={10}
                  required
                />
              </div>
              <div className="popup-input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <button type="submit" className="popup-submit-button" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          ) : (
            <Otpverification email={email} onClose={handleOtpClose} />
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPopup;
