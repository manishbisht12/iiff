// // import React, { useState } from 'react';
// // import registration from '../assets/registration.png';
// // import field from '../assets/field.png';
// // import logo from '../assets/Image 1.png';
// // import ThankYou from './ThankYou';

// // const Studentregister = () => {
// //   const [name, setName] = useState('');
// //   const [fathername, setFathername] = useState('');
// //   const [dob, setDob] = useState('');
// //   const [state, setState] = useState('');
// //   const [district, setDistrict] = useState('');
// //   const [occupation, setOccupation] = useState('');
// //   const [business, setBusiness] = useState('');
// //   const [businessName, setBusinessName] = useState('');
// //   const [businessAddress, setBusinessAddress] = useState('');
// //   const [udyogNumber, setUdyogNumber] = useState('');
// //   const [institution, setInstitution] = useState('');
// //   const [institutionName, setInstitutionName] = useState('');
// //   const [institutionaddress, setInstitutionaddress] = useState('');
// //    const[socialmedia, setSocialmedia] =useState('');
// //   const [questionOne, setQuestionOne] = useState('');
// //   const [questionTwo, setQuestionTwo] = useState('');
// //   const [questionThree, setQuestionThree] = useState('');
// //   const [answerOne, setAnswerOne] = useState('');
// //   const [answerTwo, setAnswerTwo] = useState('');
// //   const [answerThree, setAnswerThree] = useState('');
  

// //    // ✅ Add this
// //   const [formSubmitted, setFormSubmitted] = useState(false);

// //   // ✅ Handle submit
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form Submitted');
// //     // You can send data to backend here if needed
// //     setFormSubmitted(true); // Show thank-you page
// //   };
  
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
// //             width: 786px;
// //             height: 1150px;
// //             border-radius: 8px;
// //             border: 1px solid #ccc;
// //             overflow: hidden;
// //             margin-top:40px;
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
// //             margin-bottom:20px;
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

// //           .form-form-name{
// //           color:#F28119;
// //           font-size:25px;
// //           text-align: center;
// //           font-weight: bold;
// //           margin-bottom: 20px;
// //           }
// //           .popup-submit-button {
// //           width: 490px;
// //           height: 70px;
// //           background-color: #F28119;
// //           color: white;
// //           font-size: 20px; /* Increased text size */
// //           font-weight: bold;
// //           border: none;
// //           border-radius: 10px;
// //           cursor: pointer;
// //            transition: background-color 0.3s ease;
// //            }
// //         `}
// //       </style>

// //       {/* Top Banner */}
// //       <div className="register-banner">
// //         <img src={registration} alt="Registration Banner" />
// //       </div>

// //       {/* Registration Form */}
// //       <div className="student-img-register">
// //         <img
// //     src={logo}
// //     alt="Logo"
// //     style={{
// //       position: 'absolute',
// //       top: '10px',      // adjust vertical position
// //       right: '10px',    // right side
// //       width: '200px',
// //       height: '200px',
// //       objectFit: 'contain',
// //       marginTop: '200px',
// //       marginRight:'100px',
// //     }}
// //   />
// //         {/* Field image */}
// //         <div className="field-box">
// //           <img src={field} alt="Form Fields" />
// //         </div>

// //         {/* Form */}
// //         <div className="student-register-form">
// //           <form>
// //             <div className='form-form-name'>Registration for <br/>
// //              Mentorship Program</div>

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

// //            <div className="popup-input-wrapper">
// //              <input
// //                 type="date"
// //                  value={dob}
// //                   onChange={(e) => setDob(e.target.value)}
// //                     required
// //                   placeholder="Select Your Date of Birth"
// //                    />
// //                    </div>


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
// //               <select value={occupation} onChange={(e) => setOccupation(e.target.value)} required>
// //                 <option value="">Select Occupation</option>
// //                 <option value="Student">Student</option>
// //                 <option value="Entrepreneur">Entrepreneur</option>
// //                 <option value="Freelancer">Freelancer</option>
// //               </select>
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <select value={business} onChange={(e) => setBusiness(e.target.value)} required>
// //                 <option value="">Business</option>
// //                 <option value="Yes">Yes</option>
// //                 <option value="No">No</option>
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
// //               <select value={institution} onChange={(e) => setInstitution(e.target.value)} required>
// //                 <option value="">Institution</option>
// //                 <option value="Yes">Yes</option>
// //                 <option value="No">No</option>
// //               </select>
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Institution Name"
// //                 value={institutionName}
// //                 onChange={(e) => setInstitutionName(e.target.value)}
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Institution Address"
// //                 value={institutionaddress}
// //                 onChange={(e) => setInstitutionaddress(e.target.value)}
// //               />
// //             </div>

// //             <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Social Media Post URL"
// //                 value={socialmedia}
// //                 onChange={(e) => setSocialmedia(e.target.value)}
// //               />
// //             </div>
             
// //            <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Question One"
// //                 value={socialmedia}
// //                 onChange={(e) => setQuestionOne(e.target.value)}
// //               />
// //             </div>

// //              <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Answer"
// //                 value={socialmedia}
// //                 onChange={(e) => setAnswerOne(e.target.value)}
// //               />
// //             </div>

// //              <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Question two"
// //                 value={socialmedia}
// //                 onChange={(e) => setQuestionTwo(e.target.value)}
// //               />
// //             </div>

// //              <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your answer"
// //                 value={socialmedia}
// //                 onChange={(e) => setAnswerTwo(e.target.value)}
// //               />
// //             </div>

// //              <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Question three"
// //                 value={socialmedia}
// //                 onChange={(e) => setQuestionThree(e.target.value)}
// //               />
// //             </div>

// //              <div className="popup-input-wrapper">
// //               <input
// //                 type="text"
// //                 placeholder="Enter your answer"
// //                 value={socialmedia}
// //                 onChange={(e) => setAnswerThree(e.target.value)}
// //               />
// //             </div>
            
// //             <button type="submit" className="popup-submit-button">
// //                 Submit
// //               </button>
         
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Studentregister;



// import React, { useState } from 'react';
// import registration from '../assets/registration.png';
// import field from '../assets/field.png';
// import logo from '../assets/Image 1.png';
// import ThankYou from './ThankYou';

// const Studentregister = () => {
//   const [name, setName] = useState('');
//   const [fathername, setFathername] = useState('');
//   const [dob, setDob] = useState('');
//   const [state, setState] = useState('');
//   const [district, setDistrict] = useState('');
//   const [occupation, setOccupation] = useState('');
//   const [business, setBusiness] = useState('');
//   const [businessName, setBusinessName] = useState('');
//   const [businessAddress, setBusinessAddress] = useState('');
//   const [udyogNumber, setUdyogNumber] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [institutionName, setInstitutionName] = useState('');
//   const [institutionaddress, setInstitutionaddress] = useState('');
//   const [socialmedia, setSocialmedia] = useState('');
//   const [questionOne, setQuestionOne] = useState('');
//   const [answerOne, setAnswerOne] = useState('');
//   const [questionTwo, setQuestionTwo] = useState('');
//   const [answerTwo, setAnswerTwo] = useState('');
//   const [questionThree, setQuestionThree] = useState('');
//   const [answerThree, setAnswerThree] = useState('');
//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted');
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
//             width: 786px;
//             height: 1150px;
//             border-radius: 8px;
//             border: 1px solid #ccc;
//             overflow: hidden;
//             margin-top: 40px;
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
//             margin-bottom: 20px;
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

//       <div className="register-banner">
//         <img src={registration} alt="Registration Banner" />
//       </div>

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
//             marginRight: '100px',
//           }}
//         />

//         <div className="field-box">
//           <img src={field} alt="Form Fields" />
//         </div>

//         <div className="student-register-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-form-name">Registration for <br /> Mentorship Program</div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Father's Name" value={fathername} onChange={(e) => setFathername(e.target.value)} required />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
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
//               <select value={occupation} onChange={(e) => setOccupation(e.target.value)} required>
//                 <option value="">Select Occupation</option>
//                 <option value="Student">Student</option>
//                 <option value="Entrepreneur">Entrepreneur</option>
//                 <option value="Freelancer">Freelancer</option>
//               </select>
//             </div>

//             <div className="popup-input-wrapper">
//               <select value={business} onChange={(e) => setBusiness(e.target.value)} required>
//                 <option value="">Business</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Business Address" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Udyog Number" value={udyogNumber} onChange={(e) => setUdyogNumber(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <select value={institution} onChange={(e) => setInstitution(e.target.value)} required>
//                 <option value="">Institution</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Institution Name" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Institution Address" value={institutionaddress} onChange={(e) => setInstitutionaddress(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Social Media Post URL" value={socialmedia} onChange={(e) => setSocialmedia(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Question One" value={questionOne} onChange={(e) => setQuestionOne(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Answer" value={answerOne} onChange={(e) => setAnswerOne(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Question Two" value={questionTwo} onChange={(e) => setQuestionTwo(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Answer" value={answerTwo} onChange={(e) => setAnswerTwo(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Question Three" value={questionThree} onChange={(e) => setQuestionThree(e.target.value)} />
//             </div>

//             <div className="popup-input-wrapper">
//               <input type="text" placeholder="Enter Your Answer" value={answerThree} onChange={(e) => setAnswerThree(e.target.value)} />
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

// export default Studentregister;


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registration from '../assets/registration.png';
import field from '../assets/field.png';
import logo from '../assets/Image 1.png';
import ThankYou from './ThankYou';

const Studentregister = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    name: '',
    fathername: '',
    dob: '',
    state: '',
    district: '',
    occupation: '',
    business: '',
    businessName: '',
    businessAddress: '',
    udyogNumber: '',
    institution: '',
    institutionName: '',
    institutionaddress: '',
    socialmedia: '',
    questionOne: '',
    answerOne: '',
    questionTwo: '',
    answerTwo: '',
    questionThree: '',
    answerThree: '',
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        'http://localhost:5000/api/student/register',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (res.status === 200) {
        toast.success('Registration successful!');
        setShowThankYou(true);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };
  return (
    <>
      <style>{`
        .register-banner img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .register-container {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 20px;
        }

        .field-box {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
        }

        .field-box img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .student-register-form {
          flex: 1;
          min-width: 300px;
          max-width: 550px;
          background: #F7FAFF;
          padding: 30px 20px;
          border-radius: 10px;
          box-shadow: 0 0 44px rgba(0, 0, 0, 0.05);
        }

        .form-form-name {
          color: #F28119;
          font-size: 22px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .popup-input-wrapper {
          margin-bottom: 15px;
        }

        .popup-input-wrapper input,
        .popup-input-wrapper select {
          width: 100%;
          height: 48px;
          padding: 10px 14px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .popup-submit-button {
          width: 100%;
          height: 50px;
          background-color: #F28119;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
        }

        .popup-submit-button:hover {
          background-color: #e16d05;
        }

        @media (max-width: 768px) {
          .register-container {
            flex-direction: column;
            align-items: center;
          }

          .form-form-name {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="register-banner">
        <img src={registration} alt="Registration Banner" />
      </div>

      <div className="register-container">
        <div className="field-box">
          <img src={field} alt="Form Illustration" />
        </div>

        <div className="student-register-form">
          <form onSubmit={handleSubmit}>
            <div className="form-form-name">Registration for Mentorship Program</div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="mobileNumber"
                placeholder="Enter Your Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="fathername"
                placeholder="Enter Father's Name"
                value={formData.fathername}
                onChange={handleChange}
                required
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="popup-input-wrapper">
              <select name="state" value={formData.state} onChange={handleChange} required>
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <select name="district" value={formData.district} onChange={handleChange} required>
                <option value="">Select District</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <select name="occupation" value={formData.occupation} onChange={handleChange} required>
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <select name="business" value={formData.business} onChange={handleChange} required>
                <option value="">Business</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="businessAddress"
                placeholder="Business Address"
                value={formData.businessAddress}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="udyogNumber"
                placeholder="Udyog Number"
                value={formData.udyogNumber}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <select name="institution" value={formData.institution} onChange={handleChange} required>
                <option value="">Institution</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="institutionName"
                placeholder="Institution Name"
                value={formData.institutionName}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="institutionaddress"
                placeholder="Institution Address"
                value={formData.institutionaddress}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="socialmedia"
                placeholder="Social Media Post URL"
                value={formData.socialmedia}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="questionOne"
                placeholder="Question One"
                value={formData.questionOne}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="answerOne"
                placeholder="Answer One"
                value={formData.answerOne}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="questionTwo"
                placeholder="Question Two"
                value={formData.questionTwo}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="answerTwo"
                placeholder="Answer Two"
                value={formData.answerTwo}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="questionThree"
                placeholder="Question Three"
                value={formData.questionThree}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-wrapper">
              <input
                type="text"
                name="answerThree"
                placeholder="Answer Three"
                value={formData.answerThree}
                onChange={handleChange}
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

export default Studentregister;
