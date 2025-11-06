// import React, { useState, useEffect } from 'react';

// const ExhibitorList = () => {
//   const [exhibitors, setExhibitors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchExhibitors();
//   }, []);

//   const fetchExhibitors = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await fetch("http://localhost:5000/api/register-stall");
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log("Exhibitors data:", data);
      
//       const exhibitorData = data.stalls || data.exhibitors || data.data || data || [];
//       setExhibitors(Array.isArray(exhibitorData) ? exhibitorData : []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching exhibitors:", error);
//       setError(error.message || "Failed to fetch exhibitors");
//       setLoading(false);
//     }
//   };

//   const filteredExhibitors = exhibitors.filter((exhibitor) => {
//     const searchLower = searchTerm.toLowerCase();
//     return (
//       exhibitor.name?.toLowerCase().includes(searchLower) ||
//       exhibitor.email?.toLowerCase().includes(searchLower) ||
//       exhibitor.mobile?.includes(searchTerm) ||
//       exhibitor.packageTitle?.toLowerCase().includes(searchLower)
//     );
//   });

//   return (
//     <>
//       <style>{`
//         .exhibitor-container {
//           min-height: 100vh;
//           padding: 40px 20px;
//           max-width: 1400px;
//           margin: 0 auto;
//           background-color: #f4f7fb;
//         }

//         .exhibitor-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 30px;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .exhibitor-title {
//           font-size: 28px;
//           font-weight: 700;
//           color: #0f172a;
//         }

//         .exhibitor-actions {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//         }

//         .exhibitor-search {
//           padding: 10px 16px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           font-size: 14px;
//           min-width: 250px;
//           outline: none;
//         }

//         .exhibitor-refresh-btn {
//           padding: 10px 20px;
//           background-color: #5843f5;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .exhibitor-refresh-btn:hover {
//           background-color: #4635d9;
//         }

//         .exhibitor-loading {
//           text-align: center;
//           padding: 60px 20px;
//           color: #6b7280;
//           font-size: 18px;
//         }

//         .exhibitor-error {
//           text-align: center;
//           padding: 60px 20px;
//           color: #ef4444;
//         }

//         .exhibitor-error h3 {
//           margin-bottom: 10px;
//         }

//         .exhibitor-retry-btn {
//           margin-top: 20px;
//           padding: 10px 20px;
//           background-color: #f97316;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//         }

//         .exhibitor-empty {
//           text-align: center;
//           padding: 60px 20px;
//           color: #6b7280;
//         }

//         .exhibitor-empty h3 {
//           font-size: 20px;
//           margin-bottom: 10px;
//           color: #0f172a;
//         }

//         .exhibitor-table-wrapper {
//           background-color: white;
//           border-radius: 12px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//           overflow: hidden;
//         }

//         .exhibitor-table-scroll {
//           overflow-x: auto;
//         }

//         .exhibitor-table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         .exhibitor-table thead {
//           background-color: #f9fafb;
//           border-bottom: 2px solid #e5e7eb;
//         }

//         .exhibitor-table th {
//           padding: 16px;
//           text-align: left;
//           font-weight: 600;
//           color: #374151;
//           font-size: 14px;
//         }

//         .exhibitor-table tbody tr {
//           border-bottom: 1px solid #e5e7eb;
//           transition: background-color 0.2s;
//         }

//         .exhibitor-table tbody tr:hover {
//           background-color: #f9fafb;
//         }

//         .exhibitor-table td {
//           padding: 16px;
//           font-size: 14px;
//         }

//         .exhibitor-name {
//           color: #111827;
//           font-weight: 500;
//         }

//         .exhibitor-text {
//           color: #6b7280;
//         }

//         .exhibitor-package {
//           display: inline-block;
//           padding: 4px 12px;
//           background-color: #fef3c7;
//           color: #92400e;
//           border-radius: 6px;
//           font-size: 12px;
//           font-weight: 600;
//         }

//         .exhibitor-stall {
//           color: #f97316;
//           font-weight: 600;
//         }

//         .exhibitor-center {
//           text-align: center;
//         }

//         .exhibitor-footer {
//           padding: 16px 24px;
//           border-top: 1px solid #e5e7eb;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           background-color: #f9fafb;
//         }

//         .exhibitor-footer-text {
//           font-size: 14px;
//           color: #6b7280;
//         }
//       `}</style>

//       <div className="exhibitor-container">
//         <div className="exhibitor-header">
//           <h1 className="exhibitor-title">Exhibitor List</h1>
//           <div className="exhibitor-actions">
//             <input
//               type="text"
//               placeholder="Search by name, email, mobile..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="exhibitor-search"
//             />
//             <button onClick={fetchExhibitors} className="exhibitor-refresh-btn">
//               Refresh
//             </button>
//           </div>
//         </div>

//         {loading ? (
//           <div className="exhibitor-loading">
//             Loading exhibitors...
//           </div>
//         ) : error ? (
//           <div className="exhibitor-error">
//             <h3>Error loading exhibitors</h3>
//             <p>{error}</p>
//             <button onClick={fetchExhibitors} className="exhibitor-retry-btn">
//               Retry
//             </button>
//           </div>
//         ) : filteredExhibitors.length === 0 ? (
//           <div className="exhibitor-empty">
//             <h3>No Exhibitors Found</h3>
//             <p>
//               {searchTerm
//                 ? "No exhibitors match your search criteria"
//                 : "No exhibitors have registered yet"}
//             </p>
//           </div>
//         ) : (
//           <div className="exhibitor-table-wrapper">
//             <div className="exhibitor-table-scroll">
//               <table className="exhibitor-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Mobile</th>
//                     <th>Package</th>
//                     <th>Stall Number</th>
//                     <th>People Count</th>
//                     <th>Referral Code</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredExhibitors.map((exhibitor, index) => (
//                     <tr key={exhibitor._id || exhibitor.id || index}>
//                       <td className="exhibitor-name">
//                         {exhibitor.name || 'N/A'}
//                       </td>
//                       <td className="exhibitor-text">
//                         {exhibitor.email || 'N/A'}
//                       </td>
//                       <td className="exhibitor-text">
//                         {exhibitor.mobile || 'N/A'}
//                       </td>
//                       <td>
//                         <span className="exhibitor-package">
//                           {exhibitor.packageTitle || 'N/A'}
//                         </span>
//                       </td>
//                       <td className="exhibitor-stall">
//                         {exhibitor.stallNumber || 'N/A'}
//                       </td>
//                       <td className="exhibitor-text exhibitor-center">
//                         {exhibitor.peopleCount || 'N/A'}
//                       </td>
//                       <td className="exhibitor-text">
//                         {exhibitor.referralCode || '-'}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="exhibitor-footer">
//               <p className="exhibitor-footer-text">
//                 Showing {filteredExhibitors.length} of {exhibitors.length} exhibitors
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ExhibitorList;





//show package name in admin panel
import React, { useState, useEffect } from 'react';

const ExhibitorList = () => {
  const [exhibitors, setExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExhibitors();
  }, []);

  const fetchExhibitors = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/api/register-stall");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Exhibitors data:", data);

      const exhibitorData = data.stalls || data.exhibitors || data.data || data || [];
      setExhibitors(Array.isArray(exhibitorData) ? exhibitorData : []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exhibitors:", error);
      setError(error.message || "Failed to fetch exhibitors");
      setLoading(false);
    }
  };

  const filteredExhibitors = exhibitors.filter((exhibitor) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      exhibitor.name?.toLowerCase().includes(searchLower) ||
      exhibitor.email?.toLowerCase().includes(searchLower) ||
      exhibitor.mobile?.includes(searchTerm) ||
      exhibitor.package?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <style>{`
         .exhibitor-container {
          min-height: 100vh;
          padding: 40px 20px;
          max-width: 1400px;
          margin: 0 auto;
          background-color: #f4f7fb;
        }

        .exhibitor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .exhibitor-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
        }

        .exhibitor-actions {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .exhibitor-search {
          padding: 10px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          min-width: 250px;
          outline: none;
        }

        .exhibitor-refresh-btn {
          padding: 10px 20px;
          background-color: #5843f5;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }

        .exhibitor-refresh-btn:hover {
          background-color: #4635d9;
        }

        .exhibitor-loading {
          text-align: center;
          padding: 60px 20px;
          color: #6b7280;
          font-size: 18px;
        }

        .exhibitor-error {
          text-align: center;
          padding: 60px 20px;
          color: #ef4444;
        }

        .exhibitor-error h3 {
          margin-bottom: 10px;
        }

        .exhibitor-retry-btn {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #f97316;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .exhibitor-empty {
          text-align: center;
          padding: 60px 20px;
          color: #6b7280;
        }

        .exhibitor-empty h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #0f172a;
        }

        .exhibitor-table-wrapper {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .exhibitor-table-scroll {
          overflow-x: auto;
        }

        .exhibitor-table {
          width: 100%;
          border-collapse: collapse;
        }

        .exhibitor-table thead {
          background-color: #f9fafb;
          border-bottom: 2px solid #e5e7eb;
        }

        .exhibitor-table th {
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #374151;
          font-size: 14px;
        }

        .exhibitor-table tbody tr {
          border-bottom: 1px solid #e5e7eb;
          transition: background-color 0.2s;
        }

        .exhibitor-table tbody tr:hover {
          background-color: #f9fafb;
        }

        .exhibitor-table td {
          padding: 16px;
          font-size: 14px;
        }

        .exhibitor-name {
          color: #111827;
          font-weight: 500;
        }

        .exhibitor-text {
          color: #6b7280;
        }

        .exhibitor-package {
          display: inline-block;
          padding: 4px 12px;
          background-color: #fef3c7;
          color: #92400e;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .exhibitor-stall {
          color: #f97316;
          font-weight: 600;
        }

        .exhibitor-center {
          text-align: center;
        }

        .exhibitor-footer {
          padding: 16px 24px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f9fafb;
        }

        .exhibitor-footer-text {
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>

      <div className="exhibitor-container">
        <div className="exhibitor-header">
          <h1 className="exhibitor-title">Exhibitor List</h1>
          <div className="exhibitor-actions">
            <input
              type="text"
              placeholder="Search by name, email, mobile..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="exhibitor-search"
            />
            <button onClick={fetchExhibitors} className="exhibitor-refresh-btn">
              Refresh
            </button>
          </div>
        </div>

        {loading ? (
          <div className="exhibitor-loading">Loading exhibitors...</div>
        ) : error ? (
          <div className="exhibitor-error">
            <h3>Error loading exhibitors</h3>
            <p>{error}</p>
            <button onClick={fetchExhibitors} className="exhibitor-retry-btn">
              Retry
            </button>
          </div>
        ) : filteredExhibitors.length === 0 ? (
          <div className="exhibitor-empty">
            <h3>No Exhibitors Found</h3>
            <p>
              {searchTerm
                ? "No exhibitors match your search criteria"
                : "No exhibitors have registered yet"}
            </p>
          </div>
        ) : (
          <div className="exhibitor-table-wrapper">
            <div className="exhibitor-table-scroll">
              <table className="exhibitor-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Package</th>
                    <th>Stall Number</th>
                    <th>People Count</th>
                    <th>Referral Code</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExhibitors.map((exhibitor, index) => (
                    <tr key={exhibitor._id || exhibitor.id || index}>
                      <td className="exhibitor-name">{exhibitor.name || 'N/A'}</td>
                      <td className="exhibitor-text">{exhibitor.email || 'N/A'}</td>
                      <td className="exhibitor-text">{exhibitor.mobile || 'N/A'}</td>
                      <td>
                        <span className="exhibitor-package">
                          {exhibitor.package || 'N/A'}
                        </span>
                      </td>
                      <td className="exhibitor-stall">{exhibitor.stallNumber || 'N/A'}</td>
                      <td className="exhibitor-text exhibitor-center">
                        {exhibitor.peopleCount || 'N/A'}
                      </td>
                      <td className="exhibitor-text">{exhibitor.referralCode || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="exhibitor-footer">
              <p className="exhibitor-footer-text">
                Showing {filteredExhibitors.length} of {exhibitors.length} exhibitors
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ExhibitorList;
