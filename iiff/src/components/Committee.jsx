// import React from 'react';

// import cardbg from "../assets/homeCardBg.jpg";
// import divider from "../assets/image 50.png";

// const Committee = () => {
//   const mainMembers = [
//     [
//       {
//         name: "PROF. GANAPATI D. YADAV",
//         description: "SHANTI SWARUP BHATNAGAR FELLOW AND NATIONAL SCIENCE CHAIR, EMINENT PROFESSOR OF EMINENCE, FORMER VICE CHANCELLOR, INSTITUTE OF CHEMICAL TECHNOLOGY (MUMBAI)"
//       },
//       {
//         name: "DR. SRIDEVI ANNAPURNA SINGH",
//         position: "- DIRECTOR",
//         organization: "CSIR-CENTRAL FOOD TECHNOLOGICAL RESEARCH INSTITUTE (MYSURU)"
//       }
//     ],
//     [
//       {
//         name: "DR. CHEERSHING",
//         position: "- DIRECTOR",
//         organization: "CENTRAL INSTITUTE OF FISHERIES TECHNOLOGY (KOCHI)"
//       },
//       {
//         name: "DR. NACHIKET KOTWALWALALE",
//         position: "- SCIENTIST",
//         organization: "HARVESTING TECHNOLOGIES (ICAR-CENTRAL INSTITUTE OF POST-HARVEST ENGINEERING AND TECHNOLOGY) (LUDHIANA)"
//       }
//     ],
//     [
//       {
//         name: "DR. DINESH KUMAR",
//         position: "- DIRECTOR",
//         organization: "FOOD SAFETY AND STANDARDS AUTHORITY OF INDIA (FSSAI) (NEW DELHI)"
//       },
//       {
//         name: "DR. SANGEETA SHUKLA",
//         position: "- VICE CHANCELLOR",
//         organization: "(CHAUDHARY BANSI LAL UNIVERSITY, HARYANA)"
//       }
//     ],
//     [
//       {
//         name: "DR. S. K. JUKALKAR",
//         position: "- DEPUTY DIRECTOR GENERAL",
//         organization: "(ICAR, NEW DELHI)"
//       },
//       {
//         name: "DR. C. ANANDHARAMAKRISHNAN",
//         position: "- DIRECTOR",
//         organization: "INDIAN INSTITUTE OF PACKAGING (MUMBAI)"
//       }
//     ],
//     [
//       {
//         name: "DR. D. C. MITTAL",
//         position: "- HEAD (DEPARTMENT OF PROCESSING AND FOOD ENGINEERING)",
//         organization: "ICAR-CENTRAL INSTITUTE FOR INTERDISCIPLINARY SCIENCE AND TECHNOLOGY (THIRUVANANTHAPURAM)"
//       },
//       {
//         name: "DR. SANJEEV KUMAR VASHISHT",
//         position: "- SCIENTIST (FST)",
//         organization: "NATIONAL INSTITUTE OF FOOD TECHNOLOGY, ENTREPRENEURSHIP AND MANAGEMENT (KUNDLI)"
//       }
//     ]
//   ];

//   const teamMembers = [
//     {
//       title: "PROGRAM DIRECTOR",
//       name: "MR. SUMEET GUPTA"
//     },
//     {
//       title: "CHIEF PROGRAM COORDINATOR",
//       name: "MR. DHOOP SINGH"
//     },
//     {
//       title: "PROGRAM COORDINATOR",
//       name: "DR. AJAY SHARMA"
//     },
//     {
//       title: "ORGANISER TEAM COMMITTEE",
//       name: "DR. AJAY SHARMA"
//     }
//   ];

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: '0px 141px',
//     gap: '10px',
//     width: '1600px',
//     height: '1210px',
//     background: '#FFFFFF',
//     flex: 'none',
//     order: 3,
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const mainContentStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '0px',
//     gap: '40px',
//     width: '1320px',
//     height: '1210px',
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
//     height: '992px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const rowStyle = (height, paddingTop = '0px') => ({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: `${paddingTop} 20px 0px`,
//     gap: '20px',
//     width: '1320px',
//     height: `${height}px`,
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   });

//   const cardStyle = (height, width = '630px') => ({
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: '25px',
//     gap: '20px',
//     width: width,
//     height: `${height}px`,
//     backgroundImage: `url(${cardbg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     border: '1px solid #E6E6E6',
//     borderRadius: '10px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 1
//   });

//   const teamCardStyle = (height) => ({
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: '25px 20px',
//     gap: '20px',
//     width: '305px',
//     height: `${height}px`,
//     background: 'linear-gradient(0deg, #F3F7FF, #F3F7FF)',
//     backgroundImage: `url(${cardbg})`,
//     backgroundBlendMode: 'multiply',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     border: '1px solid #E6E6E6',
//     borderRadius: '10px',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 1
//   });

//   const cardInnerStyle = (height) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: '0px',
//     gap: '5px',
//     width: '580px',
//     height: `${height}px`,
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   });

//   const teamCardInnerStyle = (height, alignItems = 'center', width = '255px') => ({
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: alignItems,
//     padding: '0px',
//     gap: '5px',
//     width: width,
//     height: `${height}px`,
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   });

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

//   const positionStyle = {
//     fontFamily: "'Poppins', sans-serif",
//     fontStyle: 'normal',
//     fontWeight: 600,
//     fontSize: '16px',
//     lineHeight: '23px',
//     color: '#000000',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const organizationStyle = {
//     fontFamily: "'Poppins', sans-serif",
//     fontStyle: 'normal',
//     fontWeight: 400,
//     fontSize: '16px',
//     lineHeight: '23px',
//     color: '#929292',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const teamTitleStyle = {
//     fontFamily: "'Poppins', sans-serif",
//     fontStyle: 'normal',
//     fontWeight: 700,
//     fontSize: '19px',
//     lineHeight: '25px',
//     textAlign: 'center',
//     color: '#F28119',
//     textTransform: 'uppercase',
//     flex: 'none',
//     flexGrow: 0
//   };

//   const teamNameStyle = {
//     fontFamily: "'Poppins', sans-serif",
//     fontStyle: 'normal',
//     fontWeight: 400,
//     fontSize: '16px',
//     lineHeight: '23px',
//     textAlign: 'center',
//     color: '#000000',
//     flex: 'none',
//     alignSelf: 'stretch',
//     flexGrow: 0
//   };

//   const getRowHeight = (index) => {
//     if (index === 0) return 154;
//     if (index === 1 || index === 4) return 159;
//     if (index === 2 || index === 3) return 136;
//     return 148;
//   };

//   const getCardHeight = (rowIndex, cardIndex) => {
//     if (rowIndex === 0) {
//       return cardIndex === 0 ? 154 : 154;
//     }
//     if (rowIndex === 1 || rowIndex === 4) return 159;
//     if (rowIndex === 2 || rowIndex === 3) return 136;
//     return 148;
//   };

//   const getCardInnerHeight = (rowIndex, cardIndex) => {
//     if (rowIndex === 0) {
//       return cardIndex === 0 ? 104 : 86;
//     }
//     if (rowIndex === 1) return cardIndex === 0 ? 86 : 109;
//     if (rowIndex === 2 || rowIndex === 3) return 86;
//     if (rowIndex === 4) return 109;
//     return 86;
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={mainContentStyle}>
//         <div style={headerStyle}>
//           <h1 style={titleStyle}>
//             ORGANIZING COMMITTEE MEMBERS (IIFF 2025)
//           </h1>
//           <div style={dividerStyle}></div>
//         </div>
        
//         <div style={membersContainerStyle}>
//           {mainMembers.map((row, rowIndex) => (
//             <div key={rowIndex} style={rowStyle(getRowHeight(rowIndex))}>
//               {row.map((member, cardIndex) => (
//                 <div key={cardIndex} style={cardStyle(getCardHeight(rowIndex, cardIndex))}>
//                   <div style={cardInnerStyle(getCardInnerHeight(rowIndex, cardIndex))}>
//                     <div style={nameStyle}>
//                       {member.name}
//                     </div>
//                     {member.position && (
//                       <div style={positionStyle}>
//                         {member.position}
//                       </div>
//                     )}
//                     {member.organization && (
//                       <div style={organizationStyle}>
//                         {member.organization}
//                       </div>
//                     )}
//                     {member.description && (
//                       <div style={organizationStyle}>
//                         {member.description}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
          
//           <div style={rowStyle(148, '10px')}>
//             {teamMembers.map((member, index) => (
//               <div key={index} style={teamCardStyle(138)}>
//                 <div style={teamCardInnerStyle(
//                   index === 0 ? 57 : index === 1 ? 88 : index === 2 ? 53 : 78,
//                   'center',
//                   index === 3 ? '265px' : '255px'
//                 )}>
//                   <div style={{
//                     ...teamTitleStyle,
//                     width: index === 3 ? '265px' : index === 1 ? '255px' : index === 0 ? '197px' : '245px',
//                     height: index === 1 ? '60px' : index === 3 ? '50px' : index === 0 ? '29px' : '25px',
//                     lineHeight: index === 1 ? '30px' : index === 0 ? '29px' : '25px'
//                   }}>
//                     {member.title}
//                   </div>
//                   <div style={{
//                     ...teamNameStyle,
//                     width: index === 3 ? '265px' : '255px'
//                   }}>
//                     {member.name}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Committee;


import React from "react";
import cardbg from "../assets/homeCardBg.jpg"; // Card background image
import divider from "../assets/image 50.png"; // Divider image

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

  // Container for entire component
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#fff",
  };

  // Header styles
  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const titleStyle = {
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: 1.2,
    marginBottom: "20px",
    color: "#000",
  };

  // Divider styled with your divider image
  const dividerStyle = {
    width: "200px",
    height: "18px",
    margin: "0 auto",
    backgroundImage: `url(${divider})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  // Flex container for members with wrap for responsiveness
  const membersContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  // Each column of members
  const columnStyle = {
    flex: "1 1 350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    minWidth: "300px",
  };

  // Card style applying your cardbg image as background
  const cardStyle = {
    backgroundImage: `url(${cardbg})`, // <-- Card background image here
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
        <div style={dividerStyle} />
      </header>

      <div style={membersContainerStyle}>
        <div style={columnStyle}>
          {leftColumnMembers.map((member, i) => (
            <div key={i} style={cardStyle}>
              {member.name} ({member.location})
            </div>
          ))}
        </div>

        <div style={columnStyle}>
          {rightColumnMembers.map((member, i) => (
            <div key={i} style={cardStyle}>
              {member.name} ({member.location})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutreachCommittee;
