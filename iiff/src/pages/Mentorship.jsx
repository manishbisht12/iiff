// // import React from 'react'

// // const Mentorship = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default Mentorship


// // import React, { useState } from 'react';
// // import { X } from 'lucide-react';

// // const RegisterPopup = () => {
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [isOpen, setIsOpen] = useState(true);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Mobile:', mobileNumber, 'Email:', email);
// //     // Handle form submission logic here
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //       {/* Main popup container */}
// //       <div 
// //         className="bg-white rounded-[20px] shadow-lg"
// //         style={{
// //           width: '700px',
// //           height: '485px',
// //           position: 'absolute',
// //           left: 'calc(50% - 700px/2 - 13px)',
// //           top: 'calc(50% - 485px/2 - 236px)',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           justifyContent: 'center',
// //           alignItems: 'flex-start',
// //           padding: '0px',
// //           gap: '10px'
// //         }}
// //       >
// //         {/* Frame 48095966 */}
// //         <div 
// //           style={{
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             padding: '0px',
// //             gap: '20px',
// //             width: '700px',
// //             height: '485px',
// //             flex: 'none',
// //             order: 0,
// //             flexGrow: 0
// //           }}
// //         >
// //           {/* Header Frame 48095960 */}
// //           <div 
// //             style={{
// //               display: 'flex',
// //               flexDirection: 'row',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               padding: '25px 40px',
// //               gap: '10px',
// //               width: '700px',
// //               height: '95px',
// //               background: 'rgba(227, 227, 227, 0.62)',
// //               flex: 'none',
// //               order: 0,
// //               alignSelf: 'stretch',
// //               flexGrow: 0
// //             }}
// //           >
// //             {/* Register title */}
// //             <h2 
// //               style={{
// //                 margin: '0 auto',
// //                 width: '146px',
// //                 height: '45px',
// //                 fontFamily: 'Poppins, sans-serif',
// //                 fontStyle: 'normal',
// //                 fontWeight: 600,
// //                 fontSize: '35px',
// //                 lineHeight: '45px',
// //                 color: '#000000',
// //                 flex: 'none',
// //                 order: 0,
// //                 flexGrow: 0
// //               }}
// //             >
// //               Register
// //             </h2>

// //             {/* Close button Frame 48095959 */}
// //             <div 
// //               style={{
// //                 display: 'flex',
// //                 flexDirection: 'row',
// //                 alignItems: 'flex-start',
// //                 padding: '0px',
// //                 gap: '10px',
// //                 margin: '0 auto',
// //                 width: '40px',
// //                 height: '40px',
// //                 flex: 'none',
// //                 order: 1,
// //                 flexGrow: 0
// //               }}
// //             >
// //               {/* Frame 48095961 */}
// //               <div 
// //                 className="relative cursor-pointer"
// //                 onClick={() => setIsOpen(false)}
// //                 style={{
// //                   width: '40px',
// //                   height: '40px',
// //                   flex: 'none',
// //                   order: 0,
// //                   flexGrow: 0
// //                 }}
// //               >
// //                 {/* Ellipse 4 */}
// //                 <div 
// //                   style={{
// //                     boxSizing: 'border-box',
// //                     position: 'absolute',
// //                     width: '40px',
// //                     height: '40px',
// //                     left: '0px',
// //                     top: '0px',
// //                     background: '#FFFFFF',
// //                     border: '1px solid rgba(113, 128, 150, 0.5)',
// //                     borderRadius: '50%'
// //                   }}
// //                 />
// //                 {/* X Vector */}
// //                 <div 
// //                   style={{
// //                     position: 'absolute',
// //                     left: '30%',
// //                     right: '30%',
// //                     top: '30%',
// //                     bottom: '30%',
// //                     background: '#718096',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center'
// //                   }}
// //                 >
// //                   <X size={16} color="#718096" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Form Frame 37 */}
// //           <div 
// //             style={{
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'flex-start',
// //               padding: '40px',
// //               gap: '40px',
// //               width: '700px',
// //               height: '370px',
// //               flex: 'none',
// //               order: 1,
// //               alignSelf: 'stretch',
// //               flexGrow: 0
// //             }}
// //           >
// //             {/* Mobile number input Frame 38 */}
// //             <div 
// //               style={{
// //                 boxSizing: 'border-box',
// //                 display: 'flex',
// //                 flexDirection: 'row',
// //                 alignItems: 'center',
// //                 padding: '14px',
// //                 gap: '19.38px',
// //                 width: '620px',
// //                 height: '70px',
// //                 background: '#FFFFFF',
// //                 border: '1px solid rgba(113, 128, 150, 0.5)',
// //                 boxShadow: '0px 0px 44px rgba(0, 0, 0, 0.08)',
// //                 borderRadius: '10px',
// //                 flex: 'none',
// //                 order: 0,
// //                 alignSelf: 'stretch',
// //                 flexGrow: 0
// //               }}
// //             >
// //               <input
// //                 type="tel"
// //                 placeholder="Enter mobile number"
// //                 value={mobileNumber}
// //                 onChange={(e) => setMobileNumber(e.target.value)}
// //                 style={{
// //                   width: '210px',
// //                   height: '20px',
// //                   fontFamily: 'Poppins, sans-serif',
// //                   fontStyle: 'normal',
// //                   fontWeight: 400,
// //                   fontSize: '20px',
// //                   lineHeight: '100%',
// //                   color: '#778196',
// //                   border: 'none',
// //                   outline: 'none',
// //                   background: 'transparent',
// //                   flex: 'none',
// //                   order: 0,
// //                   flexGrow: 0
// //                 }}
// //               />
// //             </div>

// //             {/* Email input Frame 39 */}
// //             <div 
// //               style={{
// //                 boxSizing: 'border-box',
// //                 display: 'flex',
// //                 flexDirection: 'row',
// //                 alignItems: 'center',
// //                 padding: '14px',
// //                 gap: '19.38px',
// //                 width: '620px',
// //                 height: '70px',
// //                 background: '#FFFFFF',
// //                 border: '1px solid rgba(113, 128, 150, 0.5)',
// //                 boxShadow: '0px 0px 44px rgba(0, 0, 0, 0.08)',
// //                 borderRadius: '10px',
// //                 flex: 'none',
// //                 order: 1,
// //                 alignSelf: 'stretch',
// //                 flexGrow: 0
// //               }}
// //             >
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 style={{
// //                   width: '162px',
// //                   height: '20px',
// //                   fontFamily: 'Poppins, sans-serif',
// //                   fontStyle: 'normal',
// //                   fontWeight: 400,
// //                   fontSize: '20px',
// //                   lineHeight: '100%',
// //                   color: '#778196',
// //                   border: 'none',
// //                   outline: 'none',
// //                   background: 'transparent',
// //                   flex: 'none',
// //                   order: 0,
// //                   flexGrow: 0
// //                 }}
// //               />
// //             </div>

// //             {/* Submit button */}
// //             <div
// //               onClick={handleSubmit}
// //               style={{
// //                 boxSizing: 'border-box',
// //                 display: 'flex',
// //                 flexDirection: 'row',
// //                 justifyContent: 'center',
// //                 alignItems: 'center',
// //                 padding: '14px',
// //                 gap: '10px',
// //                 width: '620px',
// //                 height: '70px',
// //                 background: '#F28119',
// //                 border: '1px solid #F28119',
// //                 borderRadius: '0px',
// //                 flex: 'none',
// //                 order: 2,
// //                 alignSelf: 'stretch',
// //                 flexGrow: 0,
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               <span 
// //                 style={{
// //                   width: '76px',
// //                   height: '30px',
// //                   fontFamily: 'Poppins, sans-serif',
// //                   fontStyle: 'normal',
// //                   fontWeight: 700,
// //                   fontSize: '20px',
// //                   lineHeight: '30px',
// //                   textTransform: 'uppercase',
// //                   color: '#FFFFFF',
// //                   flex: 'none',
// //                   order: 0,
// //                   flexGrow: 0
// //                 }}
// //               >
// //                 Submit
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPopup;

// import React, { useState } from 'react';
// import RegisterPopup from '../RegisterPopup'; // Adjust path if needed

// const Mentorship = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setShowPopup(true)}
//         style={{
//           padding: '10px 20px',
//           background: '#F28119',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '16px',
//           cursor: 'pointer',
//         }}
//       >
//         Register Now
//       </button>

//       {showPopup && <RegisterPopup onClose={() => setShowPopup(false)} />}
//     </div>  
//   );
// };

// export default Mentorship;
