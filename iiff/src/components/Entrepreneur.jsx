// // // import React, { useState } from 'react';
// // // import registration from '../assets/registration.png';
// // // import field from '../assets/Entrepreneur.png';
// // // import logo from '../assets/Image 1.png';

// // // const Entreneur = () => {
// // //   const [name, setName] = useState('');
// // //   const [fathername, setFathername] = useState('');
// // //   const [state, setState] = useState('');
// // //   const [district, setDistrict] = useState('');
// // //   const [businessName, setBusinessName] = useState('');
// // //   const [businessAddress, setBusinessAddress] = useState('');
// // //   const [udyogNumber, setUdyogNumber] = useState('');
// // //   const [socialMedia, setSocialMedia] = useState('');
  
  

// // //   return (
// // //     <>
// // //       <style>
// // //         {`
// // //           .register-banner {
// // //             height: 293px;
// // //             width: 100%;
// // //             overflow: hidden;
// // //           }

// // //           .register-banner img {
// // //             width: 100%;
// // //             height: 100%;
// // //             object-fit: cover;
// // //           }

// // //           .student-img-register {
// // //             width: 1320px;
// // //             display: flex;
// // //             justify-content: center;
// // //             align-items: flex-start;
// // //             padding: 20px;
// // //             margin: 0 auto;
// // //             gap: 30px;
// // //           }

// // //           .field-box {
// // //             width: 746px;
// // //             height: 760px;
// // //             border-radius: 8px;
// // //             border: 1px solid #ccc;
// // //             overflow: hidden;
// // //             margin-top:40px;
// // //           }

// // //           .field-box img {
// // //             width: 100%;
// // //             height: 100%;
// // //             object-fit: cover;
// // //           }

// // //           .student-register-form {
// // //             background: #F7FAFF;
// // //             padding: 30px 20px;
// // //             border-radius: 10px;
// // //             box-shadow: 0 0 44px rgba(0,0,0,0.05);
// // //             width: 550px;
// // //             display: flex;
// // //             flex-direction: column;
// // //             gap: 15px;
// // //           }

// // //           .popup-input-wrapper {
// // //             box-sizing: border-box;
// // //             display: flex;
// // //             flex-direction: row;
// // //             align-items: center;
// // //             padding: 22px 14px;
// // //             gap: 50px;

// // //             width: 490px;
// // //             height: 60px;
            

// // //             background: #FFFFFF;
// // //             border: 1px solid #E5E5E5;
// // //             box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
// // //             border-radius: 10px;
// // //             margin-bottom:20px;
// // //           }

// // //           .popup-input-wrapper input,
// // //           .popup-input-wrapper select {
// // //             width: 100%;
// // //             height: 100%;
// // //             border: none;
// // //             outline: none;
// // //             font-size: 14px;
// // //             background: transparent;
// // //             color: #555555;
// // //           }

// // //           .form-form-name{
// // //           color:#F28119;
// // //           font-size:25px;
// // //           text-align: center;
// // //           font-weight: bold;
// // //           margin-bottom: 20px;
// // //           }
// // //           .popup-submit-button {
// // //           width: 490px;
// // //           height: 70px;
// // //           background-color: #F28119;
// // //           color: white;
// // //           font-size: 20px; /* Increased text size */
// // //           font-weight: bold;
// // //           border: none;
// // //           border-radius: 10px;
// // //           cursor: pointer;
// // //            transition: background-color 0.3s ease;
// // //            }
// // //         `}
// // //       </style>

// // //       {/* Top Banner */}
// // //       <div className="register-banner">
// // //         <img src={registration} alt="Registration Banner" />
// // //       </div>

// // //       {/* Registration Form */}
// // //       <div className="student-img-register">
// // //         <img
// // //     src={logo}
// // //     alt="Logo"
// // //     style={{
// // //       position: 'absolute',
// // //       top: '10px',      // adjust vertical position
// // //       right: '10px',    // right side
// // //       width: '200px',
// // //       height: '200px',
// // //       objectFit: 'contain',
// // //       marginTop: '200px',
// // //       marginRight:'100px',
// // //     }}
// // //   />
// // //         {/* Field image */}
// // //         <div className="field-box">
// // //           <img src={field} alt="Form Fields" />
// // //         </div>

// // //         {/* Form */}
// // //         <div className="student-register-form">
// // //           <form>
// // //             <div className='form-form-name'>Entrepreneur</div>

// // //             <div className="popup-input-wrapper">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter Your Name"
// // //                 value={name}
// // //                 onChange={(e) => setName(e.target.value)}
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="popup-input-wrapper">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter Your Father's Name"
// // //                 value={fathername}
// // //                 onChange={(e) => setFathername(e.target.value)}
// // //                 required
// // //               />
// // //             </div>




// // //             <div className="popup-input-wrapper">
// // //               <select value={state} onChange={(e) => setState(e.target.value)} required>
// // //                 <option value="">Select Your State</option>
// // //                 <option value="Tamil Nadu">Tamil Nadu</option>
// // //                 <option value="Kerala">Kerala</option>
// // //                 <option value="Karnataka">Karnataka</option>
// // //               </select>
// // //             </div>

// // //             <div className="popup-input-wrapper">
// // //               <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
// // //                 <option value="">Select Your District</option>
// // //                 <option value="Chennai">Chennai</option>
// // //                 <option value="Coimbatore">Coimbatore</option>
// // //                 <option value="Madurai">Madurai</option>
// // //               </select>
// // //             </div>

// // //              <div className="popup-input-wrapper">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter Your Business Name"
// // //                 value={businessName}
// // //                 onChange={(e) => setBusinessName(e.target.value)}
// // //               />
// // //             </div>
// // //             <div className="popup-input-wrapper">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter Your Business Address"
// // //                 value={businessName}
// // //                 onChange={(e) => setBusinessAddress(e.target.value)}
// // //               />
// // //             </div>

// // //            <div className="popup-input-wrapper">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter Your Udyog Number"
// // //                 value={businessName}
// // //                 onChange={(e) => setUdyogNumber(e.target.value)}
// // //               />
// // //             </div>

// // //             <div className="popup-input-wrapper">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Social media psot url"
// // //                 value={businessName}
// // //                 onChange={(e) => setSocialMedia(e.target.value)}
// // //               />
// // //             </div>

           

            
// // //             <button type="submit" className="popup-submit-button">
// // //                 Submit
// // //               </button>

// // //           </form>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Entreneur;;


// // import React, { useState } from 'react';
// // import registration from '../assets/registration.png';
// // import field from '../assets/Entrepreneur.png';
// // import logo from '../assets/Image 1.png';
// // import ThankYou from './ThankYou'; // ✅ Import the Thank You component

// // const Entreneur = () => {
// //   const [name, setName] = useState('');
// //   const [fathername, setFathername] = useState('');
// //   const [state, setState] = useState('');
// //   const [district, setDistrict] = useState('');
// //   const [businessName, setBusinessName] = useState('');
// //   const [businessAddress, setBusinessAddress] = useState('');
// //   const [udyogNumber, setUdyogNumber] = useState('');
// //   const [socialMedia, setSocialMedia] = useState('');
// //   const [formSubmitted, setFormSubmitted] = useState(false); // ✅ Track form submission

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Optional: Add validation or send data to backend here

// //     setFormSubmitted(true); // ✅ Show ThankYou component
// //   };

// //   if (formSubmitted) {
// //     return <ThankYou />; // ✅ Display thank you page after submission
// //   }

// //   return (
// //     <>
// //       <style>
// //         {`
// //           .register-banner {
// //             height: 293px;
// //             width: 100%;
// //             overflow: hidden;
// //           }

// //           .register-banner img {
// //             width: 100%;
// //             height: 100%;
// //             object-fit: cover;
// //           }

// //           .student-img-register {
// //             width: 1320px;
// //             display: flex;
// //             justify-content: center;
// //             align-items: flex-start;
// //             padding: 20px;
// //             margin: 0 auto;
// //             gap: 30px;
// //           }

// //           .field-box {
// //             width: 746px;
// //             height: 760px;
// //             border-radius: 8px;
// //             border: 1px solid #ccc;
// //             overflow: hidden;
// //             margin-top: 40px;
// //           }

// //           .field-box img {
// //             width: 100%;
// //             height: 100%;
// //             object-fit: cover;
// //           }

// //           .student-register-form {
// //             background: #F7FAFF;
// //             padding: 30px 20px;
// //             border-radius: 10px;
// //             box-shadow: 0 0 44px rgba(0,0,0,0.05);
// //             width: 550px;
// //             display: flex;
// //             flex-direction: column;
// //             gap: 15px;
// //           }

// //           .popup-input-wrapper {
// //             box-sizing: border-box;
// //             display: flex;
// //             flex-direction: row;
// //             align-items: center;
// //             padding: 22px 14px;
// //             gap: 50px;

// //             width: 490px;
// //             height: 60px;

// //             background: #FFFFFF;
// //             border: 1px solid #E5E5E5;
// //             box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
// //             border-radius: 10px;
// //             margin-bottom: 20px;
// //           }

// //           .popup-input-wrapper input,
// //           .popup-input-wrapper select {
// //             width: 100%;
// //             height: 100%;
// //             border: none;
// //             outline: none;
// //             font-size: 14px;
// //             background: transparent;
// //             color: #555555;
// //           }

// //           .form-form-name {
// //             color: #F28119;
// //             font-size: 25px;
// //             text-align: center;
// //             font-weight: bold;
// //             margin-bottom: 20px;
// //           }

// //           .popup-submit-button {
// //             width: 490px;
// //             height: 70px;
// //             background-color: #F28119;
// //             color: white;
// //             font-size: 20px;
// //             font-weight: bold;
// //             border: none;
// //             border-radius: 10px;
// //             cursor: pointer;
// //             transition: background-color 0.3s ease;
// //           }
// //         `}
// //       </style>

// //       {/* Top Banner */}
// //       <div className="register-banner">
// //         <img src={registration} alt="Registration Banner" />
// //       </div>

// //       {/* Registration Form */}
// //       <div className="student-img-register">
// //         <img
// //           src={logo}
// //           alt="Logo"
// //           style={{
// //             position: 'absolute',
// //             top: '10px',
// //             right: '10px',
// //             width: '200px',
// //             height: '200px',
// //             objectFit: 'contain',
// //             marginTop: '200px',
// //             marginRight: '100px',
// //           }}
// //         />

// //         {/* Field image */}
// //         <div className="field-box">
// //           <img src={field} alt="Form Fields" />
// //         </div>

// //         {/* Form */}
// //         <div className="student-register-form">
// //           <form onSubmit={handleSubmit}>
// //             <div className="form-form-name">Entrepreneur</div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Father's Name"
// //                 value={fathername}
// //                 onChange={(e) => setFathername(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <select value={state} onChange={(e) => setState(e.target.value)} required>
// //                 <option value="">Select Your State</option>
// //                 <option value="Tamil Nadu">Tamil Nadu</option>
// //                 <option value="Kerala">Kerala</option>
// //                 <option value="Karnataka">Karnataka</option>
// //               </select>
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
// //                 <option value="">Select Your District</option>
// //                 <option value="Chennai">Chennai</option>
// //                 <option value="Coimbatore">Coimbatore</option>
// //                 <option value="Madurai">Madurai</option>
// //               </select>
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Business Name"
// //                 value={businessName}
// //                 onChange={(e) => setBusinessName(e.target.value)}
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Business Address"
// //                 value={businessAddress}
// //                 onChange={(e) => setBusinessAddress(e.target.value)}
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Udyog Number"
// //                 value={udyogNumber}
// //                 onChange={(e) => setUdyogNumber(e.target.value)}
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Social Media Post URL"
// //                 value={socialMedia}
// //                 onChange={(e) => setSocialMedia(e.target.value)}
// //               />
// //             </div>

// //             <button type="submit" className="popup-submit-button">
// //               Submit
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Entreneur;


// import React, { useState } from 'react';
// import registration from '../assets/registration.png';
// import field from '../assets/Entrepreneur.png';
// import logo from '../assets/Image 1.png';
// import ThankYou from './ThankYou'; // Import your existing ThankYou component

// const Entrepreneur = () => {
//   const [name, setName] = useState('');
//   const [fathername, setFathername] = useState('');
//   const [state, setState] = useState('');
//   const [district, setDistrict] = useState('');
//   const [businessName, setBusinessName] = useState('');
//   const [businessAddress, setBusinessAddress] = useState('');
//   const [udyogNumber, setUdyogNumber] = useState('');
//   const [socialMedia, setSocialMedia] = useState('');
//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowThankYou(true);
//   };

//   return (
//     <>
//       <style>
//         {`
//           .register-banner {
//             height: 293px;
//             width: 100%;
//             overflow: hidden;
//           }
//           .register-banner img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }
//           .student-img-register {
//             width: 1320px;
//             display: flex;
//             justify-content: center;
//             align-items: flex-start;
//             padding: 20px;
//             margin: 0 auto;
//             gap: 30px;
//           }
//           .field-box {
//             width: 746px;
//             height: 760px;
//             border-radius: 8px;
//             border: 1px solid #ccc;
//             overflow: hidden;
//             margin-top:40px;
//           }
//           .field-box img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }
//           .student-register-form {
//             background: #F7FAFF;
//             padding: 30px 20px;
//             border-radius: 10px;
//             box-shadow: 0 0 44px rgba(0,0,0,0.05);
//             width: 550px;
//             display: flex;
//             flex-direction: column;
//             gap: 15px;
//           }
//           .popup-input-wrapper {
//             box-sizing: border-box;
//             display: flex;
//             flex-direction: row;
//             align-items: center;
//             padding: 22px 14px;
//             gap: 50px;
//             width: 490px;
//             height: 60px;
//             background: #FFFFFF;
//             border: 1px solid #E5E5E5;
//             box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
//             border-radius: 10px;
//             margin-bottom:20px;
//           }
//           .popup-input-wrapper input,
//           .popup-input-wrapper select {
//             width: 100%;
//             height: 100%;
//             border: none;
//             outline: none;
//             font-size: 14px;
//             background: transparent;
//             color: #555555;
//           }
//           .form-form-name{
//             color:#F28119;
//             font-size:25px;
//             text-align: center;
//             font-weight: bold;
//             margin-bottom: 20px;
//           }
//           .popup-submit-button {
//             width: 490px;
//             height: 70px;
//             background-color: #F28119;
//             color: white;
//             font-size: 20px;
//             font-weight: bold;
//             border: none;
//             border-radius: 10px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }
//           .popup-submit-button:hover {
//             background-color: #e16d05;
//           }
//         `}
//       </style>

//       {/* Top Banner */}
//       <div className="register-banner">
//         <img src={registration} alt="Registration Banner" />
//       </div>

//       {/* Registration Form */}
//       <div className="student-img-register">
//         <img
//           src={logo}
//           alt="Logo"
//           style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10px',
//             width: '200px',
//             height: '200px',
//             objectFit: 'contain',
//             marginTop: '200px',
//             marginRight:'100px',
//           }}
//         />

//         {/* Field image */}
//         <div className="field-box">
//           <img src={field} alt="Form Fields" />
//         </div>

//         {/* Form */}
//         <div className="student-register-form">
//           <form onSubmit={handleSubmit}>
//             <div className='form-form-name'>Entrepreneur</div>

//             <div className="popup-input-wrapper">
//               <input
//                 type="text"
//                 placeholder="Enter Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="popup-input-wrapper">
//               <input
//                 type="text"
//                 placeholder="Enter Your Father's Name"
//                 value={fathername}
//                 onChange={(e) => setFathername(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="popup-input-wrapper">
//               <select value={state} onChange={(e) => setState(e.target.value)} required>
//                 <option value="">Select Your State</option>
//                 <option value="Tamil Nadu">Tamil Nadu</option>
//                 <option value="Kerala">Kerala</option>
//                 <option value="Karnataka">Karnataka</option>
//               </select>
//             </div>

//             <div className="popup-input-wrapper">
//               <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
//                 <option value="">Select Your District</option>
//                 <option value="Chennai">Chennai</option>
//                 <option value="Coimbatore">Coimbatore</option>
//                 <option value="Madurai">Madurai</option>
//               </select>
//             </div>

//             <div className="popup-input-wrapper">
//               <input
//                 type="text"
//                 placeholder="Enter Your Business Name"
//                 value={businessName}
//                 onChange={(e) => setBusinessName(e.target.value)}
//               />
//             </div>
//             <div className="popup-input-wrapper">
//               <input
//                 type="text"
//                 placeholder="Enter Your Business Address"
//                 value={businessAddress}
//                 onChange={(e) => setBusinessAddress(e.target.value)}
//               />
//             </div>

//             <div className="popup-input-wrapper">
//               <input
//                 type="text"
//                 placeholder="Enter Your Udyog Number"
//                 value={udyogNumber}
//                 onChange={(e) => setUdyogNumber(e.target.value)}
//               />
//             </div>

//             <div className="popup-input-wrapper">
//               <input
//                 type="text"
//                 placeholder="Social media post URL"
//                 value={socialMedia}
//                 onChange={(e) => setSocialMedia(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="popup-submit-button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {showThankYou && <ThankYou />}
//     </>
//   );
// };

// export default Entrepreneur;


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import registration from '../assets/registration.png';
import field from '../assets/Entrepreneur.png';
import logo from '../assets/Image 1.png';
import ThankYou from './ThankYou';

const Entrepreneur = () => {
  const [name, setName] = useState('');
  const [fathername, setFathername] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [udyogNumber, setUdyogNumber] = useState('');
  const [socialmedia, setSocialmedia] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      fathername,
      state,
      district,
      businessName,
      businessAddress,
      udyogNumber,
      socialmedia,
    };

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/api/auth/entrepreneur/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

   
      if (response.ok) {
        toast.success('Submitted successfully!');
        setShowThankYou(true);

        // Reset form
    setName('');
    setFathername('');
    setState('');
    setDistrict('');
    setBusinessName('');
    setBusinessAddress('');
    setUdyogNumber('');
    setSocialmedia('');
      } else {
         toast.error(` ${data.message || 'Submission failed'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(' Server error. Please try again later.');
    }
  };

  

  return (
    <>
     <style>
  {`
    .register-banner {
      height: 293px;
      width: 100%;
      overflow: hidden;
    }
    .register-banner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .student-img-register {
      width: 100%;
      max-width: 1320px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 20px;
      margin: 0 auto;
      gap: 30px;
      flex-wrap: nowrap;
    }

    .field-box {
      width: 746px;
      height: 760px;
      border-radius: 8px;
      border: 1px solid #ccc;
      overflow: hidden;
      margin-top: 40px;
      flex-shrink: 0;
    }
    .field-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .student-register-form {
      background: #F7FAFF;
      padding: 30px 20px;
      border-radius: 10px;
      box-shadow: 0 0 44px rgba(0,0,0,0.05);
      width: 550px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      flex-shrink: 0;
    }

    .popup-input-wrapper {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 22px 14px;
      gap: 50px;
      width: 100%;
      height: 60px;
      background: #FFFFFF;
      border: 1px solid #E5E5E5;
      box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .popup-input-wrapper input,
    .popup-input-wrapper select {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 14px;
      background: transparent;
      color: #555555;
    }

    .form-form-name {
      color: #F28119;
      font-size: 25px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .popup-submit-button {
      width: 100%;
      height: 70px;
      background-color: #F28119;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .popup-submit-button:hover {
      background-color: #e16d05;
    }

    /* -----------------------------
       Responsive Styling Starts Here
    ------------------------------*/

    @media (max-width: 1024px) {
      .student-img-register {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .field-box {
        width: 90%;
        height: auto;
        margin-top: 20px;
      }

      .field-box img {
        height: auto;
      }

      .student-register-form {
        width: 90%;
      }

      .popup-input-wrapper {
        padding: 16px 12px;
        gap: 20px;
        flex-direction: column;
        height: auto;
        align-items: flex-start;
      }

      .popup-submit-button {
        height: 60px;
        font-size: 18px;
      }

      .form-form-name {
        font-size: 22px;
      }
    }

    @media (max-width: 480px) {
      .form-form-name {
        font-size: 20px;
      }

      .popup-submit-button {
        height: 55px;
        font-size: 16px;
      }

      .popup-input-wrapper {
        padding: 14px 10px;
      }
    }
  `}
</style>


      {/* Top Banner */}
      <div className="register-banner">
        <img src={registration} alt="Registration Banner" />
      </div>

      {/* Registration Form */}
      <div className="student-img-register">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            position: 'absolute',
            top: '230px',
            right: '100px',
            width: '150px',
            height: '150px',
            objectFit: 'contain',
            zIndex: 10,
          }}
        />

        {/* Field image */}
        <div className="field-box">
          <img src={field} alt="Form Fields" />
        </div>

        {/* Form */}
        <div className="student-register-form">
          <form onSubmit={handleSubmit}>
            <div className="form-form-name">Entrepreneur</div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                placeholder="Enter Your Father's Name"
                value={fathername}
                onChange={(e) => setFathername(e.target.value)}
                required
              />
            </div>

            {/* Removed mobile number and email fields */}

            <div className="popup-input-wrapper">
              <select value={state} onChange={(e) => setState(e.target.value)} required>
                <option value="">Select Your State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
                <option value="">Select Your District</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                placeholder="Enter Your Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                placeholder="Enter Your Business Address"
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                placeholder="Enter Your Udyog Number"
                value={udyogNumber}
                onChange={(e) => setUdyogNumber(e.target.value)}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                placeholder="Social media post URL"
                value={socialmedia}
                onChange={(e) => setSocialmedia(e.target.value)}
              />
            </div>

            <button type="submit" className="popup-submit-button">
              Submit 
            </button>
          </form>
        </div>
      </div>

      {showThankYou && <ThankYou />}
    </>
  );
};

export default Entrepreneur;
