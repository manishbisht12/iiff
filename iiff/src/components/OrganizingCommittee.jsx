import React from "react";
import cardbg from "../assets/homeCardBg.jpg";
import memberpic from "../assets/196887c706261857756fda657ef6a4566372c537.jpg";
import divider from "../assets/image 50.png";

const OrganizingCommittee = () => {
  const leftColumnMembers = [
    "DR. ANURADHA SUDAN",
    "DR. GULSHAN JAWA",
    "DR. KAMLESH S. MAHAJAN",
    "DR. KRITI GUPTA",
    "DR. NARINDER SINGH",
    "DR. NEERU ARORA",
    "DR. REKHA KAUSHIK",
    "DR. RUPINDER PAL SINGH",
    "DR. SIMRAN MALHOTRA",
    "DR. SONIA GUPTA",
    "DR. SUNITA B. VIDYARTHI",
    "DR. THILAGAVATHI T",
  ];

  const rightColumnMembers = [
    "DR. SAKSHI BHARADWAJ",
    "DR. PRINCI GUPTA",
    "MR. AMIT KUMAR",
    "MR. HARBHAJ SINGH SANDH",
    "MR. NAVDEEP BANSAL",
    "MR. PANKAJ GARG",
    "MR. SHRIJEET SINGH",
    "MR. SUMIT GOYAL",
    "MR. VIKAS GARG",
    "MS. AMITA SHAKYA",
    "MS. KANISH MALHOTRA",
    "MS. SONIA DEVGAN",
  ];

  return (
    <div className="org-container">
      <style jsx>{`
        .org-container {
          background-color: #fff;
          padding: 64px 16px;
          font-family: "Poppins", sans-serif;
        }

        .org-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .org-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .org-header h1 {
          font-size: 40px;
          font-weight: bold;
          color: #000;
          line-height: 1.3;
        }

        .org-header img {
          margin-top: 20px;
        }

        .org-content {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .org-columns {
          display: flex;
          gap: 20px;
          flex: 1;
          min-width: 0;
        }

        .org-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .org-member-card {
          background-image: url(${cardbg});
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          height: 60px;
          border: 1px solid #e0e0e0;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .org-member-card p {
          color: #e67e22;
          font-weight: bold;
          font-size: 18px;
          line-height: 1.3;
          margin: 0;
        }

        .org-right {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .org-right h2 {
          font-size: 28px;
          font-weight: bold;
          color: #000;
          margin: 0;
        }

        .expo-coordinator-card {
          background-image: url(${cardbg});
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          height: 60px;
          border: 1px solid #e0e0e0;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .expo-coordinator-card p {
          color: #e67e22;
          font-weight: bold;
          font-size: 18px;
          margin: 0;
          text-align: center;
        }

        .expo-image {
          background-image: url(${memberpic});
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 381px;
          border-radius: 8px;
        }

        @media (max-width: 1024px) {
          .org-content {
            flex-direction: column;
          }

          .org-columns,
          .org-right {
            width: 100%;
          }

          .expo-image {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .org-header h1 {
            font-size: 28px;
          }

          .org-member-card p,
          .expo-coordinator-card p {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="org-wrapper">
        {/* Header */}
        <div className="org-header">
          <h1>
            ORGANIZING COMMITTEE MEMBERS
            <br />
            (IIFF 2025)
          </h1>
          <img src={divider} alt="divider" />
        </div>

        {/* Main Content */}
        <div className="org-content">
          {/* Left & Right Columns */}
          <div className="org-columns">
            <div className="org-column">
              {leftColumnMembers.map((member, index) => (
                <div key={index} className="org-member-card">
                  <p>{member}</p>
                </div>
              ))}
            </div>

            <div className="org-column">
              {rightColumnMembers.map((member, index) => (
                <div key={index} className="org-member-card">
                  <p>{member}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="org-right">
            <h2>EXPO COORDINATOR</h2>
            <div className="expo-coordinator-card">
              <p>DR. SUMEET GUPTA</p>
            </div>
            <div className="expo-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
