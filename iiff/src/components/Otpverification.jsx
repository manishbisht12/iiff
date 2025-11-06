


// // //after navigate students and Entrepreneur

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Otpverification = ({ onClose, mobileNumber }) => {
// //   const [otp, setOtp] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
// //         mobileNumber,
// //         otp,
// //       });

// //       toast.success('OTP Verified Successfully');
// //       localStorage.setItem('token', response.data.token); // optional: save JWT token
      
// //       onClose(true); // Pass true to indicate successful verification and trigger redirect

// //     } catch (error) {
// //       if (error.response) {
// //         toast.error(error.response.data.message || 'OTP verification failed');
// //       } else {
// //         toast.error('Server error. Please try again later.');
// //       }
// //       console.error('OTP verification error:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form className="popup-form" onSubmit={handleSubmit}>
// //       <div className="popup-input-wrapper">
// //         <input
// //           type="text"
// //           placeholder="Enter 4-digit OTP"
// //           value={otp}
// //           onChange={(e) => setOtp(e.target.value)}
// //           required
// //           maxLength={4}
// //           disabled={loading}
// //         />
// //       </div>
// //       <button type="submit" className="popup-submit-button" disabled={loading}>
// //         {loading ? 'Verifying...' : 'Verify'}
// //       </button>
// //     </form>
// //   );
// // };

// // export default Otpverification;






//register page not work after otp email

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const Otpverification = ({ email, onClose }) => {
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     if (otp.length !== 4) {
//       toast.error('Please enter 4-digit OTP');
//       return;
//     }
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         toast.success('OTP verified');
//         onClose(true);
//       } else {
//         toast.error(data.message || 'OTP verification failed');
//       }
//     } catch (err) {
//       console.error('Verify OTP fetch error:', err);
//       toast.error('Server error verifying OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleVerify} className="otp-form" noValidate>
//       <input
//         type="text"
//         placeholder="Enter 4-digit OTP"
//         value={otp}
//         onChange={(e) => {
//           const val = e.target.value;
//           if (/^\d{0,4}$/.test(val)) {
//             setOtp(val);
//           }
//         }}
//         maxLength={4}
//         disabled={loading}
//         required
//         aria-label="OTP input"
//       />
//       <button type="submit" disabled={loading} aria-busy={loading}>
//         {loading ? 'Verifying...' : 'Verify OTP'}
//       </button>

//       <style>{`
//         .otp-form {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           padding: 30px 40px;
//           font-family: 'Poppins', sans-serif;
//         }
//         input[type="text"] {
//           font-size: 22px;
//           padding: 14px 18px;
//           border: 1.5px solid #718096;
//           border-radius: 12px;
//           outline: none;
//           transition: border-color 0.3s ease, box-shadow 0.3s ease;
//           color: #4a5568;
//           font-weight: 500;
//         }
//         input[type="text"]::placeholder {
//           color: #a0aec0;
//           font-weight: 400;
//         }
//         input[type="text"]:focus {
//           border-color: #F28119;
//           box-shadow: 0 0 12px #F28119;
//         }
//         button {
//           background-color: #F28119;
//           color: white;
//           font-weight: 700;
//           font-size: 20px;
//           border: none;
//           padding: 16px;
//           border-radius: 12px;
//           cursor: pointer;
//           box-shadow: 0 8px 12px rgba(242, 129, 25, 0.4);
//           transition: background-color 0.3s ease, box-shadow 0.3s ease;
//         }
//         button:hover:not(:disabled) {
//           background-color: #d36e00;
//           box-shadow: 0 10px 14px rgba(211, 110, 0, 0.6);
//         }
//         button:disabled {
//           background: #e2e8f0;
//           cursor: not-allowed;
//           box-shadow: none;
//           color: #a0aec0;
//         }
//       `}</style>
//     </form>
//   );
// };

// export default Otpverification;




















//working register after get otp in email 


import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Otpverification = ({ email, onClose }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      toast.error('Please enter a 4-digit OTP');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Save token to localStorage
        if (data.token) {
          localStorage.setItem('token', data.token);
        } else {
          console.warn('No token received from server');
        }

        toast.success('OTP verified');
        onClose(true); // Signal to parent that OTP is verified
      } else {
        toast.error(data.message || 'OTP verification failed');
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      toast.error('Server error verifying OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleVerify} className="otp-form" noValidate>
      <input
        type="text"
        placeholder="Enter 4-digit OTP"
        value={otp}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d{0,4}$/.test(val)) {
            setOtp(val);
          }
        }}
        maxLength={4}
        disabled={loading}
        required
        aria-label="OTP input"
      />

      <button type="submit" disabled={loading} aria-busy={loading}>
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>

      <style>{`
        .otp-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 30px 40px;
          font-family: 'Poppins', sans-serif;
        }
        input[type="text"] {
          font-size: 22px;
          padding: 14px 18px;
          border: 1.5px solid #718096;
          border-radius: 12px;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          color: #4a5568;
          font-weight: 500;
        }
        input[type="text"]::placeholder {
          color: #a0aec0;
          font-weight: 400;
        }
        input[type="text"]:focus {
          border-color: #F28119;
          box-shadow: 0 0 12px #F28119;
        }
        button {
          background-color: #F28119;
          color: white;
          font-weight: 700;
          font-size: 20px;
          border: none;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 8px 12px rgba(242, 129, 25, 0.4);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        button:hover:not(:disabled) {
          background-color: #d36e00;
          box-shadow: 0 10px 14px rgba(211, 110, 0, 0.6);
        }
        button:disabled {
          background: #e2e8f0;
          cursor: not-allowed;
          box-shadow: none;
          color: #a0aec0;
        }
      `}</style>
    </form>
  );
};

export default Otpverification;
