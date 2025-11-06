import React from 'react';
import cardbg from "../assets/homeCardBg.jpg";
import divider from "../assets/image 50.png";

const ExpoCommitteeMembers = () => {
  const committeeData = {
    title: "EXPO COMMITTEE MEMBERS",
    year: "IIFF 2025",
    columns: [
      ["MR. RAHUL SHARMA", "MR. AMIT PATHEJA", "MR. KAMALJEET SINGH"],
      ["MS. MANPREET KAUR", "MR. SUNIL KUMAR", "MR. SUKHRAJ SINGH SANDHU"],
      ["MR. PRADEEP SHARMA", "MS. MEENA GOYAT", "MR. VARUN KUMAR"],
      ["MR. YOGENDER KUMAR JOSHI", "MR. GAGAN DHIMAN"]
    ]
  };

  const styles = {
    container: {
      backgroundColor: '#FFFFFF',
      padding: '64px 16px',
      fontFamily: 'Poppins, sans-serif',
    },
    innerContainer: {
      maxWidth: '1320px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    },
    headerSection: {
      textAlign: 'center',
    },
    title: {
      fontWeight: '700',
      fontSize: '55px',
      lineHeight: '70px',
      color: '#000000',
      marginBottom: '20px',
    },
    dividerImage: {
      width: '200px',
      height: '18px',
      objectFit: 'contain',
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px',
      width: '100%',
    },
    column: {
      flex: '1',
      minWidth: '220px',
      maxWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    memberCard: {
      backgroundImage: `url(${cardbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid #E6E6E6',
      borderRadius: '10px',
      height: '60px',
      padding: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    memberName: {
      fontWeight: '700',
      fontSize: '18px',
      color: '#F28119',
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <h1 style={styles.title}>
            {committeeData.title}<br />
            ({committeeData.year})
          </h1>
          <img src={divider} alt="divider" style={styles.dividerImage} />
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {committeeData.columns.map((column, colIndex) => (
            <div key={colIndex} style={styles.column}>
              {column.map((member, index) => (
                <div key={index} style={styles.memberCard}>
                  <p style={styles.memberName}>{member}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpoCommitteeMembers;
