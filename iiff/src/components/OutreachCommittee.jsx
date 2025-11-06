// import React from 'react';
// import cardbg from "../assets/homeCardBg.jpg";
// import divider from "../assets/image 50.png";


// const OutreachCommittee = () => {
//   const leftColumnMembers = [
//     { name: "DR. NAMITA KALITA", location: "ASSAM" },
//     { name: "MR. AMAN RAJ", location: "BIHAR" },
//     { name: "MR. NANDKUMAR PALKAR", location: "MAHARASHTRA" },
//     { name: "DR. RAVNEET", location: "UTTARAKHAND" },
//     { name: "MR. ARUN GARG", location: "PUNJAB" },
//     { name: "DR. POOJA TULI", location: "JAMMU AND HIMACHAL" },
//     { name: "DR. MANJEET KOUR ARORA", location: "MADHYA PRADESH" }
//   ];

//   const rightColumnMembers = [
//     { name: "DR. KUMAR NAIKKH", location: "BELAGAVI, KARNATAKA" },
//     { name: "DR. DEEPAK BANSAL", location: "PILANI, RAJASTHAN" },
//     { name: "DR. PARVEEN PATIL", location: "MUMBAI, MAHARASHTRA" },
//     { name: "DR. SHIV PRATAP RAGHUVANSHI", location: "NEW DELHI" },
//     { name: "DR. REENU YADAV", location: "BHOPAL, MADHYA PRADESH" },
//     { name: "DR. M. BOOPALAN", location: "KANCHIPURAM, KERALA" }
//   ];

//   const cardStyle = {
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: '15px',
//     gap: '20px',
//     width: '650px',
//     height: '60px',
//     backgroundImage: `url(${cardbg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     border: '1px solid #E6E6E6',
//     borderRadius: '10px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const nameStyle = {
//     fontFamily: "'Poppins', sans-serif",
//     fontStyle: 'normal',
//     fontWeight: 700,
//     fontSize: '20px',
//     lineHeight: '30px',
//     textAlign: 'center',
//     color: '#F28119',
//     flex: 'none',
//     flexGrow: 0
//   };

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: '70px 141px',
//     gap: '10px',
//     width: '1600px',
//     height: '888px',
//     background: '#FFFFFF'
//   };

//   const mainContentStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '0px',
//     gap: '40px',
//     width: '1320px',
//     height: '748px',
//     flex: 'none',
//     flexGrow: 0
//   };

//   const headerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '0px',
//     gap: '20px',
//     width: '1320px',
//     height: '178px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const titleStyle = {
//     width: '1320px',
//     height: '140px',
//     fontFamily: "'Poppins', sans-serif",
//     fontStyle: 'normal',
//     fontWeight: 700,
//     fontSize: '55px',
//     lineHeight: '70px',
//     textAlign: 'center',
//     color: '#000000',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const dividerStyle = {
//     width: '200px',
//     height: '18px',
//     backgroundImage: `url(${divider})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     flex: 'none',
//     flexGrow: 0
//   };

//   const membersContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: '0px',
//     gap: '20px',
//     width: '1320px',
//     height: '530px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const membersRowStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: '0px',
//     gap: '10px',
//     width: '1320px',
//     height: '480px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const membersInnerStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: '0px',
//     gap: '20px',
//     width: '1320px',
//     height: '480px',
//     flex: 'none',
//     flexGrow: 1
//   };

//   const columnStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: '0px',
//     gap: '10px',
//     width: '650px',
//     flex: 'none',
//     flexGrow: 1
//   };

//   const cardInnerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: '0px',
//     gap: '5px',
//     width: '620px',
//     height: '30px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={mainContentStyle}>
//         <div style={headerStyle}>
//           <h1 style={titleStyle}>
//             NATIONAL OUTREACH COMMITTEE MEMBERS (IIFF 2025)
//           </h1>
//           <div style={dividerStyle}></div>
//         </div>
        
//         <div style={membersContainerStyle}>
//           <div style={membersRowStyle}>
//             <div style={membersInnerStyle}>
//               <div style={columnStyle}>
//                 {leftColumnMembers.map((member, index) => (
//                   <div key={index} style={cardStyle}>
//                     <div style={cardInnerStyle}>
//                       <div style={nameStyle}>
//                         {member.name} ({member.location})
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div style={columnStyle}>
//                 {rightColumnMembers.map((member, index) => (
//                   <div key={index} style={cardStyle}>
//                     <div style={cardInnerStyle}>
//                       <div style={nameStyle}>
//                         {member.name} ({member.location})
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OutreachCommittee;

import React from "react";
import cardbg from "../assets/homeCardBg.jpg";
import divider from "../assets/image 50.png";

const OutreachCommittee = () => {
  const leftColumnMembers = [
    { name: "DR. NAMITA KALITA", location: "ASSAM" },
    { name: "MR. AMAN RAJ", location: "BIHAR" },
    { name: "MR. NANDKUMAR PALKAR", location: "MAHARASHTRA" },
    { name: "DR. RAVNEET", location: "UTTARAKHAND" },
    { name: "MR. ARUN GARG", location: "PUNJAB" },
    { name: "DR. POOJA TULI", location: "JAMMU AND HIMACHAL" },
    { name: "DR. MANJEET KOUR ARORA", location: "MADHYA PRADESH" },
  ];

  const rightColumnMembers = [
    { name: "DR. KUMAR NAIKKH", location: "BELAGAVI, KARNATAKA" },
    { name: "DR. DEEPAK BANSAL", location: "PILANI, RAJASTHAN" },
    { name: "DR. PARVEEN PATIL", location: "MUMBAI, MAHARASHTRA" },
    { name: "DR. SHIV PRATAP RAGHUVANSHI", location: "NEW DELHI" },
    { name: "DR. REENU YADAV", location: "BHOPAL, MADHYA PRADESH" },
    { name: "DR. M. BOOPALAN", location: "KANCHIPURAM, KERALA" },
  ];

  // Styles

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 20px",
    backgroundColor: "#fff",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const titleStyle = {
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: 1.2,
    margin: "0 0 20px 0",
    color: "#000",
  };

  const dividerStyle = {
    width: "200px",
    height: "18px",
    margin: "0 auto",
    backgroundImage: `url(${divider})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  const membersContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const columnStyle = {
    flex: "1 1 350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    minWidth: "300px",
  };

  const cardStyle = {
    backgroundImage: `url(${cardbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid #E6E6E6",
    borderRadius: "10px",
    padding: "15px 20px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    color: "#F28119",
    fontWeight: 700,
    fontSize: "18px",
    textAlign: "center",
    wordWrap: "break-word",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          NATIONAL OUTREACH COMMITTEE MEMBERS (IIFF 2025)
        </h1>
        <div style={dividerStyle}></div>
      </header>

      <div style={membersContainerStyle}>
        <div style={columnStyle}>
          {leftColumnMembers.map((member, index) => (
            <div key={index} style={cardStyle}>
              {member.name} ({member.location})
            </div>
          ))}
        </div>

        <div style={columnStyle}>
          {rightColumnMembers.map((member, index) => (
            <div key={index} style={cardStyle}>
              {member.name} ({member.location})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutreachCommittee;
